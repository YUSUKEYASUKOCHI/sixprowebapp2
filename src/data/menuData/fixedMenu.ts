import type { DailyMenu } from '../../types';

// 食材固定版（ケトジェニック対応）のメニュー
export const FIXED_INGREDIENTS_MENU: DailyMenu[] = [
  // 月曜日
  {
    朝食: [{
      name: 'スクランブルエッグセット',
      pfc: { protein: 20, fat: 15, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 15,
      servings: 1,
      ingredients: [
        { name: '卵', amount: '2個' },
        { name: 'ほうれん草', amount: '50g' },
        { name: 'チーズ', amount: '30g' },
        { name: 'バター', amount: '小さじ1' },
        { name: 'アボカド', amount: '1/2個' }
      ],
      instructions: [
        'ほうれん草を炒める',
        '卵を炒めてチーズを加える',
        'アボカドを添える'
      ],
      detailedInstructions: [
        'ほうれん草を洗い、3cm幅に切ります',
        'フライパンを中火で熱し、バター小さじ1/2を溶かします',
        'ほうれん草を炒めて取り出します',
        '卵を溶きほぐし、塩コショウで味付けします',
        '残りのバターでスクランブルエッグを作ります',
        'チーズを加えて半熟に仕上げます',
        'アボカドは1/2個を薄くスライスします',
        '器に盛り付けて完成です'
      ]
    }],
    昼食: [{
      name: '鶏胸肉とブロッコリーの炒めもの',
      pfc: { protein: 25, fat: 14, carbs: 4 },
      difficulty: 'medium',
      cookingTime: 20,
      servings: 1,
      ingredients: [
        { name: '鶏むね肉', amount: '100g' },
        { name: 'ブロッコリー', amount: '100g' },
        { name: 'オリーブオイル', amount: '大さじ1' },
        { name: 'にんにく', amount: '1片' },
        { name: '醤油', amount: '小さじ1' }
      ],
      instructions: [
        '鶏肉を一口大に切る',
        'ブロッコリーを小房に分ける',
        '炒めて味付けする'
      ],
      detailedInstructions: [
        '鶏むね肉は一口大に切り、塩コショウをします',
        'ブロッコリーは小房に分け、軽く塩茹でします（2分）',
        'にんにくはみじん切りにします',
        'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
        '香りが出たら鶏肉を加えて炒めます',
        '鶏肉に火が通ったらブロッコリーを加えます',
        '醤油で味付けして完成です'
      ]
    }],
    夕食: [{
      name: '焼き鮭と野菜の盛り合わせ',
      pfc: { protein: 23, fat: 16, carbs: 5 },
      difficulty: 'medium',
      cookingTime: 20,
      servings: 1,
      ingredients: [
        { name: '鮭', amount: '1切れ' },
        { name: 'ほうれん草', amount: '1束' },
        { name: 'キノコ類', amount: '100g' },
        { name: 'バター', amount: '小さじ1' },
        { name: '醤油', amount: '小さじ1' }
      ],
      instructions: [
        '鮭を焼く',
        'ほうれん草を茹でる',
        'キノコを炒める'
      ],
      detailedInstructions: [
        '鮭は塩をふり、10分ほど置きます',
        'ほうれん草は根を切り、塩茹でします（1分）',
        'キノコ類は石づきを取り、食べやすい大きさに分けます',
        'フライパンを熱し、鮭を皮目から焼きます（片面3-4分）',
        '別のフライパンでバターを溶かし、キノコを炒めます',
        'キノコに醤油を加えて味付けします',
        '鮭、ほうれん草、キノコを彩りよく盛り付けます'
      ]
    }]
  },
  // 火曜日
  {
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
  },
  // 水曜日
  {
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
  },
  // 木曜日
  {
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
  },
  // 金曜日
  {
    朝食: [{
      name: 'アーモンドチーズトースト',
      pfc: { protein: 19, fat: 14, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 10,
      servings: 1,
      ingredients: [
        { name: 'チーズ', amount: '40g' },
        { name: 'アーモンド', amount: '15g' },
        { name: '卵', amount: '1個' },
        { name: 'バター', amount: '小さじ1' },
        { name: 'アボカド', amount: '1/4個' }
      ],
      instructions: [
        'チーズを焼く',
        '卵を茹でる',
        'アボカドを添える'
      ],
      detailedInstructions: [
        'チーズは薄く広げてオーブントースターで焼きます（2-3分）',
        '卵は沸騰したお湯で7分茹でます',
        'アボカドは薄くスライスします',
        'アーモンドは粗く刻みます',
        '茹で卵の殻をむき、半分に切ります',
        'チーズクリスプにアーモンドを散らします',
        'アボカドと茹で卵を添えて完成です'
      ]
    }],
    昼食: [{
      name: '鶏胸肉のグリル',
      pfc: { protein: 26, fat: 12, carbs: 4 },
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
        '鶏肉を焼く',
        'ブロッコリーを蒸す',
        'トマトを添える'
      ],
      detailedInstructions: [
        '鶏むね肉は厚みを均一にし、塩コショウをします',
        'にんにくはみじん切りにします',
        'ブロッコリーは小房に分け、電子レンジで2分加熱します',
        'トマトはくし形に切ります',
        'フライパンを中火で熱し、オリーブオイルとにんにくを入れます',
        '鶏肉を入れ、両面をこんがりと焼きます（片面5分）',
        '一度取り出し、5分ほど休ませます',
        '食べやすい大きさに切り、野菜と共に盛り付けます'
      ]
    }],
    夕食: [{
      name: 'サバの塩焼き',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'medium',
      cookingTime: 20,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1切れ' },
        { name: 'ほうれん草', amount: '100g' },
        { name: 'キノコ類', amount: '100g' },
        { name: 'バター', amount: '小さじ1' },
        { name: '醤油', amount: '小さじ1' }
      ],
      instructions: [
        'サバを焼く',
        'ほうれん草を茹でる',
        'キノコを炒める'
      ],
      detailedInstructions: [
        'サバは塩をふり、10分ほど置きます',
        'ほうれん草は根を切り、塩茹でします（1分）',
        'キノコ類は石づきを取り、食べやすい大きさに分けます',
        'フライパンを熱し、サバを皮目から焼きます（片面3分）',
        '別のフライパンでバターを溶かし、キノコを炒めます',
        'キノコに醤油を加えて味付けします',
        'サバ、ほうれん草、キノコを彩りよく盛り付けます'
      ]
    }]
  },
  // 土曜日のメニュー（既存のまま）
  {
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
        'キノコ類は石づきを取り、食べやすい大きさに切ります',
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
  },
  // 日曜日のメニュー（既存のまま）
  {
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
  }
];