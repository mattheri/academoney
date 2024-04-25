export enum Action {
	Add,
	Subtract,
	Multiply,
	Divide,
	Exponent,
	Clear,
	ClearMemory,
}

export type CalculatorState = {
	total: number;
	initialized: boolean;
	tokens: string[];
}

export type CalculatorActions = {
	addToken: (token: string) => void;
	calculate: () => void;
	clear: () => void;
	clearMemory: () => void;
}