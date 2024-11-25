import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import { logMeal } from '../../utils/mealLogger';

interface MealLoggerProps {
  onLog: () => void;
}

export default function MealLogger({ onLog }: MealLoggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    mealType: '朝食',
    name: '',
    protein: '',
    fat: '',
    carbs: '',
    calories: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const meal = {
      date: format(new Date(), 'yyyy-MM-dd'),
      mealType: formData.mealType as '朝食' | '昼食' | '夕食' | '間食',
      name: formData.name,
      pfc: {
        protein: Number(formData.protein),
        fat: Number(formData.fat),
        carbs: Number(formData.carbs),
      },
      calories: Number(formData.calories),
      timestamp: Date.now(),
    };

    await logMeal(meal);
    onLog();
    setIsOpen(false);
    setFormData({
      mealType: '朝食',
      name: '',
      protein: '',
      fat: '',
      carbs: '',
      calories: '',
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-40 bg-[#007AFF] text-white rounded-full p-4 shadow-lg hover:bg-[#0066CC] transition-colors"
      >
        <Plus className="h-6 w-6" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">食事を記録</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  食事タイプ
                </label>
                <select
                  value={formData.mealType}
                  onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
                  className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                >
                  <option value="朝食">朝食</option>
                  <option value="昼食">昼食</option>
                  <option value="夕食">夕食</option>
                  <option value="間食">間食</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  食事名
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タンパク質 (g)
                  </label>
                  <input
                    type="number"
                    value={formData.protein}
                    onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    脂質 (g)
                  </label>
                  <input
                    type="number"
                    value={formData.fat}
                    onChange={(e) => setFormData({ ...formData, fat: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    糖質 (g)
                  </label>
                  <input
                    type="number"
                    value={formData.carbs}
                    onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    カロリー (kcal)
                  </label>
                  <input
                    type="number"
                    value={formData.calories}
                    onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0066CC] transition-colors"
              >
                記録する
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}