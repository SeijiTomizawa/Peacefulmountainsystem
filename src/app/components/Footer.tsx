import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FadeTransition } from './FadeTransition';
import { Link } from 'react-router-dom';
import { logoImage } from '../assets/images';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section style={{ backgroundColor: '#6B1F23' }} className="px-6 py-12">
      <FadeTransition keyValue={`footer-${language}`}>
        <div className="flex flex-col items-center border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src={logoImage} 
              alt="TaizanRyu Logo" 
              style={{ 
                width: '80px', 
                height: '80px',
                objectFit: 'contain'
              }}
            />
          </Link>
          <p style={{ 
            fontFamily: "'Zen Old Mincho', serif",
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
  );
}