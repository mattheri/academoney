import type { VariantProps } from "cva";
import { cva } from "cva";

export const calculatorButtonStyles = cva(
  "w-full p-4 rounded transition-colors duration-200 bg-opacity-100",
  {
    variants: {
      variant: {
        numeric:
          "bg-accent-blue text-black outline outline-accent-blue hover:bg-white [&.pressed]:bg-white",
        operator:
          "bg-primary-blue text-white outline outline-primary-blue hover:bg-white hover:text-primary-blue [&.pressed]:bg-white [&.pressed]:text-primary-blue",
        equal:
          "bg-primary-red text-white outline outline-primary-red hover:bg-white hover:text-primary-red [&.pressed]:bg-white [&.pressed]:text-primary-red",
      },
    },
  }
);

export type CalculatorButtonVariantProps = VariantProps<
  typeof calculatorButtonStyles
>;
