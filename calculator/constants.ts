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
};

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
	...Array.from({ length: 10 }, (_, i) => i.toString()),
];

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
]