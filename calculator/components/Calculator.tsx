import type { FC } from "react";

import { Action, CalculatorProps } from "../calculator";
import { CalculatorButton } from "./CalculatorButton/CalculatorButton";
import { CalculatorPad } from "./CalculatorPad";
import { CalculatorProvider } from "./CalculatorProvider";
import { CalculatorRow } from "./CalculatorRow";
import { CalculatorScreen } from "./CalculatorScreen";

type Props = CalculatorProps;

export const Calculator: FC<Props> = ({ autoInit, focusKeyboardInputs }) => {
  return (
    <CalculatorProvider
      autoInit={autoInit}
      focusKeyboardInputs={focusKeyboardInputs}
    >
      <CalculatorScreen />
      <CalculatorPad>
        <CalculatorRow>
          <CalculatorButton variant="operator" action={Action.Clear}>
            C
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.ClearMemory}>
            CM
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Exponent}>
            ^
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.ParenthesisOpen}>
            (
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.ParenthesisClose}>
            )
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Divide}>
            /
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton variant="numeric" action={7}>
            7
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={8}>
            8
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={9}>
            9
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Multiply}>
            *
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton variant="numeric" action={4}>
            4
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={5}>
            5
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={6}>
            6
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Subtract}>
            -
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton variant="numeric" action={1}>
            1
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={2}>
            2
          </CalculatorButton>
          <CalculatorButton variant="numeric" action={3}>
            3
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Add}>
            +
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton variant="numeric" action={0}>
            0
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Percent}>
            %
          </CalculatorButton>
          <CalculatorButton variant="operator" action={Action.Decimal}>
            .
          </CalculatorButton>
          <CalculatorButton variant="equal" action={Action.Equal}>
            =
          </CalculatorButton>
        </CalculatorRow>
      </CalculatorPad>
    </CalculatorProvider>
  );
};
