import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { FadeTransition } from "../components/FadeTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Real images from Unsplash
const sokeImage = "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBtYXN0ZXIlMjBkb2pvfGVufDF8fHx8MTc2ODA3MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const sokeCouple = "https://images.unsplash.com/photo-1550058905-c91bce5e0bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBjb3VwbGV8ZW58MXx8fHwxNzY4MTQ3MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const shihanSaulCohe = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const sokeMichaelDePasquale = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGdyYW5kbWFzdGVyfGVufDF8fHx8MTc2ODE0NzEwMHww&ixlib=rb-4.1.0&q=80&w=1080";
const shodaiOkuyama = "https://images.unsplash.com/photo-1731530338283-eb0d9371e463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFpa2lkbyUyMG1hc3RlcnxlbnwxfHx8fDE3NjgxNDcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic1 = "https://images.unsplash.com/photo-1703231528182-5ced05e25800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFydGlhbCUyMGFydHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgxNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic2 = "https://images.unsplash.com/photo-1585220703197-37c07314376e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkb2pvJTIwcGhvdG9ncmFwaHxlbnwxfHx8fDE3NjgxNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic3 = "https://images.unsplash.com/photo-1703231528182-5ced05e25800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwanVkbyUyMHByYWN0aWNlfGVufDF8fHx8MTc2ODE0NzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic4 = "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbWFydGlhbCUyMGFydHMlMjBwaG90b3xlbnwxfHx8fDE3NjgxNDcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic5 = "https://images.unsplash.com/photo-1731530338283-eb0d9371e463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFpa2lkbyUyMG1hc3RlcnxlbnwxfHx8fDE3NjgxNDcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic6 = "https://images.unsplash.com/photo-1703231528182-5ced05e25800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFydGlhbCUyMGFydHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgxNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic7 = "https://images.unsplash.com/photo-1585220703197-37c07314376e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkb2pvJTIwcGhvdG9ncmFwaHxlbnwxfHx8fDE3NjgxNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic8 = "https://images.unsplash.com/photo-1703231528182-5ced05e25800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwanVkbyUyMHByYWN0aWNlfGVufDF8fHx8MTc2ODE0NzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic9 = "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbWFydGlhbCUyMGFydHMlMjBwaG90b3xlbnwxfHx8fDE3NjgxNDcxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const oldPic10 = "https://images.unsplash.com/photo-1703231528182-5ced05e25800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWFydGlhbCUyMGFydHMlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgxNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt1 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt2 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt3 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt4 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt5 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt6 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt7 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt8 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt9 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt10 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt11 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt12 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt13 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt14 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt15 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt16 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt17 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt18 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt19 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const martialArt20 = "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMG1hc3RlciUyMHNoaWhhbnxlbnwxfHx8fDE3NjgxNDcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { AccessSection } from "../components/AccessSection";
import { ContactFooter } from "../components/ContactFooter";
import { Header } from "../components/Header";
import Slider from "react-slick";
import "../../styles/slick.css";

