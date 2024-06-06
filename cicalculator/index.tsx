"use client";
import React, { useState } from "react";
import { ResultsTable } from "./components/TableauResultat";
import { CISaisie } from "./components/Saisie";
import { calculateFutureValues } from "./services/logique";
import { ChartComponent } from "./components/Chart";

export const CICalculator: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);

  const handleFormSubmit = (
    placementInitial: number,
    versementsReguliers: number,
    tauxInteret: number,
    horizonPlacement: number,
    unitHorizon: string,
    depositFrequency: string,
    compoundingFrequency: string
  ) => {
    // Appelle la fonction de calcul
    const futureValues = calculateFutureValues(
      placementInitial,
      versementsReguliers,
      tauxInteret,
      horizonPlacement,
      unitHorizon,
      depositFrequency,
      compoundingFrequency
    );

    setResults(futureValues);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 bg-white">
        Calcul des intérêts composés
      </h1>
      <CISaisie onSubmit={handleFormSubmit} />
      <ResultsTable results={results} />
      <ChartComponent data={results} />
    </div>
  );
};
