import React from 'react';
import { Info } from 'lucide-react';

export default function ConvenienceTips() {
  return (
    <div className="bg-blue-50 rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <div className="space-y-4">
          <h4 className="text-[18px] font-medium text-blue-900">コンビニでの購入ポイント</h4>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
              <span className="text-[16px] leading-relaxed">野菜サラダは、ドレッシングが別添えのものを選ぶ</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
              <span className="text-[16px] leading-relaxed">サラダチキンは、糖質の少ない味付けを確認</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
              <span className="text-[16px] leading-relaxed">魚系の商品は、消費期限をよく確認</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
              <span className="text-[16px] leading-relaxed">ナッツ類は小分けパックを活用</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
              <span className="text-[16px] leading-relaxed">チーズは個包装タイプを選択</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}