"use client";
import { CalendarCell } from "./CalendarCell";
import { useCalendar } from '../hooks/useCalendar';
import { CalendarService } from "../services/CalendarService";
import { useEffect, useState } from "react";
import { Transaction } from "@/auth";
import { getAllTransactions } from "../services/CalendarActions";

const calendarService = new CalendarService();

export const CalendarRows = ({}) => {

    const { currentYear, currentMonth } = useCalendar();

    // const { events, updateEvents } = useCalendar(); // ne fonctionne pas, me retourne des erreurs
    const [transactions, setTransactions] = useState<Transaction[]>([]);

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
        <tbody>
            {Array(calendarService.getNumberOfWeeksInMonth(currentYear, currentMonth)).fill(null).map((_, weekIndex) => (
                <tr key={weekIndex}>
                    {Array(7).fill(null).map((_, dayIndex) => {
                        const day = calendarService.getDayOfWeekAndMonth(currentYear, currentMonth, weekIndex, dayIndex);
                        return (
                            <CalendarCell
                                key={dayIndex}
                                day={day}
                                transactions={transactions}>
                            </CalendarCell>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};