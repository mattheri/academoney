"use client";
import { useEffect, useState } from "react";
import { CalendarService } from "../services/CalendarService";
import { getAllTransactions } from "../services/CalendarActions";
import { Transaction } from "@/auth";

const calendarService = new CalendarService();

export const CalendarTransactionsList = ({}) => {

    // const { events, updateEvents } = useCalendar(); // ne fonctionne pas, me retourne des erreurs
    const [transactions, setTransactions] = useState<Transaction[]>([]);
  

    // component async, 
    // J'ai essayé de mettre cette logique dans CalendarService (et CalendarContext) mais
    // les hooks ne sont pas permis dans ce fichier. J'ai essayé d'autres approches, mais
    // je n'arrivais pas à accéder les données dans la 'Promise' sans utiliser des Hooks.
    // J'ai aussi essayé d'utiliser updateEvents() mais cela me produit des erreurs dans
    // la console.
    useEffect(() => {
        getAllTransactions().then(result => setTransactions(result!));
        // updateEvents(transactions); ne fonctionne pas, me retourne des erreurs
    }, []);

    return(
        <div className="bg-accent-blue inline-block m-2 p-4 rounded">
            <h2><strong>Transactions:</strong></h2>
            <ul>
                {transactions?.length > 0 ? (
                transactions.map((transaction, index) => (
                    <li key={index}>
                    {transaction.startDate.toString()} / {transaction.description} / {transaction.amount} 
                    </li>
                ))
                ) : (
                <li>Aucun évènements en cours</li>
                )}
            </ul>
        </div>
    );
};