import React, { useState, useMemo } from 'react';
import { Coffee, Utensils, Moon, ShoppingCart, Plus, Grid } from 'lucide-react';
import type { DailyPFC, DailyMenu, MenuItem } from '../types';
import { MENU_PATTERNS, PATTERN_NAMES, PATTERN_DESCRIPTIONS } from '../data/menu';
import { adjustMenuPortions } from '../utils/menuCalculator';
import { createShoppingListFromMeals } from '../utils/storage';
import { motion, AnimatePresence } from 'framer-motion';
import MenuTypeSelector from './menu/MenuTypeSelector';
import MealCard from './menu/MealCard';
import ConvenienceTips from './menu/ConvenienceTips';
import SwipeableWeekView from './menu/SwipeableWeekView';
import MenuOverview from './menu/MenuOverview';

interface WeeklyMenuProps {
  userPFC: DailyPFC | null;
}

const DAYS = ['月', '火', '水', '木', '金', '土', '日'];
const MEAL_TIMES = ['朝食', '昼食', '夕食'] as const;
const MEAL_ICONS = {
  朝食: Coffee,
  昼食: Utensils,
  夕食: Moon,
};

export default function WeeklyMenu({ userPFC }: WeeklyMenuProps) {
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [expandedMeals, setExpandedMeals] = useState<Set<string>>(new Set());
  const [currentDay, setCurrentDay] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isAddingToList, setIsAddingToList] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  // メニューパターンを取得し、目標値に基づいて調整
  const adjustedWeeklyMenu = useMemo(() => {
    if (!userPFC || !MENU_PATTERNS[selectedPattern]) return [];

    return MENU_PATTERNS[selectedPattern].map(dayMenu => {
      if (!dayMenu) return { 朝食: [], 昼食: [], 夕食: [] };

      return {
        朝食: (dayMenu.朝食 || []).map(meal => adjustMenuPortions(meal, userPFC)),
        昼食: (dayMenu.昼食 || []).map(meal => adjustMenuPortions(meal, userPFC)),
        夕食: (dayMenu.夕食 || []).map(meal => adjustMenuPortions(meal, userPFC)),
      };
    });
  }, [selectedPattern, userPFC]);

  const toggleMeal = (dayIndex: number, mealTime: string) => {
    const key = `${dayIndex}-${mealTime}`;
    setExpandedMeals(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleAddToShoppingList = () => {
    const selectedMeals: MenuItem[] = [];
    MEAL_TIMES.forEach(mealTime => {
      const meals = adjustedWeeklyMenu[currentDay][mealTime];
      if (meals) {
        selectedMeals.push(...meals);
      }
    });

    if (selectedMeals.length > 0) {
      setIsAddingToList(true);
      createShoppingListFromMeals(selectedMeals, `${DAYS[currentDay]}曜日の献立`);
      
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setIsAddingToList(false);
      }, 3000);
    }
  };

  if (!userPFC) return null;

  return (
    <div className="space-y-6">
      <MenuTypeSelector
        selectedPattern={selectedPattern}
        onPatternSelect={setSelectedPattern}
        patterns={PATTERN_NAMES}
        descriptions={PATTERN_DESCRIPTIONS}
      />

      <div className="flex justify-end">
        <button
          onClick={() => setShowOverview(true)}
          className="flex items-center gap-2 px-4 py-2 text-[#007AFF] hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Grid className="h-5 w-5" />
          <span>週間メニューを表示</span>
        </button>
      </div>

      <SwipeableWeekView
        currentDay={currentDay}
        onDayChange={setCurrentDay}
        days={DAYS}
      >
        <div className="relative space-y-4">
          <motion.button
            onClick={handleAddToShoppingList}
            disabled={isAddingToList}
            className="w-full flex items-center justify-center gap-2 p-4 bg-[#007AFF] text-white rounded-xl hover:bg-[#0066CC] transition-colors disabled:opacity-50"
            whileTap={{ scale: 0.98 }}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-medium">
              {DAYS[currentDay]}曜日のメニューを買い物リストに追加
            </span>
            <Plus className="h-5 w-5" />
          </motion.button>

          {MEAL_TIMES.map((mealTime) => {
            const Icon = MEAL_ICONS[mealTime];
            const meals = adjustedWeeklyMenu[currentDay]?.[mealTime];
            const isMealExpanded = expandedMeals.has(`${currentDay}-${mealTime}`);
            
            if (!meals || meals.length === 0) return null;

            return (
              <div 
                key={`${currentDay}-${mealTime}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleMeal(currentDay, mealTime)}
                  className={`
                    w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors
                    ${isMealExpanded ? 'bg-gray-50' : ''}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                    <h4 className="text-base font-medium text-gray-900">{mealTime}</h4>
                  </div>
                  <span className="text-sm text-gray-500">
                    タップして{isMealExpanded ? '閉じる' : '詳細を表示'}
                  </span>
                </button>

                <AnimatePresence>
                  {isMealExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 space-y-4">
                        {meals.map((meal, index) => (
                          <MealCard 
                            key={`${currentDay}-${mealTime}-${index}`}
                            meal={meal} 
                            expanded={isMealExpanded}
                            context={{
                              pattern: PATTERN_NAMES[selectedPattern],
                              day: DAYS[currentDay],
                              timing: mealTime
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </SwipeableWeekView>

      {selectedPattern === 2 && <ConvenienceTips />}

      <AnimatePresence>
        {showOverview && (
          <MenuOverview
            menu={adjustedWeeklyMenu}
            onClose={() => setShowOverview(false)}
            days={DAYS}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>買い物リストに追加しました！買い物リストタブで確認できます</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}