"use client";

import type { Session } from "next-auth";
import { useMemo, type FC, type PropsWithChildren } from "react";

import { UserContext } from "../context/UserContext";

type Props = PropsWithChildren<{
  session?: Session | null;
}>;

export const UserContextProvider: FC<Props> = ({ session, children }) => {
  const authSession = useMemo(() => session, [session]);

  return (
    <UserContext.Provider
      value={{
        isConnected: !!authSession?.user,
        user: authSession?.user ?? null,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
