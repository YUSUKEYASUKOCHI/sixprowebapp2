import type { UserData, DailyPFC } from '../types';

const CALORIES_PER_GRAM = {
  protein: 4,
  fat: 9,
  carbs: 4,
};

const KETOGENIC_RATIO = {
  protein: 0.30,
  fat: 0.60,
  carbs: 0.10,
};

const CALORIE_RANGES = {
  min: 700,
  max: 3000,
};

export function validateTotalCalories(calories: number): boolean {
  if (calories < CALORIE_RANGES.min || calories > CALORIE_RANGES.max) {
    throw new Error(`総カロリーは${CALORIE_RANGES.min}kcalから${CALORIE_RANGES.max}kcalの範囲内で設定してください。`);
  }

  return true;
}

export function calculatePFCFromCalories(calories: number): DailyPFC {
  // カロリーからケトジェニック比率に基づいてPFCを計算
  return {
    protein: Math.round((calories * KETOGENIC_RATIO.protein) / CALORIES_PER_GRAM.protein),
    fat: Math.round((calories * KETOGENIC_RATIO.fat) / CALORIES_PER_GRAM.fat),
    carbs: Math.round((calories * KETOGENIC_RATIO.carbs) / CALORIES_PER_GRAM.carbs),
  };
}

export function validatePFCRatio(pfc: DailyPFC, calories: number): boolean {
  const calculatedCalories = 
    pfc.protein * CALORIES_PER_GRAM.protein +
    pfc.fat * CALORIES_PER_GRAM.fat +
    pfc.carbs * CALORIES_PER_GRAM.carbs;

  const tolerance = 50; // 誤差許容範囲（カロリー）
  if (Math.abs(calculatedCalories - calories) > tolerance) {
    throw new Error('PFCのカロリー合計が目標カロリーと大きく異なります。');
  }

  return true;
}

export function calculateDailyPFC(userData: UserData): DailyPFC {
  const calories = parseInt(userData.calories);
  
  try {
    validateTotalCalories(calories);
    const pfc = calculatePFCFromCalories(calories);
    validatePFCRatio(pfc, calories);
    return pfc;
  } catch (error) {
    console.error('PFC計算エラー:', error);
    // エラー時はデフォルト値を返す
    return {
      protein: Math.round(parseFloat(userData.protein)),
      fat: Math.round(parseFloat(userData.fat)),
      carbs: Math.round(parseFloat(userData.carbs)),
    };
  }
}