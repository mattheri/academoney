"use client";
//npm install date-fns
import React, { ChangeEvent, useRef, useState } from 'react';
import { format, addMonths, subMonths, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface Event {
  date: Date;
  name: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [newEventName, setNewEventName] = useState<string>('');
  const [allEvents, setAllEvents] = useState<Event[]>([]);

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
    const newEvent: Event = {
      date: selectedDate!,
      name: newEventName
    }

    setAllEvents([...allEvents, newEvent]);
    setIsModalOpen(false); 
  }

  return (
    <div className="mx-auto max-w-xl border p-3 bg-[#092d74] rounded-lg mt-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h1>{format(currentMonth, 'MMMM yyyy', { locale: fr })}</h1> {}
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <table className="border border-black text-center w-full rounded-lg">
        <thead>
          <tr>
            {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day) => (
              <th key={day} className="border border-white p-2 rounded-md">{day}</th>
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
                    className={`border border-white p-2 ${isSameMonth(day, currentMonth) ? '' : 'other-month'}`}
                  >
                    {day && format(day, 'd')}
                    <div id={day && format(day, 'yyyy-MM-dd')}>
                        {allEvents.map((event, eventIndex) => (
                            <p key={eventIndex}>{event.date.toString() === day.toString() ? event.name : ''}</p>
                          ))}
                      </div>
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
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50">
          <div className="bg-[#092d74] p-4 rounded-md border-2 border-white">
            <h2>Date sélectionnée: {selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</h2>
            <h3>Ajouter un événement</h3>
            <form action="" className='flex flex-col'>
                <label htmlFor="eventName">Nom:</label>
                <input id='eventName' name='eventName' autoFocus={true} className='text-black' type="text" onChange={(e) => handleEventInput(e)} />
            </form>
            <button className='bg-[#bf0c1d] rounded-md p-2' onClick={() => setIsModalOpen(false)}>Annuler</button>
            <button className='bg-[#ef3832] rounded-md p-2 ml-2 mt-2' onClick={() => handleAddEvent()}>Ajouter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
