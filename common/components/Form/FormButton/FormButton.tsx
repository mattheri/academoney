
"use client";

import { cx } from "@/utils/cx";
import type { FC, PropsWithRef } from "react";
import { forwardRef } from "react";
import { formButtonStyle } from "./FormButton.style";

type Props = PropsWithRef<
    {
    className?: string;
    } 
>; 

export const FormButton: FC<Props> = forwardRef<HTMLButtonElement, Props>( ({ className  }, ref)=> {
    return (
        <button
        ref={ref}
        type="button"
        //onClick={onclick}
        className={cx(
            formButtonStyle, className
        )}


        >
            
            
        </button>
    )
});

FormButton.displayName = "Button";