import { ModelOnePayment } from "./modelOnePayment";

export type ModelMonthPayment = {
    id: string;
    name: string;
    onePayment: ModelOnePayment[];
};