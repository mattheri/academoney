"use client";
import React from 'react';
import FormInput from './components/FormInput';

// Définition du composant BudgetPage
const BudgetPage: React.FC = () => {

  // Définition des catégories pour le champ select catégorie
  const categories = ['Catégories',
                      'Habitation',
                      'Alimentation',
                      'Télécomunications',
                      'Éducation',
                      'Soins personnels',
                      'Épargne',
                      'Vêtements',
                      'Loisirs',    
                      'Salaire',
                      'Prestations',
                      'Indemnisations',
                      'Remboursements',
                      'Bourses',
                      'Autres'];

  const revenusDepenses = ['Revenu',
                           'Dépense'
  ];

  // Rendu du composant
  return (
    <div className=' bg-gray-50 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto '>
      <FormInput label="Date" type="date" />
      <FormInput label="Description" type="text" />
      <FormInput label="" type="select" options={categories} />
      <FormInput label="" type="select" options={revenusDepenses} />
      <FormInput label="Montant" type="number" />
    </div>
  );
};

export default BudgetPage;