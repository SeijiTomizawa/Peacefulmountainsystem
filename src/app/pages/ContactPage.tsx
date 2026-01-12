import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { FadeTransition } from '../components/FadeTransition';
import { AccessSection } from '../components/AccessSection';
import { Footer } from '../components/Footer';
import { COLORS } from '../constants/theme';

export function ContactPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'trial',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // メール本文を作成
    const emailBody = `
${language === 'jp' ? 'お名前' : 'Name'}: ${formData.name}
${language === 'jp' ? 'メールアドレス' : 'Email'}: ${formData.email}
${language === 'jp' ? '電話番号' : 'Phone'}: ${formData.phone || language === 'jp' ? '未入力' : 'Not provided'}
${language === 'jp' ? 'お問い合わせ種別' : 'Inquiry Type'}: ${formData.inquiryType}

${language === 'jp' ? 'メッセージ' : 'Message'}:
${formData.message}
    `.trim();
    
    // mailto リンクを作成
    const mailtoLink = `mailto:sokemiller@gmail.com?cc=info@denkyusha.com&subject=${encodeURIComponent(language === 'jp' ? 'お問い合わせ - 泰山流護身術' : 'Contact Form - Taizan-Ryu')}&body=${encodeURIComponent(emailBody)}`;
    
    // メールクライアントを開く
    window.location.href = mailtoLink;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <section className="relative" style={{ 
        height: '40vh',
        minHeight: '280px',
        backgroundColor: '#1A2B48' 
      }}>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <FadeTransition keyValue={`contact-hero-${language}`} className="text-center">
            <h1 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: 'white',
              lineHeight: '1.4',
              marginBottom: '12px'
            }}>
              {t.contact.page.hero.headline}
            </h1>
            <p style={{ 
              color: 'white',
              fontSize: '15px',
              lineHeight: '1.7',
              fontWeight: 400,
              opacity: 0.9
            }}>
              {t.contact.page.hero.subtext}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`form-heading-${language}`}>
          <h2 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#1A2B48',
            lineHeight: '1.5',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            {t.contact.page.form.heading}
          </h2>
          <p style={{ 
            color: '#1A2B48',
            fontSize: '14px',
            lineHeight: '1.8',
            marginBottom: '32px',
            textAlign: 'center',
            opacity: 0.7
          }}>
            {t.contact.page.form.subheading}
          </p>
        </FadeTransition>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <FadeTransition keyValue={`name-field-${language}`}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: 600,
                color: '#1A2B48',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {t.contact.page.form.nameLabel} <span style={{ color: '#8C272E' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.page.form.namePlaceholder}
                className="w-full px-4 py-3 border rounded-lg"
                style={{ 
                  borderColor: '#E8E2D6',
                  fontSize: '14px',
                  backgroundColor: '#F9F9F7'
                }}
              />
            </div>
          </FadeTransition>

          {/* Email Field */}
          <FadeTransition keyValue={`email-field-${language}`}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: 600,
                color: '#1A2B48',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {t.contact.page.form.emailLabel} <span style={{ color: '#8C272E' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.page.form.emailPlaceholder}
                className="w-full px-4 py-3 border rounded-lg"
                style={{ 
                  borderColor: '#E8E2D6',
                  fontSize: '14px',
                  backgroundColor: '#F9F9F7'
                }}
              />
            </div>
          </FadeTransition>

          {/* Phone Field */}
          <FadeTransition keyValue={`phone-field-${language}`}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: 600,
                color: '#1A2B48',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {t.contact.page.form.phoneLabel}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.contact.page.form.phonePlaceholder}
                className="w-full px-4 py-3 border rounded-lg"
                style={{ 
                  borderColor: '#E8E2D6',
                  fontSize: '14px',
                  backgroundColor: '#F9F9F7'
                }}
              />
            </div>
          </FadeTransition>

          {/* Inquiry Type Field */}
          <FadeTransition keyValue={`inquiry-type-field-${language}`}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: 600,
                color: '#1A2B48',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {t.contact.page.form.inquiryTypeLabel} <span style={{ color: '#8C272E' }}>*</span>
              </label>
              <select
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
                style={{ 
                  borderColor: '#E8E2D6',
                  fontSize: '14px',
                  backgroundColor: '#F9F9F7'
                }}
              >
                <option value="trial">{t.contact.page.form.inquiryTypes.trial}</option>
                <option value="shiatsu">{t.contact.page.form.inquiryTypes.shiatsu}</option>
                <option value="general">{t.contact.page.form.inquiryTypes.general}</option>
                <option value="other">{t.contact.page.form.inquiryTypes.other}</option>
              </select>
            </div>
          </FadeTransition>

          {/* Message Field */}
          <FadeTransition keyValue={`message-field-${language}`}>
            <div>
              <label style={{ 
                display: 'block',
                fontWeight: 600,
                color: '#1A2B48',
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                {t.contact.page.form.messageLabel} <span style={{ color: '#8C272E' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.page.form.messagePlaceholder}
                rows={6}
                className="w-full px-4 py-3 border rounded-lg"
                style={{ 
                  borderColor: '#E8E2D6',
                  fontSize: '14px',
                  backgroundColor: '#F9F9F7',
                  resize: 'vertical'
                }}
              />
            </div>
          </FadeTransition>

          {/* Submit Button */}
          <FadeTransition keyValue={`submit-button-${language}`}>
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-lg shadow-lg"
              style={{ 
                backgroundColor: COLORS.buttonPrimary,
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.buttonPrimary;
              }}
            >
              {t.contact.page.form.submitButton}
            </button>
          </FadeTransition>

          {/* Privacy Note */}
          <p style={{ 
            fontSize: '12px',
            color: '#1A2B48',
            opacity: 0.6,
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            {t.contact.page.form.privacyNote}
          </p>
        </form>
      </section>

      {/* Dojo Information Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-16">
        <FadeTransition keyValue={`info-heading-${language}`}>
          <h2 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#1A2B48',
            lineHeight: '1.5',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            {t.contact.page.info.heading}
          </h2>
        </FadeTransition>

        <div className="space-y-6">
          {/* Address */}
          <FadeTransition keyValue={`address-${language}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C272E' }}>
                <MapPin size={24} color="white" />
              </div>
              <div>
                <h3 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1A2B48',
                  marginBottom: '4px'
                }}>
                  {t.contact.page.info.address.title}
                </h3>
                <p style={{ 
                  color: '#1A2B48',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  opacity: 0.85
                }}>
                  {t.contact.page.info.address.text}
                </p>
              </div>
            </div>
          </FadeTransition>

          {/* Hours */}
          <FadeTransition keyValue={`hours-${language}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C272E' }}>
                <Clock size={24} color="white" />
              </div>
              <div>
                <h3 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1A2B48',
                  marginBottom: '4px'
                }}>
                  {t.contact.page.info.hours.title}
                </h3>
                <p style={{ 
                  color: '#1A2B48',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  opacity: 0.85,
                  whiteSpace: 'pre-line'
                }}>
                  {t.contact.page.info.hours.text}
                </p>
              </div>
            </div>
          </FadeTransition>

          {/* Phone */}
          <FadeTransition keyValue={`phone-${language}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C272E' }}>
                <Phone size={24} color="white" />
              </div>
              <div>
                <h3 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1A2B48',
                  marginBottom: '4px'
                }}>
                  {t.contact.page.info.phone.title}
                </h3>
                <p style={{ 
                  color: '#1A2B48',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  opacity: 0.85
                }}>
                  {t.contact.page.info.phone.text}
                </p>
              </div>
            </div>
          </FadeTransition>

          {/* Email */}
          <FadeTransition keyValue={`email-${language}`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8C272E' }}>
                <Mail size={24} color="white" />
              </div>
              <div>
                <h3 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1A2B48',
                  marginBottom: '4px'
                }}>
                  {t.contact.page.info.email.title}
                </h3>
                <p style={{ 
                  color: '#1A2B48',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  opacity: 0.85
                }}>
                  {t.contact.page.info.email.text}
                </p>
              </div>
            </div>
          </FadeTransition>
        </div>
      </section>

      {/* Important Note Section */}
      <section style={{ backgroundColor: '#1A2B48' }} className="px-6 py-16">
        <FadeTransition keyValue={`note-${language}`}>
          <h3 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '20px',
            fontWeight: 700,
            color: 'white',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {t.contact.page.note.heading}
          </h3>
          <p style={{ 
            color: 'white',
            fontSize: '14px',
            lineHeight: '1.8',
            opacity: 0.9,
            textAlign: 'center'
          }}>
            {t.contact.page.note.text}
          </p>
        </FadeTransition>
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}