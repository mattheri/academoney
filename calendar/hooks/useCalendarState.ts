import { useContext } from "react";

import { CalendarContext } from "../context/CalendarContext";

export const useCalendarState = () => {
  const {
    currentMonth,
    currentYear,
    selectedDate,
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
