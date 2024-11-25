import type { DailyMenu } from '../../../types';

export const wednesdayMenu: DailyMenu = {
  朝食: [{
    name: 'アボカドエッグ',
    pfc: { protein: 20, fat: 15, carbs: 3 },
    difficulty: 'easy',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'アボカド', amount: '1/2個' },
      { name: 'チーズ', amount: '20g' },
      { name: 'バター', amount: '小さじ1' },
      { name: 'レタス', amount: '30g' }
    ],
    instructions: [
      '卵を炒める',
      'アボカドを和える',
      'チーズを加える'
    ],
    detailedInstructions: [
      '卵を溶きほぐし、塩コショウで味付けします',
      'アボカドは1/2個を一口大に切ります',
      'レタスは食べやすい大きさにちぎります',
      'フライパンを中火で熱し、バターを溶かします',
      '卵を流し入れ、半熟状態まで炒めます',
      'チーズを加えて軽く混ぜ合わせます',
      'アボカドを加えて優しく和えます',
      'レタスを敷いた器に盛り付けます'
    ]
  }],
  昼食: [{
    name: '鶏むね肉のハーブグリル',
    pfc: { protein: 26, fat: 15, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鶏むね肉', amount: '120g' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'トマト', amount: '1個' },
      { name: 'オリーブオイル', amount: '大さじ1' },
      { name: 'にんにく', amount: '1片' }
    ],
    instructions: [
      '鶏肉に下味をつける',
      'オリーブオイルで焼く',
      '野菜を添える'
    ],
    detailedInstructions: [
      '鶏むね肉は厚みを均一にし、塩コショウとハーブで下味をつけます',
      'にんにくはみじん切りにします',
      'ブロッコリーは小房に分け、塩茹でします（2分）',
      'トマトは楔形に切ります',
      'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
      '鶏肉を入れ、両面をこんがり焼きます（片面5分）',
      '一度取り出し、5分ほど休ませます',
      '食べやすい大きさに切り、野菜と共に盛り付けます'
    ]
  }],
  夕食: [{
    name: '豚肉と野菜の炒め物',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'easy',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'キャベツ', amount: '150g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'バター', amount: '小さじ1' },
      { name: '醤油', amount: '小さじ1' }
    ],
    instructions: [
      '豚肉を切る',
      '野菜を切る',
      'バターで炒める'
    ],
    detailedInstructions: [
      '豚肉は一口大に切り、塩コショウをします',
      'キャベツは食べやすい大きさに切ります',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'フライパンを中火で熱し、バターを溶かします',
      '豚肉を入れ、こんがりと焼きます',
      '野菜を加えて炒めます',
      '醤油を加えて味付けし、全体を混ぜ合わせます',
      '器に盛り付けて完成です'
    ]
  }]
};