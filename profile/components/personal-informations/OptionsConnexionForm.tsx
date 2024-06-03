import { Form, FormInput } from "@/common";
import type { FC } from "react";
import type { OptionsConnexion, Profile } from "../../profile";
import { updateOptionsConnexion } from "../../actions";
import { OptionsConnexionInputs } from "./OptionsConnexionInputs";
import { SubmitButton } from "@/common/components/SubmitButton/SubmitButton";

type Props = Partial<OptionsConnexion> & {
  id: Profile["id"];
  password: Profile["password"];
};

export const OptionsConnexionForm: FC<Props> = ({

  email,
  password,
  id,
}) => {
  return (
    <Form action={updateOptionsConnexion}>
      <OptionsConnexionInputs
        email={email}
        password={password}
      />
      <input type="hidden" name="id" value={id} /> 
      <input type="hidden" name="password" value={password} />

      <SubmitButton>Enregistrer</SubmitButton>
    </Form>
  );
};
