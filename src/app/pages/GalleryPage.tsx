import { useState } from "react";
import Slider from "react-slick";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Header } from "../components/Header";
import { FadeTransition } from "../components/FadeTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import * as Images from "../assets/images";
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
        style={{ backgroundColor: "#6B1F23", minHeight: "250px" }}
        className="px-6 py-12 md:py-16"
      >
        <FadeTransition keyValue={`gallery-hero-${language}`}>
          <h1
            style={{
              fontFamily: language === "jp" ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
              fontSize: language === "jp" ? "32px" : "42px",
              fontWeight: language === "jp" ? 700 : 600,
              color: "white",
              lineHeight: "1.4",
              marginBottom: "12px",
              letterSpacing: language === "jp" ? "0" : "0.03em",
              textAlign: "center",
            }}
          >
            {t.gallery.page.hero.headline}
          </h1>
          <p
            style={{
              fontFamily: language === "jp" ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
              color: "white",
              fontSize: "15px",
              lineHeight: "1.7",
              opacity: 0.85,
              textAlign: "center",
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
                src={Images.aichiSeminar1}
                alt="Aichi Seminar 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar2}
                alt="Aichi Seminar 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar3}
                alt="Aichi Seminar 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar4}
                alt="Aichi Seminar 4"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar5}
                alt="Aichi Seminar 5"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar6}
                alt="Aichi Seminar 6"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar7}
                alt="Aichi Seminar 7"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar8}
                alt="Aichi Seminar 8"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar9}
                alt="Aichi Seminar 9"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.aichiSeminar11}
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
                src={Images.newyorkSeminar1}
                alt="New York Seminar 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar2}
                alt="New York Seminar 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar3}
                alt="New York Seminar 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar4}
                alt="New York Seminar 4"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar5}
                alt="New York Seminar 5"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar6}
                alt="New York Seminar 6"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar7}
                alt="New York Seminar 7"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar8}
                alt="New York Seminar 8"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar9}
                alt="New York Seminar 9"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar10}
                alt="New York Seminar 10"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar11}
                alt="New York Seminar 11"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar12}
                alt="New York Seminar 12"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={Images.newyorkSeminar13}
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
              src={Images.logoImage}
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