//import { useState } from 'react';
import type { FC, InputHTMLAttributes, ChangeEvent } from 'react';



// Définition des types de props du composant
type Props = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    type?: 'select' | InputHTMLAttributes<HTMLInputElement>["type"];
    options?: string[];
}

// Définition du composant avec ses props
const FormInput: FC<Props> = ({ label, type='text', options }) =>  {
    // Déclaration de l'état 
    //const [value, setValue] = useState<string>('');

    // Fonction de gestion du changement de la valeur du champ
    /*const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
       setValue(event.target.value);
    };*/


  // rendu du composant
  return (
    <div className="FormInput mb-4">
        <label className="block p-1 text-gray-700">{label}</label>
        {type === 'select' ? (
                <select value={value} /*onChange={onChange}*/ className="w-full mt-1 block p-1  border-gray-300 shadow-sm rounded-md focus:border-blue-500 focus:ring">
                    {options?.map((option) => {
                        return typeof option === "string" ?
                        <option key={option} value={option}>{option}</option> : <option key={option.value} value={option.value}>{option.label}</option>
                        }
                    )}
                </select>
            )
        } 
    </div>
  );
};
//className="w-full mt-1 block p-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring"
export default FormInput
