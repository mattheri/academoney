import type { AppUser } from "@/auth";

export type Profile = AppUser;

export type PersonalInformations = Pick<
  Profile,
  "firstName" | "lastName" | "email" | "birthDate" | "phone"
>;

export type PersonalInformationsDto = Partial<PersonalInformations>;

export type OptionsConnexion = Pick<
  Profile,
  "email" | "password"
>;

export type OptionsConnexionDto = Partial<OptionsConnexion>;