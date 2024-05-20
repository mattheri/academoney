import { modelOnePayment } from "./modelOnePayment";

export interface modelMonthPayment {
    id: string,
    name: string,
    onePayment: modelOnePayment[],
}