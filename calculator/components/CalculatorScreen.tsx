"use client";

import type { ChangeEvent, MouseEvent } from "react";
import { forwardRef, useMemo } from "react";

import { actionsMap, allowedInputValues } from "../constants";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = forwardRef<HTMLDivElement>(({}, ref) => {
  const { tokens, total: calcTotal, addToken } = useCalculator();

  const addTokenOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const isAllowed = allowedInputValues.some((v) => v === value);
    if (!isAllowed) return;

    const token = value in actionsMap ? actionsMap[value] : Number(value);
    addToken(token);
  };

  const copyTotalToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(calcTotal.toString());
      console.log("Copied to clipboard");
    } catch (e) {
      const error = e as Error;
      console.error(error.message);
    }
  };

  const total = useMemo(
    () => (Number.isNaN(Number(calcTotal)) ? "0" : calcTotal?.toString()),
    [calcTotal]
  );
  const operation = tokens.length ? tokens.join("") : "0";

  return (
    <div ref={ref} className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          value={total}
          readOnly
          disabled
          className="py-2 px-4 text-right text-xl bg-white w-full"
          aria-label={`Total is ${total}`}
        />
        <button
          type="button"
          onClick={copyTotalToClipboard}
          className="absolute w-full h-full top-0 left-0 bg-transparent focus:outline-none"
          aria-label="Copy total to clipboard"
        />
      </div>
      <input
        type="text"
        value={operation}
        onChange={addTokenOnChange}
        className="py-2 px-4 text-right w-full text-2xl bg-white"
        aria-label="Operation"
      />
    </div>
  );
});

CalculatorScreen.displayName = "Screen";
