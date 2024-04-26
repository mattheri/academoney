"use client";

import type { ChangeEvent } from "react";
import { forwardRef, useMemo } from "react";

import { Action } from "../calculator";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = forwardRef<HTMLDivElement>(({}, ref) => {
  const { tokens, total: calcTotal, addToken } = useCalculator();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["+", "-", "*", "/", "(", ")", "^", ".", "%"];

    const allowedValues = [...numbers, ...operators];

    if (!allowedValues.includes(value)) return;

    const operatorsMap: Record<string, Action> = {
      "+": Action.Add,
      "-": Action.Subtract,
      "*": Action.Multiply,
      "/": Action.Divide,
      "(": Action.ParenthesisOpen,
      ")": Action.ParenthesisClose,
      "^": Action.Exponent,
      ".": Action.Decimal,
      "%": Action.Percent,
    };

    const token = value in operatorsMap ? operatorsMap[value] : Number(value);
    addToken(token);
  };

  const total = useMemo(
    () => (Number.isNaN(Number(calcTotal)) ? "0" : calcTotal?.toString()),
    [calcTotal]
  );
  const operation = useMemo(
    () => (tokens.length ? tokens.join("") : "0"),
    [tokens]
  );

  return (
    <div ref={ref} className="flex flex-col">
      <input
        type="text"
        value={total}
        readOnly
        className="py-2 px-4 text-right text-xl"
      />
      <input
        type="text"
        value={operation}
        onChange={onChange}
        className="py-2 px-4 text-right w-full text-2xl bg-white"
      />
    </div>
  );
});

CalculatorScreen.displayName = "Screen";
