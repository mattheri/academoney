import type { FC } from "react";

import { signOut } from "../actions";

import { routes } from "@/routes";
import { Form } from "@/common";

type Props = {
  redirectTo?: string;
};

export const SignOutButton: FC<Props> = ({
  redirectTo = routes.auth.LOGIN,
  
}) => {
  sessionStorage.removeItem("validationPass"); // Enlève la validationPass lors d'une déconnexion.
  return (
    <Form action={signOut}>
      <button type="submit">Se déconnecter</button>
      <input type="hidden" name="redirectTo" value={redirectTo} />
    </Form>
  );
};
