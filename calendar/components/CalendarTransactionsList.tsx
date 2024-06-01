"use client";
import type { FC } from "react";
import { useCalendar } from '../hooks/useCalendar';
import { CalendarService } from "../services/CalendarService";

const calendarService = new CalendarService();

export const CalendarTransactionsList = ({}) => {

    const { events } = useCalendar();
    calendarService.getAllTransactions(22);

    return(
        <div>
            <h2>Évènements:</h2>
            <ul>
                {events?.length > 0 ? (
                events.map((event, index) => (
                    <li key={index}>
                    <strong>{event.toString()}</strong>: 
                    </li>
                ))
                ) : (
                <li>Aucun évènements en cours</li>
                )}
            </ul>
        </div>
    );
};