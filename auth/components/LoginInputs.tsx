"use client";

import { useForm, type FieldValues } from "react-hook-form";
import { Input, InputGroup } from "@/common";

type Props<T extends FieldValues> = {
  initialValues: T;
};

export const LoginInputs = ({ initialValues }: Props<FieldValues>) => {
  const { register } = useForm({ values: initialValues });

  return (
    <InputGroup direction="vertical">
      <Input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="Courriel"
        label="Courriel"
        {...register("email")}
      />
      <Input
        id="password"
        type="password"
        autoComplete="current-password"
        placeholder="Mot de passe"
        label="Mot de passe"
        {...register("password")}
      />
    </InputGroup>
  );
};
