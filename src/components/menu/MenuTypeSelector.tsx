import React from 'react';
import { ChefHat, Store, ShoppingCart } from 'lucide-react';

const PATTERN_ICONS = {
  0: ShoppingCart,
  1: ChefHat,
  2: Store,
};

interface MenuTypeSelectorProps {
  selectedPattern: number;
  onPatternSelect: (index: number) => void;
  patterns: string[];
  descriptions: string[];
}

export default function MenuTypeSelector({ 
  selectedPattern, 
  onPatternSelect, 
  patterns, 
  descriptions 
}: MenuTypeSelectorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-[18px] font-bold text-gray-900 mb-4">
        メニュータイプ選択
      </h2>
      
      <div className="grid grid-cols-1 gap-3">
        {patterns.map((name, index) => {
          const Icon = PATTERN_ICONS[index as keyof typeof PATTERN_ICONS];
          return (
            <button
              key={index}
              onClick={() => onPatternSelect(index)}
              className={`
                p-4 rounded-xl transition-all
                ${selectedPattern === index 
                  ? 'bg-gray-900 text-white shadow-sm' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
                <div className="text-left">
                  <div className="font-medium text-[16px] leading-relaxed">
                    {name}
                  </div>
                  <p className={`text-[16px] mt-1 ${selectedPattern === index ? 'text-gray-300' : 'text-gray-500'}`}>
                    {descriptions[index]}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}