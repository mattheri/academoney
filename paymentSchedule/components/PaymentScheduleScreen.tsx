"use client";

import TableComponent from "./TableComponent";
import PaymentScheduleButton from "./paymentScheduleButton";

import { Payment } from "../mockPaymentSchedule";
import { useState } from "react";

export const PaymentScheduleScreen = () =>{
    const [score, setScore] = useState(0);

    const increaseScore = () =>{
        setScore(score + 1);
    }

    const decreaseScore = () =>{
        setScore(score - 1);
    }

    return(
        <div className="w-full object-center p-4">
            <h1 className="text-xl p-6">Allo monde</h1>
            <p>Score : {score}</p>
            <PaymentScheduleButton onClick={increaseScore}>+</PaymentScheduleButton>
            <PaymentScheduleButton onClick={decreaseScore}>-</PaymentScheduleButton>
            <TableComponent payments={Payment}/>
        </div>
    );
};