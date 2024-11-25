import React, { useState } from 'react';
import { Clock, ChefHat } from 'lucide-react';
import type { MenuItem } from '../../types';
import RecipeDetailsModal from './RecipeDetailsModal';

interface SimpleMenuCardProps {
  meal: MenuItem;
}

export default function SimpleMenuCard({ meal }: SimpleMenuCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDetails(true)}
        className="w-full p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-gradient-to-br from-white to-gray-50 border border-gray-100 text-left"
      >
        <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {meal.name}
        </h4>
        
        {/* PFC値 */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          <span className="px-2 py-1 bg-[#34C759]/10 text-[#34C759] rounded-md text-xs font-medium">
            P:{meal.pfc.protein}
          </span>
          <span className="px-2 py-1 bg-[#FF9500]/10 text-[#FF9500] rounded-md text-xs font-medium">
            F:{meal.pfc.fat}
          </span>
          <span className="px-2 py-1 bg-[#5856D6]/10 text-[#5856D6] rounded-md text-xs font-medium">
            C:{meal.pfc.carbs}
          </span>
        </div>

        {/* 追加情報 */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {meal.cookingTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {meal.cookingTime}分
            </span>
          )}
          {meal.difficulty && (
            <span className={`
              flex items-center gap-1
              ${meal.difficulty === 'easy' ? 'text-green-600' :
                meal.difficulty === 'medium' ? 'text-orange-600' :
                'text-red-600'}
            `}>
              <ChefHat className="w-3.5 h-3.5" />
              {meal.difficulty === 'easy' ? '簡単' :
               meal.difficulty === 'medium' ? '普通' : '本格的'}
            </span>
          )}
        </div>
      </button>

      <RecipeDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        meal={meal}
      />
    </>
  );
}