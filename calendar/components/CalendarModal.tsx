"use client";
import { format } from 'date-fns';
import type { FC } from "react";
import React, { ChangeEvent } from 'react';
import { fr } from 'date-fns/locale'; 
import { CalendarContext } from '../context/CalendarContext';
import { useContext } from 'react';
import type { Transaction } from "@/auth";

export type CalendarEvent = Transaction;

type Props = {
    isModalOpen: boolean;
  }

export const CalendarModal: FC<Props> = ({ isModalOpen }) => {
    const calendarContext = useContext(CalendarContext);
    const setIsModalOpen = (openModal: boolean) => { }

    const handleEventInput = (e : ChangeEvent<HTMLInputElement>) => {
        // TODO
    }

    const handleAddCalendarEvent = () => {
        // TODO
    }
    
    return (
        isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-60 bg-black">
            <div className="bg-primary-blue p-4 rounded-md border-2 border-white text-white w-64">
            <h2 className='mb-2 text-lg text-center'><b>{calendarContext.selectedDate && format(calendarContext.selectedDate, 'dd MMMM yyyy', { locale: fr })}</b></h2>
            <form action="" className='flex flex-col mb-4'>
                <label htmlFor="eventName">Transaction:</label>
                <input id='eventName' name='eventName' autoFocus={true} className='text-black' type="text" onChange={(e) => handleEventInput(e)} />
            </form>
            <button className='bg-accent-red rounded-md p-2' onClick={() => setIsModalOpen(false)}>Annuler</button>
            <button className='bg-primary-red rounded-md p-2 ml-4' onClick={() => {handleAddCalendarEvent()}}>Ajouter</button>
            </div>
        </div>
        )
    )
}