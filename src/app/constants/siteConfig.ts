// ============================================================
// サイト設定 - URL を変更するときはここだけ編集してください
// Site Configuration - Edit only this file when the URL changes
// ============================================================

/** サイトのベースURL（末尾スラッシュなし） */
export const SITE_URL = 'https://www.peacefulmountainsystem.com';

// ---- 各ページの canonical URL ----
export const PAGE_URLS = {
  home:           `${SITE_URL}/`,
  selfDefense:    `${SITE_URL}/self-defense`,
  shiatsu:        `${SITE_URL}/shiatsu`,
  soke:           `${SITE_URL}/soke`,
  members:        `${SITE_URL}/members`,
  videos:         `${SITE_URL}/videos`,
  shiatsuReviews: `${SITE_URL}/shiatsu-reviews`,
  gallery:        `${SITE_URL}/gallery`,
  links:          `${SITE_URL}/links`,
  contact:        `${SITE_URL}/contact`,
} as const;
