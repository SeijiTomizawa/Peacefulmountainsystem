import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FadeTransition } from '../components/FadeTransition';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function VideosPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen" style={{ 
      fontFamily: "'Noto Sans JP', sans-serif",
      backgroundColor: '#F9F9F7'
    }}>
      {/* Navigation Drawer */}
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Sticky Header */}
      <Header onMenuClick={() => setIsDrawerOpen(true)} />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#6B1F23' }} className="px-6 py-16">
        <FadeTransition keyValue={`videos-hero-${language}`}>
          <h1 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            lineHeight: '1.4',
            marginBottom: '12px'
          }}>
            {t.videos.page.hero.headline}
          </h1>
          <p style={{ 
            color: 'white',
            fontSize: '15px',
            lineHeight: '1.7',
            opacity: 0.9
          }}>
            {t.videos.page.hero.subtext}
          </p>
        </FadeTransition>
      </section>

      {/* Videos Content */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`videos-content-${language}`}>
          <h2 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            {t.videos.page.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '16px',
            textAlign: 'center',
            opacity: 0.75
          }}>
            {t.videos.page.subheading}
          </p>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '40px',
            textAlign: 'center',
            opacity: 0.65
          }}>
            {t.videos.page.description}
          </p>
        </FadeTransition>

        {/* Coming Soon Message */}
        <div className="flex items-center justify-center" style={{ minHeight: '400px' }}>
          <FadeTransition keyValue={`coming-soon-${language}`}>
            <div className="text-center">
              <h3 style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '48px',
                fontWeight: 700,
                color: '#8C272E',
                lineHeight: '1.4',
                marginBottom: '16px',
                letterSpacing: '0.1em'
              }}>
                COMING SOON...
              </h3>
              <p style={{ 
                color: '#6B1F23',
                fontSize: '16px',
                lineHeight: '1.8',
                opacity: 0.7
              }}>
                {language === 'jp' ? 'ビデオコンテンツは近日公開予定です' : 'Video content will be available soon'}
              </p>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
