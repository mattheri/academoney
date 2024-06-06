import React from "react";
import {
  FormInput,
  FormSelectInput,
  Button,
  Form,
  CustomSelect,
  CustomFormInput,
} from "@/common";

import {
  frequencyDictionary,
  unitHorizonDictionry,
  compoundingFrequencyDictionary,
} from "../constants";

interface InputFormProps {
  onSubmit: (
    nplacementInitial: number,
    versementsReguliers: number,
    tauxInteret: number,
    horizonPlacement: number,
    unithorizon: string,
    depositFrequency: string,
    compoundingFrequency: string
  ) => void;
}

export const CISaisie: React.FC<InputFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire (à adapter selon tes noms d'input)
    const placementInitial = parseFloat(
      (
        e.currentTarget.elements.namedItem(
          "placementInitial"
        ) as HTMLInputElement
      ).value
    );
    const versementsReguliers = parseFloat(
      (
        e.currentTarget.elements.namedItem(
          "versementsReguliers"
        ) as HTMLInputElement
      ).value
    );
    const tauxInteret = parseFloat(
      (e.currentTarget.elements.namedItem("tauxInteret") as HTMLInputElement)
        .value
    );
    const horizonPlacement = parseFloat(
      (
        e.currentTarget.elements.namedItem(
          "horizonPlacement"
        ) as HTMLInputElement
      ).value
    );
    const unitHorizon = (
      e.currentTarget.elements.namedItem("unitHorizon") as HTMLInputElement
    ).value;

    const depositFrequency = (
      e.currentTarget.elements.namedItem(
        "frequenceVersements"
      ) as HTMLInputElement
    ).value;

    const compoundingFrequency = (
      e.currentTarget.elements.namedItem(
        "compoundingFrequency"
      ) as HTMLInputElement
    ).value;

    onSubmit(
      placementInitial,
      versementsReguliers,
      tauxInteret,
      horizonPlacement,
      unitHorizon,
      depositFrequency,
      compoundingFrequency
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <CustomFormInput
          id="placementInitial"
          name="placementInitial"
          type="number"
          label="Placement initial"
          required
          labelClassName="text-sm font-medium text-gray-700"
          inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <CustomFormInput
            id="versementsReguliers"
            name="versementsReguliers"
            label="Versements réguliers"
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
      <div className="flex space-x-4">
        <div className="w-1/2">
          <CustomFormInput
            id="tauxInteret"
            name="tauxInteret"
            label="Taux d'intérêt"
            type="number"
            required
            labelClassName="text-sm font-medium text-gray-700"
            inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
          />
        </div>
        <div className="w-1/2">
          <CustomSelect
            id="compoundingFrequency"
            name="compoundingFrequency"
            label="Calcul des interets"
            options={compoundingFrequencyDictionary}
            className="bg-gray-200" // Custom class name
          />
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="w-1/2">
          <CustomFormInput
            id="horizonPlacement"
            name="horizonPlacement"
            label="Horizon de placement"
            type="number"
            required
            labelClassName="text-sm font-medium text-gray-700"
            inputClassName="mt-1 border border-gray-300 rounded-md shadow-sm bg-gray-200"
          />
        </div>
        <div className="w-1/2">
          <CustomSelect
            id="unitHorizon"
            name="unitHorizon"
            label="Unité de temps"
            options={unitHorizonDictionry}
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
