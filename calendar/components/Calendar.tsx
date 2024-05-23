import { FC } from "react";
import { CalendarModal } from '../../calendar/components/CalendarModal';
import { CalendarTransactionsList } from '@/calendar/components/CalendarTransactionsList';
import { CalendarRows } from '../../calendar/components/CalendarRows';
import { CalendarHead } from '@/calendar/components/CalenderHead';
import { CalendarProvider } from "./CalendarProvider";
import { CalendarControls } from './CalendarControls';

type Props = {

}

export const Calendar: FC<Props> = ({}) => {

    // Faire la logique dans le fichier CalendarControls.tsx

    return(
        <div className="mx-auto border p-3 bg-[#e7e7e4] rounded-lg text-black">
            <CalendarProvider>
                <CalendarControls></CalendarControls>
                <table className="border table-fixed border-[#e7e7e4] text-center w-full rounded-lg">
                    <CalendarHead>
                    </CalendarHead>
¨
                    <CalendarRows>
                    </CalendarRows>
                </table>

                <CalendarTransactionsList>
                </CalendarTransactionsList>

                <CalendarModal
                    isModalOpen={false}>
                </CalendarModal>
            </CalendarProvider>
        </div>
    );
};