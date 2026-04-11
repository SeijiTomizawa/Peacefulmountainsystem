import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Header } from "../components/Header";
import { FadeTransition } from "../components/FadeTransition";
import { AccessSection } from "../components/AccessSection";
import { ContactFooter } from "../components/ContactFooter";
import { SEOHead } from "../components/SEOHead";
import { StructuredData } from "../components/StructuredData";
import { COLORS } from "../constants/theme";
import { PAGE_URLS } from "../constants/siteConfig";
import {
  shiatsuTestimonialsData,
  getCloudflareStreamUrl,
} from "../data/videosData";
import * as Images from "../assets/images";
import { X } from "lucide-react";

export function ShiatsuReviewsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
  const [selectedLetterIndex, setSelectedLetterIndex] =
    useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const clientLetters = [
    {
      src: Images.clientLetter1,
      alt: "Thank you letter from client Hilda",
    },
    {
      src: Images.clientLetter2,
      alt: "Thank you letter from client Francesca",
    },
    {
      src: Images.clientLetter3,
      alt: "Thank you letter from client Alexandra",
    },
    {
      src: Images.bibleLadyLetter,
      alt: language === "jp"
        ? "教会のバイブルスタディで宗家ミラー先生が助けた女性からの感動的な手紙"
        : "Emotional letter from a lady who Soke Miller helped during Bible study",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* SEO Meta Tags */}
      <SEOHead
        title={
          language === "jp"
            ? "整体院お客様の声 | 泰山流護身術 八王子本部道場"
            : "Client Testimonials | TaizanRyu Hachioji Honbu"
        }
        description={
          language === "jp"
            ? "泰山流指圧整体院で施術を受けられた方々からのメッセージをご紹介します。実際の体験談と効果をご覧ください。"
            : "Read testimonials from clients who have experienced TaizanRyu Shiatsu treatment. Real experiences and results from our clients."
        }
        keywords={
          language === "jp"
            ? "お客様の声,レビュー,体験談,指圧,整体,泰山流,八王子"
            : "testimonials,reviews,shiatsu,seitai,TaizanRyu,Hachioji"
        }
        canonicalUrl={PAGE_URLS.shiatsuReviews}
      />

      {/* Structured Data for SEO */}
      <StructuredData type="organization" />

      {/* Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Sticky Header */}
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      {/* Hero Section */}
      <section
        className="relative px-6 py-16 md:pt-[120px] md:pb-[60px]"
        style={{
          minHeight: "350px",
          height: "clamp(350px, 50vh, 500px)",
          backgroundImage: `linear-gradient(rgba(107, 31, 35, 0.85), rgba(107, 31, 35, 0.85)), url(${Images.shiatsuReviewsHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FadeTransition keyValue={`reviews-hero-${language}`}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1
              style={{
                fontFamily: language === "jp" ? "'Zen Old Mincho', serif" : "'Playfair Display', serif",
                fontSize: language === "jp" ? "32px" : "42px",
                fontWeight: language === "jp" ? 700 : 600,
                color: "white",
                lineHeight: "1.4",
                marginBottom: "16px",
                letterSpacing: language === "jp" ? "0" : "0.03em",
                textAlign: "center",
              }}
            >
              {t.testimonials.heading}
            </h1>
            <p
              style={{
                fontFamily: language === "jp" ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
                color: "white",
                fontSize: "16px",
                lineHeight: "1.8",
                opacity: 0.9,
                textAlign: "center",
              }}
            >
              {t.testimonials.subheading}
            </p>
          </div>
        </FadeTransition>
      </section>

      {/* Testimonials Videos Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <FadeTransition keyValue={`testimonials-heading-${language}`}>
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.4",
                marginBottom: "8px",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              {language === "jp"
                ? "お客様の声（ビデオ）"
                : "Customer Testimonials (Videos)"}
            </h2>
            <p
              style={{
                color: "#1A2B48",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "32px",
                textAlign: "center",
                opacity: 0.75,
              }}
            >
              {language === "jp"
                ? "実際に施術を受けられたお客様の声をご覧ください"
                : "Hear from our clients who have experienced our treatments"}
            </p>
          </FadeTransition>

          {/* Video Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shiatsuTestimonialsData.map((video) => (
              <FadeTransition
                key={video.id}
                keyValue={`testimonial-${video.id}-${language}`}
              >
                <div
                  className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(26, 43, 72, 0.1)",
                  }}
                >
                  {/* Cloudflare Stream iframe */}
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: "9/16",
                    }}
                  >
                    <iframe
                      key={`video-${video.id}-${selectedVideoId === video.id ? 'active' : 'inactive'}`}
                      src={getCloudflareStreamUrl(
                        video.cloudflareVideoId,
                        selectedVideoId === video.id,
                        video.thumbnailTime || 3
                      )}
                      className="w-full h-full"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                      style={{
                        border: "none",
                      }}
                    />
                  </div>

                  {/* Video Title */}
                  <div className="p-3">
                    <p
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#1A2B48",
                        lineHeight: "1.4",
                        textAlign: "center",
                      }}
                    >
                      {language === "jp" ? video.titleJP : video.titleEN}
                    </p>
                  </div>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Client Letters Section (including Bible Study Letter) */}
      <section
        style={{ backgroundColor: "#E8E2D6" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`client-letters-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "16px",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            {language === "jp"
              ? "お客様からのお手紙"
              : "Letters from Our Clients"}
          </h2>
          <p
            style={{
              color: "#1A2B48",
              fontSize: "15px",
              lineHeight: "1.8",
              marginBottom: "48px",
              textAlign: "center",
              opacity: 0.85,
            }}
          >
            {language === "jp"
              ? "心温まる感謝のお手紙をご覧ください。クリックすると拡大表示されます。"
              : "View heartwarming letters of gratitude from our clients. Click to enlarge."}
          </p>
        </FadeTransition>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bible Study Letter - First */}
          <FadeTransition keyValue={`bible-letter-${language}`}>
            <div className="md:col-span-2">
              <div
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 max-w-3xl mx-auto"
                style={{ backgroundColor: "white" }}
                onClick={() => setSelectedLetterIndex(3)}
              >
                <img
                  src={Images.bibleLadyLetter}
                  alt={
                    language === "jp"
                      ? "教会のバイブルスタディで宗家ミラー先生が助けた女性からの感動的な手紙"
                      : "Emotional letter from a lady who Soke Miller helped during Bible study"
                  }
                  className="w-full h-auto object-contain"
                  style={{
                    objectPosition: "center",
                    aspectRatio: "3/2",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "#1A2B48",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  textAlign: "center",
                  marginTop: "12px",
                  opacity: 0.75,
                }}
              >
                {language === "jp"
                  ? "教会でのバイブルスタディ中に宗家ミラー先生から助けを受けた女性からの感謝の手紙 - クリックして拡大"
                  : "Letter from a lady who received help from Soke Miller during Bible study - Click to enlarge"}
              </p>
            </div>
          </FadeTransition>

          {/* Other Client Letters */}
          {clientLetters.map((letter, index) => (
            <FadeTransition
              key={index}
              keyValue={`client-letter-${index}-${language}`}
            >
              <div
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: "white" }}
                onClick={() => setSelectedLetterIndex(index)}
              >
                <img
                  src={letter.src}
                  alt={letter.alt}
                  className="w-full h-auto object-contain"
                  style={{
                    objectPosition: "center",
                    aspectRatio: "3/2",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  color: "#1A2B48",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  textAlign: "center",
                  marginTop: "12px",
                  opacity: 0.75,
                }}
              >
                {language === "jp"
                  ? "クリックして拡大"
                  : "Click to enlarge"}
              </p>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "white" }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeTransition keyValue={`reviews-cta-${language}`}>
            <div className="text-center">
              <div
                className="rounded-lg p-8"
                style={{
                  backgroundColor: COLORS.main,
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Zen Old Mincho', serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "16px",
                  }}
                >
                  {language === "jp"
                    ? "施術のご予約はこちら"
                    : "Book Your Treatment"}
                </h2>
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                    opacity: 0.9,
                  }}
                >
                  {language === "jp"
                    ? "完全予約制となっております。お気軽にお問い合わせください。"
                    : "By appointment only. Please feel free to contact us."}
                </p>
                <a
                  href="/contact"
                  style={{
                    backgroundColor: COLORS.buttonPrimary,
                    color: "white",
                    padding: "14px 32px",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      COLORS.buttonPrimaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
                  }}
                >
                  {language === "jp"
                    ? "お問い合わせ・予約"
                    : "Contact & Book"}
                </a>
              </div>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Modal for Letter Details */}
      {selectedLetterIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          onClick={() => setSelectedLetterIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedLetterIndex(null)}
              className="absolute top-4 right-4 z-10 rounded-full p-2 transition-colors"
              style={{ backgroundColor: COLORS.buttonPrimary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
              }}
            >
              <X size={24} color="white" />
            </button>
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: "white" }}
            >
              <img
                src={clientLetters[selectedLetterIndex].src}
                alt={clientLetters[selectedLetterIndex].alt}
                className="w-full h-auto object-contain"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
}
