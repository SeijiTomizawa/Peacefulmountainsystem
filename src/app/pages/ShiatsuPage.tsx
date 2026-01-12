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
import * as Images from "../assets/images";

function ShiatsuPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
  ];

  const carouselImages = [
    Images.carouselImage1,
    Images.carouselImage2,
    Images.carouselImage3,
    Images.carouselImage4,
    Images.carouselImage5,
    Images.carouselImage6,
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
              src={Images.sokePhoto}
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
            {language === "jp" ? "指圧認定証" : "Shiatsu Certificates"}
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
                  src={Images.certificate1}
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
                  src={Images.certificate2}
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

      {/* Emotional Letter from Bible Study Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`bible-letter-heading-${language}`}
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
              ? "教会のバイブルスタディで宗家が助けた女性からの感動的な手紙"
              : "Emotional Letter from a Lady who Soke Miller Helped Out in the Church During Bible Study"}
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
              ? "教会のバイブルスタディで宗家ミラー先生から癒しと励ましを受けた女性からの心温まる感謝の手紙"
              : "A heartwarming letter of gratitude from a lady who received healing and encouragement from Soke Miller during Bible study at church"}
          </p>
        </FadeTransition>

        <div className="max-w-4xl mx-auto">
          <FadeTransition
            keyValue={`bible-letter-image-${language}`}
          >
            <div
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ backgroundColor: "white" }}
            >
              <img
                src={Images.bibleLadyLetter}
                alt={
                  language === "jp"
                    ? "教会のバイブルスタディで宗家ミラー先生が助けた女性からの感動的な手紙"
                    : "Emotional letter from a lady who Soke Miller helped during Bible study"
                }
                className="w-full h-auto object-contain"
                style={{ objectPosition: "center" }}
              />
            </div>
            <p
              className="mt-6"
              style={{
                color: "#1A2B48",
                fontSize: "14px",
                lineHeight: "1.8",
                textAlign: "center",
                opacity: 0.75,
                fontStyle: "italic",
              }}
            >
              {language === "jp"
                ? "教会でのバイブルスタディ中に宗家ミラー先生から助けを受けた女性からの感謝の手紙"
                : "Letter of gratitude from a lady who received help from Soke Miller during Bible study at church"}
            </p>
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