import { useMemo } from "react";
import { AuthService } from "../services/AuthService";

export const useAuth = () => {
  return useMemo(() => AuthService.instance, []);
};
