

// pages/index.tsx
'use client';
//Form event gere les entrées de formulaire
// use state gere l'état
//ChangeEvent reste aware des Changement/Event
import { useState, ChangeEvent, FormEvent } from 'react';

//la clef est un sting ex;  "6 mois" sa valeur est un nombre à virgul ex; "0.5" 
interface DureInvestissement {
  [key: string]: number;
}
//J'ai un probleme avec mon 3mois il functionne a caudition de revenir a son utilisation avec un click qui suite un click precedent d'importe quel autre (valeur de temps) comme si un changement étais imperatif
const tempsDinvestissement: DureInvestissement = {
  '3 mois': 0.25,
  '6 mois': 0.5,
  '1 an': 1,
  '2 ans': 2,  //ce que je veux cest que le ca se transorme en 24 en anné pour pas planter la frenqunce des paiement
  '3 ans': 3,
  '4 ans': 4,
  '5 ans': 5,
  '6 ans': 6,
  '7 ans': 7,
  '8 ans': 8,
  '9 ans': 9,
  '10 ans': 10,
};

// ***??? on peut mapaper avec ce genre de type de clef valeur sans problème ? ****

//***const Home: React.FC = () => {    *****  composant fonctionnel en React. je vais éventuelement sectionner cette page en plusieurs page tsx
const Home: React.FC = () => {
   //SET investissement de départ 
  const [initialInvestment, setInitialInvestment] = useState<string>('');
    //SET Le montent de dépot des dépot a intervale régulier
  const [regularDeposit, setRegularDeposit] = useState<string>('');
   //SET LA fréquence des dépot  *** !! dois setter un system de conversion pour les semaine aussi
  const [depositFrequency, setDepositFrequency] = useState<string>('Mois'); 
    //SET le tot d'interet  
  const [interestRate, setInterestRate] = useState<string>('');


  // Ca serait la frenqunce a la quel on calcul les interet
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>('Mois');  
  
  
  // Sur combien de temps
  const [investmentHorizon, setInvestmentHorizon] = useState<string>('Annualy');
  //Le setter dun résultat a afficher
  const [result, setResult] = useState<string>('');


   //Super cool on genre le changement "ChangeEvent" selon le cas lié au nom et on set le new value   PPP7171
  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'initialInvestment':    //nom ici   PPP7171 
        setInitialInvestment(value);  // la nouvelle valeur change   PPP7171
        break;
      case 'regularDeposit':
        setRegularDeposit(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
      case 'compoundingFrequency':
        setCompoundingFrequency(value);
        break;
      case 'investmentHorizon':
        setInvestmentHorizon(value);
        break;
    }
  };

  const calculateCompoundInterest = (event: FormEvent): void => {
    event.preventDefault();
    const principal = parseFloat(initialInvestment);
    const monthlyDeposit = parseFloat(regularDeposit);
    //Je dois Setté les semaine aussi
    const rate = parseFloat(interestRate) / 100;
    //s38222 Je rush avec ma terniere car mettre une terniere avec un 1 cest bien pour mettre un tot d'interet a l'année mais en réalité cette variable est indesirable car elle multiplie les versement régulier par un ce qui n'est pa
    //s38222 je vais 
    const timesCompounded = compoundingFrequency === 'Mois' ? 12 : 1;     //Interet calculé au moins ou a l'année?   *** RAPH ERRUR 2073PLP
    const periods = tempsDinvestissement[investmentHorizon] * timesCompounded;

    let balance = principal;
    let monthlyContribution = depositFrequency === 'Mois' ? monthlyDeposit : monthlyDeposit * 4; // Approximation pour conversion hebdomadaire en mensuel
      //*** RAPH ERRUR 2073PLP Literation peut sarreter quand on met a anualy aprend 6 boucle par exemple si on set annualy disont sur 4ans pour les interet mais ca cause l'arret de paiement regulier les interet se comprte pu par dessus le marche.. */
    for (let i = 0; i < periods; i++) {
      balance += monthlyContribution; // Ajouter le dépôt à chaque période, indépendamment des intérêts
      if (i % 12 === 0 && compoundingFrequency === 'Annually') { // Appliquer les intérêts une fois par an
        balance *= 1 + rate;
      } else if (compoundingFrequency === 'Mois') {
        balance *= 1 + rate / timesCompounded;
      }
    }

    setResult(`Future Value: $${balance.toFixed(2)}`);
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
            checked={depositFrequency === 'weekly'}
            onChange={() => setDepositFrequency('weekly')}
          /> Weekly
          <input
            type="radio"
            name="depositFrequency"
            checked={depositFrequency === 'Mois'}
            onChange={() => setDepositFrequency('Mois')}
          /> Mois
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
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <button type="submit">Calculate</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Home;
