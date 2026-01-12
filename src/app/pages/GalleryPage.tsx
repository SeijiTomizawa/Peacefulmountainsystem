import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import aichiSeminar1 from "figma:asset/db40543d9d90e4cda1317b174a599f709968d361.png";
import aichiSeminar2 from "figma:asset/42a2977f6a5ce4972c8661283579e31fdd1a9415.png";
import aichiSeminar3 from "figma:asset/2acc8c1b17db30ad5e8691d7037bfe35274af246.png";
import aichiSeminar4 from "figma:asset/3de84f3f7419eec29d9608061efeec99539769fd.png";
import aichiSeminar5 from "figma:asset/5390e5f3b93c9a6b05f9c075b8d02241efdb2cd5.png";
import aichiSeminar6 from "figma:asset/0d93ca616dfb4c279614b21d34a37ab9dbeee91d.png";
import aichiSeminar7 from "figma:asset/2841be2f862da858e46d8d9c8e67d0190736bc4d.png";
import aichiSeminar8 from "figma:asset/8f74319c8bac11c3b230fdc688a35d6f0b88681e.png";
import aichiSeminar9 from "figma:asset/dc5be25d9ef4513eea354180f26d1ff64167f1f2.png";
import aichiSeminar11 from "figma:asset/79c3081e4dfb3eb089c930ed57cc44b7f9a7ac8a.png";
import newyorkSeminar1 from "figma:asset/edbac0f9aeb0b77b4652d48377a036f91c2c3ac6.png";
import newyorkSeminar2 from "figma:asset/847ac80f9933f31d709d0a66ad0d7a21f603200a.png";
import newyorkSeminar3 from "figma:asset/532f451ae7a981cf4b9cf39ee4024c782b30395a.png";
import newyorkSeminar4 from "figma:asset/564b287ae3c05b96a7ebebdd67b63be495259ff2.png";
import newyorkSeminar5 from "figma:asset/6d3ef3925904f7a35b744f3f15f897da10ed845e.png";
import newyorkSeminar6 from "figma:asset/bae8d63cc0414f4f527c0500b686e22aa5b3f587.png";
import newyorkSeminar7 from "figma:asset/204715bbf31be36e9cb6be9852c449ee819a93cc.png";
import newyorkSeminar8 from "figma:asset/643025310f6b7b37f6a45556b3026ddd4429fea0.png";
import newyorkSeminar9 from "figma:asset/be58dd497adaeb1eeffb66eb9805d3317d7b378b.png";
import newyorkSeminar10 from "figma:asset/d10ec4a06ca3deffab9b5434427b977817658db3.png";
import newyorkSeminar11 from "figma:asset/59dbb4c8c55d7b1c6f1c237077ff7cc7be255c69.png";
import newyorkSeminar12 from "figma:asset/25ede162a1846c6685e1173ac451cfd220b02179.png";
import newyorkSeminar13 from "figma:asset/18892ee108e9049dc84871557a24f795c22ec67e.png";
import logoImage from "figma:asset/8fbc73fac66db1cbb73a089ff2f0be78335936a2.png";
import Slider from "react-slick";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Header } from "../components/Header";
import { FadeTransition } from "../components/FadeTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import "../../styles/slick.css";

export function GalleryPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

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

      {/* Hero Section */}
      <section
        style={{ backgroundColor: "#6B1F23" }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`gallery-hero-${language}`}>
          <h1
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
              lineHeight: "1.4",
              marginBottom: "12px",
            }}
          >
            {t.gallery.page.hero.headline}
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "15px",
              lineHeight: "1.7",
              opacity: 0.85,
            }}
          >
            {t.gallery.page.hero.subtext}
          </p>
        </FadeTransition>
      </section>

      {/* Introduction */}
      <section
        style={{ backgroundColor: "#F9F9F7" }}
        className="px-6 py-12"
      >
        <FadeTransition keyValue={`gallery-intro-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "24px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {t.gallery.page.heading}
          </h2>
          <p
            style={{
              color: "#6B1F23",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "8px",
              textAlign: "center",
              opacity: 0.75,
            }}
          >
            {t.gallery.page.subheading}
          </p>
          <p
            style={{
              color: "#6B1F23",
              fontSize: "14px",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t.gallery.page.description}
          </p>
        </FadeTransition>
      </section>

      {/* Gallery Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        {/* Aichi Seminar Grid Gallery */}
        <div>
          <FadeTransition keyValue={`osaka-title-${language}`}>
            <div className="mb-6">
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#8C272E",
                  marginBottom: "4px",
                  textAlign: "center",
                }}
              >
                {t.gallery.seminars.osaka.title}
              </h3>
              <p
                style={{
                  color: "#6B1F23",
                  fontSize: "13px",
                  textAlign: "center",
                  opacity: 0.7,
                }}
              >
                {t.gallery.seminars.osaka.location}
              </p>
            </div>
          </FadeTransition>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar1}
                alt="Aichi Seminar 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar2}
                alt="Aichi Seminar 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar3}
                alt="Aichi Seminar 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar4}
                alt="Aichi Seminar 4"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar5}
                alt="Aichi Seminar 5"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar6}
                alt="Aichi Seminar 6"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar7}
                alt="Aichi Seminar 7"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar8}
                alt="Aichi Seminar 8"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar9}
                alt="Aichi Seminar 9"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={aichiSeminar11}
                alt="Aichi Seminar 11"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* New York Seminar Grid Gallery */}
        <div>
          <FadeTransition
            keyValue={`newyork-title-${language}`}
          >
            <div className="mb-6">
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#8C272E",
                  marginBottom: "4px",
                  textAlign: "center",
                }}
              >
                {t.gallery.seminars.newyork.title}
              </h3>
              <p
                style={{
                  color: "#6B1F23",
                  fontSize: "13px",
                  textAlign: "center",
                  opacity: 0.7,
                }}
              >
                {t.gallery.seminars.newyork.date} |{" "}
                {t.gallery.seminars.newyork.location}
              </p>
            </div>
          </FadeTransition>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar1}
                alt="New York Seminar 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar2}
                alt="New York Seminar 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar3}
                alt="New York Seminar 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar4}
                alt="New York Seminar 4"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar5}
                alt="New York Seminar 5"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar6}
                alt="New York Seminar 6"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar7}
                alt="New York Seminar 7"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar8}
                alt="New York Seminar 8"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar9}
                alt="New York Seminar 9"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar10}
                alt="New York Seminar 10"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar11}
                alt="New York Seminar 11"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar12}
                alt="New York Seminar 12"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={newyorkSeminar13}
                alt="New York Seminar 13"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        style={{ backgroundColor: "#6B1F23" }}
        className="px-6 py-12"
      >
        <FadeTransition keyValue={`gallery-footer-${language}`}>
          <div
            className="flex flex-col items-center border-t pt-8"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <img
              src={logoImage}
              alt="Taizan-Ryu Logo"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {t.footer.name}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "13px",
                lineHeight: "1.8",
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              {t.footer.location}
              <br />
              {t.footer.hours}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                marginTop: "16px",
                opacity: 0.5,
                textAlign: "center",
              }}
            >
              {t.footer.copyright}
            </p>
          </div>
        </FadeTransition>
      </section>
    </div>
  );
}