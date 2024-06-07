"use client";

import React from "react";

type WeekNumberProps = {
  weeks: number[];
};

const WeekNumber: React.FC<WeekNumberProps> = ({ weeks }) => {
  const weekRows = Math.ceil(weeks.length / 7);

  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      {Array.from({ length: weekRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="text-center bg-red-500 w-12 mb-1">
          S{weeks[rowIndex * 7]}
        </div>
      ))}
    </div>
  );
};

export default WeekNumber;
