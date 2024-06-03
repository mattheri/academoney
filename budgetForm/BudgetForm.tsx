'use client'
import { FormInput, FormSelectInput, Button, Form } from '@/common';
import { categories, frequence,  revenusDepenses } from './constants';
import { addBudgetEntry } from './actions';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/auth/context/UserContext';
import { getOptionsWithLabels, labelsFrancais, Option } from './services/budgetFormCategories';




// Définition du composant BudgetPage
export const BudgetForm: React.FC = () => {
  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState<number | null>(null);
   
  useEffect(() => {
    if (user && user.id) {
      const parsedId = parseInt(user.id, 10);
      if (!isNaN(parsedId)) {
        setUserId(parsedId);
      } else {
        console.error('User ID is not a valid number:', user.id);
      }
    } else {
      console.error('User or user ID is missing:', user);
    }
  }, [user]);

  
      if (userId === null) {
        return <div>Loading...</div>; // Affichez un indicateur de chargement ou un message approprié
      }

      const optionsRevenusDepensesFrancais: Option[] = getOptionsWithLabels(revenusDepenses, labelsFrancais);
    
    // Rendu du composant
    return (
       
        <div className=" bg-gray-500 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto">
            <Form action={addBudgetEntry}>
                <FormInput label="Date" type="date" name="startDate" />
                <FormInput label="Description" type="text" name="description" />
                <FormSelectInput options={categories} name="category" />
                <FormInput label="Montant" type="number" name="amount" />
                <FormSelectInput options={optionsRevenusDepensesFrancais} name="type" />
                <FormSelectInput options={frequence} name="frequency" />
                <FormInput type="hidden" name="id" value={userId} />

                <Button type="submit">Ajouter</Button>
            </Form>
        </div>
       
       
    );
};
   
