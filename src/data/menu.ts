import type { DailyMenu } from '../types';
import { FIXED_INGREDIENTS_MENU } from './menuData/fixedMenu';
import { RECIPE_FOCUSED_MENU } from './menuData/recipeMenu/index';
import { CONVENIENCE_MENU } from './menuData/convenienceMenu';

// メニューパターンの配列
export const MENU_PATTERNS: DailyMenu[][] = [
  FIXED_INGREDIENTS_MENU,
  RECIPE_FOCUSED_MENU,
  CONVENIENCE_MENU,
];

// メニューパターンの名前と説明
export const PATTERN_NAMES = [
  '食材固定メニュー',
  'レシピ版',
  'コンビニ版'
];

export const PATTERN_DESCRIPTIONS = [
  '買い物効率重視のシンプルな献立',
  '料理好きのための本格レシピ',
  '時短重視のお手軽メニュー'
];

// メニューデータの検証
function validateMenuData() {
  if (process.env.NODE_ENV === 'development') {
    MENU_PATTERNS.forEach((pattern, patternIndex) => {
      // 各パターンが7日分のメニューを持っているか確認
      if (pattern.length !== 7) {
        console.warn(`パターン ${PATTERN_NAMES[patternIndex]} のメニューが7日分ありません。現在: ${pattern.length}日分`);
      }

      // 各日のメニューが朝食・昼食・夕食を持っているか確認
      pattern.forEach((day, dayIndex) => {
        ['朝食', '昼食', '夕食'].forEach(mealTime => {
          if (!day[mealTime] || day[mealTime].length === 0) {
            console.warn(`パターン ${PATTERN_NAMES[patternIndex]} の ${dayIndex + 1}日目の ${mealTime} が設定されていません。`);
          }
        });
      });
    });
  }
}

// 開発環境でのみメニューデータを検証
validateMenuData();