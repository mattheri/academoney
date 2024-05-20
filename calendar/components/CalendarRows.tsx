import type { FC } from "react";
import { getDaysInMonth, startOfToday, addDays, startOfWeek, startOfMonth } from 'date-fns';
import CalendarCell from "./CalendarCell";

type Props = {

}

const CalendarRows: FC<Props> = ({}) => {
    return(
        <tbody>
            {Array(Math.ceil(getDaysInMonth(startOfToday()) / 7)).fill(null).map((_, weekIndex) => (
                <tr key={weekIndex}>
                    {Array(7).fill(null).map((_, dayIndex) => {
                    const day = addDays(startOfWeek(startOfMonth(new Date())), weekIndex * 7 + dayIndex);
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

export default CalendarRows;