"use client";

import type { FC, PropsWithChildren, PropsWithRef } from "react";
import { forwardRef } from "react";

import { Action } from "@/calculator/calculator";
import { useCalculator } from "@/calculator/hooks/useCalculator";
import { cx } from "@/utils/cx";

import type { CalculatorButtonVariantProps } from "./CalculatorButton.style";
import { calculatorButtonStyles } from "./CalculatorButton.style";

type Props = PropsWithRef<
  PropsWithChildren<
    {
      className?: string;
      action: Action | number;
      ariaLabel: string;
    } & CalculatorButtonVariantProps
  >
>;

export const CalculatorButton: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ action, className, variant = "numeric", children }, ref) => {
    const { addToken, currentToken } = useCalculator();

    const onClick = () => addToken(action);
    const normalizedCurrentToken =
      currentToken !== null && typeof action === "number"
        ? Number(currentToken)
        : currentToken;

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cx(
          calculatorButtonStyles({ variant }),
          {
            pressed: normalizedCurrentToken === action,
          },
          className
        )}
      >
        {children}
      </button>
    );
  }
);

CalculatorButton.displayName = "Button";
