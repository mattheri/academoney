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
        <td onClick={() => handleDateClick(day)} className={`border border-white bg-[#092d74] h-28 align-top ${isSameMonth(day, new Date(currentYear, currentMonth - 1, 1)) ? 'text-white' : 'text-[#ef3832]'}`}>
            <b>{day && format(day, 'd')}</b>
            <div id={day && format(day, 'yyyy-MM-dd')}>
                {events.map((event, eventIndex) => (
                    <div className='border border-bg[#e7e7e4] bg-black'><p key={eventIndex}>{event.startDate.toString() === day.toString() ? event.description : ''}</p></div>
                ))}
            </div>
        </td>
    );
};