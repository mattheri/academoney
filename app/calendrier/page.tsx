"use client"
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';

interface Event {
  date: Date;
  description: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    console.log('Clicked date:', date);
   
  };

  return (
    <div>
      <h1>{format(currentMonth, 'MMMM yyyy')}</h1>
      <div>
        <button onClick={handlePrevMonth}>Previous Month</button>
        <button onClick={handleNextMonth}>Next Month</button>
      </div>
      <table>
        <thead>
          <tr>
            {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil(daysInMonth.length / 7)).fill(null).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array(7).fill(null).map((_, dayIndex) => {
                const day = daysInMonth[weekIndex * 7 + dayIndex];
                return (
                  <td
                    key={dayIndex}
                    onClick={() => handleDateClick(day)}
                    className={isSameMonth(day, currentMonth) ? '' : 'other-month'}
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
        <h2>Events</h2>
        <ul>
          {events?.length > 0 ? (
            events.map((event, index) => (
              <li key={index}>
                <strong>{format(event.date, 'dd MMMM yyyy')}</strong>: {event.description}
              </li>
            ))
          ) : (
            <li>No events</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
