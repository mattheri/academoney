import { createContext } from "react";

import type { CalculatorActions, CalculatorState } from "../calculator";

export const CalculatorContext = createContext<CalculatorState & CalculatorActions>({
	initialized: false,
	tokens: [],
	total: 0,
	currentToken: null,
	addToken: () => { },
	calculate: () => { },
	clear: () => { },
	clearMemory: () => { },
});