"use client";

import React, { useState } from 'react';

// Liste des mois de l'année
const months: string[] = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

// Fonction pour obtenir les jours d'un mois spécifique
const getDaysInMonth = (year: number, month: number): (number | string)[][] => {
  const date = new Date(year, month, 1);
  const days: (number | string)[][] = [];
  const week: (number | string)[] = [];
  const firstDay = (date.getDay() + 6) % 7; // Ajuster le premier jour de la semaine pour commencer le lundi

  // Ajouter des chaînes vides pour les jours de la semaine avant le premier du mois
  for (let i = 0; i < firstDay; i++) {
    week.push('');
  }

  // Remplir les jours du mois
  while (date.getMonth() === month) {
    week.push(date.getDate());
    if (week.length === 7) {
      days.push(week.slice());
      week.length = 0; 
    }
    date.setDate(date.getDate() + 1);
  }

  // Ajouter les jours restants
  if (week.length > 0) {
    while (week.length < 7) {
      week.push('');
    }
    days.push(week);
  }

  return days;
};

const SliderCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  // Fonction pour aller au mois précédent
  const handlePrev = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 0 ? 11 : prev - 1;
      if (newMonth === 11) setCurrentYear((year) => year - 1);
      return newMonth;
    });
  };

  // Fonction pour aller au mois suivant
  const handleNext = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev === 11 ? 0 : prev + 1;
      if (newMonth === 0) setCurrentYear((year) => year + 1);
      return newMonth;
    });
  };

  // Obtenir les jours du mois actuel
  const days = getDaysInMonth(currentYear, currentMonth);

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex items-center justify-between w-full max-w-md mb-4">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full">←</button>
        <div className="text-center font-bold">{months[currentMonth]} {currentYear}</div>
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full">→</button>
      </div>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <table className="w-full mt-2 text-center">
          <thead>
            <tr>
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                <th key={index} className="w-10 h-10">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((week, index) => (
              <tr key={index}>
                {week.map((day, idx) => (
                  <td key={idx} className="w-10 h-10">{day}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SliderCalendar;
