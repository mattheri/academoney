"use client";

import React from "react";
import { useSlideCalendar } from "../context/slideCalendarContext";

import { Month } from "../server/slidecalendarUtils";
import MonthBox from "./MonthBox";

const MonthList: React.FC = () => {
  const {
    year,
    months,
    currentMonthIndex,
    setSelectedMonth,
    handlePrev,
    handleNext,
  } = useSlideCalendar();

  const openModal = (month: React.SetStateAction<Month | null>) => {
    setSelectedMonth(month);
  };

  return (
    <div className="flex items-center">
      <button onClick={handlePrev} className="p-2 bg-gray-200 rounded">
        &lt;
      </button>
      <div className="flex space-x-4 mx-4">
        {months.slice(currentMonthIndex, currentMonthIndex + 3).map((month) => (
          <MonthBox
            key={month.name}
            month={month}
            year={year}
            onClick={() => openModal(month)}
          />
        ))}
      </div>
      <button onClick={handleNext} className="p-2 bg-gray-200 rounded">
        &gt;
      </button>
    </div>
  );
};

export default MonthList;
