import { mondayMenu } from './mondayMenu';
import { tuesdayMenu } from './tuesdayMenu';
import { wednesdayMenu } from './wednesdayMenu';
import { thursdayMenu } from './thursdayMenu';
import { fridayMenu } from './fridayMenu';
import { saturdayMenu } from './saturdayMenu';
import { sundayMenu } from './sundayMenu';
import type { DailyMenu } from '../../../types';

// レシピ版（料理好き向け）のメニュー
export const RECIPE_FOCUSED_MENU: DailyMenu[] = [
  mondayMenu,    // 月曜日
  tuesdayMenu,   // 火曜日
  wednesdayMenu, // 水曜日
  thursdayMenu,  // 木曜日
  fridayMenu,    // 金曜日
  saturdayMenu,  // 土曜日
  sundayMenu     // 日曜日
];