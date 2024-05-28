
"use client";

import { Month } from '../../server/slidecalendarUtils';

type MonthModalProps = {
  month: Month;
  closeModal: () => void;
};

const MonthModal: React.FC<MonthModalProps> = ({ month, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl mb-4">{month.name}</h2>
        <button className="bg-red-500 text-white p-2 rounded mb-4" onClick={closeModal}>Fermer</button>
        <div className="grid grid-cols-7 gap-1">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
            <div key={day} className={`text-center font-bold ${index === 5 || index === 6 ? 'bg-gray-300' : ''}`}>{day}</div>
          ))}
          {month.days.map((day, index) => (
            <div key={day} className={`text-center ${index % 7 === 5 || index % 7 === 6 ? 'bg-gray-300' : ''}`}>{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthModal;
