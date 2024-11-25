import React from 'react';

interface DayTabsProps {
  days: string[];
  selectedDay: number;
  onSelect: (index: number) => void;
}

export default function DayTabs({ days, selectedDay, onSelect }: DayTabsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => onSelect(index)}
            className={`
              flex-1 min-w-[4rem] py-3 px-4 rounded-xl transition-all text-[16px] font-medium
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007AFF]
              ${selectedDay === index 
                ? 'bg-gray-900 text-white shadow-sm' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }
            `}
            aria-selected={selectedDay === index}
            role="tab"
          >
            {day}曜
          </button>
        ))}
      </div>
    </div>
  );
}