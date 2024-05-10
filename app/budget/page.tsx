"use client"

import { FormInput, FormSelectInput, Button, Form } from '@/common';
import { categories, revenusDepenses } from '@/common/constants';

// Définition du composant BudgetPage
const BudgetPage: React.FC = () => {
  

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulaire soumis");
  };

 
  // Rendu du composant
  return (
    
      <div className=" bg-gray-500 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto">
        <Form onSubmit={handleSubmit}>
          <FormInput label="Date" type="date" />
          <FormInput label="Description" type="text" />
          <FormSelectInput options={categories} />
          <FormInput label="Montant" type="number" />
          <FormSelectInput options={revenusDepenses} />
          <Button type="submit">Ajouter</Button>
        </Form>
      </div>
    
    
  );
};

export default BudgetPage;
