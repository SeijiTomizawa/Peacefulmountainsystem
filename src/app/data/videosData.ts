/**
 * ビデオデータ設定ファイル
 * Cloudflare Streamに格納された動画の情報を一元管理
 * 
 * 📖 設定方法の詳細は README_VIDEOS.md をご覧ください
 * 
 * Cloudflare Streamの設定方法：
 * 1. Cloudflare Streamにビデオをアップロード
 * 2. 各ビデオのVideo IDをコピー
 * 3. Customer Codeを取得（ビデオURLから）
 * 4. 以下のCLOUDFLARE_STREAM_CONFIGに設定
 * 5. videosData配列に各ビデオの情報を追加
 */

// Cloudflare Streamのアカウント情報
export const CLOUDFLARE_STREAM_CONFIG = {
  // Cloudflare StreamのCustomer Code
  // 例: ビデオURL が https://customer-abc123def456.cloudflarestream.com/... の場合
  // customerCode = 'abc123def456'
  customerCode: '1t88fwjwzf5zfn3p',
  
  // ベースURL（通常は変更不要）
  baseUrl: 'https://customer-{customerCode}.cloudflarestream.com',
};

// ビデオデータの型定義
export interface VideoData {
  id: number;
  titleJP: string;
  titleEN: string;
  descriptionJP: string;
  descriptionEN: string;
  cloudflareVideoId: string; // Cloudflare StreamのVideo ID
  thumbnailTime?: number; // サムネイル表示する秒数（オプション、デフォルトは0）
}

/**
 * ビデオリスト
 * 
 * 各ビデオの設定：
 * - id: ユニークな識別子
 * - titleJP/titleEN: 日本語/英語のタイトル
 * - descriptionJP/descriptionEN: 日本語/英語の説明
 * - cloudflareVideoId: Cloudflare StreamのVideo ID
 * - thumbnailTime: サムネイル表示時間（秒）
 */
const titelJp_1 = '道場での稽古風景';
const titelEn_1 = 'Dojo Training Session';
const descriptionJp_1 = '八王子本部道場での日常的な稽古の様子';
const descriptionEn_1 = 'Daily training at Hachioji Honbu Dojo';

export const videosData: VideoData[] = [
  {
    id: 1,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '7ecdf951f891e2752ba2c7ae70b8a64c',
    thumbnailTime: 0,
  },
  {
    id: 2,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'edbfb4a7492d55e8a8f237a30662c536',
    thumbnailTime: 0,
  },
  {
    id: 3,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '3d9b5ba407986d1ded35798593a11b12',
    thumbnailTime: 0,
  },
  {
    id: 4,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'e23c54613287ff7861fbacc45d77aeb8',
    thumbnailTime: 0,
  },
  {
    id: 5,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '03e409e69fea01954846584a9856a023',
    thumbnailTime: 0,
  },
  {
    id: 6,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: 'ミラー宗家による演武',
    descriptionEN: '',
    cloudflareVideoId: 'c540a51baf9ba25f820caf9860b6ca49',
    thumbnailTime: 0,
  },
    {
    id: 7,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: '泰山流護身術の基本技',
    descriptionEN: '',
    cloudflareVideoId: 'bf92c080a19b52d672fc466e030d7148',
    thumbnailTime: 0,
  },
];

/**
 * Cloudflare StreamのビデオURLを生成
 * @param videoId - Cloudflare StreamのVideo ID
 * @returns 埋め込み用のiframe URL
 */
export function getCloudflareStreamUrl(videoId: string): string {
  const { customerCode, baseUrl } = CLOUDFLARE_STREAM_CONFIG;
  const url = baseUrl.replace('{customerCode}', customerCode);
  return `${url}/${videoId}/iframe`;
}

/**
 * Cloudflare Streamのサムネイル画像URLを生成
 * @param videoId - Cloudflare StreamのVideo ID
 * @param time - サムネイル表示時間（秒）
 * @returns サムネイル画像のURL
 */
export function getCloudflareStreamThumbnail(videoId: string, time: number = 0): string {
  const { customerCode, baseUrl } = CLOUDFLARE_STREAM_CONFIG;
  const url = baseUrl.replace('{customerCode}', customerCode);
  return `${url}/${videoId}/thumbnails/thumbnail.jpg?time=${time}s`;
}