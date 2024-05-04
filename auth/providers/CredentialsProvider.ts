import { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { HttpError } from "@/http";
import { routes } from "@/routes";
import { redirect } from "@/utils";

import {
  AuthAction,
  AuthError,
  AuthProvider,
  Provider,
  RegisterArgs,
  SignInArgs,
} from "../auth";
import { AuthHttpService } from "../services/AuthHttpService";
import { AuthService } from "../services/AuthService";
import { Validator } from "../services/Validator";

export class CredentialsProvider implements AuthProvider {
  constructor(
    private readonly auth: AuthService,
    private readonly http: AuthHttpService = new AuthHttpService(),
    private readonly validator: Validator = new Validator()
  ) {}

  get provider() {
    return Credentials({
      name: Provider.Credentials,
      credentials: {
        email: {},
        password: {},
        firstName: {},
        lastName: {},
        birthDate: {},
        phone: {},
        action: {},
      },
      authorize: async (credentials) => {
        const action = Number(credentials.action) as AuthAction;

        let user: User | null = null;

        if (!credentials.email || !credentials.password) {
          return null;
        }

        switch (action) {
          case AuthAction.SignIn:
            user = await this.signInUser(credentials);
            break;
          case AuthAction.Register:
            user = await this.registerUser(credentials);
            break;
          default:
            break;
        }

        return user;
      },
    });
  }

  get name() {
    return Provider.Credentials;
  }

  private async signInUser(credentials: Partial<Record<string, unknown>>) {
    try {
      const { email } = await this.validator.validateCredentials(credentials);
      return await this.http.getUserByEmail(email);
    } catch (e) {
      const error = e as HttpError;

      if (await this.validator.validateErrorResponse(error.response)) {
        const authError = error.response?.data as AuthError;
        throw {
          error: authError.message,
        };
      }
      throw error;
    }
  }

  private async registerUser(credentials: Partial<Record<string, unknown>>) {
    try {
      const registerCredentials =
        await this.validator.validateCredentialsWithPasswordConfirm(
          credentials
        );

      return this.http.createUser({
        ...registerCredentials,
        isActive: true,
        birthDate: registerCredentials.birthDate
          ? new Date(registerCredentials.birthDate)
          : undefined,
      });
    } catch (e) {
      const error = e as HttpError;

      if (await this.validator.validateErrorResponse(error.response)) {
        const authError = error.response?.data as AuthError;
        throw {
          error: authError.message,
        };
      }
      throw error;
    }
  }

  public async register(
    { email, password, confirmPassword, redirectTo, ...rest }: RegisterArgs,
    id: string
  ) {
    let isError = false;

    try {
      await this.auth.signIn(id, { email, password, ...rest });
    } catch (e) {
      console.error(e);
      isError = true;
    } finally {
      if (!isError) redirect(redirectTo);
    }
  }

  async signIn(
    { email, password, redirectTo, ...rest }: SignInArgs,
    id: string
  ) {
    let isError = false;

    try {
      await this.auth.signIn(id, {
        email,
        password,
        ...rest,
        redirect: false,
      });
    } catch (e) {
      console.error(e);
      isError = true;
    } finally {
      if (!isError) redirect(redirectTo);
    }
  }

  async signOut(redirectTo?: string) {
    let isError = false;

    try {
      await this.auth.signOut({ redirect: false });
    } catch (e) {
      console.error(e);
    } finally {
      if (!isError) redirect(redirectTo ?? routes.auth.LOGIN);
    }
  }
}
