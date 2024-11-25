import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Heart } from 'lucide-react';

interface MealLogCardProps {
  meal: {
    name: string;
    time: string;
    pfc: {
      protein: number;
      fat: number;
      carbs: number;
    };
    calories: number;
    image?: string;
  };
}

export default function MealLogCard({ meal }: MealLogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium text-gray-900">{meal.name}</h3>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{meal.time}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-[#34C759]/10 text-[#34C759] rounded-lg text-sm">
            P: {meal.pfc.protein}g
          </span>
          <span className="px-3 py-1 bg-[#FF9500]/10 text-[#FF9500] rounded-lg text-sm">
            F: {meal.pfc.fat}g
          </span>
          <span className="px-3 py-1 bg-[#5856D6]/10 text-[#5856D6] rounded-lg text-sm">
            C: {meal.pfc.carbs}g
          </span>
          <span className="px-3 py-1 bg-[#FF3B30]/10 text-[#FF3B30] rounded-lg text-sm">
            {meal.calories} kcal
          </span>
        </div>

        {meal.image && (
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}

        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <ChefHat className="h-4 w-4" />
            <span className="text-sm">レシピを見る</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Heart className="h-4 w-4" />
            <span className="text-sm">お気に入り</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}