import type { Transaction } from "@/auth";

export type CalendarEvent = Transaction;

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type CalendarContextState = {
  currentMonth: Month;
  currentYear: number;
  selectedDate: Date | null;
  events: CalendarEvent[];
  totalIncome: number;
  totalExpense: number;
};

export type CalendarContextAction = {
  updateMonth: (month: CalendarContextState["currentMonth"]) => void;
  updateYear: (year: CalendarContextState["currentYear"]) => void;
  updateSelectedDate: (date: CalendarContextState["selectedDate"]) => void;
  updateEvents: (events: CalendarContextState["events"]) => void;
  calculateTotalIncome: () => void;
  calculateTotalExpense: () => void;
};

export type CalendarInitialState = {
  month?: Month;
  year?: number;
  events?: CalendarEvent[];
};
