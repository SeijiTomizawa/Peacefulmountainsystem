import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { FadeTransition } from './FadeTransition';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { COLORS, FONTS } from '../constants/theme';
import { hachiojiStationImage } from '../assets/images';
import { memo } from 'react';

export const AccessSection = memo(function AccessSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="access" style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-16">
      <FadeTransition keyValue={`access-heading-${language}`}>
        <h2 style={{ 
          fontFamily: "'Zen Old Mincho', serif",
          fontSize: '24px',
          fontWeight: 700,
          color: COLORS.main,
          lineHeight: '1.5',
          marginBottom: '20px'
        }}>
          {t.access.heading}
        </h2>
      </FadeTransition>
      <div className="mb-6 rounded-lg overflow-hidden shadow-md">
        <img
          src={hachiojiStationImage}
          alt="JR Hachioji Station"
          className="w-full h-56"
          loading="lazy"
          decoding="async"
          style={{ objectFit: 'cover', objectPosition: 'center 65%' }}
        />
      </div>
      <FadeTransition keyValue={`access-text-${language}`}>
        <div className="flex items-start gap-3 mb-6">
          <MapPin size={20} color={COLORS.mainLight} className="flex-shrink-0 mt-0.5" />
          <p style={{ 
            color: COLORS.main,
            fontSize: '14px',
            lineHeight: '1.8',
            opacity: 0.85,
            whiteSpace: 'pre-line'
          }}>
            {t.access.text}
          </p>
        </div>
      </FadeTransition>
      
      {/* Google Map */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3243.8374835906846!2d139.33702881562823!3d35.652099034571566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzA3LjYiTiAxMznCsDIwJzIxLjUiRQ!5e0!3m2!1sen!2sjp!4v1736636100000!5m2!1sen!2sjp"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Taizan-Ryu Hachioji Honbu Dojo Location"
        />
      </div>
    </section>
  );
});