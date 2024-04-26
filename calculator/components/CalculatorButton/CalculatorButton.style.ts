import type { VariantProps } from "cva";
import { cva } from "cva";

export const calculatorButtonStyles = cva(
  "w-full p-4 rounded transition-colors duration-200 bg-opacity-100 hover:bg-opacity-70",
  {
    variants: {
      variant: {
        numeric: "bg-accent-blue text-black",
        operator: "bg-primary-blue text-white",
        equal: "bg-primary-red text-white",
      },
    },
  }
);

export type CalculatorButtonVariantProps = VariantProps<
  typeof calculatorButtonStyles
>;
