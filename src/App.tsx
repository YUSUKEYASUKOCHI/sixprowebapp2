import React, { useState, useEffect } from 'react';
import UserProfilePanel from './components/UserProfilePanel';
import WeeklyMenu from './components/WeeklyMenu';
import Navigation from './components/Navigation';
import ShoppingListTab from './components/ShoppingListTab';
import FavoritesTab from './components/FavoritesTab';
import UserGuide from './components/UserGuide';
import BottomNavigation from './components/BottomNavigation';
import type { UserData } from './types';
import { calculateDailyPFC } from './utils/nutritionCalculator';
import { saveUserNutrition, getUserNutrition } from './utils/storage';

function App() {
  const [currentTab, setCurrentTab] = useState('menu');
  const [userData, setUserData] = useState<UserData | null>(() => getUserNutrition());
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dailyPFC = userData ? calculateDailyPFC(userData) : null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUserDataSubmit = (data: UserData) => {
    setUserData(data);
    saveUserNutrition(data);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'menu':
        return (
          <>
            <UserProfilePanel onSubmit={handleUserDataSubmit} initialData={userData} />
            {dailyPFC && <WeeklyMenu userPFC={dailyPFC} />}
          </>
        );
      case 'shopping':
        return <ShoppingListTab onEditModeChange={setIsEditMode} />;
      case 'favorites':
        return <FavoritesTab />;
      case 'guide':
        return <UserGuide standalone />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <header className="bg-white/60 backdrop-blur-2xl sticky top-0 z-50 border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="https://utagesystem.s3.ap-northeast-1.amazonaws.com/XMGCtz22Dugu/DFV4ooetZWQj2hKkHXy4lAgxHft5rBsoK07DLMDv.png" 
                alt="SIXPRO" 
                className="h-16 w-auto"
              />
              <div className="leading-tight">
                <h1 className="text-2xl font-bold text-gray-900">
                  パーソナル栄養管理メニュー
                </h1>
                <h2 className="text-xl font-medium text-gray-600 mt-1">
                  プランニングシステム
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>

      {!isMobile && (
        <Navigation 
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      )}

      <main className={`max-w-5xl mx-auto px-6 py-8 space-y-8 ${isMobile ? 'pb-24' : ''}`}>
        {renderContent()}
      </main>

      {isMobile && (
        <BottomNavigation
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      )}
    </div>
  );
}

export default App;