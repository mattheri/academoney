"use server";

import { routes } from "@/routes";
import { AuthService } from "../services/AuthService";

export const signIn = async (formData: FormData) => {
  const username = String(formData.get("email"));
  const password = String(formData.get("password"));
  const id = String(formData.get("provider"));
  const redirectTo = String(formData.get("redirectTo") ?? routes.INDEX);

  await AuthService.instance.signInWithCredentials(username, password, id, {
    redirectTo,
  });
};

export const signOut = async (formData: FormData) => {
  const redirectTo = String(formData.get("redirectTo") ?? routes.auth.LOGIN);

  await AuthService.instance.signOutUser(redirectTo);
};

export const register = async (formData: FormData) => {
  const username = String(formData.get("email"));
  const password = String(formData.get("password"));
  const confirmPassword = String(formData.get("confirmPassword"));
  const id = String(formData.get("provider"));
  const redirectTo = String(formData.get("redirectTo") ?? routes.INDEX);

  await AuthService.instance.registerWithCredentials(
    id,
    username,
    password,
    confirmPassword,
    {
      redirectTo,
    }
  );
};
