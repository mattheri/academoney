"use client";

import type { FC } from "react";

import { TransactionType } from "@/auth";

import { useCalendarState } from "../hooks/useCalendarState";
import { Total } from "./Total/Total";
import PieChart from "./PieChart";

export const CalendarTotal: FC = () => {
  const { totalIncome, totalExpense } = useCalendarState();

  return (
    <div>
      <Total amount={totalIncome} type={TransactionType.Revenue} />
      <Total amount={totalExpense} type={TransactionType.Expense} />
      <div>
        <PieChart revenue={totalIncome} expense={totalExpense} />
      </div>
    </div>
  );
};
