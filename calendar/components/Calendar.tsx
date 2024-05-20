import { FC } from "react"
import { format, getMonth } from 'date-fns';
import { CalendarModal } from '../../calendar/components/CalendarModal';
import CalendarTransactionsList from '@/calendar/components/CalendarTransactionsList';
import CalendarRows from '../../calendar/components/CalendarRows';
import CalendarHead from '@/calendar/components/CalenderHead';
import { fr } from 'date-fns/locale'; 

type Props = {

}

const Calendar: FC<Props> = ({}) => {

    const getCurrentMonth = () => {
        return getMonth(new Date());
    }

    const handlePrevMonth = () => {
        // setCurrentMonth(subMonths(getCurrentMonth(), 1));
    };

    const handleNextMonth = () => {
        // setCurrentMonth(addMonths(getCurrentMonth(), 1));
    };

    return(
        <div className="mx-auto border p-3 bg-[#e7e7e4] rounded-lg text-black">
            <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevMonth} className='font-bold'>&lt;</button>
                <h1 className='uppercase font-bold'>{format(getCurrentMonth(), 'MMMM yyyy', { locale: fr })}</h1> {}
                <button onClick={handleNextMonth} className='font-bold'>&gt;</button>
            </div>
            <table className="border table-fixed border-[#e7e7e4] text-center w-full rounded-lg">
                <CalendarHead>
                </CalendarHead>

                <CalendarRows>
                </CalendarRows>
            </table>

            <CalendarTransactionsList>
            </CalendarTransactionsList>

            <CalendarModal
                isModalOpen={false}>
            </CalendarModal>
        </div>
    );
};

export default Calendar;