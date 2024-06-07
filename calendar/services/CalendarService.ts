import { getMonth, getYear, addDays, startOfWeek, startOfMonth, getWeeksInMonth, isSameMonth, isToday } from "date-fns";
import { Transaction, TransactionType } from "@/auth";
import type { CalendarEvent, Month } from "../calendar";

export class CalendarService {
  private readonly now = new Date();

  getCurrentMonth() {
    return (getMonth(this.now) + 1) as Month;
  }

  getCurrentYear() {
    return getYear(this.now);
  }

  getTotalIncome(events: CalendarEvent[]) {
    return events.reduce((acc, event) => {
      if (event.type === TransactionType.Revenue) {
        return acc + event.amount;
      }

      return acc;
    }, 0);
  }

  getTotalExpense(events: CalendarEvent[]) {
    return events.reduce((acc, event) => {
      if (event.type === TransactionType.Expense) {
        return acc + event.amount;
      }

      return acc;
    }, 0);
  }

  getCurrentDate(year?: number, month?: Month) {
    return new Date(
      year || this.getCurrentYear(),
      month ? month - 1 : this.getCurrentMonth() - 1
    );
  }

  getNumberOfWeeksInMonth(year: number, month: Month) {
    return getWeeksInMonth(new Date(year, month - 1, 1));
  }

  getDayOfWeekAndMonth(year: number, month: Month, weekOfMonth: number, dayOfWeek: number) {
    return addDays(startOfWeek(startOfMonth(new Date(year, month - 1, 1))), weekOfMonth * 7 + dayOfWeek);
  }

  isItSameMonth(day: Date, year: number, month: Month) {
    return isSameMonth(day, new Date(year, month - 1, 1));
  }

  isItToday(day: Date) {
    return isToday(day);
  }

}