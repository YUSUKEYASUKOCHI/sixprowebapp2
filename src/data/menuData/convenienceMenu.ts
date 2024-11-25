import type { DailyMenu } from '../../types';

// コンビニ版（時短重視）のメニュー
export const CONVENIENCE_MENU: DailyMenu[] = [
  // 月曜日
  {
    朝食: [{
      name: 'サラダチキンとアボカドのサラダ',
      pfc: { protein: 24, fat: 15, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'アボカド', amount: '1/2個' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: '卵', amount: '1個' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'アボカドをスライス',
        'サラダミックスと混ぜ合わせる',
        'オリーブオイルをかける'
      ]
    }],
    昼食: [{
      name: 'グリルチキンとサラダミックス',
      pfc: { protein: 22, fat: 15, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'グリルチキン', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'チーズ', amount: '1本' }
      ],
      instructions: [
        'グリルチキンを手で裂く',
        'サラダミックスと混ぜ合わせる',
        'アーモンドをトッピング',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: '焼き鮭とチーズのサラダ',
      pfc: { protein: 26, fat: 10, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: '鮭', amount: '1切れ' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        '焼き鮭を手で裂く',
        'サラダミックスと混ぜ合わせる',
        'チーズを加える',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 火曜日
  {
    朝食: [{
      name: '温泉卵とチーズセット',
      pfc: { protein: 18, fat: 14, carbs: 2 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: '温泉卵', amount: '2個' },
        { name: 'チーズ', amount: '1本' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'クルミ', amount: '小袋1個' },
        { name: '無糖コーヒー', amount: '1本' }
      ],
      instructions: [
        '温泉卵とチーズをそのまま食べる',
        'ナッツ類を少しずつ食べる'
      ]
    }],
    昼食: [{
      name: 'サラダチキンとチーズのサラダ',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: '卵', amount: '1個' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'サラダミックスと混ぜ合わせる',
        'チーズを加える',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'ハムとチーズのロール',
      pfc: { protein: 24, fat: 12, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'ハム', amount: '4枚' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'クリームチーズ', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'ハムにチーズをのせて巻く',
        'サラダを添える',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 水曜日
  {
    朝食: [{
      name: 'プロテインシェイクとナッツ',
      pfc: { protein: 24, fat: 15, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'プロテイン', amount: '1スクープ' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'クルミ', amount: '小袋1個' },
        { name: '無糖コーヒー', amount: '1本' },
        { name: '卵', amount: '1個' }
      ],
      instructions: [
        'プロテインを水で溶かす',
        'ナッツ類を食べる',
        'ゆで卵を添える'
      ]
    }],
    昼食: [{
      name: 'ツナとアボカドのサラダ',
      pfc: { protein: 22, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'ツナ缶', amount: '1缶' },
        { name: 'アボカド', amount: '1/2個' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'チーズ', amount: '1本' }
      ],
      instructions: [
        'ツナの水気を切る',
        'アボカドを潰して混ぜる',
        'サラダミックスを加える',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'サバの缶詰とサラダ',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1缶' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'チーズ', amount: '1本' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'サバの缶詰を開ける',
        'サラダミックスと混ぜ合わせる',
        'チーズを添える',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 木曜日
  {
    朝食: [{
      name: 'グリルチキンとチーズのラップ',
      pfc: { protein: 24, fat: 15, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'グリルチキン', amount: '1パック' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'マヨネーズ', amount: '小袋1個' },
        { name: '卵', amount: '1個' }
      ],
      instructions: [
        'グリルチキンを手で裂く',
        'チーズで具材を巻く',
        'サラダを添える'
      ]
    }],
    昼食: [{
      name: 'サラダチキンとアボカドのサラダ',
      pfc: { protein: 26, fat: 12, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'アボカド', amount: '1/2個' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'プロテインバー', amount: '1本' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'アボカドをスライス',
        'サラダミックスと混ぜ合わせる',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'サラダチキンとチーズのラップ',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'マヨネーズ', amount: '小袋1個' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'チーズで具材を巻く',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 金曜日
  {
    朝食: [{
      name: 'サラダチキンとアーモンドのサラダ',
      pfc: { protein: 24, fat: 14, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: '卵', amount: '1個' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'サラダミックスと混ぜ合わせる',
        'アーモンドをトッピング',
        'オリーブオイルをかける'
      ]
    }],
    昼食: [{
      name: 'サバの缶詰とサラダミックス',
      pfc: { protein: 26, fat: 15, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1缶' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'チーズ', amount: '1本' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'ブロッコリー', amount: '1パック' }
      ],
      instructions: [
        'サバの缶詰を開ける',
        'サラダミックスと混ぜ合わせる',
        'チーズを添える',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'ハムとチーズのロール',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'ハム', amount: '4枚' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'クリームチーズ', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'ハムにチーズをのせて巻く',
        'サラダを添える',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 土曜日
  {
    朝食: [{
      name: 'プロテインバーとナッツセット',
      pfc: { protein: 20, fat: 15, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'プロテインバー', amount: '1本' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'クルミ', amount: '小袋1個' },
        { name: '卵', amount: '1個' },
        { name: '無糖コーヒー', amount: '1本' }
      ],
      instructions: [
        'プロテインバーとナッツをそのまま食べる',
        'ゆで卵を添える'
      ]
    }],
    昼食: [{
      name: 'ツナとアボカドのサラダ',
      pfc: { protein: 22, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'ツナ缶', amount: '1缶' },
        { name: 'アボカド', amount: '1/2個' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'チーズ', amount: '1本' }
      ],
      instructions: [
        'ツナの水気を切る',
        'アボカドを潰して混ぜる',
        'サラダミックスを加える',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'サラダチキンとチーズのラップ',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'チーズ', amount: '2枚' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'マヨネーズ', amount: '小袋1個' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'チーズで具材を巻く',
        'キュウリを浅漬けにする'
      ]
    }]
  },
  // 日曜日
  {
    朝食: [{
      name: 'プロテインバーとナッツミックス',
      pfc: { protein: 18, fat: 14, carbs: 3 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'プロテインバー', amount: '1本' },
        { name: 'アーモンド', amount: '小袋1個' },
        { name: 'クルミ', amount: '小袋1個' },
        { name: '卵', amount: '1個' },
        { name: '無糖コーヒー', amount: '1本' }
      ],
      instructions: [
        'プロテインバーとナッツをそのまま食べる',
        'ゆで卵を添える'
      ]
    }],
    昼食: [{
      name: '鶏胸肉と野菜のサラダ',
      pfc: { protein: 25, fat: 15, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サラダチキン', amount: '1パック' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'アボカド', amount: '1/2個' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'ブロッコリー', amount: '1パック' }
      ],
      instructions: [
        'サラダチキンを手で裂く',
        'アボカドをスライス',
        'サラダミックスと混ぜ合わせる',
        'オリーブオイルをかける'
      ]
    }],
    夕食: [{
      name: 'サバの缶詰とサラダミックス',
      pfc: { protein: 24, fat: 16, carbs: 4 },
      difficulty: 'easy',
      cookingTime: 5,
      servings: 1,
      ingredients: [
        { name: 'サバ', amount: '1缶' },
        { name: 'サラダミックス', amount: '1パック' },
        { name: 'チーズ', amount: '1本' },
        { name: 'オリーブオイル', amount: '小袋1個' },
        { name: 'キュウリ', amount: '1本' }
      ],
      instructions: [
        'サバの缶詰を開ける',
        'サラダミックスと混ぜ合わせる',
        'チーズを添える',
        'キュウリを浅漬けにする'
      ]
    }]
  }
];