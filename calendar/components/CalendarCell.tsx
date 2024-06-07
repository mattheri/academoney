"use client";
import { format, compareAsc } from "date-fns";
import { CalendarService } from "../services/CalendarService";
import type { FC } from "react";
import { useCalendar } from '../hooks/useCalendar';
import { Transaction } from "@/auth";

const calendarService = new CalendarService();

type Props = {
    day: Date;
    transactions: Transaction[];
}

export const CalendarCell: FC<Props> = ({ day, transactions }) => {

    const { currentMonth, currentYear, updateSelectedDate } = useCalendar();

    const handleDateClick = (date: Date) => {
        updateSelectedDate(day);
    }

    const formatter = new Intl.DateTimeFormat('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' });

    return(
        <td onClick={() => handleDateClick(day)} className={`border border-white bg-primary-blue h-28 align-top
            ${calendarService.isItSameMonth(day, currentYear, currentMonth) ? 'text-accent-blue' : 'text-primary-red'}`}> 
            
            <p className={calendarService.isItToday(day) ? 'font-bold text-white underline' : ''}>{day && format(day, 'd')}</p>
            <div className="text-xs" id={day && format(day, 'yyyy-MM-dd')}>
                {transactions.map((transaction, transactionIndex) => (
                    transaction.startDate.toString() === formatter.format(day) ? <div key={transactionIndex} className='border bg-black'>{transaction.description}: {transaction.amount}$</div> : ''
                ))}
            </div>
        </td>
    );
};