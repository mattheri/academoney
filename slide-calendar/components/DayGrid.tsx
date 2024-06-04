"use client";

import React from "react";

type DayGridProps = {
  days: number[];
};

const DayGrid: React.FC<DayGridProps> = ({ days }) => {
  const dayRows = [];
  for (let i = 0; i < days.length; i += 7) {
    dayRows.push(days.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col space-y-1">
      {dayRows.map((weekDays, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-7 gap-1">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className={`text-center ${
                index === 5 || index === 6 ? "bg-gray-300" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DayGrid;
