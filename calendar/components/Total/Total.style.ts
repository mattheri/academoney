import type { VariantProps } from "cva";
import { cva } from "cva";

import { TransactionType } from "@/auth";

export const total = cva("bg-white border border-solid rounded-md p-4 w-full", {
  variants: {
    variant: {
      [TransactionType.Revenue]: "border-accent-blue text-accent-blue",
      [TransactionType.Expense]: "border-accent-red text-accent-red",
    },
  },
});

export type TotalVariantProps = VariantProps<typeof total>;
