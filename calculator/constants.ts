import { Action } from "./calculator";

export const tokens = {
  [Action.Add]: "+",
  [Action.Subtract]: "-",
  [Action.Multiply]: "*",
  [Action.Divide]: "/",
  [Action.Exponent]: "^",
  [Action.Decimal]: ".",
  [Action.Equal]: "=",
  [Action.ParenthesisOpen]: "(",
  [Action.ParenthesisClose]: ")",
  [Action.Percent]: "%",
} as const;

export const actionsMap: Record<string, Action> = {
  "+": Action.Add,
  "-": Action.Subtract,
  "*": Action.Multiply,
  "/": Action.Divide,
  "(": Action.ParenthesisOpen,
  ")": Action.ParenthesisClose,
  "^": Action.Exponent,
  ".": Action.Decimal,
  "%": Action.Percent,
} as const;

export const keyboardActionsMap: Record<string, Action> = {
  Enter: Action.Equal,
  "+": Action.Add,
  "-": Action.Subtract,
  "*": Action.Multiply,
  "/": Action.Divide,
  "^": Action.Exponent,
  ".": Action.Decimal,
  "(": Action.ParenthesisOpen,
  ")": Action.ParenthesisClose,
  "%": Action.Percent,
  Backspace: Action.Clear,
  Delete: Action.Clear,
} as const;

export const allowedKeys = [
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
  "%",
  ...Array.from({ length: 10 }, (_, i) => i.toString()),
] as const;

export const allowedInputValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "(",
  ")",
  "^",
  ".",
  "%",
] as const;

export const ariaLabels = {
  [Action.Add]: "Add",
  [Action.Subtract]: "Subtract",
  [Action.Multiply]: "Multiply",
  [Action.Divide]: "Divide",
  [Action.Exponent]: "Exponent",
  [Action.Decimal]: "Decimal",
  [Action.Equal]: "Equal",
  [Action.ParenthesisOpen]: "Open parenthesis",
  [Action.ParenthesisClose]: "Close parenthesis",
  [Action.Percent]: "Percent",
  [Action.Clear]: "Clear",
  [Action.ClearMemory]: "Clear memory",
} as const;
