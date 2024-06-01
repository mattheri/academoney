"use client";
import { format, isSameMonth } from "date-fns";
import { CalendarService } from "../services/CalendarService";
import type { FC } from "react";
import { useCalendar } from '../hooks/useCalendar';

const calendarService = new CalendarService();

type Props = {
    day: Date;
}

export const CalendarCell: FC<Props> = ({ day }) => {

    const { currentMonth, currentYear, events, updateSelectedDate } = useCalendar();

    const handleDateClick = (date: Date) => {
        updateSelectedDate(day);
    }

    return(
        <td onClick={() => handleDateClick(day)} className={`border border-white bg-primary-blue h-28 align-top
            ${calendarService.isItSameMonth(day, currentYear, currentMonth) ? 'text-accent-blue' : 'text-primary-red'}`}> 
            
            <p className={calendarService.isItToday(day) ? 'font-bold text-white underline' : ''}>{day && format(day, 'd')}</p>
            <div id={day && format(day, 'yyyy-MM-dd')}>
                {events.map((event, eventIndex) => (
                    <div className='border bg-black'><p key={eventIndex}>{event.startDate.toString() === day.toString() ? event.description : ''}</p></div>
                ))}
            </div>
        </td>
    );
};