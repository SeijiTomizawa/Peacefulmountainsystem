import {
  videosData,
  getCloudflareStreamUrl,
} from "../data/videosData";
import { PAGE_URLS } from "../constants/siteConfig";
import scheduleData from "../data/schedule.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Header } from "../components/Header";
import { FadeTransition } from "../components/FadeTransition";
import { AccessSection } from "../components/AccessSection";
import { ContactFooter } from "../components/ContactFooter";
import { SEOHead } from "../components/SEOHead";
import { StructuredData } from "../components/StructuredData";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import * as Images from "../assets/images";
import { certificateImages } from "../data/certificatesData";

// ============================================================
// 【テーマ定義】セクションの背景色・文字色などを一括管理
//
//  使えるテーマキー:
//    'crimson'  → エンジ色背景（#6B1F23）
//    'navy'     → ネイビー背景 (#1A2B48)
//    'beige'    → ベージュ背景 (#E8E2D6)
//    'white'    → 白背景       (white)
//    'offwhite' → オフホワイト  (#F9F9F7)
//
//  各プロパティの意味:
//    bg           … <section> の背景色
//    headingColor … h2 見出しの文字色
//    subColor     … サブタイトル・補足テキストの色
//    bodyColor    … 本文テキストの色
//    accentColor  … バッジ・アクセントラインの色
//    cardBg       … カード・行の背景色
//    cardBorder   … カード・行のボーダー
//    noteColor    … 注記・小文字テキストの色
//    checkColor   … チェックアイコンの色
// ============================================================
const SECTION_STYLES = {
  crimson: {
    bg: "#6B1F23",
    headingColor: "white",
    subColor: "#E8E2D6",
    bodyColor: "rgba(255,255,255,0.92)",
    accentColor: "#5DADE2",
    cardBg: "rgba(255,255,255,0.07)",
    cardBorder: "1px solid rgba(255,255,255,0.12)",
    noteColor: "rgba(255,255,255,0.55)",
    checkColor: "#E8E2D6",
  },
  navy: {
    bg: "#1A2B48",
    headingColor: "white",
    subColor: "#5DADE2",
    bodyColor: "rgba(255,255,255,0.85)",
    accentColor: "#5DADE2",
    cardBg: "rgba(255,255,255,0.05)",
    cardBorder: "1px solid rgba(255,255,255,0.08)",
    noteColor: "rgba(255,255,255,0.55)",
    checkColor: "#5DADE2",
  },
  beige: {
    bg: "#E8E2D6",
    headingColor: "#1A2B48",
    subColor: "#6B1F23",
    bodyColor: "#1A2B48",
    accentColor: "#8C272E",
    cardBg: "white",
    cardBorder: "1px solid rgba(26,43,72,0.1)",
    noteColor: "rgba(26,43,72,0.6)",
    checkColor: "#6B1F23",
  },
  white: {
    bg: "white",
    headingColor: "#8C272E",
    subColor: "#1A2B48",
    bodyColor: "#2C3E50",
    accentColor: "#6B1F23",
    cardBg: "#F9F9F7",
    cardBorder: "1px solid rgba(26,43,72,0.08)",
    noteColor: "rgba(26,43,72,0.6)",
    checkColor: "#6B1F23",
  },
  offwhite: {
    bg: "#F9F9F7",
    headingColor: "#1A2B48",
    subColor: "#8C272E",
    bodyColor: "#1A2B48",
    accentColor: "#8C272E",
    cardBg: "white",
    cardBorder: "1px solid rgba(26,43,72,0.08)",
    noteColor: "rgba(26,43,72,0.6)",
    checkColor: "#6B1F23",
  },
} as const;

type SectionTheme = keyof typeof SECTION_STYLES;

