import { date, object, string } from "yup";

const errors = {
  firstName: {
    invalid: "Entrez une valeur valide",
  },
  email: {
    invalid: "Email invalide",
  },
  phone: {
    invalid: "Entrez un numéro de téléphone valide",
  },
};

export const personalInformationsValidationSchema = object().shape({
  firstName: string().matches(
    /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
    errors.firstName.invalid
  ),
  lastName: string().matches(
    /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
    errors.firstName.invalid
  ),
  birthDate: date(),
  email: string().email(errors.email.invalid),
  phone: string().matches(
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
    errors.phone.invalid
  ),
});
