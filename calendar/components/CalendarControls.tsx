"use client";
import { format } from 'date-fns';
import { useCalendar } from '../hooks/useCalendar';
import { fr } from 'date-fns/locale';
import { Month } from '../calendar';

export const CalendarControls = ({}) => {

    const { currentMonth, currentYear, updateMonth } = useCalendar();

    const handlePrevMonth = () => {
        updateMonth((currentMonth - 1) as Month);
    }
    
    const handleNextMonth = () => {
        updateMonth((currentMonth + 1) as Month);
    }

    return(
        <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className='font-bold'>&lt;</button>
            <h1 className='uppercase font-bold'>{format(new Date(currentYear, currentMonth - 1, 1), 'MMMM yyyy', { locale: fr })}</h1>
            <button onClick={handleNextMonth} className='font-bold'>&gt;</button>
        </div>
    );
};