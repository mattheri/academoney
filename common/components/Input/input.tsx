import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = ({ id, type, autoComplete, placeholder, error, ...rest }: Props) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        {...rest}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
