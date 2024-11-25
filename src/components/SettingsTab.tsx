import React from 'react';
import { Settings, Moon, Bell, Download, Trash2 } from 'lucide-react';

export default function SettingsTab() {
  const clearAllData = () => {
    if (confirm('全てのデータを削除してもよろしいですか？この操作は取り消せません。')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-gray-900">設定</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-gray-600" />
              <span className="text-gray-900">ダークモード</span>
            </div>
            <div className="w-11 h-6 bg-gray-200 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow transition-transform" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="text-gray-900">通知設定</span>
            </div>
            <div className="w-11 h-6 bg-[#007AFF] rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-[calc(100%-1.375rem)] top-0.5 shadow transition-transform" />
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5 text-gray-600" />
            <span className="text-gray-900">データのエクスポート</span>
          </button>

          <button
            onClick={clearAllData}
            className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-red-500"
          >
            <Trash2 className="h-5 w-5" />
            <span>全データを削除</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            アプリについて
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>バージョン: 1.0.0</p>
            <p>© 2024 SIXPRO パーソナル栄養管理メニュープランニングシステム</p>
          </div>
        </div>
      </div>
    </div>
  );
}