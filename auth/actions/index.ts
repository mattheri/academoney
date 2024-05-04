"use server";

import { routes } from "@/routes";

import { AuthAction } from "../auth";
import { AuthService } from "../services/AuthService";

const Auth = AuthService.instance;

export const signInWithCredentials = async (formData: FormData) => {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const id = String(formData.get("provider"));
  const redirectTo = String(formData.get("redirectTo") ?? routes.INDEX);

  await Auth.Credentials.signIn(
    {
      email,
      password,
      redirectTo,
      action: AuthAction.SignIn,
    },
    id
  );
};

export const signOut = async (formData: FormData) => {
  const redirectTo = String(formData.get("redirectTo") ?? routes.auth.LOGIN);

  await Auth.Credentials.signOut(redirectTo);
};

export const registerWithCredentials = async (formData: FormData) => {
  const username = String(formData.get("email"));
  const password = String(formData.get("password"));
  const confirmPassword = String(formData.get("confirmPassword"));
  const firstName = String(formData.get("firstName"));
  const lastName = String(formData.get("lastName"));
  const birthDate = new Date(String(formData.get("birthDate")));
  const phone = String(formData.get("phone"));
  const id = String(formData.get("provider"));
  const redirectTo = String(formData.get("redirectTo") ?? routes.INDEX);

  await Auth.Credentials.register(
    {
      email: username,
      password,
      confirmPassword,
      firstName,
      redirectTo,
      lastName,
      birthDate,
      phone,
      action: AuthAction.Register,
    },
    id
  );
};
