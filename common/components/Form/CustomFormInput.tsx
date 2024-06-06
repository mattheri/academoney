import type { FC } from "react";

interface GenericInputProps {
  id: string;
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  labelClassName?: string;
  inputClassName?: string;
}

export const CustomFormInput: FC<GenericInputProps> = ({
  id,
  name,
  label,
  type,
  required = false,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={`block ${labelClassName}`}>
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className={`w-full mb-1 px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${inputClassName}`}
      />
    </div>
  );
};
