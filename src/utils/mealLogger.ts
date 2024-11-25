import { openDB } from 'idb';
import type { DBSchema } from 'idb';
import { format } from 'date-fns';
import { encrypt, decrypt } from './encryption';

interface MealLog {
  id?: number;
  date: string;
  mealType: '朝食' | '昼食' | '夕食' | '間食';
  name: string;
  pfc: {
    protein: number;
    fat: number;
    carbs: number;
  };
  calories: number;
  timestamp: number;
}

interface MealLogDB extends DBSchema {
  'meal-logs': {
    key: number;
    value: MealLog;
    indexes: {
      'by-date': string;
    };
  };
}

const DB_NAME = 'meal-logger';
const STORE_NAME = 'meal-logs';

export async function initDB() {
  const db = await openDB<MealLogDB>(DB_NAME, 1, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('by-date', 'date');
    },
  });
  return db;
}

export async function logMeal(meal: Omit<MealLog, 'id'>) {
  try {
    const db = await initDB();
    const encryptedMeal = encrypt(meal);
    if (encryptedMeal) {
      await db.add(STORE_NAME, encryptedMeal);
    }
  } catch (error) {
    console.error('Error logging meal:', error);
  }
}

export async function getMealsByDate(date: string) {
  try {
    const db = await initDB();
    const meals = await db.getAllFromIndex(STORE_NAME, 'by-date', date);
    return meals.map(meal => decrypt(meal)).filter(Boolean);
  } catch (error) {
    console.error('Error getting meals by date:', error);
    return [];
  }
}

export async function getWeeklyLogs() {
  try {
    const db = await initDB();
    const today = new Date();
    const logs = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const encryptedLogs = await db.getAllFromIndex(STORE_NAME, 'by-date', dateStr);
      const decryptedLogs = encryptedLogs.map(log => decrypt(log)).filter(Boolean);
      logs.push({
        date: dateStr,
        meals: decryptedLogs,
        totals: calculateDayTotals(decryptedLogs),
      });
    }
    
    return logs;
  } catch (error) {
    console.error('Error getting weekly logs:', error);
    return [];
  }
}

function calculateDayTotals(meals: MealLog[]) {
  return meals.reduce((acc, meal) => ({
    protein: acc.protein + meal.pfc.protein,
    fat: acc.fat + meal.pfc.fat,
    carbs: acc.carbs + meal.pfc.carbs,
    calories: acc.calories + meal.calories,
  }), {
    protein: 0,
    fat: 0,
    carbs: 0,
    calories: 0,
  });
}