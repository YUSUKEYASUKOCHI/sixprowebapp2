import { FOOD_DATABASE } from '../data/foodDatabase';
import type { FoodNutrition, Ingredient } from '../types';

// 食材名の正規化マッピング
const INGREDIENT_MAPPING: { [key: string]: string } = {
  // 肉類
  '鶏むね肉': 'chicken_breast',
  '鶏胸肉': 'chicken_breast',
  '豚ロース': 'pork_loin',
  '豚ロース肉': 'pork_loin',
  '豚肉': 'pork_loin',
  
  // 魚介類
  '鮭': 'salmon_raw',
  '生鮭': 'salmon_raw',
  'サバ': 'mackerel',
  'サバの切り身': 'mackerel',
  
  // 卵・乳製品
  '卵': 'egg_whole',
  'ゆで卵': 'egg_whole',
  '温泉卵': 'egg_whole',
  'チーズ': 'cheese',
  'スライスチーズ': 'cheese',
  'チーズスティック': 'cheese',
  'クリームチーズ': 'cream_cheese',
  
  // 野菜類
  'ほうれん草': 'spinach_raw',
  'ブロッコリー': 'broccoli_raw',
  'レタス': 'lettuce',
  'キュウリ': 'cucumber',
  'トマト': 'tomato',
  'キノコ類': 'mushroom_mix',
  
  // 油脂類
  'オリーブオイル': 'olive_oil',
  'アボカド': 'avocado',
  'バター': 'butter',
  'ココナッツオイル': 'coconut_oil',
  
  // ナッツ類
  'アーモンド': 'almonds',
  'クルミ': 'walnuts',
  
  // 調味料・香辛料
  '生姜': 'ginger',
  'にんにく': 'garlic',
  '糖質ゼロ醤油': 'soy_sauce_zero',
  '醤油': 'soy_sauce_zero',
  
  // その他
  'プロテインパウダー': 'protein_powder',
  'プロテイン': 'protein_powder',
  'サラダミックス': 'lettuce_mix',
};

// 食材の詳細情報を取得する関数
export function getIngredientDetails(ingredient: Ingredient): FoodNutrition | null {
  // マッピングから正規化された食材IDを取得
  const normalizedId = INGREDIENT_MAPPING[ingredient.name];
  if (!normalizedId) return null;
  
  // データベースから食材情報を取得
  const foodInfo = FOOD_DATABASE.find(food => food.id === normalizedId);
  return foodInfo || null;
}

// 食材名を正規化する関数
export function normalizeIngredientName(name: string): string {
  return INGREDIENT_MAPPING[name] || name;
}