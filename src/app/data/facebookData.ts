/**
 * Facebook Posts and Videos Data
 * 
 * このファイルは、サイトに表示するFacebook投稿やリール動画のデータを管理します。
 * This file manages Facebook posts and Reels data to be displayed on the site.
 */

export interface FacebookPost {
  id: number;
  url: string;
  titleJP: string;
  titleEN: string;
  descriptionJP: string;
  descriptionEN: string;
  page: 'shiatsu' | 'selfdefense' | 'home'; // どのページに表示するか / Which page to display on
  isFeatured: boolean; // 注目の投稿かどうか / Whether this is a featured post
}

/**
 * Facebook投稿・リール動画データ
 * Facebook Posts and Reels Data
 */
export const facebookPostsData: FacebookPost[] = [
  {
    id: 1,
    url: 'https://www.facebook.com/stories/1689027481138675/UzpfSVNDOjEyOTkzMDY0Mjg2NzIxMzc=/?view_single=1&source=shared_permalink',
    titleJP: '指圧の効果を実感',
    titleEN: 'Experience the Effects of Shiatsu',
    descriptionJP: '最新のリール動画をFacebookでチェック！施術の様子や効果をご覧いただけます。',
    descriptionEN: 'Check out our latest Reel on Facebook! See our treatments and their effects in action.',
    page: 'shiatsu',
    isFeatured: true,
  },
  // 新しい投稿をここに追加 / Add new posts here
  // {
  //   id: 2,
  //   url: 'https://www.facebook.com/...',
  //   titleJP: '新しい投稿のタイトル',
  //   titleEN: 'New Post Title',
  //   descriptionJP: '説明文',
  //   descriptionEN: 'Description',
  //   page: 'shiatsu',
  //   isFeatured: false,
  // },
];

/**
 * Facebookページ情報
 * Facebook Page Information
 */
export const facebookPageData = {
  pageId: '100063558792326',
  pageUrl: 'https://www.facebook.com/profile.php?id=100063558792326',
  pageName: 'TaizanRyu Hachioji Honbu',
  pageNameJP: '泰山流八王子本部道場',
};

/**
 * 特定のページの注目投稿を取得
 * Get featured post for a specific page
 */
export function getFeaturedPost(page: 'shiatsu' | 'selfdefense' | 'home'): FacebookPost | undefined {
  return facebookPostsData.find(post => post.page === page && post.isFeatured);
}

/**
 * 特定のページのすべての投稿を取得
 * Get all posts for a specific page
 */
export function getPostsByPage(page: 'shiatsu' | 'selfdefense' | 'home'): FacebookPost[] {
  return facebookPostsData.filter(post => post.page === page);
}

/**
 * IDで投稿を取得
 * Get post by ID
 */
export function getPostById(id: number): FacebookPost | undefined {
  return facebookPostsData.find(post => post.id === id);
}
