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


  // Fonction de soumission du formulaire
  const handleSubmit = (value: any) => {
    console.log("Formulaire soumis avec la valeur:", value);
  };

  // Fonction d'annulation du formulaire
  const handleCancel = () => {
    console.log("Formulaire annulé !");
  };

  // Rendu du composant
  return (
    <div className=' bg-gray-50 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto '>
      <FormInput label="Date" type="date" onSubmit={handleSubmit} onCancel={handleCancel} />
      <FormInput label="Description" type="text" onSubmit={handleSubmit} onCancel={handleCancel}/>
      <FormInput label="" type="select" options={categories} onSubmit={handleSubmit} onCancel={handleCancel}/>
      <FormInput label="" type="select" options={revenusDepenses} onSubmit={handleSubmit} onCancel={handleCancel}/>
      <FormInput label="Montant" type="number" onSubmit={handleSubmit} onCancel={handleCancel}/>

      {/* Boutons de soumission et d'annulation */}
      <div className="flex justify-end mt-4">
        <button onClick={handleSubmit} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md">Soumettre</button>
        <button onClick={handleCancel} className="bg-gray-300 px-4 py-2 rounded-md">Annuler</button>
      </div>
    </div>
  );
};

export default BudgetPage;
