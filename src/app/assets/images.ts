/**
 * 画像アセット集中管理ファイル
 * すべての画像インポートをここで一元管理します
 *
 * 【使用方法】
 * - 名前付きインポート: import { logoImage } from '../assets/images';
 * - 全てインポート: import * as Images from '../assets/images';
 *
 * 【画像の種類】
 * 1. Vercel Storage画像 (IMAGE_STORAGE_URL) - 実際のサイト画像
 * 2. Unsplash画像 (UNSPLASH_BASE_URL) - プレースホルダー画像
 *
 * 【管理されているページ】
 * ✓ App.tsx (ホームページ)
 * ✓ SelfDefensePage.tsx (護身術ページ)
 * ✓ SokePage.tsx (宗家ページ)
 * ✓ ShiatsuPage.tsx (指圧・整体ページ)
 * ✓ GalleryPage.tsx (ギャラリーページ)
 * ✓ MembersPage.tsx (メンバーページ)
 * ✓ Header.tsx (ヘッダー)
 * ✓ Footer.tsx (フッター)
 * ✓ AccessSection.tsx (アクセスセクション)
 * ✓ ContactFooter.tsx (お問い合わせフッター)
 * ✓ HeroSlideshow.tsx (ヒーロースライドショー)
 * ✓ SEOHead.tsx (SEO)
 */

// ベースURL定数
const IMAGE_STORAGE_URL =
  "https://d3ztha1syidvy24e.public.blob.vercel-storage.com/images";
const UNSPLASH_BASE_URL = "https://images.unsplash.com";

// ================================================
// ロゴ・ブランド画像
// ================================================
export const logoImage = IMAGE_STORAGE_URL + "/LOGO_2.webp";
export const taizanLogo = IMAGE_STORAGE_URL + "/LOGO.webp";

// ================================================
// アクセス・施設画像
// ================================================
export const hachiojiStationImage =
  IMAGE_STORAGE_URL + "/big-photo0000-6654.jpg";

// ================================================
// メンバーページ画像
// ================================================
export const membersGroupImage =
  IMAGE_STORAGE_URL + "/dojo/OFFICIAL_STUDENT.webp";

// ================================================
// 指圧・整体ページ画像
// ================================================
export const clientLetter1 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_LETTER_02.webp";
export const clientLetter2 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_LETTER_03.webp";
export const clientLetter3 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_LETTER_04.webp";
export const carouselImage1 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_01.webp";
export const carouselImage2 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_03.webp";
export const carouselImage3 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_07.webp";
export const carouselImage4 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_06.webp";
export const carouselImage5 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_05.webp";
export const carouselImage6 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_04.webp";
export const sokePhoto =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_STUDY_01.webp";
export const certificate1 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_CERTIFICATION_1.webp";
export const certificate2 =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_CERTIFICATION_2.webp";

// 教会でのバイブルスタディで宗家が助けた女性からの感動的な手紙
// Emotional letter from a lady who Soke Miller helped during Bible study at church
export const bibleLadyLetter =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_LETTER_01.webp";

// ================================================
// セミナー画像 - 愛知セミナー
// ================================================
export const aichiSeminar1 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_01.webp";
export const aichiSeminar2 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_02.webp";
export const aichiSeminar3 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_03.webp";
export const aichiSeminar4 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_04.webp";
export const aichiSeminar5 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_05.webp";
export const aichiSeminar6 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_06.webp";
export const aichiSeminar7 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_07.webp";
export const aichiSeminar8 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_08.webp";
export const aichiSeminar9 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_09.webp";
export const aichiSeminar11 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2025_AICHI_10.webp";

// ================================================
// セミナー画像 - ニューヨークセミナー
// ================================================
export const newyorkSeminar1 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_01.webp";
export const newyorkSeminar2 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_02.webp";
export const newyorkSeminar3 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_03.webp";
export const newyorkSeminar4 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_04.webp";
export const newyorkSeminar5 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_05.webp";
export const newyorkSeminar6 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_06.webp";
export const newyorkSeminar7 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_07.webp";
export const newyorkSeminar8 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_08.webp";
export const newyorkSeminar9 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_09.webp";
export const newyorkSeminar10 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_10.webp";
export const newyorkSeminar11 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_11.webp";
export const newyorkSeminar12 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_12.webp";
export const newyorkSeminar13 =
  IMAGE_STORAGE_URL + "/seminar/SEMINAR_2023_NEWYORK_13.webp";

// ================================================
// ホームページ画像 (App.tsx)
// Unsplash画像 - プレースホルダーとして使用
// ================================================
export const homeSokeImage =
  IMAGE_STORAGE_URL + "/soke/SOKE_JOE_MILLER.webp";
export const homeShiatsuImage =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_02.webp";
export const homeDojoInteriorImage =
  IMAGE_STORAGE_URL + "/dojo/DOJO_08.webp";
export const homeSokeTeachingImage =
  IMAGE_STORAGE_URL + "/shiatsu/SHIATSU_DO_02.webp";
export const homeTaizanLogoPlaceholder =
  IMAGE_STORAGE_URL + "/soke/SOKE_JOE_MILLER.webp";

