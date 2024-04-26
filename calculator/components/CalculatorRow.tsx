import type { FC, PropsWithChildren, PropsWithRef } from "react";
import { forwardRef } from "react";

import { cx } from "@/utils/cx";

type Props = PropsWithRef<
  PropsWithChildren<{
    className?: string;
  }>
>;

export const CalculatorRow: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cx("flex w-full col-gap-2", className)}>
        {children}
      </div>
    );
  }
);

CalculatorRow.displayName = "Row";
