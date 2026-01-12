import { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { translations } from './translations/translations';
import { COLORS } from './constants/theme';
import { SEOHead } from './components/SEOHead';
import { NavigationDrawer } from './components/NavigationDrawer';
import { Header } from './components/Header';
import { FadeTransition } from './components/FadeTransition';
import { AccessSection } from './components/AccessSection';
import { ContactFooter } from './components/ContactFooter';
import { SeminarCarousel } from './components/SeminarCarousel';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NotFoundPage } from './pages/NotFoundPage';
import Slider from 'react-slick';
import '../styles/slick.css';

// Import pages directly instead of lazy loading
import ShiatsuPage from './pages/ShiatsuPage';
import SelfDefensePage from './pages/SelfDefensePage';
import { MembersPage } from './pages/MembersPage';
import { VideosPage } from './pages/VideosPage';
import { GalleryPage } from './pages/GalleryPage';
import { SokePage } from './pages/SokePage';
import { ContactPage } from './pages/ContactPage';
import { LinksPage } from './pages/LinksPage';

// Real images from Unsplash
const sokeImage = "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBtYXN0ZXIlMjBkb2pvfGVufDF8fHx8MTc2ODA3MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const shiatsuImage = "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlhdHN1JTIwbWFzc2FnZSUyMHRoZXJhcHl8ZW58MXx8fHwxNzY4MTQ3MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const dojoInteriorImage = "https://images.unsplash.com/photo-1746701905946-f1babf656914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNDcwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const sokeTeachingImage = "https://images.unsplash.com/photo-1618676156034-df5979d43c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRlYWNoaW5nJTIwZG9qb3xlbnwxfHx8fDE3NjgxNDcxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const taizanLogo = "https://images.unsplash.com/photo-1758567056386-768c303d19b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hcnRpYWwlMjBhcnRzJTIwbG9nb3xlbnwxfHx8fDE3NjgxNDcxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Import seminar images from Gallery
import aichiSeminar1 from 'figma:asset/db40543d9d90e4cda1317b174a599f709968d361.png';
import aichiSeminar2 from 'figma:asset/42a2977f6a5ce4972c8661283579e31fdd1a9415.png';
import aichiSeminar3 from 'figma:asset/2acc8c1b17db30ad5e8691d7037bfe35274af246.png';
import aichiSeminar4 from 'figma:asset/3de84f3f7419eec29d9608061efeec99539769fd.png';
import aichiSeminar5 from 'figma:asset/5390e5f3b93c9a6b05f9c075b8d02241efdb2cd5.png';
import aichiSeminar6 from 'figma:asset/0d93ca616dfb4c279614b21d34a37ab9dbeee91d.png';
import aichiSeminar7 from 'figma:asset/2841be2f862da858e46d8d9c8e67d0190736bc4d.png';
import aichiSeminar8 from 'figma:asset/8f74319c8bac11c3b230fdc688a35d6f0b88681e.png';
import aichiSeminar9 from 'figma:asset/dc5be25d9ef4513eea354180f26d1ff64167f1f2.png';
import aichiSeminar11 from 'figma:asset/79c3081e4dfb3eb089c930ed57cc44b7f9a7ac8a.png';
import newyorkSeminar1 from 'figma:asset/edbac0f9aeb0b77b4652d48377a036f91c2c3ac6.png';
import newyorkSeminar2 from 'figma:asset/847ac80f9933f31d709d0a66ad0d7a21f603200a.png';
import newyorkSeminar3 from 'figma:asset/532f451ae7a981cf4b9cf39ee4024c782b30395a.png';
import newyorkSeminar4 from 'figma:asset/564b287ae3c05b96a7ebebdd67b63be495259ff2.png';
import newyorkSeminar5 from 'figma:asset/6d3ef3925904f7a35b744f3f15f897da10ed845e.png';
import newyorkSeminar6 from 'figma:asset/bae8d63cc0414f4f527c0500b686e22aa5b3f587.png';
import newyorkSeminar7 from 'figma:asset/204715bbf31be36e9cb6be9852c449ee819a93cc.png';
import newyorkSeminar8 from 'figma:asset/643025310f6b7b37f6a45556b3026ddd4429fea0.png';
import newyorkSeminar9 from 'figma:asset/be58dd497adaeb1eeffb66eb9805d3317d7b378b.png';
import newyorkSeminar10 from 'figma:asset/d10ec4a06ca3deffab9b5434427b977817658db3.png';
import newyorkSeminar11 from 'figma:asset/59dbb4c8c55d7b1c6f1c237077ff7cc7be255c69.png';
import newyorkSeminar12 from 'figma:asset/25ede162a1846c6685e1173ac451cfd220b02179.png';
import newyorkSeminar13 from 'figma:asset/18892ee108e9049dc84871557a24f795c22ec67e.png';

