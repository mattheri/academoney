import type { DefaultSession, User } from "next-auth";

export type Bank = {
  id: number;
  institutionName: string;
  accountInfo: string;
  loanInfo?: string;
  other?: string;
};

export type School = {
  id: number;
  schoolName: string;
  fieldOfStudy: string;
  startDate: Date;
  projectEndDate: Date;
};

export enum TransactionFrequency {
  Daily = 1,
  Weekly = 7,
  BiWeekly = 14,
  Monthly = 30,
  Once = -1,
}

export enum TransactionType {
  Revenue = "Revenue",
  Expense = "Expense",
}

export type Transaction = {
  id: number;
  description?: string;
  category?: string;
  amount: number;
  type: TransactionType;
  isDone: boolean;
  startDate: Date;
  endDate?: Date;
  frequency?: TransactionFrequency;
};

export enum AddressType {
  Personal = "PERSONAL",
  Work = "WORK",
}

export enum Country {
  CA = "CA",
}

export enum Province {
  QC = "QC",
  ON = "ON",
  BC = "BC",
  AB = "AB",
  SK = "SK",
  MB = "MB",
  NB = "NB",
  NS = "NS",
  PE = "PE",
  NL = "NL",
  NT = "NT",
  NU = "NU",
  YT = "YT",
}

export type Address = {
  id: number;
  streetNumber: string;
  streetName: string;
  city: string;
  province: Province;
  country: Country;
  type: AddressType;
};

export type AppUser = {
  id: number;
  firstName: string;
  lastName?: string;
  birthDate?: Date;
  isActive: boolean;
  phone?: string;
  email: string;
  password: string;
  addresses?: Address[];
  transactions?: Transaction[];
  schoolDetails?: School;
  bankingDetails?: Bank;
};

export type UserContextState = {
  isConnected: boolean;
  user: User | null;
};

export enum Provider {
  Credentials = "Credentials",
}

export type ProviderData = {
  id: string;
  name: string;
};

export type ProviderMap = ProviderData[];

export type Credentials = {
  username: string;
  password: string;
};

export type CredentialsWithPasswordConfirm = Credentials & {
  confirmPassword: string;
};

export type SignInOptions = {
  redirectTo: string;
};

export type RegisterOptions = {
  redirectTo: string;
};

export type RegisterArgs = {
  firstName: string;
  lastName?: string;
  birthDate?: Date;
  phone?: string;
  email: string;
  password: string;
  confirmPassword: string;
  redirectTo: string;
  action: AuthAction.Register;
};

export type SignInArgs = {
  email: string;
  password: string;
  redirectTo: string;
  action: AuthAction.SignIn;
};

export type UserNotFoundError = {
  code: 404;
  message: string;
};

export enum AuthAction {
  SignIn,
  SignOut,
  Register,
}

export type AuthError = {
  code: number;
  message: string;
};

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }
  interface User extends AppUser {}
}
