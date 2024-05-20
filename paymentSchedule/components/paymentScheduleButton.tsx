import React, { FC, PropsWithChildren, PropsWithRef } from "react";
import { forwardRef } from "react";

type Props = PropsWithRef<
    PropsWithChildren<{
        className?: string;
        onClick: () => void; // Fonction qui augmente ou diminue l'id du mois de 1
    }>
>;

const PaymentScheduleButton: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ onClick, children }) => {
        return (
            <button type='button' onClick={onClick}>
                {children}
            </button>
        );
    }
);

// Définir displayName pour le composant
PaymentScheduleButton.displayName = "PaymentScheduleButton";

export default PaymentScheduleButton;