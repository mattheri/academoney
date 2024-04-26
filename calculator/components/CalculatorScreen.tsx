"use client";

import type { ChangeEvent } from "react";
import { forwardRef, useMemo } from "react";

import { actionsMap, allowedInputValues } from "../constants";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = forwardRef<HTMLDivElement>(({}, ref) => {
  const { tokens, total: calcTotal, addToken } = useCalculator();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const isAllowed = allowedInputValues.includes(value);
    if (!isAllowed) return;

    const token = value in actionsMap ? actionsMap[value] : Number(value);
    addToken(token);
  };

  const total = useMemo(
    () => (Number.isNaN(Number(calcTotal)) ? "0" : calcTotal?.toString()),
    [calcTotal]
  );
  const operation = tokens.length ? tokens.join("") : "0";

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
