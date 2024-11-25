import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { format } from 'date-fns';
import { Flame, TrendingUp, Award } from 'lucide-react';
import { getWeeklyLogs, getMealsByDate } from '../../utils/mealLogger';
import MealLogger from './MealLogger';
import MealLogCard from './MealLogCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function NutritionDashboard() {
  const [weeklyData, setWeeklyData] = useState<any>(null);
  const [todaysMeals, setTodaysMeals] = useState<any[]>([]);
  const [todaysTotals, setTodaysTotals] = useState({
    protein: 0,
    fat: 0,
    carbs: 0,
    calories: 0,
  });

  const loadData = async () => {
    const weeklyLogs = await getWeeklyLogs();
    const today = format(new Date(), 'yyyy-MM-dd');
    const todayLogs = await getMealsByDate(today);

    // 週間データの設定
    setWeeklyData({
      labels: weeklyLogs.map(log => format(new Date(log.date), 'E')),
      datasets: [
        {
          label: 'タンパク質',
          data: weeklyLogs.map(log => log.totals.protein),
          borderColor: '#34C759',
          tension: 0.4,
        },
        {
          label: '脂質',
          data: weeklyLogs.map(log => log.totals.fat),
          borderColor: '#FF9500',
          tension: 0.4,
        },
        {
          label: '糖質',
          data: weeklyLogs.map(log => log.totals.carbs),
          borderColor: '#5856D6',
          tension: 0.4,
        },
      ],
    });

    // 今日の食事と合計の設定
    setTodaysMeals(todayLogs);
    const totals = todayLogs.reduce((acc, meal) => ({
      protein: acc.protein + meal.pfc.protein,
      fat: acc.fat + meal.pfc.fat,
      carbs: acc.carbs + meal.pfc.carbs,
      calories: acc.calories + meal.calories,
    }), {
      protein: 0,
      fat: 0,
      carbs: 0,
      calories: 0,
    });
    setTodaysTotals(totals);
  };

  useEffect(() => {
    loadData();
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="space-y-6">
      {/* 今日の達成状況 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Flame className="h-6 w-6 text-[#FF3B30]" strokeWidth={1.5} />
          <h2 className="text-xl font-bold text-gray-900">今日の達成状況</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">PFCバランス</h3>
            <div className="w-full max-w-[300px] mx-auto">
              {weeklyData && (
                <Doughnut
                  data={{
                    labels: ['タンパク質', '脂質', '糖質'],
                    datasets: [{
                      data: [
                        todaysTotals.protein,
                        todaysTotals.fat,
                        todaysTotals.carbs,
                      ],
                      backgroundColor: ['#34C759', '#FF9500', '#5856D6'],
                      borderWidth: 0,
                    }],
                  }}
                  options={doughnutOptions}
                />
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">総カロリー</span>
                <span className="text-lg font-medium text-gray-900">
                  {todaysTotals.calories} kcal
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FF3B30] h-2 rounded-full"
                  style={{ width: `${Math.min((todaysTotals.calories / 2000) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">タンパク質</span>
                <span className="text-lg font-medium text-gray-900">
                  {todaysTotals.protein}g
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#34C759] h-2 rounded-full"
                  style={{ width: `${Math.min((todaysTotals.protein / 150) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">脂質</span>
                <span className="text-lg font-medium text-gray-900">
                  {todaysTotals.fat}g
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FF9500] h-2 rounded-full"
                  style={{ width: `${Math.min((todaysTotals.fat / 80) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">糖質</span>
                <span className="text-lg font-medium text-gray-900">
                  {todaysTotals.carbs}g
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#5856D6] h-2 rounded-full"
                  style={{ width: `${Math.min((todaysTotals.carbs / 30) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 今日の食事記録 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-sm p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">今日の食事記録</h2>
        <div className="space-y-4">
          {todaysMeals.map((meal, index) => (
            <MealLogCard key={meal.id || index} meal={meal} />
          ))}
          {todaysMeals.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              今日の食事記録はまだありません
            </p>
          )}
        </div>
      </motion.div>

      {/* 週間トレンド */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-sm p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="h-6 w-6 text-[#007AFF]" strokeWidth={1.5} />
          <h2 className="text-xl font-bold text-gray-900">週間トレンド</h2>
        </div>

        {weeklyData && <Line data={weeklyData} options={chartOptions} />}
      </motion.div>

      {/* 達成バッジ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-sm p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-6 w-6 text-[#FF9500]" strokeWidth={1.5} />
          <h2 className="text-xl font-bold text-gray-900">達成バッジ</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-6 rounded-xl text-center">
            <span className="text-4xl">🏆</span>
            <h3 className="text-white font-medium mt-2">連続達成 7日</h3>
          </div>
          <div className="bg-gradient-to-br from-[#34C759] to-[#32ADE6] p-6 rounded-xl text-center">
            <span className="text-4xl">💪</span>
            <h3 className="text-white font-medium mt-2">タンパク質マスター</h3>
          </div>
          <div className="bg-gradient-to-br from-[#FF3B30] to-[#FF9500] p-6 rounded-xl text-center">
            <span className="text-4xl">🎯</span>
            <h3 className="text-white font-medium mt-2">目標達成率95%</h3>
          </div>
        </div>
      </motion.div>

      <MealLogger onLog={loadData} />
    </div>
  );
}