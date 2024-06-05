"use client";
// Form event gère les entrées de formulaire
// useState gère l'état
// ChangeEvent reste aware des changements/événements
import { useState, ChangeEvent, FormEvent } from "react";

// La clé est un string ex: "6 mois", sa valeur est un nombre à virgule ex: "0.5"
interface DureInvestissement {
  [key: string]: number;
}

// J'ai un problème avec mon 3 mois. Il fonctionne à condition de revenir à son utilisation avec un clic qui suit un clic précédent d'importe quelle autre (valeur de temps) comme si un changement était impératif.
const tempsDinvestissement: DureInvestissement = {
  "3 mois": 0.25,
  "6 mois": 0.5,
  "1 an": 1,
  "2 ans": 2, // ce que je veux, c'est que ça se transforme en 24 en années pour ne pas planter la fréquence des paiements
  "3 ans": 3,
  "4 ans": 4,
  "5 ans": 5,
  "6 ans": 6,
  "7 ans": 7,
  "8 ans": 8,
  "9 ans": 9,
  "10 ans": 10,
};

// *** On peut mapper avec ce genre de type de clé-valeur sans problème ? ***

// *** const Home: React.FC = () => { ***** composant fonctionnel en React. je vais éventuellement sectionner cette page en plusieurs pages tsx
const Home: React.FC = () => {
  // SET investissement de départ
  const [initialInvestment, setInitialInvestment] = useState<string>("");
  // SET le montant de dépôt à intervalle régulier
  const [regularDeposit, setRegularDeposit] = useState<string>("");
  // SET la fréquence des dépôts *** !! doit setter un système de conversion pour les semaines aussi
  const [depositFrequency, setDepositFrequency] = useState<string>("Mois");
  // SET le taux d'intérêt
  const [interestRate, setInterestRate] = useState<string>("");

  // Ça serait la fréquence à laquelle on calcule les intérêts
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("Mois");

  // Sur combien de temps
  const [investmentHorizon, setInvestmentHorizon] = useState<string>("Annually");
  // Le setter d'un résultat à afficher
  const [result, setResult] = useState<string>(""); // result1
  const [result2, setResult2] = useState<string>(""); // WILL PRIVATE AGENT 007

  // Super cool on gère le changement "ChangeEvent" selon le cas lié au nom et on set la nouvelle valeur
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

  // Will way
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
    depositFrequency: string, // fréquence de dépôt
    monthlyDeposit: number,
    periods: number,
    compoundingFrequency: string,
    rate: number,
    timesCompounded: number
  ) {
    let balance = principal;
    let monthlyContribution =
      depositFrequency === "Mois" ? monthlyDeposit : monthlyDeposit * 4; // Approximation pour conversion hebdomadaire en mensuel

    // *** RAPH ERREUR 2073PLP L'itération peut s'arrêter quand on met à annuellement après 6 boucles par exemple si on set annuellement disons sur 4 ans pour les intérêts mais ça cause l'arrêt de paiement régulier les intérêts se comportent plus par-dessus le marché...
    for (let i = 0; i < periods; i++) {
      balance += monthlyContribution; // Ajouter le dépôt à chaque période, indépendamment des intérêts
      if (i % 12 === 0 && compoundingFrequency === "Annually") {
        // Appliquer les intérêts une fois par an
        balance *= (1 + rate); // RAPH je pensais avoir trouvé mon erreur à cause de priorité d'opération snif sniff
      } else if (compoundingFrequency === "Mois") {
        balance *= 1 + rate / timesCompounded;
      }
    }
    return balance;
  }

  // Vois semble indiquer que cette formule "calculateCompoundInterest" ne retourne rien, elle est plutôt un gestionnaire d'état
  const calculateCompoundInterest = (event: FormEvent): void => {
    event.preventDefault();
    const principal = parseFloat(initialInvestment);
    const monthlyDeposit = parseFloat(regularDeposit);
    // Je dois setter les semaines aussi
    const rate = parseFloat(interestRate) / 100;
    // Je rush avec ma dernière car mettre une ternaire avec un 1 c'est bien pour mettre un taux d'intérêt à l'année mais en réalité cette variable est indésirable car elle multiplie les versements réguliers par un ce qui n'est pas...
    const timesCompounded = compoundingFrequency === "Mois" ? 12 : 1; // Intérêt calculé au mois ou à l'année? *** RAPH ERREUR 2073PLP
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

    // setResult(`Future Value: $${balance.toFixed(2)}`); // result1 Raph old version

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
    setResult2(`Future Value version 2: $${balance.toFixed(2)}`);
  };

  return (
    <div>
      <h1>Compound Interest Calculator</h1>
      <form onSubmit={calculateCompoundInterest}>
        <input
          type="number"
          name="initialInvestment"
          value={initialInvestment}
          onChange={handleInputChange}
          placeholder="Initial Investment"
        />
        <input
          type="number"
          name="regularDeposit"
          value={regularDeposit}
          onChange={handleInputChange}
          placeholder="Regular Deposit"
        />
        <div>
          <input
            type="radio"
            name="depositFrequency"
            checked={depositFrequency === "weekly"}
            onChange={() => setDepositFrequency("weekly")}
          />{" "}
          Weekly
          <input
            type="radio"
            name="depositFrequency"
            checked={depositFrequency === "Mois"}
            onChange={() => setDepositFrequency("Mois")}
          />{" "}
          Mois
        </div>
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={handleInputChange}
          placeholder="Interest Rate (%)"
        />
        <select
          name="compoundingFrequency"
          value={compoundingFrequency}
          onChange={handleInputChange}
        >
          <option value="Mois">Mois</option>
          <option value="annually">Annually</option>
        </select>
        <select
          name="investmentHorizon"
          value={investmentHorizon}
          onChange={handleInputChange}
        >
          {Object.keys(tempsDinvestissement).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <button type="submit">Calculate</button>
      </form>
      {/* <div>{result}</div> */} {/* result1 */}
      <div>{result2}</div>
    </div>
  );
};

export default Home;
