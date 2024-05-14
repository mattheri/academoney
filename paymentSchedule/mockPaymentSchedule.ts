import { modelPayment } from "./modelPayment";

export const Payment: modelPayment[] = [
    {
        id: "0",
        date: "2024-01-15",
        description: "Achat de nourriture",
        categories: "Alimentation",
        revenus: false,
        depences: true,
        solde: -50
    },
    {
        id: "1",
        date: "2024-01-25",
        description: "Achat de nourriture",
        categories: "Alimentation",
        revenus: false,
        depences: true,
        solde: -50
    },
    {
        id: "2",
        date: "2024-02-25",
        description: "Achat de nourriture",
        categories: "Alimentation",
        revenus: false,
        depences: true,
        solde: -50
    },
    {
        id: "3",
        date: "2024-03-25",
        description: "Achat de nourriture",
        categories: "Alimentation",
        revenus: false,
        depences: true,
        solde: -50
    },
]

export type { modelPayment };
