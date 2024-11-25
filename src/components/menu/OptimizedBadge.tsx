import React from 'react';
import { Sparkles } from 'lucide-react';

export default function OptimizedBadge() {
  return (
    <div className="absolute -top-3 right-4 z-10">
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#007AFF]/10 to-[#34C759]/10 rounded-full backdrop-blur-sm border border-white/20">
        <Sparkles className="w-4 h-4 text-[#007AFF]" strokeWidth={1.5} />
        <span className="text-[14px] font-medium bg-gradient-to-r from-[#007AFF] to-[#34C759] text-transparent bg-clip-text whitespace-nowrap">
          あなた専用に最適化済み
        </span>
      </div>
    </div>
  );
}