export function SokePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedMartialArtIndex, setSelectedMartialArtIndex] =
    useState<number | null>(null);
  const [selectedOldPictureIndex, setSelectedOldPictureIndex] =
    useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const martialArtImages = [
    martialArt1,
    martialArt2,
    martialArt3,
    martialArt4,
    martialArt5,
    martialArt6,
    martialArt7,
    martialArt8,
    martialArt9,
    martialArt10,
    martialArt11,
    martialArt12,
    martialArt13,
    martialArt14,
    martialArt15,
    martialArt16,
    martialArt17,
    martialArt18,
    martialArt19,
    martialArt20,
  ];

  const oldPictureImages = [
    oldPic1,
    oldPic2,
    oldPic3,
    oldPic4,
    oldPic5,
    oldPic6,
    oldPic7,
    oldPic8,
    oldPic9,
    oldPic10,
  ];

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
        {/* Soke Image */}
        <div
          className="rounded-lg overflow-hidden shadow-lg mb-6"
          style={{
            aspectRatio: "4/3",
            backgroundColor: "black",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <img
            src={sokeImage}
            alt="Soke Joseph Miller"
            className="w-full h-full object-contain"
            style={{ objectPosition: "center" }}
          />
        </div>
      </section>

      {/* Intro Section */}
      <section
        style={{ backgroundColor: "#6B1F23" }}
        className="px-6 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <FadeTransition keyValue={`intro-${language}`}>
            <h1
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "white",
                lineHeight: "1.5",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              {t.master.page.intro.heading}
            </h1>
          </FadeTransition>

          <FadeTransition keyValue={`intro-text-${language}`}>
            <p
              style={{
                color: "white",
                fontSize: "15px",
                lineHeight: "1.8",
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {t.master.page.intro.text}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Journey Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`journey-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {t.master.page.journey.heading}
          </h2>
          <p
            style={{
              color: "#6B1F23",
              fontSize: "15px",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t.master.page.journey.text}
          </p>
        </FadeTransition>
      </section>

      {/* Masters Section */}
      <section
        style={{ backgroundColor: "#E8E2D6" }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`masters-heading-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {t.master.page.masters.heading}
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#8C272E",
              margin: "0 auto 32px",
            }}
          />
        </FadeTransition>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.master.page.masters.instructors.map((instructor: any, index: number) => {
              const images = [
                shihanSaulCohe,
                sokeMichaelDePasquale,
                shodaiOkuyama
              ];
              
              return (
                <FadeTransition
                  key={index}
                  keyValue={`master-card-${index}-${language}`}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                    style={{
                      border: "1px solid #E8E2D6",
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        aspectRatio: "3/4",
                        backgroundColor: "#F9F9F7",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={images[index]}
                        alt={instructor.name}
                        className="w-full h-full"
                        style={{ 
                          objectFit: "cover",
                          objectPosition: "center" 
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        style={{
                          fontFamily: "'Noto Serif JP', serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#6B1F23",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        {instructor.name}
                      </h3>
                      <p
                        style={{
                          color: "#8C272E",
                          fontSize: "14px",
                          fontWeight: 600,
                          textAlign: "center",
                          lineHeight: "1.6",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {instructor.style}
                      </p>
                    </div>
                  </div>
                </FadeTransition>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Story Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`story-heading-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {t.master.page.story.heading}
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#8C272E",
              margin: "0 auto 32px",
            }}
          />
        </FadeTransition>

        <div className="max-w-4xl mx-auto">
          {/* Chapter 1: The Beginning (Paragraphs 0-1) */}
          <FadeTransition keyValue={`story-chapter1-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "32px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第1章：始まり（1963-1964）" : "Chapter 1: The Beginning (1963-1964)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(0, 2).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index}
              keyValue={`story-para-ch1-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
            </FadeTransition>
          ))}

          {/* Chapter 2: Meeting Yoshitsune Dojo (Paragraphs 2-4) */}
          <FadeTransition keyValue={`story-chapter2-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第2章：義経道場との運命的な出会い（1964）" : "Chapter 2: Fateful Meeting with Yoshitsune Dojo (1964)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(2, 5).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index + 2}
              keyValue={`story-para-ch2-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
            </FadeTransition>
          ))}

          {/* Chapter 3: US Air Force and Path to Japan (Paragraphs 5-6) */}
          <FadeTransition keyValue={`story-chapter3-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第3章：米国空軍と日本への道（1968-1972）" : "Chapter 3: US Air Force and Path to Japan (1968-1972)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(5, 7).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index + 5}
              keyValue={`story-para-ch3-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
              {/* Insert couple photo after paragraph 6 (index 1 in this slice) */}
              {index === 1 && (
                <div className="my-12">
                  <div
                    className="rounded-lg overflow-hidden shadow-xl"
                    style={{
                      maxWidth: "700px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={sokeCouple}
                      alt="Soke and his wife in Japan"
                      className="w-full h-auto"
                    />
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#6B1F23",
                      fontSize: "13px",
                      marginTop: "12px",
                      fontStyle: "italic",
                      opacity: 0.7,
                    }}
                  >
                    {language === "jp"
                      ? "日本での思い出"
                      : "Memories from Japan"}
                  </p>
                </div>
              )}
            </FadeTransition>
          ))}

          {/* Chapter 4: Training in Hakkoryu and Shihan Promotion (Paragraphs 7-8) */}
          <FadeTransition keyValue={`story-chapter4-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第4章：八光流での修行と師範昇進（1972-1973）" : "Chapter 4: Training in Hakkoryu and Shihan Promotion (1972-1973)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(7, 9).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index + 7}
              keyValue={`story-para-ch4-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
            </FadeTransition>
          ))}

          {/* Chapter 5: Trials and New Path (Paragraphs 9-10) */}
          <FadeTransition keyValue={`story-chapter5-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第5章：試練と新たな道（1973-1976）" : "Chapter 5: Trials and New Path (1973-1976)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(9, 11).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index + 9}
              keyValue={`story-para-ch5-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
            </FadeTransition>
          ))}

          {/* Chapter 6: Gratitude to Masters (Paragraph 11) */}
          <FadeTransition keyValue={`story-chapter6-${language}`}>
            <h3
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#6B1F23",
                lineHeight: "1.5",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              {language === "jp" ? "第6章：師への感謝（2023）" : "Chapter 6: Gratitude to My Masters (2023)"}
            </h3>
          </FadeTransition>
          
          {t.master.page.story.paragraphs.slice(11).map((paragraph: string, index: number) => (
            <FadeTransition
              key={index + 11}
              keyValue={`story-para-ch6-${index}-${language}`}
            >
              <p
                style={{
                  color: "#1A2B48",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </p>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* Martial Art Section */}
      <section
        style={{ backgroundColor: "#E8E2D6" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`martial-art-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {t.master.page.martialArt.heading}
          </h2>
          <p
            style={{
              color: "#6B1F23",
              fontSize: "14px",
              lineHeight: "1.8",
              textAlign: "center",
              marginBottom: "32px",
              opacity: 0.7,
            }}
          >
            {t.master.page.martialArt.subtext}
          </p>
        </FadeTransition>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: 4-column grid */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-4 mb-8">
            {martialArtImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#F9F9F7",
                }}
                onClick={() =>
                  setSelectedMartialArtIndex(index)
                }
              >
                <img
                  src={image}
                  alt={`Martial Art ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Multi-image carousel */}
          <div className="md:hidden mb-8">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={false}
            >
              {martialArtImages.map((image, index) => (
                <div key={index} className="px-1.5">
                  <div
                    className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                    style={{
                      aspectRatio: "4/3",
                      backgroundColor: "#F9F9F7",
                    }}
                    onClick={() =>
                      setSelectedMartialArtIndex(index)
                    }
                  >
                    <img
                      src={image}
                      alt={`Martial Art ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedMartialArtIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            onClick={() => setSelectedMartialArtIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => setSelectedMartialArtIndex(null)}
            >
              <X size={24} color="white" />
            </button>

            <div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full z-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {selectedMartialArtIndex + 1} /{" "}
              {martialArtImages.length}
            </div>

            <button
              className="absolute left-4 p-3 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMartialArtIndex(
                  (selectedMartialArtIndex -
                    1 +
                    martialArtImages.length) %
                    martialArtImages.length,
                );
              }}
            >
              <ChevronLeft size={32} color="white" />
            </button>

            <div
              className="max-w-5xl max-h-screen px-16 py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={martialArtImages[selectedMartialArtIndex]}
                alt={`Martial Art ${selectedMartialArtIndex + 1}`}
                className="w-full h-full object-contain"
                style={{ maxHeight: "85vh" }}
              />
            </div>

            <button
              className="absolute right-4 p-3 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMartialArtIndex(
                  (selectedMartialArtIndex + 1) %
                    martialArtImages.length,
                );
              }}
            >
              <ChevronRight size={32} color="white" />
            </button>
          </div>
        )}
      </section>

      {/* Faith Section */}
      <section
        style={{ backgroundColor: "#6B1F23" }}
        className="px-6 py-16"
      >
        <FadeTransition keyValue={`faith-${language}`}>
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "white",
              lineHeight: "1.5",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {t.master.page.faith.heading}
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "15px",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 32px",
              opacity: 0.9,
              whiteSpace: "pre-line",
            }}
          >
            {t.master.page.faith.text}
          </p>
          <p
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "white",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            {t.master.page.faith.signature}
          </p>
        </FadeTransition>
      </section>

      {/* Old Time Pictures Section */}
      <section
        style={{ backgroundColor: "white" }}
        className="px-6 py-16"
      >
        <FadeTransition
          keyValue={`old-pictures-heading-${language}`}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#6B1F23",
              lineHeight: "1.5",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {t.master.page.oldPictures.heading}
          </h2>
          <p
            style={{
              color: "#6B1F23",
              fontSize: "14px",
              lineHeight: "1.8",
              textAlign: "center",
              marginBottom: "32px",
              opacity: 0.7,
            }}
          >
            {t.master.page.oldPictures.subtext}
          </p>
        </FadeTransition>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: 4-column grid */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-4 mb-8">
            {oldPictureImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#F9F9F7",
                }}
                onClick={() =>
                  setSelectedOldPictureIndex(index)
                }
              >
                <img
                  src={image}
                  alt={`Old Time Picture ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Multi-image carousel */}
          <div className="md:hidden mb-8">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={2}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={false}
            >
              {oldPictureImages.map((image, index) => (
                <div key={index} className="px-1.5">
                  <div
                    className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                    style={{
                      aspectRatio: "4/3",
                      backgroundColor: "#F9F9F7",
                    }}
                    onClick={() =>
                      setSelectedOldPictureIndex(index)
                    }
                  >
                    <img
                      src={image}
                      alt={`Old Time Picture ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedOldPictureIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            onClick={() => setSelectedOldPictureIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => setSelectedOldPictureIndex(null)}
            >
              <X size={24} color="white" />
            </button>

            <div
              className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full z-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {selectedOldPictureIndex + 1} /{" "}
              {oldPictureImages.length}
            </div>

            <button
              className="absolute left-4 p-3 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOldPictureIndex(
                  (selectedOldPictureIndex -
                    1 +
                    oldPictureImages.length) %
                    oldPictureImages.length,
                );
              }}
            >
              <ChevronLeft size={32} color="white" />
            </button>

            <div
              className="max-w-5xl max-h-screen px-16 py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={oldPictureImages[selectedOldPictureIndex]}
                alt={`Old Time Picture ${selectedOldPictureIndex + 1}`}
                className="w-full h-full object-contain"
                style={{ maxHeight: "85vh" }}
              />
            </div>

            <button
              className="absolute right-4 p-3 rounded-full z-50"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOldPictureIndex(
                  (selectedOldPictureIndex + 1) %
                    oldPictureImages.length,
                );
              }}
            >
              <ChevronRight size={32} color="white" />
            </button>
          </div>
        )}
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer */}
      <ContactFooter />
    </div>
  );
}