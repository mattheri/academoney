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
}