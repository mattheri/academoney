import { CalendarModal } from '../../calendar/components/CalendarModal';
import { CalendarTransactionsList } from '@/calendar/components/CalendarTransactionsList';
import { CalendarRows } from '../../calendar/components/CalendarRows';
import { CalendarHead } from '@/calendar/components/CalenderHead';
import { CalendarProvider } from "./CalendarProvider";
import { CalendarControls } from './CalendarControls';

export const Calendar = ({}) => {
    return(
        <div className="mx-auto border p-3 bg-light-gray rounded-lg text-black">
            <CalendarProvider>

                <CalendarControls />

                <table className="border table-fixed border-light-gray text-center w-full rounded-lg">
                    <CalendarHead />
                    
                    <CalendarRows />
                </table>

                <CalendarTransactionsList />

                <CalendarModal
                    isModalOpen={false}>
                </CalendarModal>
            </CalendarProvider>
        </div>
    );
};