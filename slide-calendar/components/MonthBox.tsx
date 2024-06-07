"use client";

import React from "react";

import DayHeader from "./DayHeader";
import DayGrid from "./DayGrid";
import WeekNumber from "./WeekNumber";
import { Month } from "../server/slidecalendarUtils";

type MonthBoxProps = {
  month: Month;
  year: number;
  onClick: () => void;
};

const MonthBox: React.FC<MonthBoxProps> = ({ month, year, onClick }) => {
  return (
    <div className="p-4 bg-blue-200 rounded cursor-pointer" onClick={onClick}>
      <h2 className="text-xl text-center mb-2">
        {month.name} {year}
      </h2>
      <div className="grid grid-cols-8 gap-1">
        <div className="flex flex-col items-center">
          <WeekNumber weeks={month.weeks} />
        </div>
        <div className="col-span-7">
          <DayHeader />
          <DayGrid days={month.days} />
        </div>
      </div>
    </div>
  );
};

export default MonthBox;
