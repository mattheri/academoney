"use client";

const namesOfWeekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export const CalendarHead = ({}) => {
    
    return (
        <thead>
            <tr className='bg-accent-red text-white'>
            {namesOfWeekDays.map((day) => (
                <th key={day} className="border border-white p-2">{day}</th>
            ))}
            </tr>
        </thead>
    );
};