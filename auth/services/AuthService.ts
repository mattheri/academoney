import type { Provider as NextAuthProvider } from "next-auth/providers";
import type { NextAuthResult, User } from "next-auth";
import type { ProviderMap, RegisterOptions, SignInOptions } from "../auth";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Provider } from "../auth";
import { Validator } from "./Validator";
import { routes } from "@/routes";
import { redirect } from "@/utils";

export class AuthService {
  private static _instance: AuthService;

  static get instance() {
    return this._instance || (this._instance = new AuthService());
  }

  handlers!: NextAuthResult["handlers"];
  private signIn!: NextAuthResult["signIn"];
  private signOut!: NextAuthResult["signOut"];
  public auth!: NextAuthResult["auth"];

  constructor(private readonly validator: Validator = new Validator()) {
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
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        /**
         * ! TODO Fetch user from database
         */
        const email = String(credentials.username);
        const password = String(credentials.password);

        let user: User | null = null;

        if (!email || !password) {
          return null;
        }

        user = await this.getUserFromDb(email);

        if (!user) {
          user = await this.createUserInDb({
            email,
            password,
            firstName: "John",
            isActive: true,
          });
        }

        return user;
      },
    });
  }

  private async getUserFromDb(email: string) {
    /**
     * ! TODO Fetch user from database
     */
    return {
      id: "1",
      firstName: "John",
      isActive: true,
      email,
      password: "password",
      addresses: [],
      transactions: [],
    };
  }

  private async createUserInDb({ email, ...fields }: User) {
    /**
     * ! TODO Create user in database
     */
    return {
      id: "1",
      email,
      ...fields,
    };
  }

  async registerWithCredentials(
    id: string,
    username: string,
    password: string,
    confirmPassword: string,
    { redirectTo }: RegisterOptions
  ) {
    try {
      await this.validator.validateCredentialsWithPasswordConfirm({
        username,
        password,
        confirmPassword,
      });

      await this.signIn(id, { username, password });
    } catch (e) {
      console.error(e);
    } finally {
      redirect(redirectTo);
    }
  }

  async signInWithCredentials(
    username: string,
    password: string,
    id: string,
    { redirectTo }: SignInOptions
  ) {
    try {
      await this.validator.validateCredentials({ username, password });

      await this.signIn(id, {
        username,
        password,
        redirect: false,
      });
    } catch (e) {
      console.error(e);
    } finally {
      redirect(redirectTo);
    }
  }

  async signOutUser(redirectTo?: string) {
    try {
      await this.signOut({ redirect: false });
    } catch (e) {
      console.error(e);
    } finally {
      redirect(redirectTo ?? routes.auth.LOGIN);
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
