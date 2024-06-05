import React, { createContext, useContext, useState, ReactNode } from "react";
import { generateCalendar, Month } from "../server/slidecalendarUtils";

interface SlideCalendarContextProps {
  year: number;
  months: Month[];
  currentMonthIndex: number;
  selectedMonth: Month | null;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setCurrentMonthIndex: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<Month | null>>;
  handlePrev: () => void;
  handleNext: () => void;
}

const SlideCalendarContext = createContext<
  SlideCalendarContextProps | undefined
>(undefined);

export const useSlideCalendar = (): SlideCalendarContextProps => {
  const context = useContext(SlideCalendarContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
};

export const SlideCalendarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState<number>(2024);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(3);
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);

  const months: Month[] = generateCalendar(year);

  const handlePrev = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(9);
      setYear(year - 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex - 3);
    }
  };

  const handleNext = () => {
    if (currentMonthIndex === 9) {
      setCurrentMonthIndex(0);
      setYear(year + 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex + 3);
    }
  };

  return (
    <SlideCalendarContext.Provider
      value={{
        year,
        months,
        currentMonthIndex,
        selectedMonth,
        setYear,
        setCurrentMonthIndex,
        setSelectedMonth,
        handlePrev,
        handleNext,
      }}
    >
      {children}
    </SlideCalendarContext.Provider>
  );
};
