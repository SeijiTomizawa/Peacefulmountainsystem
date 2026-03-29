import jaJson from './ja.json';
import { membersDataJP } from '../data/membersData';

/**
 * 日本語翻訳
 * 静的テキストは ja.json に格納されています。
 * 動的データ（メンバーリスト）は membersData.ts からここでマージされます。
 */
export const ja = {
  ...jaJson,
  members: {
    ...jaJson.members,
    page: {
      ...jaJson.members.page,
      items: membersDataJP,
    },
  },
};
