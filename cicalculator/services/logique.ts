import {
  compoundInterestPerPeriod,
  mortgageCalculator,
} from "@jdizm/finance-calculator";

function calculateCapital(
  initialCapital: number,
  term: number,
  periodicContribution: number,
  normalizedInterestRate: number,
  compoundingFrequency: string,
  depositFrequency: string
): number[] {
  const capitalValues: number[] = [];
  let capital = initialCapital;
  capitalValues.push(capital);
  for (let i = 1; i <= term + 1; i++) {
    if (
      compoundingFrequency === "year" &&
      i % (depositFrequency === "monthly" ? 12 : 52) === 0
    ) {
      capital *= 1 + normalizedInterestRate;
    } else if (
      compoundingFrequency === "month" &&
      i % (depositFrequency === "monthly" ? 1 : 4) === 0
    ) {
      capital *= 1 + normalizedInterestRate / 12;
    } else {
      capital *= 1 + normalizedInterestRate / 52;
    }

    capital += periodicContribution;
    capitalValues.push(capital);
  }

  return capitalValues;
}

function calculatePeriods(
  period: number,
  unithorizon: string,
  depositFrequency: string
): number {
  const weeksPerYear = 52; // Nombre de semaines dans une année
  const monthsPerYear = 12; // Nombre de semaines dans une année
  const weeksPerMonth = weeksPerYear / monthsPerYear; // Nombre moyen de semaines dans un mois
  let normalizedPeriods: number = 0;
  if (unithorizon === "months") {
    if (depositFrequency === "monthly") {
      normalizedPeriods = period;
    } else if (depositFrequency === "weekly") {
      normalizedPeriods = period * weeksPerMonth;
    }
  } else {
    if (depositFrequency === "monthly") {
      normalizedPeriods = period * monthsPerYear;
    } else if (depositFrequency === "weekly") {
      normalizedPeriods = period * weeksPerYear;
    }
  }

  return Math.round(normalizedPeriods); // Arrondir au nombre entier le plus proche
}

function calculateFutureValues(
  principal: number,
  contribuition: number,
  interestRate: number,
  period: number,
  unithorizon: string,
  depositFrequency: string,
  compoundingFrequency: string
): string[] {
  const futureValues: string[] = [];

  const normalizedInterestRate = interestRate / 100;

  const normalizedPeriods = calculatePeriods(
    period,
    unithorizon,
    depositFrequency
  );
  const result = calculateCapital(
    principal,
    normalizedPeriods,
    contribuition,
    normalizedInterestRate,
    compoundingFrequency,
    depositFrequency
  );

  for (let i = 0; i <= normalizedPeriods; i++) {
    futureValues.push(i + " " + result[i].toFixed(2));
  }
  return futureValues;
}

export { calculateFutureValues };
