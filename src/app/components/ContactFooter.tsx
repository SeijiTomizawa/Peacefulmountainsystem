import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FadeTransition } from './FadeTransition';
import { memo } from 'react';
import { COLORS, FONTS } from '../constants/theme';
import logoImage from 'figma:asset/8fbc73fac66db1cbb73a089ff2f0be78335936a2.png';

export const ContactFooter = memo(function ContactFooter() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* Contact Footer Section */}
      <section id="contact" style={{ backgroundColor: COLORS.main }} className="px-6 py-20">
        <FadeTransition keyValue={`contact-${language}`}>
          <h2 style={{ 
            fontFamily: FONTS.serif,
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {language === 'jp' ? (
              <>{t.contact.heading.split('」')[0]}」<br/>{t.contact.heading.split('」')[1]}</>
            ) : (
              t.contact.heading
            )}
          </h2>
          <p style={{ 
            color: 'white',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '32px',
            textAlign: 'center',
            opacity: 0.9
          }}>
            {language === 'jp' ? (
              <>{t.contact.text.split('。')[0]}。<br/>{t.contact.text.split('。')[1]}</>
            ) : (
              t.contact.text
            )}
          </p>
          
          {/* Primary CTA Button */}
          <Link 
            to="/contact"
            className="px-6 py-4 rounded-lg shadow-lg w-full block text-center"
            style={{ 
              backgroundColor: COLORS.buttonPrimary,
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
            }}
          >
            {t.contact.primaryButton}<br/>
            <span style={{ fontSize: '13px', opacity: 0.9 }}>{t.contact.primaryButtonSub}</span>
          </Link>
        </FadeTransition>

        {/* Footer Info */}
        <FadeTransition keyValue={`footer-${language}`}>
          <div className="mt-12 pt-8 border-t flex flex-col items-center" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img 
                src={logoImage} 
                alt="Taizan-Ryu Logo"
                loading="lazy"
                decoding="async"
                style={{ 
                  width: '80px', 
                  height: '80px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  cursor: 'pointer'
                }} 
              />
            </Link>
            <p style={{ 
              fontFamily: FONTS.serif,
              fontSize: '16px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              {t.footer.name}
            </p>
            <p style={{ 
              color: 'white',
              fontSize: '13px',
              lineHeight: '1.8',
              opacity: 0.7,
              textAlign: 'center'
            }}>
              {t.footer.location}<br/>
              {t.footer.hours}
            </p>
            <p style={{ 
              color: 'white',
              fontSize: '12px',
              marginTop: '16px',
              opacity: 0.5,
              textAlign: 'center'
            }}>
              {t.footer.copyright}
            </p>
          </div>
        </FadeTransition>
      </section>
    </>
  );
});