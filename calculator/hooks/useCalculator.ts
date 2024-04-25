import { useContext } from "react"

import { CalculatorContext } from "../context/CalculatorContext"

export const useCalculator = () => {
	return useContext(CalculatorContext);
}