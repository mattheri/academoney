import type { FC } from "react";

import { TransactionType } from "@/auth";
import { cx } from "@/utils/cx";

import { total } from "./Total.style";

type Props = {
  amount: number;
  type: TransactionType;
  className?: string;
};

export const Total: FC<Props> = ({ amount, type, className }) => {
  const legend =
    type === TransactionType.Revenue ? "Total Income" : "Total Expense";
  const renderedAmount =
    type === TransactionType.Revenue ? amount : amount * -1;

  return (
    <fieldset disabled className={cx(total({ variant: type }), className)}>
      <legend className="text-lg font-bold">{legend}</legend>
      <input
        type="text"
        value={`${renderedAmount}$`}
        readOnly
        className="bg-inherit text-black w-full border-none text-right"
      />
    </fieldset>
  );
};
