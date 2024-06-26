import type { FC, PropsWithChildren } from "react";
import { forwardRef } from "react";

import { cx } from "@/utils/cx";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const CalculatorPad: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cx("flex flex-wrap row-gap-2", className)}>
        {children}
      </div>
    );
  }
);

CalculatorPad.displayName = "Pad";
