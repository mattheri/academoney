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
  return (
    <Form action={signOut}>
      <button type="submit">Sign out</button>
      <input type="hidden" name="redirectTo" value={redirectTo} />
    </Form>
  );
};
