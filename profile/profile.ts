import type { AppUser } from "@/auth";

export type Profile = AppUser;

export type PersonalInformations = Pick<
  Profile,
  "firstName" | "lastName" | "email" | "birthDate" | "phone"
>;

export type PersonalInformationsDto = Partial<PersonalInformations>;
