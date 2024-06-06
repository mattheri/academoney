"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface DureInvestissement {
  [key: string]: number;
}

const tempsDinvestissement: DureInvestissement = {
  "3 mois": 0.25,
  "6 mois": 0.5,
  "1 an": 1,
  "2 ans": 2, 
  "4 ans": 4,
  "5 ans": 5,
  "6 ans": 6,
  "7 ans": 7,
  "8 ans": 8,
  "9 ans": 9,
  "10 ans": 10,
};

const Home: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<string>("");
  const [regularDeposit, setRegularDeposit] = useState<string>("");
  const [depositFrequency, setDepositFrequency] = useState<string>("Mois");
  const [interestRate, setInterestRate] = useState<string>("");
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("Mois");
  const [investmentHorizon, setInvestmentHorizon] = useState<string>("Annually");                             
  const [result, setResult] = useState<string>(""); 

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "initialInvestment": // nom ici
        setInitialInvestment(value); // la nouvelle valeur change
        break;
      case "regularDeposit":
        setRegularDeposit(value);
        break;
      case "interestRate":
        setInterestRate(value);
        break;
      case "compoundingFrequency":
        setCompoundingFrequency(value);
        break;
      case "investmentHorizon":
        setInvestmentHorizon(value);
        break;
    }
  };

  function calculateCapital(
    initialCapital: number,
    term: number,
    periodicContribution: number,
    normalizedInterestRate: number
  ): number[] {
    const capitalValues: number[] = [];
    let capital = initialCapital;

    for (let i = 0; i <= term; i++) {
      capitalValues.push(capital);
      capital *= 1 + normalizedInterestRate;
      capital += periodicContribution;
    }
    return capitalValues;
  }

  function calculateInterestRate(
    annualInterestRate: number, // %
    depositFrequency: string, // Fréquence des dépôts
    compoundingFrequency: string // INT au mois ou à l'année
  ): number {
    let interestRate: number;
    if (depositFrequency === "weekly") {
      interestRate = annualInterestRate / 52; // Taux d'intérêt hebdomadaire
    } else {
      // "monthly"
      interestRate = annualInterestRate / 12; // Taux d'intérêt mensuel
    }
    if (compoundingFrequency === "monthly") {
      interestRate /= 12; // Taux d'intérêt mensuel
    }
    return interestRate;
  }

  function OriginalFormule(
    principal: number, // capital de départ
    depositFrequency: string, // fréquence de dépôt  etc
    monthlyDeposit: number,
    periods: number,
    compoundingFrequency: string,
    rate: number,
    timesCompounded: number
  ) {
    let balance = principal;
    let monthlyContribution =
      depositFrequency === "Mois" ? monthlyDeposit : monthlyDeposit * 4; // Approximation pour conversion hebdomadaire en mensuel

    for (let i = 0; i < periods; i++) {
      balance += monthlyContribution; // Ajouter le dépôt à chaque période, indépendamment des intérêts
      if (i % 12 === 0 && compoundingFrequency === "Annually") {
        // Appliquer les intérêts une fois par an
        balance *= (1 + rate); 
      } else if (compoundingFrequency === "Mois") {
        balance *= 1 + rate / timesCompounded;
      }
    }
    return balance;
  }

  const calculateCompoundInterest = (event: FormEvent): void => {
    event.preventDefault();
    const principal = parseFloat(initialInvestment);
    const monthlyDeposit = parseFloat(regularDeposit);
    const rate = parseFloat(interestRate) / 100;
    const timesCompounded = compoundingFrequency === "Mois" ? 12 : 1; // Intérêt calculé au mois ou à l'année?
    const periods = tempsDinvestissement[investmentHorizon] * timesCompounded;

    let balance = OriginalFormule(
      principal,
      depositFrequency,
      monthlyDeposit,
      periods,
      compoundingFrequency,
      rate,
      timesCompounded
    );

    const normalizedInterestRate = calculateInterestRate(
      rate,
      depositFrequency,
      compoundingFrequency
    );

    const normalizedPeriods =
      tempsDinvestissement[investmentHorizon] *
      (depositFrequency === "weekly" ? 52 : 12);

    balance = calculateCapital(
      principal,
      normalizedPeriods,
      monthlyDeposit,
      normalizedInterestRate
    ).slice(-1)[0];
    setResult(`Future Value version 2: $${balance.toFixed(2)}`);
  };

  return (
    <div className="back mt-24 p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center text-2xl font-bold text-blue-900">Compound Interest Calculator</h1>
      <form onSubmit={calculateCompoundInterest} className="space-y-4">
        <input
          type="number"
          name="initialInvestment"
          value={initialInvestment}
          onChange={handleInputChange}
          placeholder="Initial Investment"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="regularDeposit"
          value={regularDeposit}
          onChange={handleInputChange}
          placeholder="Regular Deposit"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="depositFrequency"
              checked={depositFrequency === "weekly"}
              onChange={() => setDepositFrequency("weekly")}
              className="mr-2"
            />{" "}
            Weekly
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="depositFrequency"
              checked={depositFrequency === "Mois"}
              onChange={() => setDepositFrequency("Mois")}
              className="mr-2"
            />{" "}
            Mois
          </label>
        </div>
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={handleInputChange}
          placeholder="Interest Rate (%)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <select
          name="compoundingFrequency"
          value={compoundingFrequency}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Mois">Mois</option>
          <option value="annually">Annually</option>
        </select>
        <select
          name="investmentHorizon"
          value={investmentHorizon}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {Object.keys(tempsDinvestissement).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <button type="submit" className="w-full p-2 bg-blue-900 text-white rounded">
          Calculate
        </button>
      </form>
      <div className="mt-4 text-lg">{result}</div>
    </div>
  );
};

export default Home;
