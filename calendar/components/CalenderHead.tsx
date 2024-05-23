import { FC } from "react"

const namesOfWeekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

type Props = {
    
}

export const CalendarHead: FC<Props> = ({}) => {
    
    return (
        <thead>
            <tr className='bg-[#bf0c1d] text-white'>
            {namesOfWeekDays.map((day) => (
                <th key={day} className="border border-white p-2">{day}</th>
            ))}
            </tr>
        </thead>
    );
};