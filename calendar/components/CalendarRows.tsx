"use client";
import { CalendarCell } from "./CalendarCell";
import { useCalendar } from '../hooks/useCalendar';
import { getWeeksInMonth } from 'date-fns';
import { CalendarService } from "../services/CalendarService";

const calendarService = new CalendarService();

export const CalendarRows = ({}) => {

    const { currentYear, currentMonth } = useCalendar();

    return(
        <tbody>
            {Array(calendarService.getNumberOfWeeksInMonth(currentYear, currentMonth)).fill(null).map((_, weekIndex) => (
                <tr key={weekIndex}>
                    {Array(7).fill(null).map((_, dayIndex) => {
                        const day = calendarService.getDayOfWeekAndMonth(currentYear, currentMonth, weekIndex, dayIndex);
                        return (
                            <CalendarCell
                                key={dayIndex}
                                day={day}>
                            </CalendarCell>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};