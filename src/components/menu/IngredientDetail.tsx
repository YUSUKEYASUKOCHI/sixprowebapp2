import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { getIngredientDetails } from '../../utils/ingredientUtils';
import type { Ingredient } from '../../types';

interface IngredientDetailProps {
  isOpen: boolean;
  onClose: () => void;
  ingredient: Ingredient | null;
}

export default function IngredientDetail({ 
  isOpen, 
  onClose, 
  ingredient 
}: IngredientDetailProps) {
  if (!ingredient) return null;

  const details = getIngredientDetails(ingredient);
  if (!details) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-0 inset-x-0 bg-white rounded-t-[32px] z-50 p-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {ingredient.name}
                </h3>
                <p className="text-gray-600">
                  申し訳ありません。この食材の詳細情報は現在準備中です。
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-0 bottom-0 bg-white rounded-t-[32px] z-50 h-[85vh] overflow-y-auto"
          >
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="p-6 pb-safe">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {details.name}
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-green-800 text-sm font-medium mb-1">カロリー</p>
                    <p className="text-green-900 text-lg font-bold">
                      {details.nutrients.calories} kcal
                    </p>
                    <p className="text-green-700 text-xs mt-1">
                      {details.baseAmount}{details.unit}あたり
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-blue-800 text-sm font-medium mb-1">タンパク質</p>
                    <p className="text-blue-900 text-lg font-bold">
                      {details.nutrients.protein}g
                    </p>
                    <p className="text-blue-700 text-xs mt-1">
                      {details.baseAmount}{details.unit}あたり
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-orange-800 text-sm font-medium mb-1">脂質</p>
                    <p className="text-orange-900 text-lg font-bold">
                      {details.nutrients.fat}g
                    </p>
                    <p className="text-orange-700 text-xs mt-1">
                      {details.baseAmount}{details.unit}あたり
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-purple-800 text-sm font-medium mb-1">糖質</p>
                    <p className="text-purple-900 text-lg font-bold">
                      {details.nutrients.carbs}g
                    </p>
                    <p className="text-purple-700 text-xs mt-1">
                      {details.baseAmount}{details.unit}あたり
                    </p>
                  </div>
                </div>

                {details.tips && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">調理のポイント</h4>
                    <div className="flex items-start gap-2 text-gray-600 bg-blue-50 rounded-xl p-4">
                      <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p>{details.tips}</p>
                    </div>
                  </div>
                )}

                {details.alternatives && details.alternatives.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-900">代替食材</h4>
                    <div className="flex flex-wrap gap-2">
                      {details.alternatives.map((alt, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm"
                        >
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}