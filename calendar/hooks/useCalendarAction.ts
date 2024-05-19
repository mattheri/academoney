import { useContext } from "react";

import { CalendarContext } from "../context/CalendarContext";

export const useCalendarAction = () => {
  const {
    updateMonth,
    updateYear,
    updateSelectedDate,
    updateEvents,
    calculateTotalIncome,
    calculateTotalExpense,
  } = useContext(CalendarContext);

  return {
    updateMonth,
    updateYear,
    updateSelectedDate,
    updateEvents,
    calculateTotalIncome,
    calculateTotalExpense,
  };
};
