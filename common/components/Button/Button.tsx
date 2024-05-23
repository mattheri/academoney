import { cx } from "@/utils/cx";
import type { FC, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { ButtonStyle } from "./Button.style";

type Props = ButtonHTMLAttributes<HTMLButtonElement>
  


export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, type = "button" }, ref) => {
    return (
      <button type={type} className={cx(ButtonStyle(), className)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
