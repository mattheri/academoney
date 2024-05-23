import { useContext } from "react";
import { getMonth, getYear, format } from "date-fns";
import { CalendarContext } from "../context/CalendarContext";

export const useCalendarInit = () => {
    const {
        currentMonth = getMonth(new Date()),
        currentYear = getYear(new Date()),
        selectedDate = new Date(),
        events,
        totalIncome,
        totalExpense,
    } = useContext(CalendarContext);

    return {
        currentMonth,
        currentYear,
        selectedDate,
        events,
        totalIncome,
        totalExpense,
    };
};
