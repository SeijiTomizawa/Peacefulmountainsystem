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
 * 指圧お客様の声ビデオリスト
 * Shiatsu Testimonials Video List
 */
export const shiatsuTestimonialsData: VideoData[] = [
  {
    id: 101,
    titleJP: 'お客様の声 1',
    titleEN: 'Customer Testimonial 1',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '4c358eecf6b6a25da78adf3f278ef8ca', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 102,
    titleJP: 'お客様の声 2',
    titleEN: 'Customer Testimonial 2',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '07c757dfb346cd27a703a41378047c55', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 103,
    titleJP: 'お客様の声 3',
    titleEN: 'Customer Testimonial 3',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '773eb27c1fd9049c4be68ec7d81b504f', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 104,
    titleJP: 'お客様の声 4',
    titleEN: 'Customer Testimonial 4',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '8b3aa49e9b4fc3e2833055e4cd9faf5d', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 105,
    titleJP: 'お客様の声 5',
    titleEN: 'Customer Testimonial 5',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'fca9132db3923a098a2ac738a3ef6892', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 106,
    titleJP: 'お客様の声 6',
    titleEN: 'Customer Testimonial 6',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '25a3ef5bc19d2a5236f4e57e71b4eb3f', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 107,
    titleJP: 'お客様の声 7',
    titleEN: 'Customer Testimonial 7',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'b896baa4fea22f271adab3835a210782', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 108,
    titleJP: 'お客様の声 8',
    titleEN: 'Customer Testimonial 8',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '8596f7853e70c90f69648ef9e129cf98', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 109,
    titleJP: 'お客様の声 9',
    titleEN: 'Customer Testimonial 9',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '26af94a13a3ad4c2dbb7ee6ad4a913e3', // 修正: 重複を解消
    thumbnailTime: 0,
  },
  {
    id: 110,
    titleJP: 'お客様の声 10',
    titleEN: 'Customer Testimonial 10',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '0102da6ac96bff83c991343f7d65c418', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 111,
    titleJP: 'お客様の声 11',
    titleEN: 'Customer Testimonial 11',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '7644e58c203f2e66e2a6d9ec15c57a32', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 112,
    titleJP: 'お客様の声 12',
    titleEN: 'Customer Testimonial 12',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '4b67e78be39de3ec76a590c58697d98c', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 113,
    titleJP: 'お客様の声 13',
    titleEN: 'Customer Testimonial 13',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '76f239206db02e04885758deeb2f6332', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 114,
    titleJP: 'お客様の声 14',
    titleEN: 'Customer Testimonial 14',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '61501b27ed201343a9254dda8f63ed6d', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 115,
    titleJP: 'お客様の声 15',
    titleEN: 'Customer Testimonial 15',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '5173ab6b16c9ba9cf1ddade0cdfab2e6', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 116,
    titleJP: 'お客様の声 16',
    titleEN: 'Customer Testimonial 16',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '150470416cfd427947166bc5698b9d6d', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 117,
    titleJP: 'お客様の声 17',
    titleEN: 'Customer Testimonial 17',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '1fae1dc0afeb9c924feb1fbc14de6906', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 118,
    titleJP: 'お客様の声 18',
    titleEN: 'Customer Testimonial 18',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '92c664b7b14a843664f06eea6986881c', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 119,
    titleJP: 'お客様の声 19',
    titleEN: 'Customer Testimonial 19',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '9ff616f5d05d01318ba6e55c166d3c19', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 120,
    titleJP: 'お客様の声 20',
    titleEN: 'Customer Testimonial 20',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '60fdb619c9fb1fec077710c2b4f0b94a', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 121,
    titleJP: 'お客様の声 21',
    titleEN: 'Customer Testimonial 21',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '800636a07054319fba8aa1101352c494', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 122,
    titleJP: 'お客様の声 22',
    titleEN: 'Customer Testimonial 22',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '1aa7e5322216c4be2b58af7cabcb3313', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 123,
    titleJP: 'お客様の声 23',
    titleEN: 'Customer Testimonial 23',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '54b95ae4c844085a3f4726959d0437ac', // 実際のVideo IDに置き換えてください
    thumbnailTime: 0,
  },
  {
    id: 124,
    titleJP: 'お客様の声 24',
    titleEN: 'Customer Testimonial 24',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '4033c2849ec69b896724b8a8b0098630', // 実際のVideo IDに置き換えてください
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