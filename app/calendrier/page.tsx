"use client";

import React, { ChangeEvent, useState } from 'react';
import { format, addMonths, subMonths, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { fr } from 'date-fns/locale'; 

type CalendarEvent = {
  date: Date;
  name: string;
}

type Props = {
  events: CalendarEvent[];
}

const Calendar: React.FC<Props> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [newEventName, setNewEventName] = useState<string>('');
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);

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

  const handleEventInput = (e : ChangeEvent<HTMLInputElement>) => {
    setNewEventName(e.target.value);
  }

  const handleAddEvent = () => {
    const newEvent: CalendarEvent = {
      date: selectedDate!,
      name: newEventName
    }

    setAllEvents([...allEvents, newEvent]);
    setIsModalOpen(false); 
  }

  return (
    // Main container
    <div className="mx-auto border p-3 bg-[#e7e7e4] rounded-lg text-black">
      
      {/* Component Calendrier */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className='font-bold'>&lt;</button>
        <h1 className='uppercase font-bold'>{format(currentMonth, 'MMMM yyyy', { locale: fr })}</h1> {}
        <button onClick={handleNextMonth} className='font-bold'>&gt;</button>
      </div>
      <table className="border table-fixed border-[#e7e7e4] text-center w-full rounded-lg">
        <thead>
          <tr className='bg-[#bf0c1d] text-white'>
            {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day) => (
              <th key={day} className="border border-white p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil(daysInMonth.length / 7)).fill(null).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array(7).fill(null).map((_, dayIndex) => {
                const day = addDays(firstDayOfWeek, weekIndex * 7 + dayIndex);
                return (

                  // Component Cellule Calendrier
                  <td
                    key={dayIndex}
                    onClick={() => handleDateClick(day)}
                    className={`border border-white bg-[#092d74] h-28 align-top ${isSameMonth(day, currentMonth) ? 'text-white' : 'text-[#ef3832]'}`}
                  >
                    <b>{day && format(day, 'd')}</b>
                    <div id={day && format(day, 'yyyy-MM-dd')}>
                        {allEvents.map((e, eventIndex) => (
                            e.date.toString() === day.toString() ? <div className='border border-bg[#e7e7e4] bg-black' key={eventIndex}>{e.name}</div> : ''
                          ))}
                      </div>
                  </td>

                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Component 'Liste de transactions' */}
      {<div>
        <h2>Évènements:</h2>
        <ul>
          {allEvents?.length > 0 ? (
            allEvents.map((event, index) => (
              <li key={index}>
                <strong>{format(event.date, 'dd MMMM yyyy')}</strong>: {event.name}
              </li>
            ))
          ) : (
            <li>Aucun évènements en cours</li>
          )}
        </ul>
      </div>}



    </div>
  );
};

export default Calendar;
