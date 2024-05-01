"use client";
//npm install date-fns
import React, { useState } from 'react';
import { format, addMonths, subMonths, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface Event {
  date: Date;
  description: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const firstDayOfWeek = startOfWeek(firstDayOfMonth);
  const lastDayOfWeek = endOfWeek(lastDayOfMonth);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date); 
    setIsModalOpen(true); 
  };

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>-</button>
        <h1>{format(currentMonth, 'MMMM yyyy', { locale: fr })}</h1> {}
        <button onClick={handleNextMonth}>+</button>
      </div>
      <table className="border border-separate border-black border-spacing-2 rounded-md">
        <thead>
          <tr>
            {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day) => (
              <th key={day} className="border border-black p-2 rounded-md">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil(daysInMonth.length / 7)).fill(null).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array(7).fill(null).map((_, dayIndex) => {
                const day = addDays(firstDayOfWeek, weekIndex * 7 + dayIndex);
                return (
                  <td
                    key={dayIndex}
                    onClick={() => handleDateClick(day)}
                    className={`border border-black p-2 ${isSameMonth(day, currentMonth) ? '' : 'other-month'}`}
                  >
                    {day && format(day, 'd')}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Évènements:</h2>
        <ul>
          {events?.length > 0 ? (
            events.map((event, index) => (
              <li key={index}>
                <strong>{format(event.date, 'dd MMMM yyyy')}</strong>: {event.description}
              </li>
            ))
          ) : (
            <li>Aucun évènements en cours</li>
          )}
        </ul>
      </div>
      {isModalOpen && (
        
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2>Date sélectionnée: {selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</h2>
            {}
            <button onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
