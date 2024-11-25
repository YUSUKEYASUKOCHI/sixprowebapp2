export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
}

export interface MenuItem {
  name: string;
  pfc: {
    protein: number;
    fat: number;
    carbs: number;
  };
  difficulty?: 'easy' | 'medium' | 'hard';
  cookingTime?: number;
  servings?: number;
  ingredients?: Ingredient[];
  instructions?: string[];
  detailedInstructions?: string[];  // 詳細な調理手順を追加
  tips?: string;
  alternatives?: {
    ingredient: string;
    alternatives: string[];
  }[];
  seasonality?: {
    spring?: boolean;
    summer?: boolean;
    autumn?: boolean;
    winter?: boolean;
  };
  mealPrep?: boolean;
  adjustedPortions?: boolean;
}

export interface DailyMenu {
  朝食: MenuItem[];
  昼食: MenuItem[];
  夕食: MenuItem[];
}

export interface UserData {
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
}

export interface DailyPFC {
  protein: number;
  fat: number;
  carbs: number;
}

export interface FoodNutrition {
  id: string;
  name: string;
  category: 'protein' | 'fat' | 'vegetable';
  nutrients: {
    protein: number;
    fat: number;
    carbs: number;
    calories: number;
  };
  unit: string;
  baseAmount: number;
  weightPerUnit?: number;
  servingSuggestions: number[];
  tips?: string;
  alternatives?: string[];
}