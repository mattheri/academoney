"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/common";
import type { FC } from "react";
import { PersonalInformations } from "../../profile";
import { useForm } from "react-hook-form";
import { personalInformationsValidationSchema } from "../../validation-schemas/personalInformationsValidationSchema";

type Props = Partial<PersonalInformations>;

export const PersonalInformationsInputs: FC<Props> = ({
  birthDate,
  email,
  firstName,
  lastName,
  phone,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm<Partial<PersonalInformations>>({
    values: {
      firstName,
      lastName,
      birthDate,
      email,
      phone,
    },
    resolver: yupResolver(personalInformationsValidationSchema),
    mode: "onBlur",
  });

  return (
    <>
      <FormInput
        label="Prénom"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <FormInput
        label="Nom"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <FormInput
        label="Date de naissance"
        type="date"
        {...register("birthDate", { valueAsDate: true })}
        error={errors.birthDate?.message}
      />
      <FormInput
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <FormInput
        label="Téléphone"
        {...register("phone")}
        error={errors.phone?.message}
      />
    </>
  );
};
