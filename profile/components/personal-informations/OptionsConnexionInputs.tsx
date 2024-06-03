"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/common";
import type { FC } from "react";
import { OptionsConnexion } from "../../profile";
import { useForm } from "react-hook-form";
import { OptionsConnexionValidationSchema } from "../../validation-schemas/OptionsConnexionValidationSchema";

type Props = Partial<OptionsConnexion>;

export const OptionsConnexionInputs: FC<Props> = ({
  email,
  password
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<Partial<OptionsConnexion>>({
    values: {
      email,
      password
    },
    resolver: yupResolver(OptionsConnexionValidationSchema),
    mode: "onBlur",
  });

  return (
    <>
    <h1>Options de connexion</h1>
    <br/>
      <FormInput
        label="Courriel de connexion"
        {...register("email")}
        error={errors.email?.message}
      />
      <FormInput
        label="Mot de passe"
        {...register("password")}
        error={errors.password?.message}
      />
    </>
  );
};
