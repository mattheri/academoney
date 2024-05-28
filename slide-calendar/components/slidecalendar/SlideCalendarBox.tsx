"use client";

import { useState } from 'react';
import MonthModal from '../modals/SlideMonthModal';
import { Month, generateCalendar } from '../../server/slidecalendarUtils';

const SlideCalendarBox = () => {
  const [year, setYear] = useState<number>(2024);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(3);
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);

  const months: Month[] = generateCalendar(year);

  const openModal = (month: Month) => {
    setSelectedMonth(month);
  };

  const closeModal = () => {
    setSelectedMonth(null);
  };

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
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center">
        <button onClick={handlePrev} className="py-2 bg-blue-200 rounded px-4">&lt;</button>
        <div className="flex space-x-4 mx-4">
          {months.slice(currentMonthIndex, currentMonthIndex + 3).map((month) => (
            <div key={month.name} className="p-4 bg-blue-200 rounded cursor-pointer" onClick={() => openModal(month)}>
              <h2 className="text-xl text-center p-2 mb-2 font-bold ">{month.name} {year}</h2>
              <div className="grid grid-cols-7 p-2 gap-1">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
                  <div key={day} className={`text-center p-2 font-bold ${index === 5 || index === 6 ? 'bg-red-500 p-2 text-white' : ''}`}>{day}</div>
                ))}
                {month.days.map((day, index) => (
                  <div key={day} className={`text-center ${index % 7 === 5 || index % 7 === 6 ? 'bg-red-300 p-2 font-bold' : ''}`}>{day}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="py-2 bg-blue-200 rounded px-4">&gt;</button>
      </div>

      {selectedMonth && <MonthModal month={selectedMonth} closeModal={closeModal} />}
    </div>
  );
};

export default SlideCalendarBox;
