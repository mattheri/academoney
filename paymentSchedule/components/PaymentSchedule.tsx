import type { FC } from "react";

import { PaymentScheduleProps } from "../paymentSchedule";
import { PaymentScheduleScreen } from "./PaymentScheduleScreen";

type Props = PaymentScheduleProps;

export const PaymentSchedule: FC<Props> =({autoInit}) =>{
    return (
        <PaymentScheduleScreen/>
    );
};