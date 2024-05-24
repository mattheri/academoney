import type { FC } from "react";
import { useCalendar } from '../hooks/useCalendar';

type Props = { }

export const CalendarTransactionsList: FC<Props> = ({}) => {

    const { events } = useCalendar();

    return(
        <div>
            <h2>Évènements:</h2>
            <ul>
                {events?.length > 0 ? (
                events.map((event, index) => (
                    <li key={index}>
                    <strong>{event.toString()}</strong>: 
                    </li>
                ))
                ) : (
                <li>Aucun évènements en cours</li>
                )}
            </ul>
        </div>
    );
};