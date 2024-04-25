'use client'

import type { FC, PropsWithChildren } from "react";
import { use, useCallback, useEffect, useMemo, useState } from "react";

import type { CalculatorState } from "../calculator";
import { CalculatorContext } from "../context/CalculatorContext";
import { CalculatorService } from "../services/CalculatorService";

export const CalculatorContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [calcState, setCalcState] = useState<CalculatorState>({
		initialized: false,
		tokens: [],
		total: 0,
	});

	const calculator = useMemo(() => new CalculatorService(), []);

	const addToken = (token: string) => {
		calculator.addToken(token);
		setCalcState({
			...calcState,
			total: calculator.total,
			tokens: calculator.tokens,
		});
	}

	const calculate = () => {
		calculator.calculate();
		setCalcState({
			...calcState,
			total: calculator.total,
			tokens: calculator.tokens,
		});
	}

	const clear = () => {
		calculator.clear();
		setCalcState({
			...calcState,
			total: calculator.total,
			tokens: calculator.tokens,
		});
	}

	const clearMemory = () => {
		calculator.clearMemory();
		setCalcState({
			...calcState,
			total: calculator.total,
			tokens: calculator.tokens,
		});
	}

	useEffect(() => {
		if (calcState.initialized) return;

		const onInit = (initialized: boolean) => {
			setCalcState({
				...calcState,
				initialized,
			});
		};

		calculator.onInit(onInit);
		calculator.init();
	}, [calculator, calcState]);

	useEffect(() => {
		console.log(calculator.tokens)
	}, [calculator.tokens])

	useEffect(() => {
		console.log(calcState)
	}, [calcState])

	return (
		<CalculatorContext.Provider
			value={{
				...calcState,
				addToken,
				calculate,
				clear,
				clearMemory
			}}>
			{children}
		</CalculatorContext.Provider>
	)
}