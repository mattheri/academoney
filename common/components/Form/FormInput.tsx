import type { InputHTMLAttributes, FC } from "react";

import { forwardRef } from "react";

import { cx } from "@/utils/cx";
import { inputStyle, InputVariantProps } from "./FormInput.style";
import { Show } from "../Show/Show";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const FormInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", className, error, ...rest }, ref) => {
    return (
      <div className="FormInput mb-4">
        <Show condition={label}>
          <label className="block p-1 text-gray-700">{label}</label>
        </Show>
        <input
          ref={ref}
          type={type}
          className={cx(
            inputStyle({ variant: type as InputVariantProps["variant"] }),
            className
          )}
          {...rest}
        />
        <Show condition={error}>
          <small className="text-red-500">{error}</small>
        </Show>
      </div>
    );
  }
);

FormInput.displayName = "Input";
