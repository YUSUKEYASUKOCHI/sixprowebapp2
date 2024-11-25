import React, { useState } from 'react';
import { Scale, ChefHat, Carrot, Droplet, ChevronDown } from 'lucide-react';
import { calculatePortions } from '../utils/foodPortions';
import type { DailyPFC } from '../types';

interface PortionGuideProps {
  userPFC: DailyPFC;
}

function PortionGuide({ userPFC }: PortionGuideProps) {
  const portions = calculatePortions(userPFC);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = {
    protein: { name: 'タンパク質源', icon: ChefHat, color: '#34C759' },
    vegetable: { name: '野菜類', icon: Carrot, color: '#5856D6' },
    fat: { name: '脂質源', icon: Droplet, color: '#FF9500' },
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Scale className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
          <h3 className="text-2xl font-bold text-gray-900">
            食材の使用目安量（1食あたり）
          </h3>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(categories).map(([key, category]) => {
          const CategoryIcon = category.icon;
          const categoryItems = portions.filter(p => p.category === key);
          const isExpanded = expandedCategory === key;

          return (
            <div key={key} className="rounded-xl overflow-hidden border-2 border-gray-100">
              <button
                onClick={() => toggleCategory(key)}
                className={`w-full px-5 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 ${isExpanded ? 'bg-gray-100' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <CategoryIcon 
                    className="h-5 w-5" 
                    style={{ color: category.color }} 
                    strokeWidth={1.5} 
                  />
                  <span className="text-lg font-medium text-gray-900">
                    {category.name}
                  </span>
                  <span className="text-base text-gray-500">
                    ({categoryItems.length}品目)
                  </span>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    isExpanded ? 'transform rotate-180' : ''
                  }`} 
                  strokeWidth={1.5}
                />
              </button>

              <div className={`
                overflow-hidden transition-all duration-200 ease-in-out
                ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="p-5 space-y-4 bg-white">
                  {categoryItems.map(({ food, amount, nutrients, fulfillment }) => (
                    <div 
                      key={food.name} 
                      className="rounded-xl p-5 hover:bg-gray-50 transition-colors duration-200 border-2 border-gray-100"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-gray-900">
                          {food.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-medium text-[#007AFF]">
                            {amount} {food.unit}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#34C759]/10 text-[#34C759] px-3 py-2 rounded-lg text-base font-medium">
                          タンパク質: {Math.round(nutrients.protein)}g ({Math.round(fulfillment.protein)}%)
                        </span>
                        <span className="bg-[#FF9500]/10 text-[#FF9500] px-3 py-2 rounded-lg text-base font-medium">
                          脂質: {Math.round(nutrients.fat)}g ({Math.round(fulfillment.fat)}%)
                        </span>
                        <span className="bg-[#5856D6]/10 text-[#5856D6] px-3 py-2 rounded-lg text-base font-medium">
                          糖質: {Math.round(nutrients.carbs)}g ({Math.round(fulfillment.carbs)}%)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="bg-blue-50 rounded-xl p-5">
          <div className="space-y-3 text-base text-blue-700">
            <div className="flex items-start gap-2">
              <span>•</span>
              <p>括弧内の数値（%）は1食あたりの目標値に対する充足率を示しています。</p>
            </div>
            <div className="flex items-start gap-2">
              <span>•</span>
              <p>複数の食材を組み合わせる場合は、充足率の合計が100%になるように調整してください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortionGuide;