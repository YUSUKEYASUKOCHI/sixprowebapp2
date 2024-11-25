import { toHiragana, toKatakana } from 'wanakana';

// 食材名の読み仮名マッピング
const READINGS_MAP: { [key: string]: string[] } = {
  '鶏': ['とり', 'チキン'],
  '鶏胸': ['むね', 'とりむね'],
  '鶏むね': ['とりむね'],
  '豚': ['ぶた', 'ポーク'],
  '牛': ['ぎゅう', 'ビーフ'],
  '魚': ['さかな', 'フィッシュ'],
  '卵': ['たまご', 'エッグ'],
  '玉子': ['たまご', 'エッグ'],
  '生姜': ['しょうが', 'ジンジャー'],
  '葱': ['ねぎ'],
  '人参': ['にんじん', 'キャロット'],
  '大根': ['だいこん'],
  '茄子': ['なす', 'なすび'],
  '胡瓜': ['きゅうり'],
  '林檎': ['りんご', 'アップル'],
  '葡萄': ['ぶどう', 'グレープ'],
  '蕪': ['かぶ'],
  '南瓜': ['かぼちゃ', 'パンプキン'],
  '茸': ['きのこ', 'マッシュルーム'],
  '筍': ['たけのこ'],
  '蓮根': ['れんこん'],
  '山芋': ['やまいも'],
  '里芋': ['さといも'],
  '薩摩芋': ['さつまいも'],
  '玉葱': ['たまねぎ', 'オニオン'],
  '蒟蒻': ['こんにゃく'],
  '葉野菜': ['はやさい'],
  '根菜': ['こんさい'],
};

export function normalizeText(text: string): string {
  const normalized = text.toLowerCase();
  const hiragana = toHiragana(normalized);
  const katakana = toKatakana(normalized);
  
  // 漢字から読み仮名への変換
  let readings: string[] = [normalized, hiragana, katakana];
  
  // 漢字を含む場合、その読み仮名も追加
  Object.entries(READINGS_MAP).forEach(([kanji, readingList]) => {
    if (text.includes(kanji)) {
      readings = [...readings, ...readingList];
    }
    // 逆に、読み仮名から漢字も検索できるようにする
    if (readingList.some(reading => 
      hiragana.includes(reading) || 
      katakana.includes(reading.toUpperCase())
    )) {
      readings.push(kanji);
    }
  });
  
  return Array.from(new Set(readings)).join(' ');
}

export function createSearchPattern(query: string): string[] {
  const normalized = normalizeText(query);
  // 空白で区切られた各パターンを配列として返す
  return Array.from(new Set(
    normalized.split(/\s+/).filter(Boolean)
  ));
}