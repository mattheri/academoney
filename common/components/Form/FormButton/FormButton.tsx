
"use client";

import type { FC, PropsWithRef } from "react";
import { forwardRef } from "react";

type Props = PropsWithRef<
    {
    className?: string;
    } //& FormButtonVariantProps
>; 

export const FormButton: FC<Props> = forwardRef<HTMLButtonElement, Props>( ({ className  }, ref)=> {
    return (
        <button
        ref={ref}
        type="button"
        //onClick={onclick}


        >
            

        </button>
    )
});

FormButton.displayName = "Button";