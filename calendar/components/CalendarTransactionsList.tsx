import type { FC } from "react";

type Props = {

}

const CalendarTransactionsList: FC<Props> = ({}) => {

    return(
        <div>
            <h2>Évènements:</h2>
            {/* <ul> À REFAIRE UNE FOIS QU'ON VA AVOIR ACCÈS AUX TRANSACTIONS
                {allEvents?.length > 0 ? (
                allEvents.map((event, index) => (
                    <li key={index}>
                    <strong>{format(event.date, 'dd MMMM yyyy')}</strong>: {event.name}
                    </li>
                ))
                ) : (
                <li>Aucun évènements en cours</li>
                )}
            </ul> */}
        </div>
    );
};

export default CalendarTransactionsList;