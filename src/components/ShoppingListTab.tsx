import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronDown, Check, Trash2, Edit2, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getShoppingLists, deleteShoppingList, getCheckedItems, saveCheckedItems, updateShoppingList } from '../utils/storage';

interface ShoppingListTabProps {
  onEditModeChange: (isEditing: boolean) => void;
}

export default function ShoppingListTab({ onEditModeChange }: ShoppingListTabProps) {
  const [lists, setLists] = useState(() => getShoppingLists());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [checkedItemsMap, setCheckedItemsMap] = useState<Map<string, Set<string>>>(new Map());
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedLists, setSelectedLists] = useState<Set<string>>(new Set());
  const [swipedItem, setSwipedItem] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [deleteItemConfirm, setDeleteItemConfirm] = useState<{listId: string, itemKey: string} | null>(null);
  const [deletingItem, setDeletingItem] = useState<string | null>(null);

  useEffect(() => {
    const initialCheckedItems = new Map();
    lists.forEach(list => {
      const checkedItems = getCheckedItems(list.id);
      if (checkedItems) {
        initialCheckedItems.set(list.id, checkedItems);
      }
    });
    setCheckedItemsMap(initialCheckedItems);
  }, []);

  const toggleCategory = (listId: string, category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      const key = `${listId}-${category}`;
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleDeleteList = (id: string) => {
    deleteShoppingList(id);
    setLists(prev => prev.filter(list => list.id !== id));
    setShowDeleteConfirm(null);
  };

  const handleCheckItem = (listId: string, itemKey: string) => {
    const currentCheckedItems = checkedItemsMap.get(listId) || new Set();
    const newChecked = !currentCheckedItems.has(itemKey);
    
    saveCheckedItems(listId, itemKey, newChecked);
    
    setCheckedItemsMap(prev => {
      const next = new Map(prev);
      const updatedSet = new Set(currentCheckedItems);
      if (newChecked) {
        updatedSet.add(itemKey);
      } else {
        updatedSet.delete(itemKey);
      }
      next.set(listId, updatedSet);
      return next;
    });
  };

  const handleDeleteItem = async (listId: string, itemKey: string) => {
    setDeletingItem(itemKey);
    
    // アニメーションの時間を確保
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // リストから項目を削除
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        const updatedList = {
          ...list,
          items: list.items.map(category => ({
            ...category,
            ingredients: category.ingredients.filter(
              ing => `${ing.name}-${ing.amount}` !== itemKey
            )
          })).filter(category => category.ingredients.length > 0)
        };
        // ローカルストレージを更新
        updateShoppingList(updatedList);
        return updatedList;
      }
      return list;
    });

    setLists(updatedLists);
    setDeleteItemConfirm(null);
    setSwipedItem(null);
    setDeletingItem(null);
  };

  const toggleEditMode = () => {
    const newEditMode = !isEditMode;
    setIsEditMode(newEditMode);
    setSelectedLists(new Set());
    onEditModeChange(newEditMode);
  };

  const toggleListSelection = (id: string) => {
    setSelectedLists(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDeleteSelected = () => {
    selectedLists.forEach(id => {
      deleteShoppingList(id);
    });
    setLists(prev => prev.filter(list => !selectedLists.has(list.id)));
    setSelectedLists(new Set());
    setIsEditMode(false);
    onEditModeChange(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-gray-900">買い物リスト</h2>
        </div>
        {lists.length > 0 && (
          <button
            onClick={toggleEditMode}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isEditMode ? (
              <>
                <X className="h-5 w-5" />
                <span>キャンセル</span>
              </>
            ) : (
              <>
                <Edit2 className="h-5 w-5" />
                <span>編集</span>
              </>
            )}
          </button>
        )}
      </div>

      {lists.length === 0 ? (
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-gray-600">保存された買い物リストはありません</p>
        </div>
      ) : (
        <>
          {isEditMode && selectedLists.size === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-blue-50 rounded-xl p-4 mb-4"
            >
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-blue-700">
                  複数のリストを選択して、まとめて削除できます
                </p>
              </div>
            </motion.div>
          )}

          {isEditMode && selectedLists.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-[88px] z-30 bg-white shadow-lg rounded-xl p-4 mb-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-600">
                  {selectedLists.size}件選択中
                </span>
                <button
                  onClick={handleDeleteSelected}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                  <span>まとめて削除</span>
                </button>
              </div>
            </motion.div>
          )}

          <div className="space-y-6">
            <AnimatePresence>
              {lists.map(list => (
                <motion.div
                  key={list.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      {isEditMode ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleListSelection(list.id)}
                            className={`
                              w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors
                              ${selectedLists.has(list.id)
                                ? 'bg-[#34C759] border-[#34C759]'
                                : 'border-gray-300 hover:border-[#34C759]'
                              }
                            `}
                          >
                            {selectedLists.has(list.id) && (
                              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                            )}
                          </button>
                          <h3 className="text-lg font-medium text-gray-900">
                            {list.name}
                          </h3>
                        </div>
                      ) : (
                        <h3 className="text-lg font-medium text-gray-900">
                          {list.name}
                        </h3>
                      )}
                      {!isEditMode && (
                        <button
                          onClick={() => setShowDeleteConfirm(list.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      作成日: {new Date(list.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {list.items.map(category => {
                      const isCategoryExpanded = expandedCategories.has(`${list.id}-${category.category}`);

                      return (
                        <div key={category.category}>
                          <button
                            onClick={() => toggleCategory(list.id, category.category)}
                            className={`w-full flex items-center justify-between p-4 transition-colors ${
                              isCategoryExpanded ? 'bg-gray-50' : ''
                            }`}
                          >
                            <span className="font-medium text-gray-900">
                              {category.category}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">
                                {category.ingredients.length}品目
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  isCategoryExpanded ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {isCategoryExpanded && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="py-2">
                                  <AnimatePresence>
                                    {category.ingredients.map((ingredient) => {
                                      const itemKey = `${ingredient.name}-${ingredient.amount}`;
                                      const isChecked = checkedItemsMap.get(list.id)?.has(itemKey);
                                      const isItemSwiped = swipedItem === itemKey;
                                      const isDeleting = deletingItem === itemKey;

                                      return (
                                        <motion.div
                                          key={itemKey}
                                          initial={{ opacity: 1, height: "auto" }}
                                          exit={isDeleting ? {
                                            opacity: 0,
                                            height: 0,
                                            transition: { duration: 0.3 }
                                          } : undefined}
                                          className="relative overflow-hidden touch-pan-y"
                                          drag="x"
                                          dragConstraints={{ left: 0, right: 0 }}
                                          dragElastic={0.1}
                                          onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = offset.x + velocity.x;
                                            if (swipe < -50) {
                                              setSwipedItem(itemKey);
                                            } else if (swipe > 50 && isItemSwiped) {
                                              setSwipedItem(null);
                                            }
                                          }}
                                        >
                                          <div className="absolute inset-y-0 right-0 bg-red-500 flex items-center px-4">
                                            <Trash2 className="w-5 h-5 text-white" />
                                          </div>

                                          <motion.div
                                            className="relative bg-white flex items-center justify-between px-4 py-2"
                                            animate={{
                                              x: isItemSwiped ? -80 : 0
                                            }}
                                          >
                                            <div className="flex items-center gap-3">
                                              <button
                                                onClick={() => handleCheckItem(list.id, itemKey)}
                                                className={`
                                                  w-6 h-6 rounded border-2 transition-colors flex items-center justify-center
                                                  ${isChecked 
                                                    ? 'bg-[#34C759] border-[#34C759]' 
                                                    : 'border-gray-300 hover:border-[#34C759]'
                                                  }
                                                `}
                                              >
                                                {isChecked && <Check className="w-4 h-4 text-white" strokeWidth={2.5} />}
                                              </button>
                                              <div className={`${isChecked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                                                <span>{ingredient.name}</span>
                                                <span className="ml-2 text-gray-500">{ingredient.amount}</span>
                                              </div>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                              {ingredient.recipes.map(recipe => `${recipe}で使用`).join('、')}
                                            </span>
                                          </motion.div>

                                          {isItemSwiped && (
                                            <motion.button
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              className="absolute inset-y-0 right-0 bg-red-500 flex items-center px-4"
                                              onClick={() => setDeleteItemConfirm({ listId: list.id, itemKey })}
                                            >
                                              <Trash2 className="w-5 h-5 text-white" />
                                            </motion.button>
                                          )}
                                        </motion.div>
                                      );
                                    })}
                                  </AnimatePresence>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      )}

      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                買い物リストを削除しますか？
              </h3>
              <p className="text-gray-600 mb-6">
                この操作は取り消せません。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={() => handleDeleteList(showDeleteConfirm)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  削除する
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {deleteItemConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                この食材を削除しますか？
              </h3>
              <p className="text-gray-600 mb-6">
                この操作は取り消せません。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteItemConfirm(null)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={() => handleDeleteItem(deleteItemConfirm.listId, deleteItemConfirm.itemKey)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  削除する
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}