export enum Action {
	Add = 'ADD',
	Subtract = 'SUBTRACT',
	Multiply = 'MULTIPLY',
	Divide = 'DIVIDE',
	Exponent = 'EXPONENT',
	Clear = 'CLEAR',
	ClearMemory = 'CLEAR_MEMORY',
	Decimal = 'DECIMAL',
	Equal = 'EQUAL',
	ParenthesisOpen = 'PARENTHESIS_OPEN',
	ParenthesisClose = 'PARENTHESIS_CLOSE',
	Percent = 'PERCENT',
}

export type CalculatorState = {
	total: number;
	initialized: boolean;
	tokens: string[];
	currentToken: string | null;
}

export type CalculatorActions = {
	addToken: (action: Action | number) => void;
	calculate: () => void;
	clear: () => void;
	clearMemory: () => void;
}

export type CalculatorProps = {
	autoInit?: boolean;
	focusKeyboardInputs?: boolean;
}