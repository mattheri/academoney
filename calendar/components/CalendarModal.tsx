import { format } from 'date-fns';
import type { FC } from "react";
import React, { ChangeEvent } from 'react';
import { fr } from 'date-fns/locale'; 
import { CalendarContext } from '../context/CalendarContext';
import { useContext } from 'react';
import type { Transaction } from "@/auth";
import { TransactionType } from '@/auth';

export type CalendarEvent = Transaction;

type Props = {
    isModalOpen: boolean;
  }

export const CalendarModal: FC<Props> = ({ isModalOpen }) => {
    const calendarContext = useContext(CalendarContext);
    const setIsModalOpen = (openModal: boolean) => {

    }

    const handleEventInput = (e : ChangeEvent<HTMLInputElement>) => {
        // setNewEventName(e.target.value);
    }

    const handleAddCalendarEvent = () => {
        calendarContext.totalExpense = 33; // test a effacer
        calendarContext.events.push(
            { // DONNEES TEMPORAIRE POUR TESTER
                id: 0,
                description: "lez go",
                // category?: string,
                amount: 10,
                type: TransactionType.Expense,
                isDone: false,
                startDate: calendarContext.selectedDate!,
                // endDate: undefined,
                // frequency?: TransactionFrequency,
            }
        );
    }
    
    return (
        isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-60 bg-black">
            <div className="bg-[#092d74] p-4 rounded-md border-2 border-white text-white w-64">
            <h2 className='mb-2 text-lg text-center'><b>{calendarContext.selectedDate && format(calendarContext.selectedDate, 'dd MMMM yyyy', { locale: fr })}</b></h2>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="eventName">Transaction:</label>
                <input id='eventName' name='eventName' autoFocus={true} className='text-black' type="text" onChange={(e) => handleEventInput(e)} />
            </form>
            <button className='bg-[#bf0c1d] rounded-md p-2' onClick={() => setIsModalOpen(false)}>Annuler</button>
            <button className='bg-[#ef3832] rounded-md p-2 ml-4' onClick={() => {handleAddCalendarEvent()}}>Ajouter</button>
            </div>
        </div>
        )
    )
}