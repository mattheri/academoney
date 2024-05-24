import type { FC } from "react";
import { getDaysInMonth, startOfToday, addDays, startOfWeek, startOfMonth } from 'date-fns';
import { CalendarCell } from "./CalendarCell";
import { useCalendar } from '../hooks/useCalendar';
import { getWeeksInMonth } from 'date-fns';

type Props = { }

export const CalendarRows: FC<Props> = ({}) => {

    const { currentYear, currentMonth } = useCalendar();

    return(
        <tbody>
            {Array(getWeeksInMonth(new Date(currentYear, currentMonth - 1, 1))).fill(null).map((_, weekIndex) => (
                <tr key={weekIndex}>
                    {Array(7).fill(null).map((_, dayIndex) => {
                        const day = addDays(startOfWeek(startOfMonth(new Date(currentYear, currentMonth - 1, 1))), weekIndex * 7 + dayIndex);
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