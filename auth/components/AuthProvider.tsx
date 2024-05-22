import type { PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserContextProvider } from "./UserContextProvider";

type Props = PropsWithChildren<{}>;

export const AuthProvider = async ({ children }: Props) => {
  const auth = useAuth();
  const session = await auth.getSession();

  return (
    <UserContextProvider session={session}>{children}</UserContextProvider>
  );
};
