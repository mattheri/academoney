"use server";

import { routes } from "@/routes";
import { serialize } from "cookie";

import { AuthAction } from "../auth";
import { AuthService } from "../services/AuthService";
import { AuthHttpService } from "../services/AuthHttpService";


const Auth = AuthService.instance;
const authHttpService = new AuthHttpService();


export const signInWithCredentials = async (formData: FormData) => {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const id = String(formData.get("provider"));
  const user = await authHttpService.getUserByEmail(email);
  const redirectTo = String(formData.get("redirectTo") ?? routes.INDEX);

  if (user && password === user.password){

    await Auth.Credentials.signIn(
      {
        email,
        password,
        redirectTo,
        action: AuthAction.SignIn,
        
      },
      id,
    );
    return email; // save locally  pour ré-utiliser sur le client-side.

  } else {
    throw new Error("Invalid password")
  };

};
export const validateUserPassword = async (email: string, password: string) => { // 2FA validation sur le server.
  const user = await authHttpService.getUserByEmail(email);
  if (user && password === user.password) {
    return true;
  } else {
    throw new Error("Invalid password")
  }
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
