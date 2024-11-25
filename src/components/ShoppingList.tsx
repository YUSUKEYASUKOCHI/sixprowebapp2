import React, { useMemo } from 'react';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import type { MenuItem, DailyMenu } from '../types';

interface ShoppingListProps {
  weeklyMenu: DailyMenu[];
  selectedDays: number[];
}

type CategoryType = '肉類' | '魚介類' | '卵・乳製品' | '野菜類' | '調味料・油' | 'その他';

interface IngredientItem {
  name: string;
  amount: string;
  recipes: string[];
}

const CATEGORY_MAP: Record<string, CategoryType> = {
  '鶏': '肉類',
  '豚': '肉類',
  '牛': '肉類',
  '鮭': '魚介類',
  'サバ': '魚介類',
  'ブリ': '魚介類',
  '卵': '卵・乳製品',
  'チーズ': '卵・乳製品',
  'ヨーグルト': '卵・乳製品',
  'ほうれん草': '野菜類',
  'ブロッコリー': '野菜類',
  'キャベツ': '野菜類',
  'レタス': '野菜類',
  'トマト': '野菜類',
  'キュウリ': '野菜類',
  'アボカド': '野菜類',
  'オリーブオイル': '調味料・油',
  'バター': '調味料・油',
  'マヨネーズ': '調味料・油',
  '醤油': '調味料・油',
};

function categorizeIngredient(name: string): CategoryType {
  for (const [key, category] of Object.entries(CATEGORY_MAP)) {
    if (name.includes(key)) return category;
  }
  return 'その他';
}

function ShoppingList({ weeklyMenu, selectedDays }: ShoppingListProps) {
  const [expandedCategories, setExpandedCategories] = React.useState<Set<CategoryType>>(new Set(['肉類']));

  const toggleCategory = (category: CategoryType) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const shoppingList = useMemo(() => {
    const ingredientMap = new Map<string, IngredientItem>();

    selectedDays.forEach(dayIndex => {
      const dayMenu = weeklyMenu[dayIndex];
      if (!dayMenu) return;

      ['朝食', '昼食', '夕食'].forEach(mealTime => {
        const meals = dayMenu[mealTime as keyof DailyMenu] as MenuItem[];
        if (!meals) return;

        meals.forEach(meal => {
          meal.ingredients?.forEach(ingredient => {
            const [, amount = '', name = ingredient] = ingredient.match(/^(.*?)\s*(\S+)$/) || [];
            const key = name.trim();
            
            if (ingredientMap.has(key)) {
              const item = ingredientMap.get(key)!;
              if (!item.recipes.includes(meal.name)) {
                item.recipes.push(meal.name);
              }
            } else {
              ingredientMap.set(key, {
                name: key,
                amount: amount.trim(),
                recipes: [meal.name]
              });
            }
          });
        });
      });
    });

    const categorizedList = new Map<CategoryType, IngredientItem[]>();
    const categories: CategoryType[] = ['肉類', '魚介類', '卵・乳製品', '野菜類', '調味料・油', 'その他'];
    categories.forEach(category => categorizedList.set(category, []));

    ingredientMap.forEach(item => {
      const category = categorizeIngredient(item.name);
      categorizedList.get(category)?.push(item);
    });

    return categorizedList;
  }, [weeklyMenu, selectedDays]);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
      <div className="flex items-center gap-3">
        <ShoppingCart className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-gray-900">買い物リスト</h3>
      </div>

      <div className="space-y-4">
        {Array.from(shoppingList.entries()).map(([category, items]) => {
          if (items.length === 0) return null;
          const isExpanded = expandedCategories.has(category);

          return (
            <div key={category} className="border-2 border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                  isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
              >
                <span className="font-medium text-gray-900">{category}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{items.length}品目</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        {item.amount && (
                          <span className="text-[#007AFF] font-medium">{item.amount}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        使用レシピ: {item.recipes.join('、')}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 rounded-xl p-4">
        <p className="text-blue-700 text-sm">
          ※ 表示される分量は目安です。実際の購入時は、パッケージサイズや販売単位に応じて調整してください。
        </p>
      </div>
    </div>
  );
}

export default ShoppingList;