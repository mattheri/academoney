
//"use client";

import { cx } from "@/utils/cx";
import type { FC, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { ButtonStyle } from "./Button.style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    {
    className?: string;
   
    } 
; 

export const FormButton: FC<Props> = forwardRef<HTMLButtonElement, Props>( ({  className, type="button" }, ref)=> {
    return (
        <button type={type} className={cx(ButtonStyle, className)}>
            Ajouter  
        </button>
    )
});

FormButton.displayName = "Button";