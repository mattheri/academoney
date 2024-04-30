import type { FC, ForwardedRef, InputHTMLAttributes, LegacyRef } from "react";
import { forwardRef } from "react";

import { Show } from "@/common";
import { cx } from "@/utils/cx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  ref?: LegacyRef<HTMLInputElement> | ForwardedRef<HTMLInputElement>;
};

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ id, label, className, type = "text", ...rest }, ref) => {
    return (
      <>
        <Show when={label}>
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        </Show>
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          className={cx(
            "appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",
            className
          )}
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = "Input";
