import { createContext } from "react";

import type { CalendarContextAction, CalendarContextState } from "../calendar";
import { CalendarService } from "../services/CalendarService";

const calendarService = new CalendarService();

export const CalendarContext = createContext<
  CalendarContextState & CalendarContextAction
>({
  currentMonth: calendarService.getCurrentMonth(),
  currentYear: calendarService.getCurrentYear(),
  selectedDate: null,
  events: [],
  totalIncome: 0,
  totalExpense: 0,
  updateMonth: () => {},
  updateYear: () => {},
  updateSelectedDate: () => {},
  updateEvents: () => {},
  calculateTotalIncome: () => {},
  calculateTotalExpense: () => {},
});
