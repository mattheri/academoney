import type { FC, PropsWithChildren } from "react";

import type { CalculatorProps } from "../calculator";
import { CalculatorContextProvider } from "./CalculatorContextProvider";

type Props = PropsWithChildren<CalculatorProps>;

export const CalculatorProvider: FC<Props> = ({
  autoInit,
  focusKeyboardInputs,
  children,
}) => {
  return (
    <CalculatorContextProvider
      autoInit={autoInit}
      focusKeyboardInputs={focusKeyboardInputs}
    >
      {children}
    </CalculatorContextProvider>
  );
};
