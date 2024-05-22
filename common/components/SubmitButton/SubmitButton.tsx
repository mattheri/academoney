"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { Button } from "@/common";
import { useFormStatus } from "react-dom";

type Props = ComponentPropsWithRef<typeof Button>;

export const SubmitButton: FC<Props> = ({ children, disabled, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} disabled={disabled || pending}>
      {children}
    </Button>
  );
};
