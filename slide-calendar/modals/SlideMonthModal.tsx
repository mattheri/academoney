"use client";

import React from "react";
import { useSlideCalendar } from "../context/slideCalendarContext";

const SlideMonthModal: React.FC = () => {
  const { selectedMonth, setSelectedMonth } = useSlideCalendar();

  if (!selectedMonth) return null;

  const closeModal = () => {
    setSelectedMonth(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded w-1/2 max-h-screen overflow-y-auto">
        <h2 className="text-2xl mb-4">{selectedMonth.name}</h2>
        <button
          className="bg-red-500 text-white p-2 rounded mb-4"
          onClick={closeModal}
        >
          Fermer
        </button>
        <div>
          {selectedMonth.operations.length > 0 ? (
            <ul className="space-y-2">
              {selectedMonth.operations.map((operation) => (
                <li
                  key={operation.date}
                  className="p-4 bg-gray-100 rounded shadow"
                >
                  <div className="font-bold">{operation.date}</div>
                  <div>{operation.title}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">
              Aucune opération trouvée pour ce mois.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideMonthModal;