function DojoWebsite() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Memoize callback functions to prevent unnecessary re-renders
  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleMenuClick = useCallback(() => setIsDrawerOpen(true), []);

  // All seminar images
  const allSeminarImages = useMemo(() => [
    { src: aichiSeminar1, alt: 'Seminar 1' },
    { src: aichiSeminar2, alt: 'Seminar 2' },
    { src: aichiSeminar3, alt: 'Seminar 3' },
    { src: aichiSeminar4, alt: 'Seminar 4' },
    { src: aichiSeminar5, alt: 'Seminar 5' },
    { src: aichiSeminar6, alt: 'Seminar 6' },
    { src: aichiSeminar7, alt: 'Seminar 7' },
    { src: aichiSeminar8, alt: 'Seminar 8' },
    { src: aichiSeminar9, alt: 'Seminar 9' },
    { src: aichiSeminar11, alt: 'Seminar 11' },
    { src: newyorkSeminar1, alt: 'Seminar 12' },
    { src: newyorkSeminar2, alt: 'Seminar 13' },
    { src: newyorkSeminar3, alt: 'Seminar 14' },
    { src: newyorkSeminar4, alt: 'Seminar 15' },
    { src: newyorkSeminar5, alt: 'Seminar 16' },
    { src: newyorkSeminar6, alt: 'Seminar 17' },
    { src: newyorkSeminar7, alt: 'Seminar 18' },
    { src: newyorkSeminar8, alt: 'Seminar 19' },
    { src: newyorkSeminar9, alt: 'Seminar 20' },
    { src: newyorkSeminar10, alt: 'Seminar 21' },
    { src: newyorkSeminar11, alt: 'Seminar 22' },
    { src: newyorkSeminar12, alt: 'Seminar 23' },
    { src: newyorkSeminar13, alt: 'Seminar 24' },
  ], []);

  // Select 7 random images from all seminar images
  const randomSeminarImages = useMemo(() => {
    const shuffled = [...allSeminarImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 7);
  }, [allSeminarImages]);

  return (
    <div className="min-h-screen" style={{ 
      fontFamily: "'Noto Sans JP', sans-serif",
      backgroundColor: COLORS.offWhite
    }}>
      {/* SEO Meta Tags */}
      <SEOHead
        title={language === 'jp' 
          ? '泰山流護身術 八王子本部道場 | Taizan-Ryu Hachioji Honbu'
          : 'Taizan-Ryu Hachioji Honbu | Traditional Japanese Martial Arts & Shiatsu'}
        description={language === 'jp'
          ? '60年以上の武道経験に基づく実的な護身術。合気柔術、柔道、空手の技術を統合し、現代社会に適応した効果的な防御システムを学びます。'
          : 'Practical self-defense based on over 60 years of martial arts experience. Learn effective defense system integrating Aikijujutsu, Judo, and Karate techniques.'}
      />
      
      {/* Navigation Drawer */}
      <NavigationDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />

      {/* Sticky Header */}
      <Header onMenuClick={handleMenuClick} />

      {/* Hero Section */}
      <section id="hero" className="relative" style={{ backgroundColor: COLORS.main, height: '500px', overflow: 'hidden' }}>
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
          <Slider
            dots={false}
            infinite={true}
            speed={1000}
            fade={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            pauseOnHover={false}
            lazyLoad="progressive"
          >
            <div style={{ height: '500px', width: '100%' }}>
              <img 
                src={sokeImage} 
                alt="Soke Joe Miller seated in seiza"
                loading="eager"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', opacity: 0.7 }}
              />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
              <img
                src={sokeTeachingImage}
                alt="Soke teaching students"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', opacity: 0.7 }}
              />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
              <img
                src={shiatsuImage}
                alt="Soke demonstrating technique"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', opacity: 0.7 }}
              />
            </div>
          </Slider>
        </div>
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 z-10" style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)' 
        }} />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="px-6 text-center w-full">
            {/* Tagline with fade and slide up animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ 
                color: 'white',
                fontSize: '20px',
                lineHeight: '1.8',
                fontWeight: 400,
                marginBottom: '60px',
                textShadow: '0 6px 16px rgba(0,0,0,0.95), 0 3px 6px rgba(0,0,0,0.9)'
              }}
            >
              守破離の精神で、真の護身を。
            </motion.p>
            
            {/* Japanese Title with scale and fade animation */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ 
                fontFamily: "'Zen Old Mincho', serif",
                fontSize: '42px',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.4',
                marginBottom: '24px',
                letterSpacing: '0.05em',
                textShadow: '0 6px 16px rgba(0,0,0,0.95), 0 3px 6px rgba(0,0,0,0.9)'
              }}
            >
              泰山流護身術・逮捕術　東京八王子本部道場
            </motion.h1>
            
            {/* English Title with fade and slide up animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
              style={{ 
                fontFamily: "'Damion', cursive",
                fontSize: '24px',
                fontWeight: 600,
                color: 'white',
                lineHeight: '1.5',
                letterSpacing: '0.12em',
                textShadow: '0 6px 16px rgba(0,0,0,0.95), 0 3px 6px rgba(0,0,0,0.9)'
              }}
            >
              PEACEFUL MOUNTAIN SYSTEM
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Three Main Sections: Self-Defense, Shiatsu, About Soke */}
      <section style={{ backgroundColor: COLORS.main }} className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Self-Defense (泰山流護身術) */}
          <div className="flex flex-col">
            <div className="rounded-lg overflow-hidden shadow-md mb-6" style={{ aspectRatio: '4/3', backgroundColor: COLORS.offWhite }}>
              <img
                src={dojoInteriorImage}
                alt="Taizan-Ryu Self-Defense"
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <FadeTransition keyValue={`self-defense-card-${language}`}>
              <h2 style={{ 
                fontFamily: "'Zen Old Mincho', serif",
                fontSize: '20px',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}>
                {language === 'jp' ? '泰山流護身術・逮捕術' : 'Taizan-Ryu Self-Defense'}
              </h2>
              <p style={{ 
                color: 'white',
                fontSize: '14px',
                lineHeight: '1.8',
                opacity: 0.85,
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {language === 'jp' 
                  ? '60年以上の武道経験に基づく実践的な護身術。合気柔術、柔道、空手の技術を統合し、現代社会に適応した効果的な防御システムを学びます。'
                  : 'Practical self-defense based on over 60 years of martial arts experience. Learn an effective defense system that integrates Aikijujutsu, Judo, and Karate techniques adapted for modern society.'}
              </p>
              <Link
                to="/self-defense"
                style={{
                  backgroundColor: COLORS.buttonPrimary,
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
                }}
              >
                {language === 'jp' ? '護身術・逮捕術について詳しく見る' : 'Learn More'}
              </Link>
            </FadeTransition>
          </div>

          {/* Card 2: Shiatsu (泰山流指圧) */}
          <div className="flex flex-col">
            <div className="rounded-lg overflow-hidden shadow-md mb-6" style={{ aspectRatio: '4/3', backgroundColor: COLORS.offWhite }}>
              <img
                src={shiatsuImage}
                alt="Taizan-Ryu Shiatsu"
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <FadeTransition keyValue={`shiatsu-card-${language}`}>
              <h2 style={{ 
                fontFamily: "'Zen Old Mincho', serif",
                fontSize: '20px',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}>
                {language === 'jp' ? '泰山流指圧整体院' : 'Taizan-Ryu Shiatsu'}
              </h2>
              <p style={{ 
                color: 'white',
                fontSize: '14px',
                lineHeight: '1.8',
                opacity: 0.85,
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {language === 'jp'
                  ? '武道の知識と経験を活かした独自の整体・指圧療法。身体のバランスを整え、自然治癒力を高めることで、心身の健康をサポートします。'
                  : 'Unique Seitai and Shiatsu therapy utilizing martial arts knowledge and experience. Support mind-body health by balancing the body and enhancing natural healing power.'}
              </p>
              <Link
                to="/shiatsu"
                style={{
                  backgroundColor: COLORS.buttonPrimary,
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
                }}
              >
                {language === 'jp' ? '指圧について詳しく見る' : 'Learn More'}
              </Link>
            </FadeTransition>
          </div>

          {/* Card 3: About Soke (宗家について) */}
          <div className="flex flex-col">
            <div className="rounded-lg overflow-hidden shadow-md mb-6" style={{ aspectRatio: '4/3', backgroundColor: COLORS.offWhite }}>
              <img 
                src={sokeImage} 
                alt="Soke Joe Miller" 
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <FadeTransition keyValue={`master-card-${language}`}>
              <h2 style={{ 
                fontFamily: "'Zen Old Mincho', serif",
                fontSize: '20px',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.4',
                marginBottom: '16px'
              }}>
                {language === 'jp' ? '宗家について' : 'About Soke'}
              </h2>
              <p style={{ 
                color: 'white',
                fontSize: '14px',
                lineHeight: '1.8',
                opacity: 0.85,
                marginBottom: '24px',
                flexGrow: 1
              }}>
                {t.master.text}
              </p>
              <Link
                to="/soke"
                style={{
                  backgroundColor: COLORS.buttonPrimary,
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
                }}
              >
                {t.master.preview.button}
              </Link>
            </FadeTransition>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`information-${language}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 style={{ 
              fontFamily: language === 'jp' ? "'Zen Old Mincho', serif" : "'Damion', cursive",
              fontSize: '28px',
              fontWeight: 700,
              color: '#6B1F23',
              lineHeight: '1.5',
              marginBottom: '16px',
              letterSpacing: '0.05em'
            }}>
              {language === 'jp' ? 'お知らせ' : 'INFORMATION'}
            </h2>
            <div style={{
              borderTop: `2px solid ${COLORS.warmBeige}`,
              borderBottom: `2px solid ${COLORS.warmBeige}`,
              padding: '32px 24px',
              marginTop: '24px'
            }}>
              <p style={{ 
                color: COLORS.main,
                fontSize: '16px',
                lineHeight: '1.8',
                fontWeight: 500,
                letterSpacing: '0.08em',
                opacity: 0.7
              }}>
                NEW INFORMATION COMING SOON...
              </p>
            </div>
          </div>
        </FadeTransition>
      </section>

      {/* Taizan-Ryu Logo Section */}
      <section style={{ backgroundColor: COLORS.warmBeige }} className="px-6 py-20">
        <FadeTransition keyValue={`taizan-logo-${language}`}>
          <div className="max-w-2xl mx-auto text-center">
            <img
              src={taizanLogo}
              alt="Taizan-Ryu Peaceful Mountain System Logo"
              className="mx-auto"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))'
              }}
            />
          </div>
        </FadeTransition>
      </section>

      {/* Gallery & Atmosphere Section */}
      <section id="gallery" style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`gallery-${language}`}>
          <h2 style={{ 
            fontFamily: "'Zen Old Mincho', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            {t.gallery.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '40px',
            textAlign: 'center',
            opacity: 0.75
          }}>
            {t.gallery.caption}
          </p>
        </FadeTransition>

        {/* Seminar Carousel */}
        <SeminarCarousel
          subtitle={t.gallery.seminars.location}
          images={randomSeminarImages}
          autoplaySpeed={4000}
          language={language}
        />

        {/* Gallery Button */}
        <FadeTransition keyValue={`gallery-button-${language}`}>
          <div className="flex justify-center mt-8">
            <Link
              to="/gallery"
              style={{
                backgroundColor: COLORS.buttonPrimary,
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
              }}
            >
              {t.gallery.preview.button}
            </Link>
          </div>
        </FadeTransition>
      </section>

      {/* Members Section */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`members-${language}`}>
          <h2 style={{ 
            fontFamily: "'Zen Old Mincho', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {t.members.preview.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '32px',
            textAlign: 'center',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t.members.preview.text}
          </p>
          <div className="flex justify-center">
            <Link
              to="/members"
              style={{
                backgroundColor: COLORS.buttonPrimary,
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
              }}
            >
              {t.members.preview.button}
            </Link>
          </div>
        </FadeTransition>
      </section>

      {/* Videos Section */}
      <section style={{ backgroundColor: COLORS.warmBeige }} className="px-6 py-16">
        <FadeTransition keyValue={`videos-${language}`}>
          <h2 style={{ 
            fontFamily: "'Zen Old Mincho', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {t.videos.preview.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '32px',
            textAlign: 'center',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t.videos.preview.text}
          </p>
          <div className="flex justify-center">
            <Link
              to="/videos"
              style={{
                backgroundColor: COLORS.buttonPrimary,
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
              }}
            >
              {t.videos.preview.button}
            </Link>
          </div>
        </FadeTransition>
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DojoWebsite />} />
            <Route path="/shiatsu" element={<ShiatsuPage />} />
            <Route path="/self-defense" element={<SelfDefensePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/soke" element={<SokePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
}