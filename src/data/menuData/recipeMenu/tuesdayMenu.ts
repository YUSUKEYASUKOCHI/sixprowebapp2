import type { DailyMenu } from '../../../types';

export const tuesdayMenu: DailyMenu = {
  朝食: [{
    name: '無糖ヨーグルトとナッツのセット',
    pfc: { protein: 18, fat: 14, carbs: 3 },
    difficulty: 'easy',
    cookingTime: 10,
    servings: 1,
    ingredients: [
      { name: '卵', amount: '1個' },
      { name: 'チーズ', amount: '30g' },
      { name: 'アーモンド', amount: '15g' },
      { name: 'クルミ', amount: '10g' },
      { name: 'アボカド', amount: '1/4個' }
    ],
    instructions: [
      '卵を茹でる',
      'チーズとナッツを盛り付ける',
      'アボカドを添える'
    ],
    detailedInstructions: [
      '卵は沸騰したお湯に入れ、7分茹でます',
      '氷水にとって冷やし、殻をむきます',
      'チーズは一口大に切ります',
      'アボカドは1/4個を薄くスライスします',
      'ナッツ類は食べやすい大きさに砕きます',
      '全ての材料を彩りよく盛り付けます'
    ]
  }],
  昼食: [{
    name: 'サバの塩焼きと温野菜',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: 'サバ', amount: '1切れ' },
      { name: 'ブロッコリー', amount: '100g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'オリーブオイル', amount: '大さじ1' },
      { name: '醤油', amount: '小さじ1' }
    ],
    instructions: [
      'サバに塩をふる',
      'ブロッコリーを茹でる',
      'キノコを炒める'
    ],
    detailedInstructions: [
      'サバは塩をふり、10分ほど置きます',
      'ブロッコリーは小房に分け、塩茹でします（2分）',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'フライパンを熱し、サバを皮目から焼きます（片面3分）',
      '別のフライパンでオリーブオイルを熱し、キノコを炒めます',
      'キノコに醤油を加えて味付けします',
      'サバ、ブロッコリー、キノコを盛り付けます'
    ]
  }],
  夕食: [{
    name: '豚肉と野菜のオイル蒸し',
    pfc: { protein: 25, fat: 18, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 25,
    servings: 1,
    ingredients: [
      { name: '豚ロース', amount: '100g' },
      { name: 'キャベツ', amount: '150g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'オリーブオイル', amount: '大さじ1' },
      { name: 'にんにく', amount: '1片' }
    ],
    instructions: [
      '豚肉を一口大に切る',
      '野菜を切る',
      '蒸し焼きにする'
    ],
    detailedInstructions: [
      '豚肉は一口大に切り、塩コショウをします',
      'キャベツは食べやすい大きさに切ります',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'にんにくはみじん切りにします',
      'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
      '豚肉を加えて炒めます',
      '野菜を加え、蓋をして蒸し焼きにします（5分）',
      '全体を軽く混ぜ合わせて完成です'
    ]
  }]
};