//import type { VariantProps } from "cva";
import { cva } from "cva";


export const formButtonStyle = cva(
 "w-1/2 p-1 rounded "
);

export type FormButtonProps = typeof formButtonStyle;