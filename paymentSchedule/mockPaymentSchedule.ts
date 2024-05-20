import { modelMonthPayment } from "./modelMonthPayment";

export const Payment: modelMonthPayment[] = [
    {
        id:"0",
        name: "Janvier",
        onePayment:[
            {
                id: "0",
                date: "2024-01-10",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -200
            },
            {
                id: "0",
                date: "2024-01-10",
                description: "Escence",
                categories: "Transport",
                revenus: false,
                depences: true,
                solde: -200
            },
            {
                id: "0",
                date: "2024-01-10",
                description: "Assurence",
                categories: "Assurence",
                revenus: false,
                depences: true,
                solde: -350
            },
            {
                id: "0",
                date: "2024-01-10",
                description: "Loyer",
                categories: "Loyer",
                revenus: false,
                depences: true,
                solde: -1500
            },

            {
                id: "1",
                date: "2024-01-15",
                description: "Achat de nourriture",
                categories: "Paie",
                revenus: true,
                depences: false,
                solde: 1800
            },
            {
                id: "2",
                date: "2024-01-15",
                description: "Achat de nourriture",
                categories: "Paie",
                revenus: true,
                depences: false,
                solde: 1800
            },
        ],
    },
    {
        id:"1",
        name: "Février",
        onePayment:[
            {
                id: "0",
                date: "2024-02-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"2",
        name: "Mars",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"3",
        name: "Avril",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"4",
        name: "Mai",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"5",
        name: "Juin",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"6",
        name: "Juilet",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"7",
        name: "Août",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"8",
        name: "Septembre",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"9",
        name: "Octobre",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"10",
        name: "Novembre",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },
    {
        id:"11",
        name: "Décembre",
        onePayment:[
            {
                id: "0",
                date: "2024-03-15",
                description: "Achat de nourriture",
                categories: "Alimentation",
                revenus: false,
                depences: true,
                solde: -50
            }
        ]
    },

]

export type { modelMonthPayment };