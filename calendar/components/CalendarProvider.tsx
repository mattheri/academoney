import type { FC } from "react";
import { CalendarContextProvider } from "./CalendarContextProvider";
import { ReactNode } from "react";

type Props = { children: ReactNode }

export const CalendarProvider: FC<Props> = ({ children }) => {
  return (
    <CalendarContextProvider>
        {children}
    </CalendarContextProvider>
  );
};