import type { CxOptions } from 'cva'
import { cx as cvaCx } from "cva";
import { twMerge } from "tailwind-merge";

export const cx = (...inputs: CxOptions) => {
	return twMerge(cvaCx(...inputs));
}