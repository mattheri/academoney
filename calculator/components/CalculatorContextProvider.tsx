"use client";

import type { FC, PropsWithChildren } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Action, CalculatorProps, CalculatorState } from "../calculator";
import { CalculatorContext } from "../context/CalculatorContext";
import { CalculatorService } from "../services/CalculatorService";

type Props = PropsWithChildren<CalculatorProps>;

export const CalculatorContextProvider: FC<Props> = ({
  autoInit = false,
  focusKeyboardInputs = false,
  children,
}) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    initialized: false,
    tokens: [],
    total: 0,
  });

  const calculator = useMemo(() => CalculatorService.instance, []);

  const clear = useCallback(() => {
    if (!calcState.initialized) return;

    calculator.clear();
    setCalcState({
      ...calcState,
      total: calculator.total,
      tokens: calculator.tokens,
    });
  }, [calcState, calculator]);

  const clearMemory = useCallback(() => {
    if (!calcState.initialized) return;

    calculator.clearMemory();
    setCalcState({
      ...calcState,
      total: calculator.total,
      tokens: calculator.tokens,
    });
  }, [calcState, calculator]);

  const addToken = useCallback(
    (action: Action | number) => {
      if (!calcState.initialized) return;

      switch (action) {
        case Action.Clear:
          clear();
          break;
        case Action.ClearMemory:
          clearMemory();
          break;
        default:
          calculator.addToken(action);
          setCalcState({
            ...calcState,
            total: calculator.total,
            tokens: calculator.tokens,
          });
      }
    },
    [calcState, calculator, clear, clearMemory]
  );

  const calculate = () => {
    if (!calcState.initialized) return;

    calculator.calculate();
    setCalcState({
      ...calcState,
      total: calculator.total,
      tokens: calculator.tokens,
    });
  };

  const onKeydown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      const isAllowedKey = [
        "Enter",
        "+",
        "-",
        "*",
        "/",
        "^",
        ".",
        "(",
        ")",
        "Backspace",
        "Delete",
        ...Array.from({ length: 10 }, (_, i) => i.toString()),
      ].includes(key);

      if (!isAllowedKey) return;

      event.preventDefault();

      const actions: Record<string, Action> = {
        Enter: Action.Equal,
        "+": Action.Add,
        "-": Action.Subtract,
        "*": Action.Multiply,
        "/": Action.Divide,
        "^": Action.Exponent,
        ".": Action.Decimal,
        "(": Action.ParenthesisOpen,
        ")": Action.ParenthesisClose,
        Backspace: Action.Clear,
        Delete: Action.Clear,
      };

      const action = key in actions ? actions[key] : parseInt(key, 10);
      addToken(action);
    },
    [addToken]
  );

  useEffect(() => {
    if (calcState.initialized) return;

    const onInit = (initialized: boolean) => {
      setCalcState({
        ...calcState,
        initialized,
      });
    };

    calculator.onInit(onInit);
    if (autoInit) calculator.init();
  }, [calculator, calcState, autoInit]);

  useEffect(() => {
    if (!focusKeyboardInputs) return;

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [focusKeyboardInputs, calculator, onKeydown]);

  return (
    <CalculatorContext.Provider
      value={{
        ...calcState,
        addToken,
        calculate,
        clear,
        clearMemory,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
