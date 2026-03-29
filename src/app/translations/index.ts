import { ja } from "./ja";
import { en } from "./en";

/**
 * 翻訳データ
 *
 * 言語ごとにファイルを分離しています：
 * - ja.json / ja.ts: 日本語翻訳（静的テキスト → JSON、動的データマージ → TS）
 * - en.json / en.ts: 英語翻訳（静的テキスト → JSON、動的データマージ → TS）
 *
 * テキストコンテンツの編集は各言語の JSON ファイルで行ってください。
 */
export const translations = {
  jp: ja,
  en: en,
};