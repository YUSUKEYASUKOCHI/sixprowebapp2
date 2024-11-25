import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coffee, Sun, Moon, Sparkles } from 'lucide-react';
import type { DailyMenu } from '../../types';
import SimpleMenuCard from './SimpleMenuCard';

const MEAL_ICONS = {
  朝食: Coffee,
  昼食: Sun,
  夕食: Moon,
};

interface MenuOverviewProps {
  menu: DailyMenu[];
  onClose: () => void;
  days: string[];
}

export default function MenuOverview({ menu, onClose, days }: MenuOverviewProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-br from-white to-gray-50 shadow-2xl flex flex-col rounded-t-[32px] h-[85vh] overflow-hidden"
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100/50 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-[#007AFF] to-[#34C759] p-2.5 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">週間メニュー</h2>
              <p className="text-sm text-gray-500">あなた専用にカスタマイズされたメニュープラン</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* メインコンテンツ */}
        <div className="min-h-0 flex-1 overflow-auto p-4">
          <div className="min-w-[1200px] max-w-[1400px] mx-auto">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="grid grid-cols-8 border-b border-gray-200">
                <div className="p-3 bg-gray-50 border-r border-gray-200 sticky left-0 z-20">
                  <span className="font-medium text-gray-600">時間帯</span>
                </div>
                {days.map((day, index) => (
                  <div key={index} className="p-3 bg-gray-50 border-r border-gray-200">
                    <span className="font-medium text-gray-900">{day}曜日</span>
                  </div>
                ))}
              </div>

              {(['朝食', '昼食', '夕食'] as const).map((mealTime, timeIndex) => {
                const Icon = MEAL_ICONS[mealTime];
                return (
                  <div 
                    key={mealTime} 
                    className={`
                      grid grid-cols-8 border-b border-gray-200 last:border-b-0
                      ${timeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    `}
                  >
                    <div className="p-3 bg-white border-r border-gray-200 sticky left-0 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gray-50 shadow-sm flex items-center justify-center">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-900">{mealTime}</span>
                      </div>
                    </div>
                    {menu.map((dayMenu, dayIndex) => (
                      <div 
                        key={dayIndex} 
                        className={`p-2 border-r border-gray-200 ${
                          dayIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        {dayMenu[mealTime]?.map((meal, mealIndex) => (
                          <div key={mealIndex} className="mb-2 last:mb-0">
                            <SimpleMenuCard meal={meal} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="bg-white/50 backdrop-blur-sm border-t border-gray-100/50 sticky bottom-0 z-10">
          <div className="flex items-center justify-between text-sm text-gray-500 px-4 py-2">
            <span className="text-xs sm:text-sm">データソース: 日本食品標準成分表2023年版（九訂）</span>
            <span className="text-xs sm:text-sm">最終更新: 2024年2月</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}