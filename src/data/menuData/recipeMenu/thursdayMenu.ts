import type { DailyMenu } from '../../../types';

export const thursdayMenu: DailyMenu = {
  朝食: [{
    name: 'チーズオムレツ',
    pfc: { protein: 18, fat: 13, carbs: 2 },
    difficulty: 'medium',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'チーズ', amount: '30g' },
      { name: 'バター', amount: '小さじ1' },
      { name: 'トマト', amount: '1/2個' },
      { name: 'アボカド', amount: '1/4個' }
    ],
    instructions: [
      '卵を溶く',
      'チーズを加える',
      'オムレツを作る'
    ],
    detailedInstructions: [
      '卵を溶きほぐし、塩コショウで味付けします',
      'チーズは細かく刻みます',
      'トマトは薄切りにします',
      'アボカドは薄くスライスします',
      'フライパンを中火で熱し、バターを溶かします',
      '卵を流し入れ、端から中央に向かって混ぜます',
      '半熟状態でチーズを散らし、三つ折りにします',
      'トマトとアボカドを添えて完成です'
    ]
  }],
  昼食: [{
    name: '鮭のバター焼き',
    pfc: { protein: 23, fat: 15, carbs: 3 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鮭', amount: '1切れ' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'バター', amount: '小さじ2' },
      { name: '醤油', amount: '小さじ1' }
    ],
    instructions: [
      '鮭をバターで焼く',
      'ブロッコリーを茹でる',
      'キノコを炒める'
    ],
    detailedInstructions: [
      '鮭は塩をふり、10分ほど置きます',
      'ブロッコリーは小房に分け、塩茹でします（2分）',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'フライパンを中火で熱し、バター半量を溶かします',
      '鮭を皮目から焼きます（片面3分）',
      '別のフライパンで残りのバターを溶かし、キノコを炒めます',
      'キノコに醤油を加えて味付けします',
      '鮭、ブロッコリー、キノコを盛り付けます'
    ]
  }],
  夕食: [{
    name: '豚しゃぶサラダ',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'easy',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'レタス', amount: '100g' },
      { name: 'キュウリ', amount: '1本' },
      { name: 'トマト', amount: '1個' },
      { name: 'オリーブオイル', amount: '大さじ1' }
    ],
    instructions: [
      '豚肉をしゃぶしゃぶする',
      '野菜を切る',
      'オリーブオイルをかける'
    ],
    detailedInstructions: [
      '豚肉は薄切りのまま、沸騰したお湯でしゃぶしゃぶします',
      'レタスは食べやすい大きさにちぎります',
      'キュウリは斜め薄切りにします',
      'トマトはくし形に切ります',
      '氷水で豚肉を冷やし、水気を切ります',
      '野菜と豚肉を彩りよく盛り付けます',
      'オリーブオイルをかけ、塩コショウで味を調えます'
    ]
  }]
};