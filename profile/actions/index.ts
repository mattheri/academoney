"use server";

import httpClient from "@/http";
import { revalidatePath } from "next/cache";

export const updatePersonalInformations = async (formData: FormData) => {
  const firstName = String(formData.get("firstName"));
  const lastName = String(formData.get("lastName"));
  const email = String(formData.get("email"));
  const birthDate = String(formData.get("birthDate"));
  const phone = String(formData.get("phone"));
  const password = String(formData.get("password"));
  const id = String(formData.get("id"));

  const { data } = await httpClient.PUT(`/users/${id}`, {
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      birthDate: birthDate ? new Date(birthDate).toDateString() : null,
      phone,
      password,
      isActive: true,
    }),
  });

  console.log(data);
};

export const updateOptionsConnexion = async (formData: FormData) => {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const id = String(formData.get("id"));

  const { data } = await httpClient.PUT(`/users/${id}`, {
    body: JSON.stringify({
      email,
      password,
      isActive: true,
    }),
  });

  console.log(data);
};
