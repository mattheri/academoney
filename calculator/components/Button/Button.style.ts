import type { VariantProps } from 'cva'
import { cva } from "cva";

export const buttonStyles = cva('', {
	variants: {
		variant: {
			numeric: 'bg-slate-600',
			operator: 'bg-slate-700',
			equal: 'bg-slate-800',
		}
	}
});

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;