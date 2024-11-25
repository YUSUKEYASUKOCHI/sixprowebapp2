import type { DailyPFC } from '../types';

interface FoodNutrition {
  name: string;
  protein: number;
  fat: number;
  carbs: number;
  unit: string;
  baseAmount: number;
  category: 'protein' | 'vegetable' | 'fat';
}

export const FOOD_DATABASE: FoodNutrition[] = [
  { name: '卵', protein: 6.5, fat: 5.7, carbs: 0.3, unit: '個', baseAmount: 1, category: 'protein' },
  { name: '豆腐', protein: 8.1, fat: 4.2, carbs: 1.8, unit: '丁', baseAmount: 1, category: 'protein' },
  { name: '鶏もも肉', protein: 24.4, fat: 15.2, carbs: 0, unit: 'g', baseAmount: 100, category: 'protein' },
  { name: '鯖', protein: 23.4, fat: 16.8, carbs: 0, unit: 'g', baseAmount: 100, category: 'protein' },
  { name: '豚肉', protein: 21.8, fat: 14.2, carbs: 0, unit: 'g', baseAmount: 100, category: 'protein' },
  { name: '牛肉', protein: 25.6, fat: 18.4, carbs: 0, unit: 'g', baseAmount: 100, category: 'protein' },
  { name: 'アボカド', protein: 2, fat: 15.3, carbs: 1.8, unit: '個', baseAmount: 1, category: 'fat' },
  { name: 'オリーブオイル', protein: 0, fat: 14, carbs: 0, unit: '大さじ', baseAmount: 1, category: 'fat' },
  { name: 'アーモンド', protein: 21.2, fat: 49.9, carbs: 21.7, unit: 'g', baseAmount: 30, category: 'fat' },
  { name: 'ブロッコリー', protein: 2.8, fat: 0.4, carbs: 6.5, unit: 'g', baseAmount: 100, category: 'vegetable' },
  { name: 'ほうれん草', protein: 2.2, fat: 0.4, carbs: 4.2, unit: 'g', baseAmount: 100, category: 'vegetable' },
  { name: 'キャベツ', protein: 1.3, fat: 0.2, carbs: 5.2, unit: 'g', baseAmount: 100, category: 'vegetable' },
  { name: 'きのこ類', protein: 2.2, fat: 0.3, carbs: 4.8, unit: 'g', baseAmount: 100, category: 'vegetable' },
  { name: 'トマト', protein: 0.7, fat: 0.1, carbs: 4.7, unit: '個', baseAmount: 1, category: 'vegetable' },
  { name: 'サラダ菜', protein: 1.2, fat: 0.2, carbs: 3.6, unit: 'g', baseAmount: 100, category: 'vegetable' },
];

export function calculatePortions(targetPFC: DailyPFC) {
  // 1日の目標値を3食で割って、1食あたりの目標値を計算
  const mealTarget = {
    protein: targetPFC.protein / 3,
    fat: targetPFC.fat / 3,
    carbs: targetPFC.carbs / 3,
  };

  const portions = FOOD_DATABASE.map(food => {
    let recommendedAmount: number;

    // カテゴリーごとに目標値から逆算して必要量を計算
    switch (food.category) {
      case 'protein':
        // タンパク質目標値から必要量を計算
        recommendedAmount = (mealTarget.protein / food.protein) * food.baseAmount;
        break;
      case 'fat':
        // 脂質目標値から必要量を計算
        recommendedAmount = (mealTarget.fat / food.fat) * food.baseAmount;
        break;
      case 'vegetable':
        // 野菜は糖質制限を考慮して基準量を設定
        recommendedAmount = (mealTarget.carbs / food.carbs) * food.baseAmount;
        break;
      default:
        recommendedAmount = food.baseAmount;
    }

    // 各栄養素の実際の摂取量を計算
    const nutrients = {
      protein: (food.protein * recommendedAmount) / food.baseAmount,
      fat: (food.fat * recommendedAmount) / food.baseAmount,
      carbs: (food.carbs * recommendedAmount) / food.baseAmount,
    };

    // 推奨量を小数点第1位まで丸める
    return {
      food,
      amount: Math.round(recommendedAmount * 10) / 10,
      nutrients,
      category: food.category,
      // 目標値に対する充足率を計算
      fulfillment: {
        protein: (nutrients.protein / mealTarget.protein) * 100,
        fat: (nutrients.fat / mealTarget.fat) * 100,
        carbs: (nutrients.carbs / mealTarget.carbs) * 100,
      },
    };
  });

  return portions;
}