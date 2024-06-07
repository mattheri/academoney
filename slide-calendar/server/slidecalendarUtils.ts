
export type Operation = {
  day: number;
  date: string;
  title: string;
};

export type Month = {
  name: string;
  days: number[];
  operations: Operation[];
  weeks: number[]; // Ajout d'un tableau pour les semaines
};

const generateOperations = (daysInMonth: number, year: number, month: number): Operation[] => {
  const operations: Operation[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    if (Math.random() > 0.5) { // Ajout des opérations de manière aléatoire
      operations.push({
        day,
        date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
        title: `Opération du ${day}/${month}/${year}`,
      });
    }
  }
  return operations;
};

const getWeekNumber = (date: Date): number => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
  return weekNumber;
};

const generateWeeks = (daysInMonth: number, year: number, month: number): number[] => {
  const weeks: number[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    weeks.push(getWeekNumber(date));
  }
  return weeks;
};

export const generateCalendar = (year: number): Month[] => {
  const months: Month[] = [
    { name: 'Janvier', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 1), weeks: generateWeeks(31, year, 1) },
    { name: 'Février', days: Array.from({ length: 28 }, (_, i) => i + 1), operations: generateOperations(28, year, 2), weeks: generateWeeks(28, year, 2) },
    { name: 'Mars', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 3), weeks: generateWeeks(31, year, 3) },
    { name: 'Avril', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: generateOperations(30, year, 4), weeks: generateWeeks(30, year, 4) },
    { name: 'Mai', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 5), weeks: generateWeeks(31, year, 5) },
    { name: 'Juin', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: generateOperations(30, year, 6), weeks: generateWeeks(30, year, 6) },
    { name: 'Juillet', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 7), weeks: generateWeeks(31, year, 7) },
    { name: 'Août', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 8), weeks: generateWeeks(31, year, 8) },
    { name: 'Septembre', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: generateOperations(30, year, 9), weeks: generateWeeks(30, year, 9) },
    { name: 'Octobre', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 10), weeks: generateWeeks(31, year, 10) },
    { name: 'Novembre', days: Array.from({ length: 30 }, (_, i) => i + 1), operations: generateOperations(30, year, 11), weeks: generateWeeks(30, year, 11) },
    { name: 'Décembre', days: Array.from({ length: 31 }, (_, i) => i + 1), operations: generateOperations(31, year, 12), weeks: generateWeeks(31, year, 12) },
  ];

  // Ajuster pour les années bissextiles
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    months[1].days.push(29); // Ajoute le 29 février
    months[1].operations = generateOperations(29, year, 2);
    months[1].weeks = generateWeeks(29, year, 2);
  }

  return months;
};
