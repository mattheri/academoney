
import { cva } from "cva";


export const ButtonStyle = cva(
 "w-1/2 p-1 rounded bg-blue-500"
);

export type ButtonProps = typeof ButtonStyle;