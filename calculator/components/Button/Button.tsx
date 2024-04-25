import { cx } from "cva";
import type { FC } from "react";

import type { ButtonVariantProps } from "./Button.style";

type Props = {
	className?: string;
} & ButtonVariantProps;

export const Button: FC<Props> = ({ className, variant = 'numeric' }: Props) => {

	return (
		<button type='button'></button>
	)
}