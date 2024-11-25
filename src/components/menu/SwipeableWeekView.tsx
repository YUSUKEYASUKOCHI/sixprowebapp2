import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeableWeekViewProps {
  currentDay: number;
  onDayChange: (day: number) => void;
  days: string[];
  children: React.ReactNode;
}

export default function SwipeableWeekView({
  currentDay,
  onDayChange,
  days,
  children
}: SwipeableWeekViewProps) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentDay < days.length - 1) {
        onDayChange(currentDay + 1);
      }
    },
    onSwipedRight: () => {
      if (currentDay > 0) {
        onDayChange(currentDay - 1);
      }
    },
    trackMouse: true
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div className="relative overflow-hidden" {...handlers}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => currentDay > 0 && onDayChange(currentDay - 1)}
          className={`p-2 rounded-full transition-colors ${
            currentDay > 0 
              ? 'hover:bg-gray-100 text-gray-600' 
              : 'text-gray-300 cursor-not-allowed'
          }`}
          disabled={currentDay === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <motion.h3 
          key={`day-${currentDay}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-gray-900"
        >
          {days[currentDay]}曜日
        </motion.h3>
        
        <button
          onClick={() => currentDay < days.length - 1 && onDayChange(currentDay + 1)}
          className={`p-2 rounded-full transition-colors ${
            currentDay < days.length - 1 
              ? 'hover:bg-gray-100 text-gray-600' 
              : 'text-gray-300 cursor-not-allowed'
          }`}
          disabled={currentDay === days.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentDay}
          custom={currentDay}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}