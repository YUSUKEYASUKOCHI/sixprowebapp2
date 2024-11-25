import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, ChevronRight } from 'lucide-react';

interface GuideStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image?: string;
}

interface UserGuideProps {
  standalone?: boolean;
}

const GUIDE_STEPS: GuideStep[] = [
  {
    title: "1. カロリー設定",
    description: "スライダーまたは直接入力で1日の目標カロリーを設定します。",
    icon: <span className="text-[#FF3B30] text-2xl">🎯</span>,
    details: [
      "画面上部のカロリー入力欄に、目標とする1日の摂取カロリーを入力します。",
      "スライダーを使って、700-3,000kcalの範囲で簡単に調整できます。",
      "入力されたカロリーから、最適なタンパク質・脂質・糖質の比率を自動で計算します。",
      "設定した値は自動的に保存され、次回訪問時にも維持されます。"
    ],
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400"
  },
  {
    title: "2. メニュータイプ選択",
    description: "ライフスタイルに合わせて3つのメニューパターンから選択できます。",
    icon: <span className="text-[#FF9500] text-2xl">📋</span>,
    details: [
      "食材固定メニュー：買い物効率重視のシンプルな献立です。",
      "レシピ版：料理好きのための本格的なレシピが含まれています。",
      "コンビニ版：時短重視のお手軽メニューです。",
      "各メニューは栄養バランスを考慮して設計されています。"
    ]
  },
  {
    title: "3. 曜日選択",
    description: "メニューを確認したい曜日を選択します。",
    icon: <span className="text-[#34C759] text-2xl">📅</span>,
    details: [
      "画面上部の曜日タブから確認したい日を選択します。",
      "左右のスワイプで曜日を切り替えることができます。",
      "各曜日のメニューは朝食・昼食・夕食で構成されています。",
      "メニューをタップすると詳細なレシピと栄養情報が表示されます。"
    ]
  },
  {
    title: "4. 買い物リスト",
    description: "選択したメニューの食材をまとめて買い物リストに追加できます。",
    icon: <span className="text-[#007AFF] text-2xl">🛒</span>,
    details: [
      "「買い物リストに追加」ボタンで、選択した曜日のメニューに必要な食材を一括で追加できます。",
      "食材はカテゴリー別に自動で分類されます。",
      "買い物リストは保存され、いつでも確認できます。",
      "不要なリストは簡単に削除できます。"
    ]
  },
  {
    title: "5. お気に入り機能",
    description: "気に入ったメニューを保存して後で簡単にアクセスできます。",
    icon: <span className="text-[#5856D6] text-2xl">⭐️</span>,
    details: [
      "メニューの横にあるハートアイコンをタップしてお気に入りに登録できます。",
      "お気に入りに登録したメニューは専用タブで管理できます。",
      "登録したメニューはいつでも確認可能です。",
      "お気に入りからの削除も簡単にできます。"
    ]
  }
];

function UserGuide({ standalone = false }: UserGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const handleStepClick = (index: number) => {
    setSelectedStep(index);
    if (!standalone) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setSelectedStep(null);
    if (!standalone) {
      setIsOpen(false);
    }
  };

  const content = (
    <div className="space-y-4">
      {GUIDE_STEPS.map((step, index) => (
        <motion.button
          key={index}
          onClick={() => handleStepClick(index)}
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`
            flex items-start gap-4 p-4 bg-white rounded-xl transition-all group
            ${selectedStep === null ? 'shadow-sm hover:shadow-md' : 'opacity-40'}
            ${selectedStep === index ? 'opacity-100 shadow-lg scale-105' : ''}
          `}>
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
              {step.icon}
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </motion.button>
      ))}
    </div>
  );

  const detailModal = (
    <AnimatePresence>
      {selectedStep !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-[80] flex items-center justify-center p-6 ${standalone ? 'bg-black/50' : ''} backdrop-blur-sm`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
                  {GUIDE_STEPS[selectedStep].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {GUIDE_STEPS[selectedStep].title}
                  </h3>
                  <p className="text-gray-600">
                    {GUIDE_STEPS[selectedStep].description}
                  </p>
                </div>
              </div>

              {GUIDE_STEPS[selectedStep].image && (
                <img
                  src={GUIDE_STEPS[selectedStep].image}
                  alt={GUIDE_STEPS[selectedStep].title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              )}

              <div className="space-y-4">
                {GUIDE_STEPS[selectedStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-[#007AFF] text-sm font-medium">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleClose}
                className="w-full p-4 bg-[#007AFF] text-white font-medium rounded-xl hover:bg-[#0066CC] transition-colors"
              >
                閉じる
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (standalone) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-gray-900">使い方ガイド</h2>
        </div>
        {content}
        {detailModal}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="ヘルプを表示"
      >
        <HelpCircle className="h-6 w-6 text-[#007AFF]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={handleClose}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-[70] max-h-[90vh] overflow-hidden"
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-3" />

              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    使い方ガイド
                  </h2>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-6">
                {content}
              </div>
            </motion.div>

            {detailModal}
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default UserGuide;