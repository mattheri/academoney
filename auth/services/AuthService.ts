import type { NextAuthResult } from "next-auth";
import NextAuth from "next-auth";
import type { Provider as NextAuthProvider } from "next-auth/providers";

import { routes } from "@/routes";

import type { Auth, AuthProvider, ProviderMap } from "../auth";
import { CredentialsProvider } from "../providers/CredentialsProvider";

export class AuthService implements Auth {
  private static _instance: AuthService;

  static get instance() {
    return (
      this._instance ||
      (this._instance = new AuthService((self) => [
        new CredentialsProvider(self),
      ]))
    );
  }

  private providers: AuthProvider[] = [];
  public Credentials!: AuthProvider;
  public handlers!: NextAuthResult["handlers"];
  /**
   * @description Only to be used internally
   */
  public signIn!: NextAuthResult["signIn"];
  /**
   * @description Only to be used internally
   */
  public signOut!: NextAuthResult["signOut"];
  public auth!: NextAuthResult["auth"];

  constructor(injector: (self: AuthService) => AuthProvider[]) {
    this.providers = injector(this);
    const { handlers, signIn, signOut, auth } = NextAuth({
      providers: this.authProviders,
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

    this.providers.forEach((provider) => {
      Object.assign(this, { [provider.name]: provider });
    });
  }

  private get authProviders(): NextAuthProvider[] {
    return this.providers.map((provider) => provider.provider);
  }

  async getSession() {
    return this.auth();
  }

  getProvidersMap(): ProviderMap {
    return this.authProviders.map((provider) => {
      if (typeof provider === "function") {
        const { id, name } = provider();
        return { id, name };
      }

      return { id: provider.id, name: provider.name };
    });
  }
}
