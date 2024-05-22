import { FormInput, FormSelectInput, Button, Form } from '@/common';
import { categories, revenusDepenses } from './constants';
import { addBudgetEntry } from './actions';
import type { BudgetEntry } from "./budget";

type Props = {
    id: BudgetEntry["id"];
}
// Définition du composant BudgetPage
export const BudgetForm: React.FC<Props>= ({id}) => {
   
    
    // Rendu du composant
    return (
       
        <div className=" bg-gray-500 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto">
            <Form action={addBudgetEntry}>
                <FormInput label="Date" type="date" />
                <FormInput label="Description" type="text" />
                <FormSelectInput options={categories} />
                <FormInput label="Montant" type="number" />
                <FormSelectInput options={revenusDepenses} />
                <FormInput type="hidden" name="id" value={id} />

                <Button type="submit">Ajouter</Button>
            </Form>
        </div>
       
       
    );
};
   
