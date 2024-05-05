/* eslint-disable react/display-name */
import type { InputHTMLAttributes, FC } from "react";

import { forwardRef } from "react";

import { cx } from "@/utils/cx";
import { inputStyle, InputVariantProps } from "./FormInput.style";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const FormInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", className, ...rest }, ref) => {
    return (
      <div className="FormInput mb-4">
        <label className="block p-1 text-gray-700">{label}</label>
        <input
          ref={ref}
          type={type}
          className={cx(
            inputStyle({ variant: type as InputVariantProps["variant"] }),
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);
