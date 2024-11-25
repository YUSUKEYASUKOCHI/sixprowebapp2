import React from 'react';

interface CalorieInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const CalorieInput: React.FC<CalorieInputProps> = ({
  value,
  onChange,
  min = 500,
  max = 5000
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter calories"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        kcal
      </span>
    </div>
  );
}