// ============================================================
// 【セクション → テーマの割り当て】
//  ここの値を変えるだけで、各セクションの配色セットが切り替わります。
//  値は上の SECTION_STYLES のキー名を使ってください。
// ============================================================
const SECTION_THEMES = {
  hero: "crimson", // ヒーロー
  schedule: "navy", // 練習スケジュール
  about: "beige", // 泰山流護身術について
  legacy: "white", // 宗家メッセージ
  training: "offwhite", // 稽古内容
  videos: "navy", // 動画
  philosophy: "beige", // 指導哲学
  benefits: "crimson", // こんな方におすすめ
  gallery: "crimson", // 道場ギャラリー
  certs: "offwhite", // 免状・賞状
} satisfies Record<string, SectionTheme>;

// ─────────────────────────────────────────────────────────────

function SelfDefensePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<
    number | null
  >(null);
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate(
        (selectedCertificate - 1 + certificateImages.length) %
          certificateImages.length,
      );
    }
  };

  const handleNext = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate(
        (selectedCertificate + 1) % certificateImages.length,
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCertificate !== null) {
      if (e.key === "Escape") setSelectedCertificate(null);
      else if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as any);
    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown as any,
      );
  }, [selectedCertificate]);

  // テーマの短縮アクセサー: th('hero') → SECTION_STYLES['crimson']
  const th = (key: keyof typeof SECTION_THEMES) =>
    SECTION_STYLES[SECTION_THEMES[key]];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: "#F9F9F7",
      }}
    >
      {/* ============================================================
          【SEO設定】検索エンジン向けのメタ情報
          ============================================================ */}
      <SEOHead
        title={
          language === "jp"
            ? "泰山流護身術・逮捕術 | 実践的な防御システム - 泰山流八王子本部道場"
            : "TaizanRyu Self-Defense & Arrest Techniques | Practical Defense System"
        }
        description={
          language === "jp"
            ? "60年以上の武道経験に基づく実践的な護身術・逮捕術。合気柔術、柔道、空手の技術を統合した効果的な防御システムを八王子本部道場で学びます。"
            : "Practical self-defense and arrest techniques based on 60+ years of martial arts experience. Learn effective defense system integrating Aikijujutsu, Judo, and Karate at Hachioji Honbu Dojo."
        }
        keywords={
          language === "jp"
            ? "護身術,逮捕術,合気柔術,泰山流,八王子,武道,Self-Defense,実践的防御,防犯,護身"
            : "Self-Defense,Arrest Techniques,Aikijujutsu,TaizanRyu,Hachioji,Martial Arts,Practical Defense,Personal Safety"
        }
        canonicalUrl={PAGE_URLS.selfDefense}
      />

      {/* ============================================================
          【構造化データ】Googleのパンくずリスト表示用
          ============================================================ */}
      <StructuredData
        type="breadcrumb"
        data={{
          breadcrumbs: [
            {
              name: language === "jp" ? "ホーム" : "Home",
              url: PAGE_URLS.home,
            },
            {
              name:
                language === "jp"
                  ? "護身術・逮捕術"
                  : "Self-Defense",
              url: PAGE_URLS.selfDefense,
            },
          ],
        }}
      />

      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      {/* ============================================================
          【ヒーローセクション】テーマ: SECTION_THEMES.hero
          - 大見出し（h1）: このファイル内に直接記述
          - サブテキスト:   ja.json / en.json > selfDefense > hero > subtext
          ============================================================ */}
      <section
        className="relative"
        style={{
          height: "70vh",
          minHeight: "500px",
          backgroundColor: th("hero").bg,
          backgroundImage: `url(${Images.selfDefenseDojoInterior})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* オーバーレイ */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(107, 31, 35, 0.72)" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <FadeTransition
            keyValue={`selfdefense-hero-${language}`}
            className="text-center max-w-4xl"
          >
            <h1
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "40px",
                fontWeight: 700,
                color: th("hero").headingColor,
                lineHeight: "1.3",
                marginBottom: "24px",
                letterSpacing: "0.02em",
              }}
            >
              {language === "jp"
                ? "泰山流護身術・逮捕術"
                : "Taizan-Ryu Self-Defense & Arrest Techniques"}
            </h1>
            <p
              style={{
                color: th("hero").bodyColor,
                fontSize: "17px",
                lineHeight: "1.8",
                fontWeight: 400,
                opacity: 0.95,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {t.selfDefense.hero.subtext}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* ============================================================
          【練習スケジュールセクション】テーマ: SECTION_THEMES.schedule
          - データ管理: src/app/data/schedule.json を編集してください
              「classes」配列に行を追加・削除・並び替えできます。
              「notes」配列に注意書きを追加・削除できます。
          ============================================================ */}
      <section
        style={{ backgroundColor: th("schedule").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-3xl mx-auto">
          <FadeTransition
            keyValue={`schedule-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("schedule").headingColor,
                lineHeight: "1.4",
                marginBottom: "8px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {language === "jp"
                ? "練習スケジュール"
                : "Practice Schedule"}
            </h2>
            <p
              style={{
                color: th("schedule").subColor,
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "40px",
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              {language === "jp"
                ? "八王子本部道場"
                : "Hachioji Honbu Dojo"}
            </p>
          </FadeTransition>

          {/* スケジュール表 */}
          <div className="space-y-3">
            {/* ヘッダー行 */}
            <div
              className="grid rounded-lg px-4 py-3"
              style={{
                gridTemplateColumns: "2fr 2.5fr 2.5fr 1.5fr",
                backgroundColor: "rgba(93, 173, 226, 0.15)",
                border: "1px solid rgba(93, 173, 226, 0.3)",
              }}
            >
              {[
                { jp: "日付", en: "Date" },
                { jp: "時間", en: "Time" },
                { jp: "クラス", en: "Class" },
                { jp: "レベル", en: "Level" },
              ].map((col) => (
                <span
                  key={col.en}
                  style={{
                    color: th("schedule").accentColor,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {language === "jp" ? col.jp : col.en}
                </span>
              ))}
            </div>

            {/* データ行: schedule.json > classes 配列 */}
            {scheduleData.classes.map((item, index) => (
              <FadeTransition
                key={item.id}
                keyValue={`sched-row-${item.id}-${language}`}
              >
                <div
                  className="grid rounded-lg px-4 py-4 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    gridTemplateColumns:
                      "2fr 2.5fr 2.5fr 1.5fr",
                    backgroundColor:
                      index % 2 === 0
                        ? th("schedule").cardBg
                        : "rgba(255,255,255,0.02)",
                    border: th("schedule").cardBorder,
                  }}
                >
                  {/* 曜日 */}
                  <span
                    style={{
                      color: th("schedule").headingColor,
                      fontSize: "15px",
                      fontWeight: 700,
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {language === "jp"
                      ? item.dayJP
                      : item.dayEN}
                  </span>
                  {/* 時間 */}
                  <span
                    style={{
                      color: th("schedule").bodyColor,
                      fontSize: "13px",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    {language === "jp"
                      ? item.timeJP
                      : item.timeEN}
                  </span>
                  {/* クラス名 */}
                  <span
                    style={{
                      color: th("schedule").subColor,
                      fontSize: "13px",
                      fontFamily: "'Noto Sans JP', sans-serif",
                      lineHeight: "1.5",
                    }}
                  >
                    {language === "jp"
                      ? item.classJP
                      : item.classEN}
                  </span>
                  {/* レベルバッジ */}
                  <span
                    className="inline-block self-start rounded-full px-2 py-1 text-center"
                    style={{
                      backgroundColor: "rgba(93,173,226,0.2)",
                      color: th("schedule").accentColor,
                      fontSize: "11px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {language === "jp"
                      ? item.levelJP
                      : item.levelEN}
                  </span>
                </div>
              </FadeTransition>
            ))}
          </div>

          {/* 注記: schedule.json > notes */}
          <FadeTransition keyValue={`sched-notes-${language}`}>
            <div className="mt-8 space-y-2">
              {(language === "jp"
                ? scheduleData.notes.ja
                : scheduleData.notes.en
              ).map((note, i) => (
                <p
                  key={i}
                  style={{
                    color: th("schedule").noteColor,
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  {note}
                </p>
              ))}
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* ============================================================
          【概要セクション】テーマ: SECTION_THEMES.about
          - 見出し: ja.json / en.json > selfDefense > about > heading
          - 本文:   ja.json / en.json > selfDefense > about > text
          - 写真:   Images.selfDefenseDojoInterior
          ============================================================ */}
      <section
        style={{ backgroundColor: th("about").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                aspectRatio: "4/3",
                backgroundColor: "white",
                border: th("about").cardBorder,
              }}
            >
              <img
                src={Images.selfDefenseDojoInterior}
                alt="Dojo Interior"
                className="w-full h-full object-contain"
                style={{ objectPosition: "center" }}
              />
            </div>

            <FadeTransition
              keyValue={`about-selfdefense-${language}`}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: "32px",
                    fontWeight: 700,
                    color: th("about").headingColor,
                    lineHeight: "1.3",
                    marginBottom: "24px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {t.selfDefense.about.heading}
                </h2>
                <p
                  style={{
                    color: th("about").bodyColor,
                    fontSize: "16px",
                    lineHeight: "1.9",
                    opacity: 0.85,
                  }}
                >
                  {t.selfDefense.about.text}
                </p>
              </div>
            </FadeTransition>
          </div>
        </div>
      </section>

      {/* ============================================================
          【宗家メッセージセクション】テーマ: SECTION_THEMES.legacy
          - タイトル:     ja.json / en.json > selfDefense > legacy > title
          - サブタイトル: ja.json / en.json > selfDefense > legacy > subtitle
          - 本文:         ja.json / en.json > selfDefense > legacy > content
          - 署名:         ja.json / en.json > selfDefense > legacy > signature
              本文内で改行（\n）を使って段落分け。
              大見出し → "守破離（SHUHARI）" / "SHUHARI - The Three Stages of Mastery"
              小見出し → "武道における私の歩み" / "My Journey in the Martial Arts" 等
          ============================================================ */}
      <section
        style={{ backgroundColor: th("legacy").bg }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`legacy-${language}`}>
          <div className="max-w-3xl mx-auto">
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "28px",
                fontWeight: 700,
                color: th("legacy").headingColor,
                lineHeight: "1.4",
                marginBottom: "8px",
                textAlign: "center",
                letterSpacing: "0.05em",
              }}
            >
              {t.selfDefense.legacy.title}
            </h2>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 600,
                color: th("legacy").subColor,
                lineHeight: "1.4",
                marginBottom: "32px",
                textAlign: "center",
                letterSpacing: "0.15em",
              }}
            >
              {t.selfDefense.legacy.subtitle}
            </h3>

            <div
              style={{
                color: th("legacy").bodyColor,
                fontSize: "15px",
                lineHeight: "1.9",
                whiteSpace: "pre-line",
                marginBottom: "32px",
              }}
            >
              {t.selfDefense.legacy.content
                .split("\n")
                .map((line, index) => {
                  const isMainHeading =
                    line.trim() ===
                      "SHUHARI - The Three Stages of Mastery" ||
                    line.trim() === "守破離（SHUHARI）";
                  const isSubHeading = [
                    "My Journey in the Martial Arts",
                    "The Formation of TaizanRyu",
                    "My Teaching Philosophy",
                    "Faith and Gratitude",
                    "武道における私の歩み",
                    "泰山流の創設",
                    "私の指導哲学",
                    "信仰と感謝",
                  ].includes(line.trim());

                  if (isMainHeading) {
                    return (
                      <div
                        key={index}
                        style={{
                          marginTop: index === 0 ? "0" : "40px",
                          marginBottom: "32px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-block",
                            position: "relative",
                            paddingBottom: "12px",
                          }}
                        >
                          <h4
                            style={{
                              fontFamily:
                                "'Noto Serif JP', serif",
                              fontSize: "22px",
                              fontWeight: 700,
                              color: th("legacy").accentColor,
                              letterSpacing: "0.08em",
                              marginBottom: "0",
                            }}
                          >
                            {line}
                          </h4>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "0",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "60px",
                              height: "3px",
                              backgroundColor: "#5DADE2",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      </div>
                    );
                  } else if (isSubHeading) {
                    return (
                      <div
                        key={index}
                        style={{
                          marginTop: "48px",
                          marginBottom: "20px",
                          paddingLeft: "16px",
                          borderLeft: "4px solid #5DADE2",
                        }}
                      >
                        <h5
                          style={{
                            fontFamily:
                              "'Noto Serif JP', serif",
                            fontSize: "18px",
                            fontWeight: 700,
                            color: th("legacy").subColor,
                            letterSpacing: "0.05em",
                            marginBottom: "0",
                          }}
                        >
                          {line}
                        </h5>
                      </div>
                    );
                  } else if (line.trim() === "") {
                    return (
                      <div
                        key={index}
                        style={{ height: "12px" }}
                      />
                    );
                  } else {
                    return (
                      <p
                        key={index}
                        style={{
                          marginBottom: "16px",
                          color: th("legacy").bodyColor,
                          fontSize: "15px",
                          lineHeight: "1.9",
                        }}
                      >
                        {line}
                      </p>
                    );
                  }
                })}
            </div>

            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "18px",
                fontWeight: 600,
                color: th("legacy").headingColor,
                textAlign: "right",
                marginTop: "24px",
              }}
            >
              {t.selfDefense.legacy.signature}
            </p>
          </div>
        </FadeTransition>
      </section>

      {/* ============================================================
          【稽古内容セクション】テーマ: SECTION_THEMES.training
          - 見出し:   ja.json / en.json > selfDefense > training > heading
          - カード:   ja.json / en.json > selfDefense > training > items
              items は { title, description } の配列
          ============================================================ */}
      <section
        style={{ backgroundColor: th("training").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <FadeTransition
            keyValue={`training-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("training").headingColor,
                lineHeight: "1.4",
                marginBottom: "48px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {t.selfDefense.training.heading}
            </h2>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.selfDefense.training.items.map((item, index) => (
              <FadeTransition
                key={index}
                keyValue={`training-${index}-${language}`}
              >
                <div
                  className="rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    backgroundColor: th("training").cardBg,
                    border: th("training").cardBorder,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: th("training").subColor,
                      marginBottom: "12px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: th("training").bodyColor,
                      fontSize: "15px",
                      lineHeight: "1.85",
                      opacity: 0.8,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          【動画セクション】テーマ: SECTION_THEMES.videos
          - 見出し:   ja.json / en.json > selfDefense > videos > heading
          - 説明文:   ja.json / en.json > selfDefense > videos > description
          - ボタン:   ja.json / en.json > selfDefense > videos > button
          - 動画データ: src/app/data/videosData.ts（先頭6件を表示）
          ============================================================ */}
      <section
        style={{ backgroundColor: th("videos").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <FadeTransition
            keyValue={`videos-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("videos").headingColor,
                lineHeight: "1.4",
                marginBottom: "16px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {t.selfDefense.videos.heading}
            </h2>
            <p
              style={{
                color: th("videos").bodyColor,
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "48px",
                textAlign: "center",
                opacity: 0.85,
              }}
            >
              {t.selfDefense.videos.description}
            </p>
          </FadeTransition>

          <div className="relative mb-6">
            <div
              className="overflow-x-auto pb-4"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor:
                  "#5DADE2 rgba(255, 255, 255, 0.1)",
              }}
            >
              <style>{`
                .video-scroll-container::-webkit-scrollbar { height: 8px; }
                .video-scroll-container::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 4px; }
                .video-scroll-container::-webkit-scrollbar-thumb { background: #5DADE2; border-radius: 4px; }
                .video-scroll-container::-webkit-scrollbar-thumb:hover { background: #4A9FD8; }
              `}</style>
              <div
                className="flex gap-4 video-scroll-container"
                style={{ minWidth: "min-content" }}
              >
                {videosData.slice(0, 6).map((video, index) => (
                  <FadeTransition
                    key={index}
                    keyValue={`video-card-${index}-${language}`}
                  >
                    <div
                      className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex-shrink-0"
                      style={{
                        backgroundColor: th("videos").cardBg,
                        border: th("videos").cardBorder,
                        width: "160px",
                      }}
                    >
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "9/16" }}
                      >
                        <iframe
                          key={`video-${video.id}-${selectedVideoId === video.id ? "active" : "inactive"}`}
                          src={getCloudflareStreamUrl(
                            video.cloudflareVideoId,
                            selectedVideoId === video.id,
                            video.thumbnailTime || 3,
                          )}
                          className="w-full h-full"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen
                          style={{ border: "none" }}
                        />
                      </div>
                      <div className="p-2">
                        <p
                          style={{
                            fontFamily:
                              "'Noto Sans JP', sans-serif",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: th("videos").headingColor,
                            lineHeight: "1.3",
                            textAlign: "center",
                          }}
                        >
                          {language === "jp"
                            ? video.titleJP
                            : video.titleEN}
                        </p>
                      </div>
                    </div>
                  </FadeTransition>
                ))}
              </div>
            </div>

            <div className="md:hidden text-center mt-2">
              <p
                style={{
                  color: th("videos").noteColor,
                  fontSize: "12px",
                  fontStyle: "italic",
                }}
              >
                {language === "jp"
                  ? "← スワイプして他のビデオを見る →"
                  : "← Swipe to see more →"}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/videos")}
              className="px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "#5DADE2",
                color: "white",
                fontWeight: 600,
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.selfDefense.videos.button}
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          【哲学セクション】テーマ: SECTION_THEMES.philosophy
          ※ 宗家ページの翻訳キーを共有しています。
          - 見出し: ja.json / en.json > master > page > philosophy > heading
          - 本文:   ja.json / en.json > master > page > philosophy > text
          ============================================================ */}
      <section
        style={{ backgroundColor: th("philosophy").bg }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`philosophy-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: th("philosophy").headingColor,
              lineHeight: "1.5",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {t.master.page.philosophy.heading}
          </h2>
          <p
            style={{
              color: th("philosophy").bodyColor,
              fontSize: "15px",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t.master.page.philosophy.text}
          </p>
        </FadeTransition>
      </section>

      {/* ============================================================
          【こんな方におすすめセクション】テーマ: SECTION_THEMES.benefits
          - 見出し:   ja.json / en.json > selfDefense > benefits > heading
          - リスト:   ja.json / en.json > selfDefense > benefits > items（文字列配列）
          ============================================================ */}
      <section
        style={{ backgroundColor: th("benefits").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <FadeTransition
            keyValue={`benefits-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("benefits").headingColor,
                lineHeight: "1.4",
                marginBottom: "48px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {t.selfDefense.benefits.heading}
            </h2>
          </FadeTransition>

          <div className="space-y-5">
            {t.selfDefense.benefits.items.map((item, index) => (
              <FadeTransition
                key={index}
                keyValue={`benefit-${index}-${language}`}
              >
                <div
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: th("benefits").cardBg,
                    border: th("benefits").cardBorder,
                  }}
                >
                  <Check
                    size={28}
                    color={th("benefits").checkColor}
                    className="flex-shrink-0 mt-1"
                    style={{
                      filter:
                        "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    }}
                  />
                  <p
                    style={{
                      color: th("benefits").headingColor,
                      fontSize: "17px",
                      lineHeight: "1.8",
                      opacity: 0.95,
                    }}
                  >
                    {item}
                  </p>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          【道場ギャラリーセクション】テーマ: SECTION_THEMES.gallery
          - 見出し・説明文: このファイル内に直接記述
          - 写真（6枚）: Images.selfDefenseDojo* → src/app/assets/images.ts で差し替え
          ============================================================ */}
      <section
        style={{ backgroundColor: th("gallery").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeTransition
            keyValue={`dojo-gallery-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("gallery").headingColor,
                lineHeight: "1.4",
                marginBottom: "12px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {language === "jp"
                ? "道場の様子"
                : "Dojo Atmosphere"}
            </h2>
            <p
              style={{
                color: th("gallery").bodyColor,
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "48px",
                textAlign: "center",
                opacity: 0.85,
              }}
            >
              {language === "jp"
                ? "実際の稽古の雰囲気をご覧ください"
                : "Experience our authentic training atmosphere"}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: Images.selfDefenseDojoStudents,
                alt: "Hachioji Dojo - Student Practice",
              },
              {
                src: Images.selfDefenseDojoTraining1,
                alt: "Hachioji Dojo - Individual Instruction",
              },
              {
                src: Images.selfDefenseDojoTraining2,
                alt: "Hachioji Dojo - Technique Practice",
              },
              {
                src: Images.selfDefenseDojoTraining3,
                alt: "Hachioji Dojo - Certificate Ceremony",
              },
              {
                src: Images.selfDefenseDojoTraining4,
                alt: "Hachioji Dojo - Advanced Training",
              },
              {
                src: Images.selfDefenseDojoTraining5,
                alt: "Hachioji Dojo - Practical Application",
              },
            ].map((image, index) => (
              <FadeTransition
                key={index}
                keyValue={`gallery-${index}-${language}`}
              >
                <div
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
                  style={{
                    backgroundColor: th("gallery").cardBg,
                    border: th("gallery").cardBorder,
                    aspectRatio: "3/4",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          【免状・賞状セクション】テーマ: SECTION_THEMES.certs
          - 表示画像: src/app/data/certificatesData.ts を編集
          ※ クリックでライトボックスが開き、矢印・キーボードで切替可能
          ============================================================ */}
      <section
        style={{ backgroundColor: th("certs").bg }}
        className="px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <FadeTransition
            keyValue={`certificates-heading-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: th("certs").headingColor,
                lineHeight: "1.4",
                marginBottom: "12px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {language === "jp"
                ? "免状・賞状"
                : "Certificates & Awards"}
            </h2>
            <p
              style={{
                color: th("certs").bodyColor,
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "48px",
                textAlign: "center",
                opacity: 0.7,
              }}
            >
              {language === "jp"
                ? "宗家ジョセフ・ミラー先生の60年以上にわたる武道修行の証"
                : "Evidence of Soke Joseph Miller's 60+ years of martial arts training"}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificateImages.map((imageUrl, index) => (
              <FadeTransition
                key={index}
                keyValue={`certificate-${index}-${language}`}
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                  style={{
                    backgroundColor: th("certs").cardBg,
                    border: th("certs").cardBorder,
                    aspectRatio: "3/4",
                  }}
                  onClick={() => setSelectedCertificate(index)}
                >
                  {typeof imageUrl === "string" ? (
                    <ImageWithFallback
                      src={imageUrl}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={imageUrl}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          【免状ライトボックス】
          ============================================================ */}
      {selectedCertificate !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={() => setSelectedCertificate(null)}
            style={{ zIndex: 101 }}
          >
            <X size={32} color="black" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            style={{ zIndex: 101 }}
          >
            <ChevronLeft size={32} color="black" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            style={{ zIndex: 101 }}
          >
            <ChevronRight size={32} color="black" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificateImages[selectedCertificate]}
              alt={`Certificate ${selectedCertificate + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white bg-opacity-10"
            style={{ zIndex: 101 }}
          >
            <p
              style={{
                color: "black",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {selectedCertificate + 1} /{" "}
              {certificateImages.length}
            </p>
          </div>
        </div>
      )}

      {/* ============================================================
          【アクセスセクション】→ src/app/components/AccessSection.tsx
          ============================================================ */}
      <AccessSection />

      {/* ============================================================
          【お問い合わせフッター】→ src/app/components/ContactFooter.tsx
          ============================================================ */}
      <ContactFooter />
    </div>
  );
}

export default SelfDefensePage;