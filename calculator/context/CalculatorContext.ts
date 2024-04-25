import { createContext } from "react";

import type { CalculatorActions, CalculatorState } from "../calculator";

export const CalculatorContext = createContext<CalculatorState & CalculatorActions>({
	operations: [],
	previousOperation: null,
	currentValue: 0,
	currentOperation: null,
	isChildOperation: false,
	addOperation: () => { },
	calculate: () => { },
	clear: () => { },
	clearMemory: () => { },
});