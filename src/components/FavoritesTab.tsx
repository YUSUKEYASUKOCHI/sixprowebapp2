import React, { useState, useMemo } from 'react';
import { Heart, Search, ChevronRight } from 'lucide-react';
import { getFavoriteMeals } from '../utils/storage';
import { createSearchPattern } from '../utils/textUtils';
import MealCard from './menu/MealCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function FavoritesTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const favorites = getFavoriteMeals();

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const searchPatterns = createSearchPattern(searchQuery);
    const results = new Set<string>();

    favorites.forEach(favorite => {
      // メニュー名を候補に追加
      if (searchPatterns.some(pattern => 
        favorite.meal.name.toLowerCase().includes(pattern)
      )) {
        results.add(favorite.meal.name);
      }

      // 食材名を候補に追加
      favorite.meal.ingredients?.forEach(ingredient => {
        if (searchPatterns.some(pattern => 
          ingredient.name.toLowerCase().includes(pattern)
        )) {
          results.add(ingredient.name);
        }
      });
    });

    return Array.from(results).slice(0, 5); // 最大5件まで表示
  }, [favorites, searchQuery]);

  const filteredFavorites = useMemo(() => {
    if (!searchQuery.trim()) return favorites;

    const searchPatterns = createSearchPattern(searchQuery);
    return favorites.filter(favorite => {
      const searchText = [
        favorite.meal.name,
        ...(favorite.meal.ingredients?.map(i => i.name) || []),
      ].join(' ').toLowerCase();

      return searchPatterns.some(pattern => searchText.includes(pattern));
    });
  }, [favorites, searchQuery]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-gray-900">お気に入りメニュー</h2>
      </div>

      {favorites.length > 0 && (
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              // 少し遅延を入れて、クリックイベントが先に発火するようにする
              setTimeout(() => setShowSuggestions(false), 200);
            }}
            placeholder="メニューやレシピを検索..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-2 border-gray-100 focus:border-[#007AFF] focus:ring focus:ring-[#007AFF]/10 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-gray-900">{suggestion}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence mode="wait">
        {favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-600">お気に入りに登録されたメニューはありません</p>
            <p className="text-gray-500 mt-2">
              メニューのハートアイコンをタップして、お気に入りに追加できます
            </p>
          </motion.div>
        ) : filteredFavorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-600">検索条件に一致するメニューが見つかりませんでした</p>
            <p className="text-gray-500 mt-2">
              別のキーワードで検索してみてください
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="divide-y divide-gray-100">
              {filteredFavorites.map(favorite => (
                <motion.div
                  key={favorite.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4"
                >
                  <MealCard
                    meal={favorite.meal}
                    expanded={true}
                    context={favorite.context}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}