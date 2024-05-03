import type { Provider as NextAuthProvider } from "next-auth/providers";
import type { NextAuthResult, User } from "next-auth";
import type { AuthError, ProviderMap, RegisterArgs, SignInArgs } from "../auth";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthAction, Provider } from "../auth";
import { Validator } from "./Validator";
import { routes } from "@/routes";
import { redirect } from "@/utils";
import httpClient, { Http, HttpError } from "@/http";

export class AuthService {
  private static _instance: AuthService;

  static get instance() {
    return this._instance || (this._instance = new AuthService());
  }

  handlers!: NextAuthResult["handlers"];
  private signIn!: NextAuthResult["signIn"];
  private signOut!: NextAuthResult["signOut"];
  public auth!: NextAuthResult["auth"];

  constructor(
    private readonly http: Http = httpClient,
    private readonly validator: Validator = new Validator()
  ) {
    const { handlers, signIn, signOut, auth } = NextAuth({
      providers: this.providers,
      pages: {
        signIn: routes.auth.LOGIN,
      },
      callbacks: {
        jwt: async ({ token, user }) => {
          if (user) token = { ...token, id: user.id as string };

          return token;
        },
        session: async ({ session, token }) => {
          if (token && "id" in token) {
            session.user = {
              ...session.user,
              id: String(token.id),
            };
          }
          return session;
        },
      },
    });

    this.handlers = handlers;
    this.signIn = signIn;
    this.signOut = signOut;
    this.auth = auth;
  }

  private get providers(): NextAuthProvider[] {
    return [this.createCredentialsProvider()];
  }

  private createCredentialsProvider() {
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

  private async signInUser(credentials: Partial<Record<string, unknown>>) {
    try {
      const { email } = await this.validator.validateCredentials(credentials);
      return await this.getUserFromDb(email);
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

      return this.createUserInDb({
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

  private async getUserFromDb(email: string) {
    const { data } = await this.http.GET<User>(`/users/email/${email}`);

    return data;
  }

  private async createUserInDb(user: User) {
    const { data } = await this.http.POST<User>("/users", {
      body: JSON.stringify(user),
    });

    return data;
  }

  async registerWithCredentials(
    { email, password, confirmPassword, redirectTo, ...rest }: RegisterArgs,
    id: string
  ) {
    let isError = false;

    try {
      await this.signIn(id, { email, password, ...rest });
    } catch (e) {
      console.error(e);
      isError = true;
    } finally {
      if (!isError) redirect(redirectTo);
    }
  }

  async signInWithCredentials(
    { email, password, redirectTo, ...rest }: SignInArgs,
    id: string
  ) {
    let isError = false;

    try {
      await this.signIn(id, {
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

  async signOutUser(redirectTo?: string) {
    let isError = false;

    try {
      await this.signOut({ redirect: false });
    } catch (e) {
      console.error(e);
    } finally {
      if (!isError) redirect(redirectTo ?? routes.auth.LOGIN);
    }
  }

  async getSession() {
    return this.auth();
  }

  getProvidersMap(): ProviderMap {
    return this.providers.map((provider) => {
      if (typeof provider === "function") {
        const { id, name } = provider();
        return { id, name };
      }

      return { id: provider.id, name: provider.name };
    });
  }
}
