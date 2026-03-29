import { useState } from 'react';
import { membersGroupImage } from '../assets/images';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FadeTransition } from '../components/FadeTransition';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { ContactFooter } from '../components/ContactFooter';

export function MembersPage() {
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
        <FadeTransition keyValue={`members-hero-${language}`}>
          <h1 style={{ 
            fontFamily: "'Damion', cursive",
            fontSize: '32px',
            fontWeight: 700,
            color: 'white',
            lineHeight: '1.4',
            marginBottom: '12px'
          }}>
            TAIZANRYU OFFICIAL STUDENT LIST
          </h1>
          <p style={{ 
            color: 'white',
            fontSize: '15px',
            lineHeight: '1.7',
            opacity: 0.9
          }}>
            {t.members.page.hero.subtext}
          </p>
        </FadeTransition>
      </section>

      {/* Group Photo Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-12">
        <FadeTransition keyValue={`members-group-photo-${language}`}>
          <div className="max-w-4xl mx-auto">
            <img 
              src={membersGroupImage} 
              alt="Taizan-Ryu Members Group Photo" 
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </FadeTransition>
      </section>

      {/* Members Content */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`members-content-${language}`}>
          <h2 style={{ 
            fontFamily: "'Zen Old Mincho', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#6B1F23',
            lineHeight: '1.5',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            {t.members.page.heading}
          </h2>
          <p style={{ 
            color: '#6B1F23',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '40px',
            textAlign: 'center',
            opacity: 0.75
          }}>
            {t.members.page.subheading}
          </p>
        </FadeTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.members.page.items.map((member, index) => (
            <FadeTransition key={index} keyValue={`member-${index}-${language}`}>
              <div className="rounded-lg shadow-md p-6" style={{ backgroundColor: '#F9F9F7' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6B1F23' }}>
                    <span style={{ 
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: 700,
                      fontFamily: "'Zen Old Mincho', serif"
                    }}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 style={{ 
                      fontFamily: "'Zen Old Mincho', serif",
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#6B1F23',
                      marginBottom: '4px'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{ 
                      color: '#8C272E',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}>
                      {member.rank}
                    </p>
                    <p style={{ 
                      color: '#6B1F23',
                      fontSize: '12px',
                      opacity: 0.6,
                      marginBottom: '12px'
                    }}>
                      {member.experience}
                    </p>
                    <p style={{ 
                      color: '#6B1F23',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      opacity: 0.8
                    }}>
                      {member.comment}
                    </p>
                  </div>
                </div>
              </div>
            </FadeTransition>
          ))}
        </div>
      </section>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}