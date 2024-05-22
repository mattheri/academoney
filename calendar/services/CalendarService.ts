import { getMonth, getYear } from "date-fns";

import { TransactionType } from "@/auth";

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
}
