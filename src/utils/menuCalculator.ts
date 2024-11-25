import type { MenuItem, DailyPFC, Ingredient } from '../types';

const CALORIES_PER_GRAM = {
  protein: 4,
  fat: 9,
  carbs: 4,
};

interface PortionAdjustment {
  name: string;
  originalAmount: string;
  adjustedAmount: string;
  unit: string;
}

export function calculateCalories(pfc: { protein: number; fat: number; carbs: number }): number {
  return (
    pfc.protein * CALORIES_PER_GRAM.protein +
    pfc.fat * CALORIES_PER_GRAM.fat +
    pfc.carbs * CALORIES_PER_GRAM.carbs
  );
}

export function adjustMenuPortions(menu: MenuItem, targetPFC: DailyPFC): MenuItem {
  // 1食あたりの目標値を計算（1日の目標値の1/3）
  const mealTarget = {
    protein: targetPFC.protein / 3,
    fat: targetPFC.fat / 3,
    carbs: targetPFC.carbs / 3,
  };

  // 現在のPFC比率を計算
  const currentRatio = {
    protein: menu.pfc.protein / mealTarget.protein,
    fat: menu.pfc.fat / mealTarget.fat,
    carbs: menu.pfc.carbs / mealTarget.carbs,
  };

  // 調整が必要な比率を決定（最も大きな比率に合わせる）
  const adjustmentRatio = Math.max(
    currentRatio.protein,
    currentRatio.fat,
    currentRatio.carbs
  );

  // 食材の量を調整
  const adjustedIngredients = menu.ingredients?.map(ingredient => {
    const match = ingredient.amount.match(/^([\d./]+)\s*(.*)$/);
    
    if (match) {
      const [, numStr, unit] = match;
      // 分数対応（例: "1/2" → 0.5）
      const originalNum = numStr.includes('/') 
        ? numStr.split('/').reduce((n, d) => Number(n) / Number(d))
        : Number(numStr);
      
      const adjustedNum = Math.round(originalNum / adjustmentRatio * 10) / 10;
      
      return {
        ...ingredient,
        amount: `${adjustedNum}${unit}`
      };
    }
    
    // 数値が含まれない場合（例: "適量"）はそのまま返す
    return ingredient;
  });

  // PFCを調整
  const adjustedPFC = {
    protein: Math.round(menu.pfc.protein / adjustmentRatio),
    fat: Math.round(menu.pfc.fat / adjustmentRatio),
    carbs: Math.round(menu.pfc.carbs / adjustmentRatio),
  };

  // カロリーを計算
  const calories = calculateCalories(adjustedPFC);

  return {
    ...menu,
    ingredients: adjustedIngredients,
    pfc: adjustedPFC,
    calories,
    adjustedPortions: true,
  };
}