// 宗家セクション用画像（App.tsxの宗家カード）
export const sokeImage = IMAGE_STORAGE_URL + "/soke/SOKE_JOE_MILLER.webp";

// ================================================
// HeroSlideshow画像 (HeroSlideshow.tsx)
// ================================================
export const heroGrandmaster =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_01.webp";
export const heroDojoTraining =
  IMAGE_STORAGE_URL + "/dojo/DOJO_08.webp";
export const heroTrainingAtmosphere =
  IMAGE_STORAGE_URL + "/dojo/DOJO_04.webp";
export const heroGroupTraining =
  IMAGE_STORAGE_URL + "/dojo/OFFICIAL_STUDENT.webp";

// ================================================
// 護身術ページ画像 (SelfDefensePage.tsx)
// Unsplash画像 - プレースホルダーとして使用
// ================================================
export const selfDefenseSokeImage =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_01.webp";
export const selfDefenseDojoInterior =
  IMAGE_STORAGE_URL + "/dojo/DOJO_08.webp";
export const selfDefenseDojoStudents =
  IMAGE_STORAGE_URL + "/dojo/OFFICIAL_STUDENT.webp";
export const dojoInteriorImage =
  IMAGE_STORAGE_URL + "/dojo/DOJO_08.webp";
export const selfDefenseDojoTraining1 =
  IMAGE_STORAGE_URL + "/dojo/DOJO_04.webp";
export const selfDefenseDojoTraining2 =
  IMAGE_STORAGE_URL + "/dojo/DOJO_05.webp";
export const selfDefenseDojoTraining3 =
  IMAGE_STORAGE_URL + "/dojo/DOJO_06.webp";
export const selfDefenseDojoTraining4 =
  IMAGE_STORAGE_URL + "/dojo/DOJO_07.webp";
export const selfDefenseDojoTraining5 =
  IMAGE_STORAGE_URL + "/dojo/DOJO_08.webp";
export const selfDefenseCertificate1 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_01.webp";
export const selfDefenseCertificate2 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_02.webp";
export const selfDefenseCertificate3 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_03.webp";
export const selfDefenseCertificate4 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_04.webp";
export const selfDefenseCertificate5 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_05.webp";
export const selfDefenseCertificate6 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_06.webp";
export const selfDefenseCertificate7 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_07.webp";
export const selfDefenseCertificate8 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_08.webp";
export const selfDefenseCertificate9 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_09.webp";
export const selfDefenseCertificate10 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_10.webp";
export const selfDefenseCertificate11 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_11.webp";
export const selfDefenseCertificate12 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_12.webp";
export const selfDefenseCertificate13 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_13.webp";
export const selfDefenseCertificate14 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_14.webp";
export const selfDefenseCertificate15 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_15.webp";
export const selfDefenseCertificate16 =
  IMAGE_STORAGE_URL + "/dojo/CERTIFICATION_16.webp";

// ================================================
// 宗家ページ画像 (SokePage.tsx)
// ================================================
// Unsplash画像（プレースホルダー）
export const sokeSokeImage =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_01.webp";
export const sokeSokeCouple =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_02.webp";
export const sokeShihanSaulCohe =
  IMAGE_STORAGE_URL + "/soke/ROOTS_02.webp";
export const sokeSokeMichaelDePasquale =
  IMAGE_STORAGE_URL + "/soke/ROOTS_03.webp";
export const sokeShodaiOkuyama =
  IMAGE_STORAGE_URL + "/soke/ROOTS_04.webp";

// Vercel Storage画像（実際の宗家の写真）
export const sokeOldPic1 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_10.webp";
export const sokeOldPic2 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_11.webp";
export const sokeOldPic3 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_03.webp";
export const sokeOldPic4 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_04.webp";
export const sokeOldPic5 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_05.webp";
export const sokeOldPic6 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_06.webp";
export const sokeOldPic7 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_07.webp";
export const sokeOldPic8 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_08.webp";
export const sokeOldPic9 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_09.webp";
export const sokeOldPic10 =
  IMAGE_STORAGE_URL + "/soke/MILLER_photo_10.webp";
export const sokeMartialArt1 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_01.webp";
export const sokeMartialArt2 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_02.webp";
export const sokeMartialArt3 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_03.webp";
export const sokeMartialArt4 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_04.webp";
export const sokeMartialArt5 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_05.webp";
export const sokeMartialArt6 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_06.webp";
export const sokeMartialArt7 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_07.webp";
export const sokeMartialArt8 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_08.webp";
export const sokeMartialArt9 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_09.webp";
export const sokeMartialArt10 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_10.webp";
export const sokeMartialArt11 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_11.webp";
export const sokeMartialArt12 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_12.webp";
export const sokeMartialArt13 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_13.webp";
export const sokeMartialArt14 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_14.webp";
export const sokeMartialArt15 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_15.webp";
export const sokeMartialArt16 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_16.webp";
export const sokeMartialArt17 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_17.webp";
export const sokeMartialArt18 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_18.webp";
export const sokeMartialArt19 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_19.webp";
export const sokeMartialArt20 =
  IMAGE_STORAGE_URL + "/soke/MARTIALART_photo_20.webp";