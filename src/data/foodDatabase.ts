import type { FoodNutrition } from '../types';

// 日本食品標準成分表2023年版（九訂）に基づくデータ
export const FOOD_DATABASE: FoodNutrition[] = [
  // 肉類
  {
    id: 'chicken_breast',
    name: '鶏むね肉（皮なし）',
    category: 'protein',
    nutrients: {
      protein: 24.4,
      fat: 1.2,
      carbs: 0,
      calories: 108
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100, 120],
    tips: '火を通しすぎると固くなるので、中火でじっくり焼くのがポイントです。',
    alternatives: ['鶏もも肉', '豚ロース', '牛もも肉']
  },
  {
    id: 'pork_loin',
    name: '豚ロース肉',
    category: 'protein',
    nutrients: {
      protein: 22.3,
      fat: 8.9,
      carbs: 0,
      calories: 169
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100, 120],
    tips: '脂身を残して焼くことで、肉の旨味と柔らかさを保てます。',
    alternatives: ['豚もも肉', '鶏もも肉', '牛ロース']
  },
  {
    id: 'mackerel',
    name: 'サバ',
    category: 'protein',
    nutrients: {
      protein: 23.2,
      fat: 16.1,
      carbs: 0,
      calories: 242
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100],
    tips: '皮目をパリッと焼くことで、脂の旨味が閉じ込められます。',
    alternatives: ['アジ', 'イワシ', 'ブリ']
  },
  {
    id: 'salmon_raw',
    name: '生鮭',
    category: 'protein',
    nutrients: {
      protein: 22.9,
      fat: 4.1,
      carbs: 0,
      calories: 129
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100],
    tips: '皮目をパリッと焼くことで、食感と風味が良くなります。',
    alternatives: ['マス', 'ブリ', 'タラ']
  },
  // 卵・乳製品
  {
    id: 'egg_whole',
    name: '全卵',
    category: 'protein',
    nutrients: {
      protein: 12.4,
      fat: 10.1,
      carbs: 0.3,
      calories: 142
    },
    unit: '個',
    baseAmount: 1,
    weightPerUnit: 60,
    servingSuggestions: [1, 2],
    tips: '常温に戻してから調理すると、ふんわりと仕上がります。',
    alternatives: ['卵白のみ', '豆腐', 'プロテインパウダー']
  },
  {
    id: 'cheese',
    name: 'チーズ',
    category: 'protein',
    nutrients: {
      protein: 26.0,
      fat: 31.2,
      carbs: 2.2,
      calories: 393
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [20, 30, 40],
    tips: '室温に戻してから使用すると、溶けやすく風味も良くなります。',
    alternatives: ['モッツァレラ', 'クリームチーズ', 'カマンベール']
  },
  {
    id: 'cream_cheese',
    name: 'クリームチーズ',
    category: 'fat',
    nutrients: {
      protein: 7.0,
      fat: 35.0,
      carbs: 2.2,
      calories: 350
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [20, 30],
    tips: '室温に戻すと扱いやすくなります。冷蔵庫から出して15-20分程度が目安です。',
    alternatives: ['マスカルポーネ', 'カッテージチーズ', 'リコッタチーズ']
  },
  // 野菜類
  {
    id: 'spinach_raw',
    name: 'ほうれん草（生）',
    category: 'vegetable',
    nutrients: {
      protein: 2.3,
      fat: 0.4,
      carbs: 2.4,
      calories: 20
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100],
    tips: '茹でた後は冷水にさらし、しっかり水気を絞ることで、色鮮やかに仕上がります。',
    alternatives: ['小松菜', '水菜', 'チンゲン菜']
  },
  {
    id: 'broccoli_raw',
    name: 'ブロッコリー（生）',
    category: 'vegetable',
    nutrients: {
      protein: 4.6,
      fat: 0.5,
      carbs: 5.2,
      calories: 35
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [80, 100],
    tips: '小房に分けて茹でることで、均一に火が通ります。',
    alternatives: ['カリフラワー', 'アスパラガス', '菜の花']
  },
  {
    id: 'lettuce',
    name: 'レタス',
    category: 'vegetable',
    nutrients: {
      protein: 1.2,
      fat: 0.2,
      carbs: 2.8,
      calories: 15
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [50, 100],
    tips: '水でよく洗い、水気をしっかり切ることで、シャキシャキした食感を保てます。',
    alternatives: ['サニーレタス', 'グリーンリーフ', 'ロメインレタス']
  },
  {
    id: 'cucumber',
    name: 'キュウリ',
    category: 'vegetable',
    nutrients: {
      protein: 1.0,
      fat: 0.1,
      carbs: 2.4,
      calories: 14
    },
    unit: '本',
    baseAmount: 1,
    weightPerUnit: 100,
    servingSuggestions: [0.5, 1],
    tips: '塩もみすることで、シャキシャキした食感と程よい塩味が付きます。',
    alternatives: ['ズッキーニ', 'オクラ', 'アスパラガス']
  },
  {
    id: 'tomato',
    name: 'トマト',
    category: 'vegetable',
    nutrients: {
      protein: 0.7,
      fat: 0.1,
      carbs: 3.9,
      calories: 19
    },
    unit: '個',
    baseAmount: 1,
    weightPerUnit: 150,
    servingSuggestions: [0.5, 1],
    tips: '常温保存で完熟させると、甘みと旨味が増します。',
    alternatives: ['ミニトマト', 'パプリカ', '赤ピーマン']
  },
  {
    id: 'mushroom_mix',
    name: 'キノコ類',
    category: 'vegetable',
    nutrients: {
      protein: 2.2,
      fat: 0.3,
      carbs: 4.8,
      calories: 22
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [50, 100],
    tips: '軽く洗って水気を切り、強火で手早く炒めることで、香りと食感が良くなります。',
    alternatives: ['しめじ', 'エリンギ', 'マッシュルーム']
  },
  // 油脂類
  {
    id: 'olive_oil',
    name: 'オリーブオイル',
    category: 'fat',
    nutrients: {
      protein: 0,
      fat: 100,
      carbs: 0,
      calories: 921
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [5, 10, 15],
    tips: '加熱し過ぎると風味が失われるので、仕上げに使うのがおすすめです。',
    alternatives: ['アマニ油', 'アボカドオイル', 'ココナッツオイル']
  },
  {
    id: 'butter',
    name: 'バター',
    category: 'fat',
    nutrients: {
      protein: 0.6,
      fat: 81.0,
      carbs: 0.2,
      calories: 745
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [5, 10, 15],
    tips: '火加減を調整しながら使うことで、こげずに香ばしく仕上がります。',
    alternatives: ['ギー', 'マーガリン', 'オリーブオイル']
  },
  {
    id: 'coconut_oil',
    name: 'ココナッツオイル',
    category: 'fat',
    nutrients: {
      protein: 0,
      fat: 100,
      carbs: 0,
      calories: 862
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [5, 10, 15],
    tips: '中鎖脂肪酸を含み、エネルギーに変換されやすい特徴があります。',
    alternatives: ['オリーブオイル', 'アマニ油', 'アボカドオイル']
  },
  {
    id: 'avocado',
    name: 'アボカド',
    category: 'fat',
    nutrients: {
      protein: 2.0,
      fat: 21.7,
      carbs: 1.8,
      calories: 208
    },
    unit: '個',
    baseAmount: 1,
    weightPerUnit: 150,
    servingSuggestions: [0.5, 1],
    tips: '適度な柔らかさのものを選び、熟しすぎていないものを使用しましょう。',
    alternatives: ['オリーブオイル', 'ナッツ類', 'チーズ']
  },
  // ナッツ類
  {
    id: 'almonds',
    name: 'アーモンド',
    category: 'fat',
    nutrients: {
      protein: 21.2,
      fat: 49.9,
      carbs: 21.7,
      calories: 575
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [15, 30],
    tips: '軽くローストすることで、香ばしさが増し、より美味しく召し上がれます。',
    alternatives: ['クルミ', 'カシューナッツ', 'マカダミアナッツ']
  },
  {
    id: 'walnuts',
    name: 'クルミ',
    category: 'fat',
    nutrients: {
      protein: 15.2,
      fat: 65.2,
      carbs: 13.7,
      calories: 646
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [15, 30],
    tips: '粗く刻んで使うと、食感が良く、料理のアクセントになります。',
    alternatives: ['アーモンド', 'ピーカンナッツ', 'マカダミアナッツ']
  },
  // 調味料・香辛料
  {
    id: 'ginger',
    name: '生姜',
    category: 'vegetable',
    nutrients: {
      protein: 0.7,
      fat: 0.1,
      carbs: 9.0,
      calories: 39
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [5, 10, 15],
    tips: '薄切りや千切り、すりおろしなど、料理に合わせて使い分けましょう。香りを活かすなら仕上げに加えるのがおすすめです。',
    alternatives: ['わさび', '唐辛子', '山椒']
  },
  {
    id: 'garlic',
    name: 'にんにく',
    category: 'vegetable',
    nutrients: {
      protein: 3.9,
      fat: 0.1,
      carbs: 23.1,
      calories: 109
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [3, 5, 10],
    tips: '加熱しすぎると苦くなるので注意。みじん切りの場合は中火で香りが出るまで炒めるのがポイントです。',
    alternatives: ['生姜', 'シャロット', '長ねぎ']
  },
  {
    id: 'soy_sauce_zero',
    name: '糖質ゼロ醤油',
    category: 'vegetable',
    nutrients: {
      protein: 6.2,
      fat: 0,
      carbs: 0,
      calories: 25
    },
    unit: 'g',
    baseAmount: 100,
    servingSuggestions: [5, 10, 15],
    tips: '通常の醤油と比べて塩分が高めなので、使用量は控えめにするのがポイントです。',
    alternatives: ['通常の醤油', 'たまり醤油', 'ポン酢']
  }
];