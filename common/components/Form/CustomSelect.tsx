import type { FC } from "react";

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: { [key: string]: string };
  className?: string; // Optional className prop
}

export const CustomSelect: FC<SelectProps> = ({
  id,
  name,
  label,
  options,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select
        id={id}
        name={name}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
      >
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
