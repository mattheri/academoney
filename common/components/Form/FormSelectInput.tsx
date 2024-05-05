
import type { FC, SelectHTMLAttributes } from "react";

import { forwardRef } from "react";

import { cx } from "@/utils/cx";
import { inputStyle } from "./FormInput.style";

type Option =
  | {
      value?: string;
      label: string;
    }
  | string;

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options?: Option[];
};

export const FormSelectInput: FC<Props> = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, className, ...rest }, ref) => {
    return (
      <div className="FormInput mb-4">
        <label className="block p-1 text-gray-700">{label}</label>
        <select
          ref={ref}
          className={cx(inputStyle({ variant: "select" }), className)}
          {...rest}
        >
          {options?.map((option) =>
            typeof option === "string" ? (
              <option key={option} value={option}>
                {option}
              </option>
            ) : (
              <option
                key={option.value ?? option.label}
                value={option.value ?? option.label}
              >
                {option.label}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
);

FormSelectInput.displayName = "SelectIput";
