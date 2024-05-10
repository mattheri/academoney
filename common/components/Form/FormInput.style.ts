import type { VariantProps } from "cva";

import { cva } from "cva";

export const inputStyle = cva(
  "w-full mb-4 block p-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring",
  {
    variants: {
      variant: {
        select: "appearance-none",
        checkbox: "h-4 w-4",
      },
    },
  }
);

export type InputVariantProps = VariantProps<typeof inputStyle>;
