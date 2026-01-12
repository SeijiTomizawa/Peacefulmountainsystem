import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { ContactFooter } from '../components/ContactFooter';
import { COLORS, FONTS } from '../constants/theme';
import { useState, useCallback } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();

  const handleDrawerClose = useCallback(() => setIsDrawerOpen(false), []);
  const handleMenuClick = useCallback(() => setIsDrawerOpen(true), []);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: FONTS.sans,
        backgroundColor: COLORS.offWhite,
      }}
    >
      <NavigationDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      <Header onMenuClick={handleMenuClick} />

      {/* 404 Content */}
      <section
        style={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
        }}
      >
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          {/* 404 Number */}
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: '120px',
              fontWeight: 700,
              color: COLORS.mainMaroon,
              lineHeight: '1',
              marginBottom: '24px',
              opacity: 0.2,
            }}
          >
            404
          </h1>

          {/* Error Message */}
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: '28px',
              fontWeight: 700,
              color: COLORS.navyBlue,
              marginBottom: '16px',
            }}
          >
            {language === 'jp' ? 'ページが見つかりません' : 'Page Not Found'}
          </h2>

          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.8',
              color: COLORS.navyBlue,
              opacity: 0.7,
              marginBottom: '48px',
            }}
          >
            {language === 'jp'
              ? 'お探しのページは存在しないか、移動または削除された可能性があります。'
              : 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <Link
              to="/"
              style={{
                backgroundColor: COLORS.skyBlue,
                color: COLORS.white,
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.skyBlueHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.skyBlue;
              }}
            >
              <Home size={18} />
              {language === 'jp' ? 'ホームに戻る' : 'Return to Home'}
            </Link>

            <button
              onClick={() => window.history.back()}
              style={{
                backgroundColor: 'transparent',
                color: COLORS.navyBlue,
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                border: `2px solid ${COLORS.navyBlue}`,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.navyBlue;
                e.currentTarget.style.color = COLORS.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.navyBlue;
              }}
            >
              <ArrowLeft size={18} />
              {language === 'jp' ? '前のページに戻る' : 'Go Back'}
            </button>
          </div>

          {/* Helpful Links */}
          <div style={{ marginTop: '64px' }}>
            <p
              style={{
                fontSize: '13px',
                color: COLORS.navyBlue,
                opacity: 0.6,
                marginBottom: '16px',
              }}
            >
              {language === 'jp' ? 'よくアクセスされるページ:' : 'Popular Pages:'}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {[
                { to: '/self-defense', label: language === 'jp' ? '護身術' : 'Self-Defense' },
                { to: '/shiatsu', label: language === 'jp' ? '指圧' : 'Shiatsu' },
                { to: '/soke', label: language === 'jp' ? '宗家について' : 'About Soke' },
                { to: '/contact', label: language === 'jp' ? 'お問い合わせ' : 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontSize: '13px',
                    color: COLORS.skyBlue,
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    backgroundColor: COLORS.warmBeige,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.skyBlue;
                    e.currentTarget.style.color = COLORS.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.warmBeige;
                    e.currentTarget.style.color = COLORS.skyBlue;
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
