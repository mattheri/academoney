import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

// Création du composant Input pour réutiliser les styles
const Input = ({ id, type, autoComplete, placeholder }: Props) => {
  return (
    <input
      id={id}
      type={type}
      autoComplete={autoComplete}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;