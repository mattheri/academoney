import React, { FC, PropsWithChildren } from "react";
import { forwardRef } from "react";
import { cx } from "@/utils/cx";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const CalculatorPad: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    // Assurez-vous que les valeurs de classe sont fournies sous forme de tableau
    const classes = cx(["flex", "flex-wrap", "row-gap-2", className]);

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

CalculatorPad.displayName = "Pad";

// import type { FC, PropsWithChildren } from "react";

// import { forwardRef } from "react";

// import { cx } from "@/utils/cx";

// type Props = PropsWithChildren<{
//   className?: string;
// }>;

// export const CalculatorPad: FC<Props> = forwardRef<HTMLDivElement, Props>(
//   ({ children, className }, ref) => {
//     return (
//       <div ref={ref} className={cx("flex flex-wrap row-gap-2", className)}>
//         {children}
//       </div>
//     );
//   }
// );

// CalculatorPad.displayName = "Pad";
