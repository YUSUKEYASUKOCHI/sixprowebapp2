import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSkeletonCard() {
  return (
    <div className="p-4 rounded-xl bg-gray-50 space-y-4">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="space-y-3"
      >
        <div className="h-6 bg-gray-200 rounded-lg w-3/4" />
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 rounded-lg w-20" />
          <div className="h-4 bg-gray-200 rounded-lg w-24" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 bg-gray-200 rounded-lg w-24" />
          <div className="h-8 bg-gray-200 rounded-lg w-24" />
          <div className="h-8 bg-gray-200 rounded-lg w-24" />
        </div>
      </motion.div>
    </div>
  );
}