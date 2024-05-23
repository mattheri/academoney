import { format, isSameMonth } from "date-fns";
import { CalendarService } from "../services/CalendarService";
import type { FC } from "react";
import { CalendarContext } from '../context/CalendarContext';
import { useContext } from 'react';
import { useCalendarState } from "../hooks/useCalendarState";

const calendarService = new CalendarService();

type Props = {
    day: Date;
}

export const CalendarCell: FC<Props> = ({ day }) => {
    // const calendar = useContext(CalendarContext);
    const { selectedDate, currentMonth } = useCalendarState();
    // const { currentMonth, currentYear, selectedDate, events, totalIncome, totalExpense } = useCalendarState();

    return(
        // onClick={() => handleDateClick(day)}
        <td className={`border border-white bg-[#092d74] h-28 align-top ${isSameMonth(day, calendarService.getCurrentDate()) ? 'text-white' : 'text-[#ef3832]'}`}>
            <b>{day && format(day, 'd')}</b>
            <div id={day && format(day, 'yyyy-MM-dd')}>
                {currentMonth.toString()}
                {/* {selectedDate?.toString()} */}
                {/* <div className='border border-bg[#e7e7e4] bg-black'>abc</div> */}
                {/* {allEvents.map((event, eventIndex) => (
                    <p key={eventIndex}>{event.date.toString() === day.toString() ? event.name : ''}</p>
                ))} */}
            </div>
        </td>
    );
};