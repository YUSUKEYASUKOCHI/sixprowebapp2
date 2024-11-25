import React, { useState, useEffect } from 'react';
import { Flame, Beef, Droplet, Cookie, AlertCircle } from 'lucide-react';
import type { UserData } from '../types';
import { calculatePFCFromCalories, validateTotalCalories } from '../utils/nutritionCalculator';

interface UserProfilePanelProps {
  onSubmit: (data: UserData) => void;
  initialData: UserData | null;
}

function UserProfilePanel({ onSubmit, initialData }: UserProfilePanelProps) {
  const [formData, setFormData] = useState<UserData>(
    initialData || {
      calories: '',
      protein: '',
      fat: '',
      carbs: '',
    }
  );
  const [error, setError] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(initialData?.calories ? parseInt(initialData.calories) : 2000);

  const handleCaloriesChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    
    try {
      if (numericValue === '') {
        setFormData({
          calories: '',
          protein: '',
          fat: '',
          carbs: '',
        });
        setError(null);
        return;
      }

      const caloriesNum = parseInt(numericValue);
      validateTotalCalories(caloriesNum);
      const pfc = calculatePFCFromCalories(caloriesNum);
      
      setFormData({
        calories: numericValue,
        protein: pfc.protein.toString(),
        fat: pfc.fat.toString(),
        carbs: pfc.carbs.toString(),
      });
      setSliderValue(caloriesNum);
      setError(null);
    } catch (err) {
      setFormData(prev => ({
        ...prev,
        calories: numericValue,
      }));
      setError(err instanceof Error ? err.message : '無効な値です');
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleCaloriesChange(value);
  };

  useEffect(() => {
    if (!error && formData.calories && parseInt(formData.calories) > 0) {
      onSubmit(formData);
    }
  }, [formData, error, onSubmit]);

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        1日の目標値を入力してください
      </h2>

      <div className="space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Flame className="h-5 w-5 text-[#FF3B30] mr-3" strokeWidth={1.5} />
              カロリー
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                inputMode="numeric"
                value={formData.calories}
                onChange={(e) => handleCaloriesChange(e.target.value)}
                className={`w-32 h-16 rounded-xl border-2 px-4 text-2xl font-medium text-right shadow-sm transition-all duration-200 ${
                  error 
                    ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                    : 'border-gray-200 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10'
                }`}
              />
              <span className="text-xl text-gray-600 font-medium min-w-[4ch]">kcal</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-500">
              <span>700 kcal</span>
              <span>3,000 kcal</span>
            </div>
            <input
              type="range"
              min="700"
              max="3000"
              step="50"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007AFF]"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-3">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Beef className="h-5 w-5 text-[#34C759] mr-3" strokeWidth={1.5} />
              タンパク質
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.protein}
                readOnly
                className="block w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-3 text-right text-xl text-gray-900"
              />
              <span className="text-lg text-gray-600 min-w-[2ch]">g</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Droplet className="h-5 w-5 text-[#FF9500] mr-3" strokeWidth={1.5} />
              脂質
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.fat}
                readOnly
                className="block w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-3 text-right text-xl text-gray-900"
              />
              <span className="text-lg text-gray-600 min-w-[2ch]">g</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center text-lg font-medium text-gray-700">
              <Cookie className="h-5 w-5 text-[#5856D6] mr-3" strokeWidth={1.5} />
              糖質
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.carbs}
                readOnly
                className="block w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-5 py-3 text-right text-xl text-gray-900"
              />
              <span className="text-lg text-gray-600 min-w-[2ch]">g</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-blue-700 text-sm leading-relaxed">
            SIXPROの栄養管理プログラムの推奨PFC比率（タンパク質：30%、脂質：60%、糖質：10%）に基づいて、
            入力された総カロリーから自動的に各栄養素の目標値を計算します。
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePanel;