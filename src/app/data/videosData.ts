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
  //customerCode: '1t88fwjwzf5zfn3p',
  customerCode: 'szf31ebuob8tqnte',
  
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
  order?: number; // 表示順序（オプション、小さい数字が先に表示される）
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
    cloudflareVideoId: 'bb674bb7370d1c8dc82ca40711b15cab',
    thumbnailTime: 3,
    order: 2, // 2番目に表示
  },
  {
    id: 2,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'af094672d8dedd642b47a3eb831d6be8',
    thumbnailTime: 3,
  },
  {
    id: 3,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '3d4b9b81fcd3b0d211674d0adb0c91fe',
    thumbnailTime: 3,
  },
  {
    id: 4,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'd8b632eaccd37bab93a4d4e559a42e08',
    thumbnailTime: 3,
  },
  {
    id: 5,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'cc22e8b4ea56ed4b3cf7618aa5a378e9',
    thumbnailTime: 3,
  },
  {
    id: 6,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '2f4cf364a4dae713e68e7ca7668fb6fc',
    thumbnailTime: 3,
  },
  {
    id: 7,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'b03dde76bac9feb208a9072ce1500f6d',
    thumbnailTime: 3,
  },
  {
    id: 8,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'a79809bba9a88a1f0200412742b88765',
    thumbnailTime: 3,
  },
  {
    id: 9,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '7db2fa4e5b2bd55ed6b117c1ca7213b7',
    thumbnailTime: 3,
  },
  {
    id: 10,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: 'a434c86d41bb117fd809d5aea0c39452',
    thumbnailTime: 3,
  },
  {
    id: 11,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '9c392dce17e7aea8329ee5c8a53c0369',
    thumbnailTime: 3,
  },
  {
    id: 12,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    cloudflareVideoId: '550ee1c02d07c61405dbb02926b56604',
    thumbnailTime: 3,
  },
  
];

/**
 * 武術の解説ビデオリスト
 * Martial Arts Technique Explanation Video List
 */
export const martialArtsTechniquesData: VideoData[] = [
  {
    id: 201,
    titleJP: '武術について',
    titleEN: 'Basic Stance',
    descriptionJP: '泰山流護身術の基本姿勢と構え方',
    descriptionEN: 'Basic posture and stance in TaizanRyu Self-Defense',
    cloudflareVideoId: '5f8e6c20984807725482fccffb004c71',
    thumbnailTime: 3,
  },
  {
    id: 202,
    titleJP: '海外武術番組に出演',
    titleEN: 'Appearing on an overseas martial arts program',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    cloudflareVideoId: '1e195f158a9eceb3956fb99af52da66e',
    thumbnailTime: 3,
  },
  {
    id: 203,
    titleJP: '武術の基本',
    titleEN: 'Basic of Bujutsu',
    descriptionJP: '武術解説',
    descriptionEN: 'techniques',
    cloudflareVideoId: 'f187abe75c56dfe58c795a7b36ecfc14',
    thumbnailTime: 3,
  },
  {
    id: 204,
    titleJP: 'ミラー宗家による演武01',
    titleEN: 'Martial Arts Performance No.01',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    cloudflareVideoId: '31f573fd496028f65fbcd135158edb83',
    thumbnailTime: 3,
  },
  {
    id: 205,
    titleJP: 'ミラー宗家による演武02',
    titleEN: 'Martial Arts Performance No.02',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    cloudflareVideoId: '8bb1996f8c9758b2584ba6ca0d472fc6',
    thumbnailTime: 3,
  },
  {
    id: 206,
    titleJP: '2025セミナーinアメリカニュージャージー',
    titleEN: '2025 Seminar in New Jersey',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    cloudflareVideoId: '44f8f71ee83a7bf2172e039a6e8fd5cb',
    thumbnailTime: 3,
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
    cloudflareVideoId: 'f587d0f6e7c91d082b060c69aa54f5e4',
    thumbnailTime: 3,
  },
  {
    id: 102,
    titleJP: 'お客様の声 2',
    titleEN: 'Customer Testimonial 2',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '5dcf96e3bcb84ff6fc986d999e0e05be',
    thumbnailTime: 3,
  },
  {
    id: 103,
    titleJP: 'お客様の声 3',
    titleEN: 'Customer Testimonial 3',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'e607ee085b7edb5027e0aef3b474ac52',
    thumbnailTime: 3,
  },
  {
    id: 104,
    titleJP: 'お客様の声 4',
    titleEN: 'Customer Testimonial 4',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'af9e2dcdb164665f8eafbb4ddd4b8da8',
    thumbnailTime: 3,
  },
  {
    id: 105,
    titleJP: 'お客様の声 5',
    titleEN: 'Customer Testimonial 5',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '623d56d788bcfe964b5b7b39f0719872',
    thumbnailTime: 3,
  },
  {
    id: 106,
    titleJP: 'お客様の声 6',
    titleEN: 'Customer Testimonial 6',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '1f5d1df0451fd9e2ab281bc988a054b6',
    thumbnailTime: 3,
  },
  {
    id: 107,
    titleJP: 'お客様の声 7',
    titleEN: 'Customer Testimonial 7',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '76e8bdbdb5ee1570f86349ea081eb279',
    thumbnailTime: 3,
  },
  {
    id: 108,
    titleJP: 'お客様の声 8',
    titleEN: 'Customer Testimonial 8',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '5dbcf46c9101b1e73d01d1742f2657e5',
    thumbnailTime: 3,
  },
  {
    id: 109,
    titleJP: 'お客様の声 9',
    titleEN: 'Customer Testimonial 9',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '78bffcc9c205d8c1fc34a4ef2e839939',
    thumbnailTime: 3,
  },
  {
    id: 110,
    titleJP: 'お客様の声 10',
    titleEN: 'Customer Testimonial 10',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '2ff7c5183c26d732174436089889a4fc',
    thumbnailTime: 3,
  },
  {
    id: 111,
    titleJP: 'お客様の声 11',
    titleEN: 'Customer Testimonial 11',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'e36cf164a5255e66c41b42a4848b9f41',
    thumbnailTime: 3,
  },
  {
    id: 112,
    titleJP: 'お客様の声 12',
    titleEN: 'Customer Testimonial 12',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'c1c32bea9eca50133d299cad092ff98b',
    thumbnailTime: 3,
  },
  {
    id: 113,
    titleJP: 'お客様の声 13',
    titleEN: 'Customer Testimonial 13',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '72257e9e94cf9cba6a163a64b24696c9',
    thumbnailTime: 3,
  },
  {
    id: 114,
    titleJP: 'お客様の声 14',
    titleEN: 'Customer Testimonial 14',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'addeb76d68a269ad0c156e9c51f4b9bb',
    thumbnailTime: 3,
  },
  {
    id: 115,
    titleJP: 'お客様の声 15',
    titleEN: 'Customer Testimonial 15',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'e7c41b969f5cc7f9d725b80bfc9a6954',
    thumbnailTime: 3,
  },
  {
    id: 116,
    titleJP: 'お客様の声 16',
    titleEN: 'Customer Testimonial 16',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '8e5059ad93d1417e2763b33bcff62378',
    thumbnailTime: 3,
  },
  {
    id: 117,
    titleJP: 'お客様の声 17',
    titleEN: 'Customer Testimonial 17',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '77225f0011251feab8617bf0c8ee926b',
    thumbnailTime: 3,
  },
  {
    id: 118,
    titleJP: 'お客様の声 18',
    titleEN: 'Customer Testimonial 18',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '60cd50372a01e68250806ef3bffa021b',
    thumbnailTime: 3,
  },
  {
    id: 119,
    titleJP: 'お客様の声 19',
    titleEN: 'Customer Testimonial 19',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '2b2472dcecfc4888809d482d413e7af3',
    thumbnailTime: 3,
  },
  {
    id: 120,
    titleJP: 'お客様の声 20',
    titleEN: 'Customer Testimonial 20',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '41d0fe6a2d7d71f0cd4bc683633683ed',
    thumbnailTime: 3,
  },
  {
    id: 121,
    titleJP: 'お客様の声 21',
    titleEN: 'Customer Testimonial 21',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '349fc5252fce7f096f46e682ba60464c',
    thumbnailTime: 3,
  },
  {
    id: 122,
    titleJP: 'お客様の声 22',
    titleEN: 'Customer Testimonial 22',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '704f412963a5b52866f603ce0ec85646',
    thumbnailTime: 3,
  },
  {
    id: 123,
    titleJP: 'お客様の声 23',
    titleEN: 'Customer Testimonial 23',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: 'f9b1f29c7542a5f299bffd50e48b4a79',
    thumbnailTime: 3,
  },
  {
    id: 124,
    titleJP: 'お客様の声 24',
    titleEN: 'Customer Testimonial 24',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '56efe1965cf7434c5297e82084cec66f',
    thumbnailTime: 3,
  },
  {
    id: 125,
    titleJP: 'お客様の声 25',
    titleEN: 'Customer Testimonial 25',
    descriptionJP: '',
    descriptionEN: '',
    cloudflareVideoId: '88d657701c4d0d20760c570c38d65566',
    thumbnailTime: 3,
    order: 1, // 最初に表示
  },
];

/**
 * Cloudflare StreamのビデオURLを生成
 * @param videoId - Cloudflare StreamのVideo ID
 * @param autoplay - 自動再生するかどうか
 * @param poster - ポスター画像の時刻（秒）
 * @returns 埋め込み用のiframe URL
 */
export function getCloudflareStreamUrl(
  videoId: string, 
  autoplay: boolean = true,
  poster: number = 3
): string {
  const { customerCode, baseUrl } = CLOUDFLARE_STREAM_CONFIG;
  const url = baseUrl.replace('{customerCode}', customerCode);
  
  // サムネイルURLを生成（URLSearchParamsが自動的にエンコードするので、ここではエンコードしない）
  const thumbnailUrl = `${url}/${videoId}/thumbnails/thumbnail.jpg?time=${poster}s`;
  
  const params = new URLSearchParams({
    preload: 'true',
    poster: thumbnailUrl, // URLSearchParamsが自動的にエンコード
    controls: 'true', // コントロールバーを常に表示
  });
  if (autoplay) {
    params.append('autoplay', 'true');
    params.append('muted', 'true'); // 自動再生のためミュートを有効化
  }
  return `${url}/${videoId}/iframe?${params.toString()}`;
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
  // Cloudflare Streamの正しいサムネイルURL形式
  // 複数のフォーマットを試す
  // 形式1: thumbnail.jpg?time=Xs&height=600
  // 形式2: thumbnail.jpg?time=Xs
  // 形式3: thumbnail.jpg（デフォルト）
  const thumbnailUrl = `${url}/${videoId}/thumbnails/thumbnail.jpg?time=${time}s&height=600`;
  console.log('生成されたサムネイルURL:', thumbnailUrl);
  return thumbnailUrl;
}

/**
 * Cloudflare Streamのポスター画像URLを生成（iframe用）
 * @param videoId - Cloudflare StreamのVideo ID
 * @returns ポスター画像のURL
 */
export function getCloudflareStreamPoster(videoId: string): string {
  const { customerCode, baseUrl } = CLOUDFLARE_STREAM_CONFIG;
  const url = baseUrl.replace('{customerCode}', customerCode);
  // Cloudflare Stream iframeで使用するポスター画像
  return `${url}/${videoId}/thumbnails/thumbnail.jpg`;
}
