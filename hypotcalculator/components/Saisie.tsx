import React from "react";
import {
  FormInput,
  FormSelectInput,
  Button,
  Form,
  CustomSelect,
  CustomFormInput,
} from "@/common";

import { frequencyDictionary, unitMiseFonds } from "../constants";

interface InputFormProps {
  onSubmit: (
    montantAchat: number,
    miseDeFonds: number,
    tauxAnnuel: number,
    dureeAnnees: number,
    unitMiseFonds: string,
    depositFrequency: string
  ) => void;
}

export const CISaisie: React.FC<InputFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire (à adapter selon tes noms d'input)
    const montantAchat = parseFloat(
      (e.currentTarget.elements.namedItem("montantAchat") as HTMLInputElement)
        .value
    );
    const miseDeFonds = parseFloat(
      (e.currentTarget.elements.namedItem("miseDeFonds") as HTMLInputElement)
        .value
    );
    const tauxAnnuel = parseFloat(
      (e.currentTarget.elements.namedItem("tauxAnnuel") as HTMLInputElement)
        .value
    );
    const dureeAnnees = parseFloat(
      (e.currentTarget.elements.namedItem("dureeAnnees") as HTMLInputElement)
        .value
    );
    const unitMiseFonds = (
      e.currentTarget.elements.namedItem("unitMiseFonds") as HTMLInputElement
    ).value;
    const depositFrequency = (
      e.currentTarget.elements.namedItem(
        "frequenceVersements"
      ) as HTMLInputElement
    ).value;

    onSubmit(
      montantAchat,
      miseDeFonds,
      tauxAnnuel,
      dureeAnnees,
      unitMiseFonds,
      depositFrequency
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <CustomFormInput
          id="montantAchat"
          name="montantAchat"
          type="number"
          label="Coût de la propriété"
          required
          labelClassName="text-sm font-medium text-gray-700"
          inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <CustomFormInput
            id="miseDeFonds"
            name="miseDeFonds"
            label="Mise de fonds"
            type="number"
            required
            labelClassName="text-sm font-medium text-gray-700"
            inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
          />
        </div>
        <div className="w-1/2">
          <CustomSelect
            id="unitMiseFonds"
            name="unitMiseFonds"
            label="$ / %"
            options={unitMiseFonds}
            className="bg-gray-200" // Custom class name
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <CustomFormInput
            id="tauxAnnuel"
            name="tauxAnnuel"
            label="Taux d'intérêt"
            type="number"
            required
            labelClassName="text-sm font-medium text-gray-700"
            inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
          />
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="w-1/2">
          <CustomFormInput
            id="dureeAnnees"
            name="dureeAnnees"
            label="Amortissement (ans)"
            type="number"
            required
            labelClassName="text-sm font-medium text-gray-700"
            inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
          />
        </div>
        <div className="w-1/2">
          <CustomSelect
            id="frequenceVersements"
            name="frequenceVersements"
            label="Frequence des versements"
            options={frequencyDictionary}
            className="bg-gray-200" // Custom class name
          />
        </div>
      </div>
      <button
        type="submit"
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Calculer
      </button>
    </form>
  );
};
