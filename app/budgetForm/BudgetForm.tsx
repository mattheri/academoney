import { FormInput, FormSelectInput, Button, Form } from '@/common';
import { categories, revenusDepenses } from './constants';
import appConstants from "@/contants";

 const abc = () => {
    console.log("appConstants.API_URL: ", appConstants.API_URL);
    console.log("appConstants.USER_ID_COOKIE: ", appConstants.USER_ID_COOKIE);
    console.log("appConstants.PASSTHROUGH_SECRET: ", appConstants.PASSTHROUGH_SECRET);
    console.log("appConstants.PASSTHROUGH_QUERY_PARAM: ", appConstants.PASSTHROUGH_QUERY_PARAM);
 }


// Définition du composant BudgetPage
export const BudgetForm: React.FC = () => {

    abc();
    
    // Rendu du composant
    return (
       
        <div className=" bg-gray-500 flex flex-col justify-center sm:p-5 m-20 w-1/2 mx-auto">
            <Form>
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
   
