import React from "react";
import { modelMonthPayment } from "../mockPaymentSchedule";

type Props = {
  payments: modelMonthPayment[];
};

const TableComponent: React.FC<Props> = ({ payments }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-primary-blue text-white text-center rounded-bl-lg">
        <tr>
          <th className="p-1 border box-border border-light-gray">Date</th>
          <th className="p-1 border box-border border-light-gray">Description</th>
          <th className="p-1 border box-border border-light-gray">Catégorie</th>
          <th className="p-1 border box-border border-light-gray">Revenus</th>
          <th className="p-1 border box-border border-light-gray">Dépenses</th>
          <th className="p-1 border box-border border-light-gray">Solde</th>
        </tr>
      </thead>
      <tbody className="bg-primary-blue text-white text-center">
        {payments.map((payment, index) =>
          payment.onePayment.map((onePay, subIndex) => (
            <tr key={`${index}-${subIndex}`}>
              <td className="p-1 border box-border border-light-gray">{onePay.date}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.description}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.categories}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.revenus ? "Oui" : "Non"}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.depences ? "Oui" : "Non"}</td>
              <td className="p-1 border box-border border-light-gray">{onePay.solde}$</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;