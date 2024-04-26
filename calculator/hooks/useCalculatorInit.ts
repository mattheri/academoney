import { useCallback, useMemo } from "react"

import { CalculatorService } from "../services/CalculatorService"

export const useCalculatorInit = () => {
	const calculator = useMemo(() => CalculatorService.instance, []);

	return useCallback(() => calculator.init(), [calculator]);
}