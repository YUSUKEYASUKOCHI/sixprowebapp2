import type { MenuItem, UserData, Ingredient } from '../types';
import { encrypt, decrypt } from './encryption';

const STORAGE_KEYS = {
  SHOPPING_LISTS: 'sixpro_shopping_lists',
  FAVORITE_MEALS: 'sixpro_favorite_meals',
  USER_NUTRITION: 'sixpro_user_nutrition',
  CHECKED_ITEMS: 'sixpro_checked_items',
};

interface SavedShoppingList {
  id: string;
  name: string;
  createdAt: string;
  items: {
    category: string;
    ingredients: {
      name: string;
      amount: string;
      recipes: string[];
    }[];
  }[];
}

interface SavedFavoriteMeal {
  id: string;
  meal: MenuItem;
  addedAt: string;
  context?: {
    pattern: string;
    day: string;
    timing: string;
  };
}

function safeGetItem(key: string): string | null {
  try {
    const value = localStorage.getItem(key);
    return value === 'undefined' || value === 'null' ? null : value;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    if (!value) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error writing to localStorage (${key}):`, error);
  }
}

// お気に入りメニューの保存/削除
export function toggleFavoriteMeal(
  meal: MenuItem, 
  context?: { pattern: string; day: string; timing: string }
): boolean {
  try {
    const favorites = getFavoriteMeals();
    const existingIndex = favorites.findIndex(f => f.meal.name === meal.name);
    
    if (existingIndex >= 0) {
      favorites.splice(existingIndex, 1);
      const encrypted = encrypt(favorites);
      if (encrypted) {
        safeSetItem(STORAGE_KEYS.FAVORITE_MEALS, encrypted);
      }
      return false;
    } else {
      const newFavorite: SavedFavoriteMeal = {
        id: crypto.randomUUID(),
        meal,
        addedAt: new Date().toISOString(),
        context
      };
      const encrypted = encrypt([newFavorite, ...favorites]);
      if (encrypted) {
        safeSetItem(STORAGE_KEYS.FAVORITE_MEALS, encrypted);
      }
      return true;
    }
  } catch (error) {
    console.error('Error toggling favorite meal:', error);
    return false;
  }
}

// お気に入りメニューの取得
export function getFavoriteMeals(): SavedFavoriteMeal[] {
  try {
    const saved = safeGetItem(STORAGE_KEYS.FAVORITE_MEALS);
    const decrypted = decrypt(saved);
    return Array.isArray(decrypted) ? decrypted : [];
  } catch (error) {
    console.error('Error getting favorite meals:', error);
    return [];
  }
}

// メニューがお気に入りに登録されているか確認
export function isMealFavorited(mealName: string): boolean {
  try {
    const favorites = getFavoriteMeals();
    return favorites.some(f => f.meal.name === mealName);
  } catch (error) {
    console.error('Error checking if meal is favorited:', error);
    return false;
  }
}

// ユーザーの栄養データの保存
export function saveUserNutrition(data: UserData): void {
  try {
    if (!data) return;
    const encrypted = encrypt(data);
    if (encrypted) {
      safeSetItem(STORAGE_KEYS.USER_NUTRITION, encrypted);
    }
  } catch (error) {
    console.error('Error saving user nutrition data:', error);
  }
}

// ユーザーの栄養データの取得
export function getUserNutrition(): UserData | null {
  try {
    const saved = safeGetItem(STORAGE_KEYS.USER_NUTRITION);
    if (!saved) return null;
    
    const decrypted = decrypt(saved);
    if (!decrypted) return null;
    
    // データの検証
    const { calories, protein, fat, carbs } = decrypted;
    if (!calories || !protein || !fat || !carbs) return null;
    
    return decrypted;
  } catch (error) {
    console.error('Error getting user nutrition data:', error);
    return null;
  }
}

// 買い物リストの作成
export function createShoppingListFromMeals(meals: MenuItem[], name: string): SavedShoppingList {
  try {
    const categorizedIngredients = new Map<string, Set<string>>();
    const recipeMap = new Map<string, Set<string>>();

    meals.forEach(meal => {
      meal.ingredients?.forEach((ingredient: Ingredient) => {
        const key = `${ingredient.name}-${ingredient.amount}`;
        
        if (!recipeMap.has(key)) {
          recipeMap.set(key, new Set());
        }
        recipeMap.get(key)?.add(meal.name);

        const category = categorizeIngredient(ingredient.name);
        if (!categorizedIngredients.has(category)) {
          categorizedIngredients.set(category, new Set());
        }
        categorizedIngredients.get(category)?.add(key);
      });
    });

    const items = Array.from(categorizedIngredients.entries()).map(([category, ingredients]) => ({
      category,
      ingredients: Array.from(ingredients).map(key => {
        const [name, amount] = key.split('-');
        return {
          name,
          amount,
          recipes: Array.from(recipeMap.get(key) || []),
        };
      }),
    }));

    const newList: SavedShoppingList = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
      items,
    };

    const lists = getShoppingLists();
    const encrypted = encrypt([newList, ...lists]);
    if (encrypted) {
      safeSetItem(STORAGE_KEYS.SHOPPING_LISTS, encrypted);
    }

    return newList;
  } catch (error) {
    console.error('Error creating shopping list:', error);
    throw error;
  }
}

// 買い物リストの取得
export function getShoppingLists(): SavedShoppingList[] {
  try {
    const saved = safeGetItem(STORAGE_KEYS.SHOPPING_LISTS);
    const decrypted = decrypt(saved);
    return Array.isArray(decrypted) ? decrypted : [];
  } catch (error) {
    console.error('Error getting shopping lists:', error);
    return [];
  }
}

// 買い物リストの更新
export function updateShoppingList(list: SavedShoppingList): void {
  try {
    const lists = getShoppingLists();
    const updatedLists = lists.map(l => l.id === list.id ? list : l);
    const encrypted = encrypt(updatedLists);
    if (encrypted) {
      safeSetItem(STORAGE_KEYS.SHOPPING_LISTS, encrypted);
    }
  } catch (error) {
    console.error('Error updating shopping list:', error);
  }
}

// 買い物リストの削除
export function deleteShoppingList(id: string): void {
  try {
    const lists = getShoppingLists();
    const encrypted = encrypt(lists.filter(list => list.id !== id));
    if (encrypted) {
      safeSetItem(STORAGE_KEYS.SHOPPING_LISTS, encrypted);
    }
    // チェック状態も削除
    localStorage.removeItem(`${STORAGE_KEYS.CHECKED_ITEMS}_${id}`);
  } catch (error) {
    console.error('Error deleting shopping list:', error);
  }
}

// チェックされた項目の保存
export function saveCheckedItems(listId: string, itemKey: string, checked: boolean): void {
  try {
    const checkedItems = getCheckedItems(listId);
    if (checked) {
      checkedItems.add(itemKey);
    } else {
      checkedItems.delete(itemKey);
    }
    const encrypted = encrypt(Array.from(checkedItems));
    if (encrypted) {
      safeSetItem(`${STORAGE_KEYS.CHECKED_ITEMS}_${listId}`, encrypted);
    }
  } catch (error) {
    console.error('Error saving checked items:', error);
  }
}

// チェックされた項目の取得
export function getCheckedItems(listId: string): Set<string> {
  try {
    const saved = safeGetItem(`${STORAGE_KEYS.CHECKED_ITEMS}_${listId}`);
    const decrypted = decrypt(saved);
    return new Set(Array.isArray(decrypted) ? decrypted : []);
  } catch (error) {
    console.error('Error getting checked items:', error);
    return new Set();
  }
}

// 食材のカテゴリー分類
function categorizeIngredient(name: string): string {
  if (name.includes('肉') || name.includes('チキン')) return '肉類';
  if (name.includes('魚') || name.includes('サバ') || name.includes('鮭')) return '魚介類';
  if (name.includes('卵') || name.includes('チーズ') || name.includes('ヨーグルト')) return '卵・乳製品';
  if (name.includes('油') || name.includes('バター') || name.includes('マヨネーズ')) return '調味料・油';
  if (name.includes('ほうれん草') || name.includes('トマト') || name.includes('キャベツ')) return '野菜類';
  return 'その他';
}