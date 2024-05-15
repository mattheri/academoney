import { ChangeEvent } from "react";

type InputProps = {
  id: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string; 
}

const TextInput = ({
  id,
  type = "text", 
  autoComplete = "off", 
  placeholder = "",
  value,
  onChange,
  label, 
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">{label}</label> 
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
    </>
  );
};

export default TextInput;
