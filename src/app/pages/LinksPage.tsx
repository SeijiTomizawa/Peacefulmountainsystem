import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { taizanLogo } from '../assets/images';
import { COLORS } from '../constants/theme';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { AccessSection } from '../components/AccessSection';
import { ContactFooter } from '../components/ContactFooter';
import { FadeTransition } from '../components/FadeTransition';

export function LinksPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Temporary hardcoded translations until translation file is fixed
  const linksContent = {
    jp: {
      hero: {
        headline: '友好関係の道場・団体',
        subtext: '泰山流と共に歩む仲間たち'
      },
      heading: '友好関係の道場・団体',
      subheading: '世界各地で活動する泰山流の仲間と関連組織',
      description: '宗家ジョー・ミラーと共に修行を重ねてきた道場や、友好関係にある武道団体をご紹介します。',
      visitButton: 'ウェブサイトを見る',
      items: [
        {
          name: '天庸流柔術 大阪総本部道場 木鶏塾',
          location: '大阪府大阪市北区天満',
          description: '力や身体の大きさに関係なく、一人ひとりのポテンシャルの向上を目的とした稽古を行ってります。',
          url: 'https://mokkeijuku.com/'
        },
        {
          name: '天庸流柔術　東京支部',
          location: '東京調布・三鷹・荻窪',
          description: '体操や指圧も行い、お互いに健康になれてしまうというお得な集まりですので、初心者の方もぜひ、気軽にご参加ください。',
          url: 'https://9f0sw.hp.peraichi.com/'
        }
      ]
    },
    en: {
      hero: {
        headline: 'Affiliated Dojos & Organizations',
        subtext: 'Training partners of Taizan-Ryu around the world'
      },
      heading: 'Affiliated Dojos & Organizations',
      subheading: 'Taizan-Ryu partners and related organizations around the world',
      description: 'Introducing dojos and martial arts organizations with friendly relationships that have trained with Soke Joe Miller.',
      visitButton: 'Visit Website',
      items: [
        {
          name: 'Tenyo-Ryu Jujutsu Osaka Sohonbu Dojo Mokkeijuku',
          location: 'Kita-ku, Osaka City, Osaka',
          description: 'We conduct training aimed at improving each individual\'s potential, regardless of strength or body size.',
          url: 'https://mokkeijuku.com/'
        },
        {
          name: 'Tenyo-Ryu Jujutsu Tokyo Branch',
          location: 'Tokyo, Japan',
          description: 'A beneficial gathering that includes gymnastics and acupressure, where both parties can become healthy. Beginners are welcome to participate freely.',
          url: 'https://9f0sw.hp.peraichi.com/'
        }
      ]
    }
  };

  const pageContent = linksContent[language];
  const links = pageContent.items;

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
      <section style={{ backgroundColor: '#6B1F23' }} className="px-6 py-20">
        <FadeTransition keyValue={`links-hero-${language}`}>
          <h1 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            lineHeight: '1.4',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            {pageContent.hero.headline}
          </h1>
          <p style={{ 
            color: 'white',
            fontSize: '16px',
            lineHeight: '1.8',
            textAlign: 'center',
            opacity: 0.9
          }}>
            {pageContent.hero.subtext}
          </p>
        </FadeTransition>
      </section>

      {/* Taizan-Ryu Logo Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-20">
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

      {/* Links Content */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`links-content-${language}`}>
          <h2 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            {pageContent.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '15px',
            lineHeight: '1.8',
            marginBottom: '16px',
            textAlign: 'center',
            opacity: 0.8
          }}>
            {pageContent.subheading}
          </p>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '48px',
            textAlign: 'center',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {pageContent.description}
          </p>
        </FadeTransition>

        {/* Links List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <FadeTransition key={index} keyValue={`link-${index}-${language}`}>
              <div 
                style={{ 
                  backgroundColor: '#F9F9F7',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #E8E2D6',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#6B1F23',
                  lineHeight: '1.4',
                  marginBottom: '8px'
                }}>
                  {link.name}
                </h3>
                <p style={{ 
                  color: '#6B1F23',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  marginBottom: '12px',
                  opacity: 0.7,
                  fontWeight: 600
                }}>
                  {link.location}
                </p>
                <p style={{ 
                  color: '#6B1F23',
                  fontSize: '14px',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}>
                  {link.description}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: COLORS.buttonPrimary,
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
                  }}
                >
                  {pageContent.visitButton}
                  <ExternalLink size={16} />
                </a>
              </div>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
}