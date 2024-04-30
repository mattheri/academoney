// components/Input.tsx
"use client"; // Utilisation du client-side rendering pour ce composant
import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Création du composant Input pour réutiliser les styles
const Input = ({ id, type, autoComplete, placeholder, value, onChange }: InputProps) => {
  return (
    // Utilisation d'uncontrolled inputs pour une meilleure compatibilité avec le server-side rendering
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={autoComplete}
      required
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;