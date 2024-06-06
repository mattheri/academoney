"use client";
import React, { useState } from "react";
import { ResultsTable } from "./components/TableauResultat";
import { CISaisie } from "./components/Saisie";
import { calculerVersementsHypothecaires } from "./services/logique";
import { ChartComponent } from "./components/Chart";

interface Versement {
  periode: number;
  versement: number;
  balance: number;
}

export const HypotCalculator: React.FC = () => {
  const [results, setResults] = useState<Versement[]>([]);

  const handleFormSubmit = (
    montantAchat: number,
    miseDeFonds: number,
    tauxAnnuel: number,
    dureeAnnees: number,
    unitMiseFonds: string,
    depositFrequency: string
  ) => {
    // Appelle la fonction de calcul
    const versements = calculerVersementsHypothecaires(
      montantAchat,
      miseDeFonds,
      tauxAnnuel,
      dureeAnnees,
      unitMiseFonds,
      depositFrequency
    );

    setResults(versements);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 bg-white">
        Calcul vVersements Hypotecaires
      </h1>
      <CISaisie onSubmit={handleFormSubmit} />
      <ResultsTable results={results} />
      <ChartComponent data={results} />
    </div>
  );
};
