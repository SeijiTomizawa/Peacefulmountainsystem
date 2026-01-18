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

// Import all images from centralized asset management
import * as Images from './assets/images';

function DojoWebsite() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Memoize callback functions to prevent unnecessary re-renders
  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleMenuClick = useCallback(() => setIsDrawerOpen(true), []);

  // All seminar images
  const allSeminarImages = useMemo(() => [
    { src: Images.aichiSeminar1, alt: 'Seminar 1' },
    { src: Images.aichiSeminar2, alt: 'Seminar 2' },
    { src: Images.aichiSeminar3, alt: 'Seminar 3' },
    { src: Images.aichiSeminar4, alt: 'Seminar 4' },
    { src: Images.aichiSeminar5, alt: 'Seminar 5' },
    { src: Images.aichiSeminar6, alt: 'Seminar 6' },
    { src: Images.aichiSeminar7, alt: 'Seminar 7' },
    { src: Images.aichiSeminar8, alt: 'Seminar 8' },
    { src: Images.aichiSeminar9, alt: 'Seminar 9' },
    { src: Images.aichiSeminar11, alt: 'Seminar 11' },
    { src: Images.newyorkSeminar1, alt: 'Seminar 12' },
    { src: Images.newyorkSeminar2, alt: 'Seminar 13' },
    { src: Images.newyorkSeminar3, alt: 'Seminar 14' },
    { src: Images.newyorkSeminar4, alt: 'Seminar 15' },
    { src: Images.newyorkSeminar5, alt: 'Seminar 16' },
    { src: Images.newyorkSeminar6, alt: 'Seminar 17' },
    { src: Images.newyorkSeminar7, alt: 'Seminar 18' },
    { src: Images.newyorkSeminar8, alt: 'Seminar 19' },
    { src: Images.newyorkSeminar9, alt: 'Seminar 20' },
    { src: Images.newyorkSeminar10, alt: 'Seminar 21' },
    { src: Images.newyorkSeminar11, alt: 'Seminar 22' },
    { src: Images.newyorkSeminar12, alt: 'Seminar 23' },
    { src: Images.newyorkSeminar13, alt: 'Seminar 24' },
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
                src={Images.homeSokeImage} 
                alt="Soke Joe Miller seated in seiza"
                loading="eager"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', opacity: 0.7 }}
              />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
              <img
                src={Images.homeSokeTeachingImage}
                alt="Soke teaching students"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', opacity: 0.7 }}
              />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
              <img
                src={Images.homeShiatsuImage}
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
              key={`hero-headline-${language}`}
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
              {t.hero.headline}
            </motion.p>
            
            {/* Japanese Title with scale and fade animation */}
            <motion.h1
              key={`hero-subtext-${language}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ 
                fontFamily: language === 'jp' ? "'Zen Old Mincho', serif" : "'Noto Sans JP', sans-serif",
                fontSize: '42px',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.4',
                marginBottom: '24px',
                letterSpacing: '0.05em',
                textShadow: '0 6px 16px rgba(0,0,0,0.95), 0 3px 6px rgba(0,0,0,0.9)'
              }}
            >
              {t.hero.subtext}
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
                src={Images.homeDojoInteriorImage}
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
                src={Images.homeShiatsuImage}
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
                src={Images.sokeImage} 
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
              src={Images.taizanLogo}
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