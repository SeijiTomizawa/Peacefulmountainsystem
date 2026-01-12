import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Header } from "../components/Header";
import { FadeTransition } from "../components/FadeTransition";
import { AccessSection } from "../components/AccessSection";
import { ContactFooter } from "../components/ContactFooter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Check, X } from "lucide-react";
import Slider from "react-slick";
import "../../styles/slick.css";
import { COLORS } from "../constants/theme";
import clientLetter1 from "figma:asset/4ef646d7ee2f816af9da7712e8c88b62377ca1ea.png";
import clientLetter2 from "figma:asset/82e2a14f1b6266e6f8c1374b8bf134e66ef52e69.png";
import clientLetter3 from "figma:asset/357c11d605275a73cd43daf99f7b813aebb0d46a.png";
import carouselImage1 from "figma:asset/d7358c0eb3e00d9ea9af29be651420e1695f79e8.png";
import carouselImage2 from "figma:asset/0ed6bc0b8813a0536d5a93a5ff8edaa4a1e8cfea.png";
import carouselImage3 from "figma:asset/c94bd3277776d1c89f84563e9fd59b5b2be7e7ca.png";
import carouselImage4 from "figma:asset/0eb0424aee8e9c80496d580aa5d3a006795f64de.png";
import carouselImage5 from "figma:asset/31026d6cfdcbd228c507cf2c8cdfc1b7ff4adb75.png";
import carouselImage6 from "figma:asset/99aadc6c4c57149c2b8bb8764ee6d9206771570c.png";
import sokePhoto from "figma:asset/d829665103e42dd1fe9cba586113da03f3bfe73c.png";
import certificate1 from "figma:asset/8f80d9f96620e8aad571b511326f36e3e7d9ab86.png";
import certificate2 from "figma:asset/4f5c29b9973e9ad95a89da08b6e8c6c176e80e19.png";

function ShiatsuPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLetterIndex, setSelectedLetterIndex] =
    useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const clientLetters = [
    {
      src: clientLetter1,
      alt: "Thank you letter from client Hilda",
    },
    {
      src: clientLetter2,
      alt: "Thank you letter from client Francesca",
    },
    {
      src: clientLetter3,
      alt: "Thank you letter from client Alexandra",
    },
  ];

  const carouselImages = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: "#F9F9F7",
      }}
    >
      {/* Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Sticky Header */}
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      {/* Hero Section with Carousel */}
      <section
        className="relative"
        style={{
          height: "60vh",
          minHeight: "400px",
          backgroundColor: "#6B1F23",
        }}
      >
        <style>{`
          .custom-dots {
            position: absolute;
            bottom: 25px;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
            z-index: 15;
          }
          .custom-dots li {
            position: relative;
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
          }
          .custom-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 10px;
            height: 10px;
            padding: 0;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .custom-dots li button:hover {
            background: rgba(255, 255, 255, 0.8);
          }
          .custom-dots li.slick-active button {
            background: #5DADE2;
            width: 12px;
            height: 12px;
          }
          .shiatsu-carousel .slick-slide > div {
            height: 60vh;
            min-height: 400px;
          }
        `}</style>

        <div className="absolute inset-0 shiatsu-carousel">
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Taizan-Ryu Shiatsu ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center",
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <FadeTransition
            keyValue={`shiatsu-hero-${language}`}
            className="text-center"
          >
            <h1
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "white",
                lineHeight: "1.4",
                marginBottom: "16px",
                textShadow:
                  "0 4px 12px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              {t.shiatsu.hero.headline}
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "15px",
                lineHeight: "1.7",
                fontWeight: 400,
                textShadow:
                  "0 4px 12px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              {t.shiatsu.hero.subtext}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* About Shiatsu Section */}
      <section
        style={{ backgroundColor: "#E8E2D6" }}
        className="px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="rounded-lg overflow-hidden shadow-md"
            style={{
              aspectRatio: "4/3",
              backgroundColor: "#F9F9F7",
            }}
          >
            <img
              src={sokePhoto}
              alt="Soke Joe Miller"
              className="w-full h-full object-contain"
              style={{ objectPosition: "center" }}
            />
          </div>

          <FadeTransition
            keyValue={`about-shiatsu-${language}`}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#1A2B48",
                lineHeight: "1.4",
                marginBottom: "16px",
              }}
            >
              {t.shiatsu.about.heading}
            </h2>
            <p
              style={{
                color: "#1A2B48",
                fontSize: "14px",
                lineHeight: "1.8",
                opacity: 0.85,
              }}
            >
              {t.shiatsu.about.text}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Treatment Menu Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`services-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#1A2B48",
              lineHeight: "1.5",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            {t.shiatsu.services.heading}
          </h2>
        </FadeTransition>

        <div className="space-y-4">
          {t.shiatsu.services.items.map((item, index) => (
            <FadeTransition
              key={index}
              keyValue={`service-${index}-${language}`}
            >
              <div
                className="rounded-lg shadow-md p-6"
                style={{ backgroundColor: "#F9F9F7" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1A2B48",
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#8C272E",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "#1A2B48",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    opacity: 0.8,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{ backgroundColor: "#6B1F23" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`benefits-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "white",
              lineHeight: "1.5",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            {t.shiatsu.benefits.heading}
          </h2>
        </FadeTransition>

        <div className="space-y-4">
          {t.shiatsu.benefits.items.map((item, index) => (
            <FadeTransition
              key={index}
              keyValue={`benefit-${index}-${language}`}
            >
              <div className="flex items-start gap-3">
                <Check
                  size={24}
                  color="#8C272E"
                  className="flex-shrink-0 mt-0.5"
                />
                <p
                  style={{
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "1.8",
                  }}
                >
                  {item}
                </p>
              </div>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* Taizan-Ryu Shiatsu Philosophy Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`philosophy-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "48px",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            {language === "jp"
              ? "泰山流指圧について"
              : "TAIZAN-RYU SHIATSU"}
          </h2>
        </FadeTransition>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: The Birth */}
          <FadeTransition keyValue={`philosophy-1-${language}`}>
            <div>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2B48",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  borderLeft: "4px solid #6B1F23",
                  paddingLeft: "16px",
                }}
              >
                {language === "jp"
                  ? "泰山流指圧の誕生"
                  : "The Birth of Taizan-Ryu Shiatsu"}
              </h3>
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  opacity: 0.85,
                }}
              >
                {language === "jp"
                  ? "私は柔術の師である奥山龍峰宗家初代から、初めて皇法指圧を学びました。奥山宗家は八光流柔術という護身術システムの創始者であり、このシステムには皇法指圧システムが武道の一部として組み込まれていました。1985年、私は皇法治療の技術を自分自身の経絡とツボへの応用アイデアと融合させ、異なるレベルの施術を実現したいと考えました。"
                  : "I was first introduced to Koho Shiatsu from my Jujutsu instructor Soke Shodai Okuyama Ryuho, founder of the Hakkoryu Jujutsu system of self-defense. This system incorporated the Koho Shiatsu system as part of his martial arts Hakkoryu Jujutsu. In 1985 I wanted to blend those techniques of Koho healing with my own idea of application to the meridian's lines and pressure points to attain a different level of application."}
              </p>
            </div>
          </FadeTransition>

          {/* Section 2: Developing the System */}
          <FadeTransition keyValue={`philosophy-2-${language}`}>
            <div>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2B48",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  borderLeft: "4px solid #6B1F23",
                  paddingLeft: "16px",
                }}
              >
                {language === "jp"
                  ? "独自のシステム開発"
                  : "Developing a Unique System"}
              </h3>
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  opacity: 0.85,
                }}
              >
                {language === "jp"
                  ? "皇法指圧は深く根差した母指圧ですが、人々は母指の先端での施術の痛みに耐えられませんでした。そこで私は母指の付け根全体を使い、異なるストローク技術を適用することにしました。多くのクライアントで実地試験を行ったところ、肯定的なフィードバックを得られ、多くの人がこのプロセスを愛していると言ってくれました。最終的に、私は泰山流指圧システムを米国議会図書館に著作権登録しました。"
                  : "Koho Shiatsu is a deeply rooted thumb pressure, but people could not take the pain with the thumb tip application. So, I decided to use the whole base of the thumb and apply different stroking techniques. I field tested it on many of my clients and they provide me with positive feedback, many saying that they love the process. I finally had my system of TaizanRyu Shiatsu copyrighted with the library of congress."}
              </p>
            </div>
          </FadeTransition>

          {/* Section 3: Current Approach */}
          <FadeTransition keyValue={`philosophy-3-${language}`}>
            <div>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2B48",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  borderLeft: "4px solid #6B1F23",
                  paddingLeft: "16px",
                }}
              >
                {language === "jp"
                  ? "現在の治療アプローチ"
                  : "Current Treatment Approach"}
              </h3>
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  opacity: 0.85,
                }}
              >
                {language === "jp"
                  ? "今日、私はこの応用原理を使ってクライアントの健康を改善しています。異なる疾患には皇法指圧システムを引き続き使用することもありますが、両方のシステムに加えて浪越指圧システムの応用を組み合わせることで、特定の症状を持つ方々の治療においてより良い結果を得ています。"
                  : "Today I use this principle of application to better my client's health. Although there are times where I continue to use the Koho System for different diseases, using both systems along with applications from the Namikoshi system of shiatsu has better results in treating those individuals with certain ailments."}
              </p>
            </div>
          </FadeTransition>

          {/* Section 4: Historical Background */}
          <FadeTransition keyValue={`philosophy-4-${language}`}>
            <div>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1A2B48",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  borderLeft: "4px solid #6B1F23",
                  paddingLeft: "16px",
                }}
              >
                {language === "jp"
                  ? "指圧の歴史的背景"
                  : "Historical Background of Shiatsu"}
              </h3>
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  opacity: 0.85,
                  marginBottom: "12px",
                }}
              >
                {language === "jp"
                  ? "指圧は日本で生まれた非侵襲的な指圧療法です。当時、このタイプのセラピストは「按摩さん」と呼ばれており、これはマッサージ師を意味します。"
                  : "Shiatsu is a non-invasive type of finger pressure therapy which originated in Japan. In those days they would call this type of therapist Amma San, which means masseur."}
              </p>
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  opacity: 0.85,
                }}
              >
                {language === "jp"
                  ? "これらのセラピストの多くは視覚障害者でした。なぜなら、これは彼らが見ることなくできる数少ない仕事の一つだったからです。触れることだけが、彼らの唯一の生計手段でした。"
                  : "Most of these therapists were blind because it was one of the few jobs they could do without seeing. Just touching proved to be their only means of survival."}
              </p>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Shiatsu Certificates Section */}
      <section
        style={{ backgroundColor: "#E8E2D6" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`certificates-heading-${language}`}
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
            {language === "jp" ? "指圧免状" : "Shiatsu Certificates"}
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
              ? "宗家ジョセフ・ミラーの指圧資格証明書"
              : "Soke Joseph Miller's Shiatsu Certification"}
          </p>
        </FadeTransition>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificate 1: Namikoshi System */}
          <FadeTransition
            keyValue={`certificate-1-${language}`}
          >
            <div>
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: "white" }}
              >
                <img
                  src={certificate1}
                  alt="Namikoshi System of Shiatsu Certificate - Joseph Miller"
                  className="w-full h-auto object-contain"
                  style={{ objectPosition: "center" }}
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
                  fontStyle: "italic",
                }}
              >
                {language === "jp"
                  ? "浪越指圧システム修了証"
                  : "Namikoshi System of Shiatsu Certificate"}
              </p>
            </div>
          </FadeTransition>

          {/* Certificate 2: Shiatsu Tokyo */}
          <FadeTransition
            keyValue={`certificate-2-${language}`}
          >
            <div>
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: "white" }}
              >
                <img
                  src={certificate2}
                  alt="Shiatsu Tokyo License - Joseph Miller License Number 1224"
                  className="w-full h-auto object-contain"
                  style={{ objectPosition: "center" }}
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
                  fontStyle: "italic",
                }}
              >
                {language === "jp"
                  ? "指圧東京認定証（ライセンス番号：1224）"
                  : "Shiatsu Tokyo License (License Number: 1224)"}
              </p>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Client Letters Section */}
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
              ? "心温まるお客様からの感謝のお手紙をご覧ください"
              : "View heartwarming letters of gratitude from our clients"}
          </p>
        </FadeTransition>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default ShiatsuPage;