"use client";

import React, { useState, FormEvent } from 'react';

const VersementsHypothecairesPage = () => {
  const [cout, setCout] = useState('');
  const [MiseFond, setMiseFond] = useState('');
  const [Montant, setMontant] = useState('');
  const [Taux, setTaux] = useState('');
  const [Amortissement, setAmortissement] = useState('');
  const [Frequence, setFrequence] = useState('');
  const [MontantVersement, setMontantVersement] = useState('');

  const calculateMonthlyPayment = (principal, annualInterestRate, years) => {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const principal = parseFloat(Montant);
    const annualInterestRate = parseFloat(Taux);
    const years = parseFloat(Amortissement);

    if (!isNaN(principal) && !isNaN(annualInterestRate) && !isNaN(years)) {
      const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, years);
      setMontantVersement(monthlyPayment.toFixed(2));
      console.log(`Montant des versements mensuels: ${monthlyPayment.toFixed(2)}`);
    } else {
      console.error('Veuillez entrer des valeurs valides.');
    }
  };

  return (
    <div>
      <div className="w-2/3 my-6 mx-auto">
        <div>
          <h2 className="w-2/3 py-6 text-center">Versements Hypothécaires</h2> 
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="cout" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Coût des études
              </label>
              <input
                type="text"
                id="cout"
                value={cout}
                onChange={(e) => setCout(e.target.value)}
                required 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="MiseFond" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mise de fond
              </label>
              <input
                type="text"
                id="MiseFond"
                value={MiseFond}
                onChange={(e) => setMiseFond(e.target.value)}
                required 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="Montant" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Montant de l'emprunt
              </label>
              <input
                type="text"
                id="Montant"
                value={Montant}
                onChange={(e) => setMontant(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="Taux" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Taux d'intérêt
              </label>
              <input
                type="text"
                id="Taux"
                value={Taux}
                onChange={(e) => setTaux(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="Amortissement" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amortissement
              </label>
              <input
                type="text"
                id="Amortissement"
                value={Amortissement}
                onChange={(e) => setAmortissement(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="Frequence" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Fréquence des versements
              </label>
              <input
                type="text"
                id="Frequence"
                value={Frequence}
                onChange={(e) => setFrequence(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Calculer
            </button>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label htmlFor="MontantVersement" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Montant des versements
              </label>
              <input
                type="text"
                id="MontantVersement"
                value={MontantVersement}
                readOnly 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
              Tableau des versements mensuels
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VersementsHypothecairesPage;
