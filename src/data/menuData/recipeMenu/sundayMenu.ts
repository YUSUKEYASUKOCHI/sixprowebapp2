import type { DailyMenu } from '../../../types';

export const sundayMenu: DailyMenu = {
  朝食: [{
    name: 'アボカドエッグボート',
    pfc: { protein: 18, fat: 14, carbs: 3 },
    difficulty: 'medium',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      { name: 'アボカド', amount: '1個' },
      { name: '卵', amount: '2個' },
      { name: 'チーズ', amount: '20g' },
      { name: 'バター', amount: '小さじ1' },
      { name: 'トマト', amount: '1/2個' }
    ],
    instructions: [
      'アボカドを半分に切り種を除く',
      '卵を入れて焼く',
      'チーズをのせる',
      'トマトを添える'
    ],
    detailedInstructions: [
      'アボカドを縦半分に切り、種を除きます',
      '中身をスプーンで少しくり抜き、窪みを作ります',
      'オーブンを200度に予熱します',
      'くり抜いた部分に卵を割り入れます',
      '塩コショウをし、チーズを散らします',
      'オーブンで8-10分焼きます',
      'トマトは薄切りにします',
      'アボカドエッグとトマトを盛り付けます'
    ]
  }],
  昼食: [{
    name: '鶏肉のハーブグリル',
    pfc: { protein: 25, fat: 15, carbs: 4 },
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
      '鶏肉にハーブをまぶす',
      'オリーブオイルで焼く',
      'ブロッコリーを蒸す',
      'トマトを添える'
    ],
    detailedInstructions: [
      '鶏むね肉は厚みを均一にし、ハーブと塩コショウをまぶします',
      'にんにくはみじん切りにします',
      'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
      '香りが出たら鶏肉を入れ、両面をこんがり焼きます（片面5-6分）',
      'ブロッコリーは小房に分け、電子レンジで2分加熱します',
      'トマトはくし形に切ります',
      '鶏肉は5分ほど休ませてから切り分けます',
      '野菜と共に盛り付け、オリーブオイルを回しかけます'
    ]
  }],
  夕食: [{
    name: 'サバの香草焼き',
    pfc: { protein: 24, fat: 16, carbs: 4 },
    difficulty: 'medium',
    cookingTime: 20,
    servings: 1,
    ingredients: [
      { name: 'サバ', amount: '1切れ' },
      { name: 'ほうれん草', amount: '100g' },
      { name: 'キノコ類', amount: '100g' },
      { name: 'オリーブオイル', amount: '大さじ1' },
      { name: 'にんにく', amount: '1片' }
    ],
    instructions: [
      'サバを焼く',
      'ほうれん草を茹でる',
      'キノコを炒める',
      'オリーブオイルとにんにくで味付け'
    ],
    detailedInstructions: [
      'サバは塩コショウとドライハーブをまぶし、10分ほど置きます',
      'にんにくはみじん切りにします',
      'ほうれん草は根を切り、塩茹でします（1分）',
      'キノコ類は石づきを取り、食べやすい大きさに分けます',
      'フライパンを熱し、オリーブオイルとにんにくを入れます',
      'サバを皮目から焼きます（片面3-4分）',
      '別のフライパンでキノコを炒めます',
      'サバ、ほうれん草、キノコを彩りよく盛り付けます'
    ]
  }]
};