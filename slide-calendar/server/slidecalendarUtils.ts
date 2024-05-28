
export type Operation = {
    day: number;
    date: string;
    title: string;
  };
  
  export type Month = {
    name: string;
    days: number[];
    operations: Operation[];
  };
  
  export const generateCalendar = (year: number): Month[] => {
    const months: Month[] = [
      { name: 'Janvier', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Février', days: Array.from({ length: 28 }, (_, i) => i + 1), operations: [] },
      { name: 'Mars', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Avril', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: [] },
      { name: 'Mai', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Juin', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: [] },
      { name: 'Juillet', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Août', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Septembre', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: [] },
      { name: 'Octobre', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
      { name: 'Novembre', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: [] },
      { name: 'Décembre', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: [] },
    ];
  
    // Ajout d'opérations pour un mois
    months[3].operations.push(
      { day: 1, date: '2024-04-01', title: 'Opération A' },
      { day: 15, date: '2024-04-15', title: 'Opération B' },
      { day: 20, date: '2024-04-20', title: 'Opération C' }
    );
  
    //Ajustement pour les années bissextiles
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      months[1].days.push(29); // Ajoute le 29 février
    }
  
    return months;
  };
  