// TableComponent.tsx
import React from "react";
import { ModelMonthPayment } from "../mockPaymentSchedule"; // Correction ici : ModelMonthPayment

type Props = {
  payments: ModelMonthPayment[];
};

const TableComponent: React.FC<Props> = ({ payments }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-primary-blue text-white text-center">
        <tr>
          <th className="p-1 border box-border border-light-gray">Date</th>
          <th className="p-1 border box-border border-light-gray">Description</th>
          <th className="p-1 border box-border border-light-gray">Catégorie</th>
          <th className="p-1 border box-border border-light-gray">Types</th>
          <th className="p-1 border box-border border-light-gray">Montant</th>
        </tr>
      </thead>
      <tbody className="bg-primary-blue text-white text-center">
        {payments.map((payment, index) =>
          payment.onePayment.map((onePay, subIndex) => (
            <tr key={`${index}-${subIndex}`}>
              <td className="p-1 border box-border border-light-gray">{onePay.startDate}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.description}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.categories}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.type}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.amount}$</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
