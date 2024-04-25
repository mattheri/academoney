'use client'

import type { FC, PropsWithChildren } from "react";

import { CalculatorContextProvider } from "./CalculatorContextProvider";

export const Calculator: FC<PropsWithChildren> = ({ children }) => {
	return (
		<CalculatorContextProvider>
			{children}
		</CalculatorContextProvider>
	)
}