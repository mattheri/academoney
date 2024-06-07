import { Form, FormInput } from "@/common";
import type { FC } from "react";
import type { PersonalInformations, Profile } from "../../profile";
import { updatePersonalInformations } from "../../actions";
import { PersonalInformationsInputs } from "./PersonalInformationsInputs";
import { SubmitButton } from "@/common/components/SubmitButton/SubmitButton";

type Props = Partial<PersonalInformations> & {
  id: Profile["id"];
  password: Profile["password"];
};

export const PersonalInformationsForm: FC<Props> = ({
  firstName,
  lastName,
  birthDate,
  email,
  phone,
  password,
  id,
}) => {
  return (
    <Form action={updatePersonalInformations}>
      <PersonalInformationsInputs
        firstName={firstName}
        lastName={lastName}
        birthDate={birthDate}
        email={email}
        phone={phone}
      />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="password" value={password} />

      <SubmitButton>Enregistrer</SubmitButton>
    </Form>
  );
};
