import { date, object, string } from "yup";

const errors = {
  email: {
    invalid: "Email invalide. Veuillez entrer une adresse email valide",
  },
  password: {
    invalid: "Votre mot de passe doit contenir un minimum de 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
  },
};

export const OptionsConnexionValidationSchema = object().shape({
  email: string().email(errors.email.invalid),
  password: string()
    .min(8, errors.password.invalid)
    /*.matches(/[a-z]/, errors.password.invalid)
    .matches(/[A-Z]/, errors.password.invalid)
    .matches(/[0-9]/, errors.password.invalid)
    .matches(/[!@#$%^&*(),.?":{}|<>]/, errors.password.invalid),*/  // À voir si on le rend plus complexe. Ici simple pour des fins de débuggage.
});
