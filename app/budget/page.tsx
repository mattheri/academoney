"use client"

import { FormInput, FormSelectInput, Button, Form } from '@/common';

// Définition du composant BudgetPage
const BudgetPage: React.FC = () => {
  // Définition des catégories pour le champ select catégorie
  const categories = [
    "Catégories",
    "Habitation",
    "Alimentation",
    "Télécomunications",
    "Éducation",
    "Soins personnels",
    "Épargne",
    "Vêtements",
    "Loisirs",
    "Autres",
  ];

  const revenusDepenses = ['Revenu',
                           'Dépense'
  ];


  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulaire soumis");
  };

 /* // Fonction d'annulation du formulaire
  const handleCancel = () => {
    console.log("Formulaire annulé !");
  };*/

  // Rendu du composant
  return (
    
      <div className=" bg-gray-50 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto ">
        <form onSubmit={handleSubmit}>
          <FormInput label="Date" type="date" />
          <FormInput label="Description" type="text" />
          <FormSelectInput options={categories} />
          <FormInput label="Montant" type="number" />
          <FormSelectInput options={revenusDepenses} />
          <Button type="submit">Ajouter</Button>
        </form>
      </div>
    
    
  );
};

export default BudgetPage;
