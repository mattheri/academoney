import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

export const useCalendar = () => {
  return useContext(CalendarContext);
};
