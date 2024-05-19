"use client";

import type { FC, PropsWithChildren } from "react";
import { useMemo, useState } from "react";

import { TransactionType } from "@/auth";

import type {
  CalendarContextState,
  CalendarInitialState,
  Month,
} from "../calendar";
import { CalendarContext } from "../context/CalendarContext";
import { CalendarService } from "../services/CalendarService";

type Props = PropsWithChildren<CalendarInitialState>;

export const CalendarContextProvider: FC<Props> = ({
  month,
  year,
  events = [],
  children,
}) => {
  const calendarService = useMemo(() => new CalendarService(), []);
  const [state, setState] = useState<CalendarContextState>({
    currentMonth: month || calendarService.getCurrentMonth(),
    currentYear: year || calendarService.getCurrentYear(),
    selectedDate: calendarService.getCurrentDate(year, month),
    events,
    totalIncome: calendarService.getTotalIncome(events),
    totalExpense: calendarService.getTotalExpense(events),
  });

  const updateMonth = (month: CalendarContextState["currentMonth"]) => {
    setState({ ...state, currentMonth: month });
  };

  const updateYear = (year: CalendarContextState["currentYear"]) => {
    setState({ ...state, currentYear: year });
  };

  const updateSelectedDate = (date: CalendarContextState["selectedDate"]) => {
    setState({ ...state, selectedDate: date });
  };

  const updateEvents = (events: CalendarContextState["events"]) => {
    setState({ ...state, events });
  };

  const calculateTotalIncome = () => {
    const totalIncome = calendarService.getTotalIncome(state.events);

    setState({ ...state, totalIncome });
  };

  const calculateTotalExpense = () => {
    const totalExpense = calendarService.getTotalExpense(state.events);

    setState({ ...state, totalExpense });
  };

  return (
    <CalendarContext.Provider
      value={{
        ...state,
        updateMonth,
        updateYear,
        updateSelectedDate,
        updateEvents,
        calculateTotalIncome,
        calculateTotalExpense,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
