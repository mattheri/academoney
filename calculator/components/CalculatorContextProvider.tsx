"use client";

import type { FC, PropsWithChildren } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Action, CalculatorProps, CalculatorState } from "../calculator";
import { allowedKeys, keyboardActionsMap } from "../constants";
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
    currentToken: null,
  });

  const calculator = useMemo(() => CalculatorService.instance, []);

  const addToken = useCallback(
    (action: Action | number) => {
      if (!calcState.initialized) return;

      calculator.addToken(action);
      setCalcState({
        ...calcState,
        total: calculator.total,
        tokens: calculator.tokens,
      });
    },
    [calcState, calculator]
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

      const isAllowedKey = allowedKeys.includes(key);
      if (!isAllowedKey) return;

      event.preventDefault();

      const action =
        key in keyboardActionsMap ? keyboardActionsMap[key] : parseInt(key, 10);
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
    if (calcState.initialized && !focusKeyboardInputs) {
      window.removeEventListener("keydown", onKeydown);
    }
    if (!focusKeyboardInputs || !calcState.initialized) return;

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [focusKeyboardInputs, calculator, onKeydown, calcState, autoInit]);

  useEffect(() => {
    if (
      !calcState.initialized ||
      calculator.previousToken === calcState.currentToken
    )
      return;

    setCalcState({
      ...calcState,
      currentToken: calculator.previousToken,
    });
  }, [calculator.previousToken, calcState]);

  return (
    <CalculatorContext.Provider
      value={{
        ...calcState,
        addToken,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
