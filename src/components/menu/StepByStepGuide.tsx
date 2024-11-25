import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, ChefHat, Clock, AlertCircle, X } from 'lucide-react';

interface StepByStepGuideProps {
  steps: string[];
  currentStep: number;
  onStepComplete: (step: number) => void;
  cookingTime?: number;
  onClose: () => void;
  detailedInstructions?: string[];  // 詳細な調理手順を追加
}

export default function StepByStepGuide({ 
  steps, 
  currentStep, 
  onStepComplete,
  cookingTime,
  onClose,
  detailedInstructions  // 詳細な調理手順を受け取る
}: StepByStepGuideProps) {
  // 詳細な手順があればそれを使用し、なければ通常の手順を使用
  const displaySteps = detailedInstructions || steps;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-[80] overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">調理手順</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#007AFF]" />
            <span className="text-gray-900 font-medium">
              調理時間: {cookingTime}分
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              完了: {currentStep}/{displaySteps.length}
            </span>
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#007AFF]"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / displaySteps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {displaySteps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onStepComplete(index + 1)}
                className={`
                  w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all
                  ${isCompleted 
                    ? 'bg-green-50 border-2 border-green-100' 
                    : isCurrent 
                      ? 'bg-blue-50 border-2 border-blue-100' 
                      : 'bg-gray-50 border-2 border-gray-100 hover:bg-gray-100'
                  }
                `}
                disabled={!isCurrent && !isCompleted}
              >
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${isCompleted 
                    ? 'bg-green-100' 
                    : isCurrent 
                      ? 'bg-blue-100' 
                      : 'bg-gray-200'
                  }
                `}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-green-700" strokeWidth={2.5} />
                  ) : isCurrent ? (
                    <ChefHat className="w-5 h-5 text-blue-600" />
                  ) : (
                    <span className="text-gray-600 font-medium">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1">
                  <p className={`text-base ${
                    isCompleted 
                      ? 'text-green-800' 
                      : isCurrent 
                        ? 'text-blue-800' 
                        : 'text-gray-600'
                  }`}>
                    {step}
                  </p>
                  {isCurrent && (
                    <div className="mt-2 flex items-start gap-2 text-sm text-blue-600">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>このステップを実行中です。完了したらタップしてください。</span>
                    </div>
                  )}
                </div>

                {isCurrent && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {currentStep === displaySteps.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-green-50 rounded-xl p-6 text-center"
          >
            <h3 className="text-lg font-medium text-green-800 mb-2">
              調理完了！お疲れ様でした 🎉
            </h3>
            <p className="text-green-700">
              すべての手順が完了しました。美味しく召し上がれ！
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              閉じる
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}