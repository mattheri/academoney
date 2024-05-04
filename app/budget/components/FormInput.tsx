import React from 'react';
import { useState, ChangeEvent } from 'react';

// Définition des types de props du composant
interface FormInputProps {
    label: string;
    type: string;
    options?: string[];
    onSubmit: (value: any) => void; // Fonction de soumission du formulaire
    onCancel: () => void; // Fonction d'annulation du formulaire
}

// Définition du composant avec ses props
const FormInput: React.FC<FormInputProps> = ({ label, type, options }) =>  {
    // Déclaration de l'état 
    const [value, setValue] = useState<string>('');

    // Fonction de gestion du changement de la valeur du champ
    const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
      };

   


  // rendu du composant
  return (
    <div className="FormInput mb-4">
        <label className="block p-1 text-gray-700">{label}</label>
        {type === 'select' ? (
            <select value={value} onChange={onChange} className="w-full mt-1 block p-1  border-gray-300 shadow-sm rounded-md focus:border-blue-500 focus:ring">
            {options && options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
            </select>
        ) : (
            <input
                type={type} 
                value={value}
                onChange={(type === 'checkbox' || type === 'radio') ? onChange : (e) => setValue(e.target.value)}
                className="w-full mt-1 block p-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring"
            />
        )}

        
    </div>
  );
};

export default FormInput