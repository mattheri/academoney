"use client";

import TableComponent from "../components/TableComponent";
import PaymentScheduleButton from "../components/paymentScheduleButton";

import { Payment } from "../mockPaymentSchedule";
import { useState } from "react";

export const PaymentScheduleScreen = () =>{
    const [numberMonth, setNumberMonth] = useState(0);

    const maxMonths = Payment.length - 1;

    const numberMonthLimit = (numberMonth: number)=>{
        if(numberMonth < 0){
            return 0;
        }else if (numberMonth > maxMonths) {
            return maxMonths;
        }
        return numberMonth;
    };

    const increaseNumberMonth = () =>{
        setNumberMonth(prevNumberMonth => numberMonthLimit(prevNumberMonth + 1));
    }

    const decreaseNumberMonth = () =>{
        setNumberMonth(prevNumberMonth => numberMonthLimit(prevNumberMonth - 1));
    }

    const filteredPayments = Payment.filter(payment =>parseInt(payment.id) === numberMonth);
    const monthName = Payment.find(payment =>parseInt (payment.id) === numberMonth)?.name;

    const monthSummary = () => {
        return filteredPayments.reduce((sum, payment) => {
          return sum + payment.onePayment.reduce((innerSum, onePay) => innerSum + onePay.solde, 0);
        }, 0);
      };

    const totalSolde = monthSummary();

    return(
        <div className="w-full bg-primary-blue text-white rounded-xl">
            <div className="flex p-4">
                <PaymentScheduleButton onClick={decreaseNumberMonth}> &lt; </PaymentScheduleButton>
                <p className="ml-6 mr-6">{monthName}</p>
                <PaymentScheduleButton onClick={increaseNumberMonth}> &gt; </PaymentScheduleButton>
            </div>
            <TableComponent payments={filteredPayments}/>
            <div className="p-4">
                <p>Solde du mois : {totalSolde}$</p>
            </div>
        </div>
    );
};