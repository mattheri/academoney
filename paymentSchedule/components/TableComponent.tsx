import React from "react";
import { modelPayment } from "../mockPaymentSchedule";

type Props = {
  payments: modelPayment[];
};

const TableComponent: React.FC<Props> = ({ payments }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Catégorie</th>
          <th>Revenus</th>
          <th>Dépenses</th>
          <th>Solde</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => (
          <tr key={index}>
            <td>{payment.date}</td>
            <td>{payment.description}</td>
            <td>{payment.categories}</td>
            <td>{payment.revenus ? "Oui" : "Non"}</td>
            <td>{payment.depences ? "Oui" : "Non"}</td>
            <td>{payment.solde}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;