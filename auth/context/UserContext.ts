import { createContext } from "react";
import { UserContextState } from "../auth";

export const UserContext = createContext<UserContextState>({
  isConnected: false,
  user: null,
});
