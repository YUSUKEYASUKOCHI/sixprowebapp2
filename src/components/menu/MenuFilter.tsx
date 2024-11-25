import React from 'react';
import { Clock, ChefHat, Fish, Beef, Carrot } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuFilterProps {
  filters: {
    time?: string;
    difficulty?: string;
    mainIngredient?: string;
  };
  onFilterChange: (filters: any) => void;
}

export default function MenuFilter({ filters, onFilterChange }: MenuFilterProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
      <h3 className="text-lg font-medium text-gray-900">メニューを絞り込む</h3>

      <div className="space-y-4">
        {/* 調理時間フィルター */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <Clock className="h-4 w-4" />
            調理時間
          </label>
          <div className="flex flex-wrap gap-2">
            {['15分以内', '30分以内', 'すべて'].map((time) => (
              <button
                key={time}
                onClick={() => onFilterChange({ ...filters, time })}
                className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                  filters.time === time
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* 難易度フィルター */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <ChefHat className="h-4 w-4" />
            難易度
          </label>
          <div className="flex flex-wrap gap-2">
            {['簡単', '普通', '本格的', 'すべて'].map((level) => (
              <button
                key={level}
                onClick={() => onFilterChange({ ...filters, difficulty: level })}
                className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                  filters.difficulty === level
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* 主要食材フィルター */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            主要食材
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '魚介類', icon: Fish },
              { label: '肉類', icon: Beef },
              { label: '野菜中心', icon: Carrot },
              { label: 'すべて', icon: ChefHat },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => onFilterChange({ ...filters, mainIngredient: label })}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
                  filters.mainIngredient === label
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* フィルターリセットボタン */}
      {(filters.time || filters.difficulty || filters.mainIngredient) && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => onFilterChange({})}
          className="w-full py-2 text-[#007AFF] hover:text-[#0066CC] transition-colors"
        >
          フィルターをリセット
        </motion.button>
      )}
    </div>
  );
}