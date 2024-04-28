import type { FC } from "react";

import { Action, CalculatorProps } from "../calculator";
import { ariaLabels } from "../constants";
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
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Clear]}
            variant="operator"
            action={Action.Clear}
          >
            C
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.ClearMemory]}
            variant="operator"
            action={Action.ClearMemory}
          >
            CM
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Exponent]}
            variant="operator"
            action={Action.Exponent}
          >
            ^
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.ParenthesisOpen]}
            variant="operator"
            action={Action.ParenthesisOpen}
          >
            (
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.ParenthesisClose]}
            variant="operator"
            action={Action.ParenthesisClose}
          >
            )
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Divide]}
            variant="operator"
            action={Action.Divide}
          >
            /
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton ariaLabel="7" variant="numeric" action={7}>
            7
          </CalculatorButton>
          <CalculatorButton ariaLabel="8" variant="numeric" action={8}>
            8
          </CalculatorButton>
          <CalculatorButton ariaLabel="9" variant="numeric" action={9}>
            9
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Multiply]}
            variant="operator"
            action={Action.Multiply}
          >
            *
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton ariaLabel="4" variant="numeric" action={4}>
            4
          </CalculatorButton>
          <CalculatorButton ariaLabel="5" variant="numeric" action={5}>
            5
          </CalculatorButton>
          <CalculatorButton ariaLabel="6" variant="numeric" action={6}>
            6
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Subtract]}
            variant="operator"
            action={Action.Subtract}
          >
            -
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton ariaLabel="1" variant="numeric" action={1}>
            1
          </CalculatorButton>
          <CalculatorButton ariaLabel="2" variant="numeric" action={2}>
            2
          </CalculatorButton>
          <CalculatorButton ariaLabel="3" variant="numeric" action={3}>
            3
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Add]}
            variant="operator"
            action={Action.Add}
          >
            +
          </CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton ariaLabel="0" variant="numeric" action={0}>
            0
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Percent]}
            variant="operator"
            action={Action.Percent}
          >
            %
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Decimal]}
            variant="operator"
            action={Action.Decimal}
          >
            .
          </CalculatorButton>
          <CalculatorButton
            ariaLabel={ariaLabels[Action.Equal]}
            variant="equal"
            action={Action.Equal}
          >
            =
          </CalculatorButton>
        </CalculatorRow>
      </CalculatorPad>
    </CalculatorProvider>
  );
};
