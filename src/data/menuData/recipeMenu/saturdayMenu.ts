import type { DailyMenu } from '../../../types';

export const saturdayMenu: DailyMenu = {
  朝食: [{
    name: 'キノコとチーズのオムレツ',
    pfc: { protein: 20, fat: 15, carbs: 3 },
    difficulty: 'medium',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '2個' },
      { name: 'キノコ類', amount: '50g' },
      { name: 'チーズ', amount: '30g' },
      { name: 'バター', amount: '小さじ1' },
      { name: 'トマト', amount: '1/2個' }
    ],
    instructions: [
      'キノコを炒める',
      '卵を流し入れる',
      'チーズを加える',
      'トマトを添える'
    ],
    detailedInstructions: [
      'キノコ類は石づきを切り落とし、食べやすい大きさに切ります',
      'フライパンを中火で熱し、バター半量でキノコを炒めます',
      'キノコを取り出し、残りのバターを溶かします',
      '溶き卵（塩コショウ入り）を流し入れ、端から中央に向かって混ぜます',
      '半熟状態になったら、炒めたキノコとチーズを散らします',
      '三つ折りにして仕上げます',
      'トマトは薄切りにします',
      'オムレツとトマトを盛り付けます'
    ]
  }],
  昼食: [{
    name: '豚肉の生姜焼き',
    pfc: { protein: 24, fat: 14, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'キャベツ', amount: '150g' },
      { name: '生姜', amount: '1かけ' },
      { name: '醤油', amount: '小さじ1' },
      { name: 'オリーブオイル', amount: '大さじ1' }
    ],
    instructions: [
      '豚肉を焼く',
      'キャベツを千切り',
      '生姜と醤油で味付け'
    ],
    detailedInstructions: [
      '豚肉は筋を切り、塩コショウをします',
      '生姜はすりおろします',
      'キャベツは千切りにします',
      'フライパンを中火で熱し、オリーブオイルを入れます',
      '豚肉を並べ、両面を焼きます（片面2-3分）',
      '火が通ったら生姜と醤油を加えて絡めます',
      'キャベツは電子レンジで1分加熱します',
      '豚肉とキャベツを盛り付けます'
    ]
  }],
  夕食: [{
    name: '鮭のムニエル',
    pfc: { protein: 25, fat: 16, carbs: 5 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: '鮭', amount: '1切れ' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'バター', amount: '大さじ1' },
      { name: 'レモン', amount: '1/4個' },
      { name: 'オリーブオイル', amount: '小さじ1' }
    ],
    instructions: [
      '鮭をバターで焼く',
      'ブロッコリーを蒸す',
      'レモンを絞る',
      'オリーブオイルをかける'
    ],
    detailedInstructions: [
      '鮭は塩コショウをし、10分ほど置きます',
      'ブロッコリーは小房に分け、電子レンジで2分加熱します',
      'フライパンを中火で熱し、バター半量を溶かします',
      '鮭を入れ、両面をこんがりと焼きます（片面3-4分）',
      '残りのバターを加え、鮭に絡めます',
      'レモンを絞り、香りを付けます',
      'ブロッコリーにオリーブオイルを回しかけます',
      '鮭とブロッコリーを盛り付けます'
    ]
  }]
};