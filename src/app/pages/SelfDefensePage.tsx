import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { FadeTransition } from '../components/FadeTransition';
import { AccessSection } from '../components/AccessSection';
import { ContactFooter } from '../components/ContactFooter';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Real images from Unsplash
const sokeImage = "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBtYXN0ZXIlMjBkb2pvfGVufDF8fHx8MTc2ODA3MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const dojoInteriorImage = "https://images.unsplash.com/photo-1746701905946-f1babf656914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNDcwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const dojoStudents = "https://images.unsplash.com/photo-1664802273197-7cdd6a6cbc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHN0dWRlbnRzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY4MTQ3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const dojoTraining1 = "https://images.unsplash.com/photo-1618676156034-df5979d43c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaWtpZG8lMjB0cmFpbmluZyUyMHNlc3Npb258ZW58MXx8fHwxNzY4MTQ3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const dojoTraining2 = "https://images.unsplash.com/photo-1542937306-d1056fdd367a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWRvJTIwcHJhY3RpY2UlMjBkb2pvfGVufDF8fHx8MTc2ODE0NzA2Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const dojoTraining3 = "https://images.unsplash.com/photo-1594027674775-5ed49697e1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGhhbGx8ZW58MXx8fHwxNzY4MTQ3MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const dojoTraining4 = "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBtYXN0ZXIlMjBkb2pvfGVufDF8fHx8MTc2ODA3MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080";
const dojoTraining5 = "https://images.unsplash.com/photo-1746701905946-f1babf656914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNDcwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Certificate images
const certificate1 = "https://images.unsplash.com/photo-1697086279220-bcaea17a8734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNlcnRpZmljYXRlJTIwZGlwbG9tYXxlbnwxfHx8fDE3NjgxNDcwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const certificate2 = "https://images.unsplash.com/photo-1762115839587-42f72597f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwc2Nyb2xsfGVufDF8fHx8MTc2ODE0NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const certificate3 = "https://images.unsplash.com/photo-1697086279220-bcaea17a8734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNlcnRpZmljYXRlJTIwZGlwbG9tYXxlbnwxfHx8fDE3NjgxNDcwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const certificate4 = "https://images.unsplash.com/photo-1762115839587-42f72597f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwc2Nyb2xsfGVufDF8fHx8MTc2ODE0NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const certificate5 = "https://images.unsplash.com/photo-1697086279220-bcaea17a8734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNlcnRpZmljYXRlJTIwZGlwbG9tYXxlbnwxfHx8fDE3NjgxNDcwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const certificate6 = "https://images.unsplash.com/photo-1762115839587-42f72597f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwc2Nyb2xsfGVufDF8fHx8MTc2ODE0NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const certificate7 = "https://images.unsplash.com/photo-1697086279220-bcaea17a8734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGNlcnRpZmljYXRlJTIwZGlwbG9tYXxlbnwxfHx8fDE3NjgxNDcwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const certificate8 = "https://images.unsplash.com/photo-1762115839587-42f72597f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwc2Nyb2xsfGVufDF8fHx8MTc2ODE0NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080";

function SelfDefensePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const certificateImages = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
    certificate7,
    certificate8,
  ];

  const handlePrevious = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate((selectedCertificate - 1 + certificateImages.length) % certificateImages.length);
    }
  };

  const handleNext = () => {
    if (selectedCertificate !== null) {
      setSelectedCertificate((selectedCertificate + 1) % certificateImages.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCertificate !== null) {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [selectedCertificate]);

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
        height: '70vh',
        minHeight: '500px',
        backgroundColor: '#6B1F23' 
      }}>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <FadeTransition keyValue={`selfdefense-hero-${language}`} className="text-center max-w-4xl">
            <h1 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '40px',
              fontWeight: 700,
              color: 'white',
              lineHeight: '1.3',
              marginBottom: '24px',
              letterSpacing: '0.02em'
            }}>
              {language === 'jp' ? '泰山流護身術・逮捕術' : 'Taizan-Ryu Self-Defense & Arrest Techniques'}
            </h1>
            <p style={{ 
              color: 'white',
              fontSize: '17px',
              lineHeight: '1.8',
              fontWeight: 400,
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {t.selfDefense.hero.subtext}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ 
              aspectRatio: '4/3', 
              backgroundColor: 'white',
              border: '1px solid rgba(26, 43, 72, 0.1)'
            }}>
              <img 
                src={sokeImage} 
                alt="Soke Joe Miller" 
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>
            
            <FadeTransition keyValue={`about-selfdefense-${language}`}>
              <div>
                <h2 style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1A2B48',
                  lineHeight: '1.3',
                  marginBottom: '24px',
                  letterSpacing: '0.01em'
                }}>
                  {t.selfDefense.about.heading}
                </h2>
                <p style={{ 
                  color: '#1A2B48',
                  fontSize: '16px',
                  lineHeight: '1.9',
                  opacity: 0.85
                }}>
                  {t.selfDefense.about.text}
                </p>
              </div>
            </FadeTransition>
          </div>
        </div>
      </section>

      {/* Legacy Section - Soke's Message */}
      <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
        <FadeTransition keyValue={`legacy-${language}`}>
          <div className="max-w-3xl mx-auto">
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#8C272E',
              lineHeight: '1.4',
              marginBottom: '8px',
              textAlign: 'center',
              letterSpacing: '0.05em'
            }}>
              {t.selfDefense.legacy.title}
            </h2>
            <h3 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '20px',
              fontWeight: 600,
              color: '#1A2B48',
              lineHeight: '1.4',
              marginBottom: '32px',
              textAlign: 'center',
              letterSpacing: '0.15em'
            }}>
              {t.selfDefense.legacy.subtitle}
            </h3>
            
            <div style={{ 
              color: '#1A2B48',
              fontSize: '15px',
              lineHeight: '1.9',
              whiteSpace: 'pre-line',
              marginBottom: '32px'
            }}>
              {t.selfDefense.legacy.content}
            </div>

            <p style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '18px',
              fontWeight: 600,
              color: '#8C272E',
              textAlign: 'right',
              marginTop: '24px'
            }}>
              {t.selfDefense.legacy.signature}
            </p>
          </div>
        </FadeTransition>
      </section>

      {/* Training Content Section */}
      <section style={{ backgroundColor: '#F9F9F7' }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeTransition keyValue={`training-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#1A2B48',
              lineHeight: '1.4',
              marginBottom: '48px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {t.selfDefense.training.heading}
            </h2>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.selfDefense.training.items.map((item, index) => (
              <FadeTransition key={index} keyValue={`training-${index}-${language}`}>
                <div 
                  className="rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" 
                  style={{ 
                    backgroundColor: 'white',
                    border: '1px solid rgba(26, 43, 72, 0.08)'
                  }}
                >
                  <h3 style={{ 
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#8C272E',
                    marginBottom: '12px',
                    letterSpacing: '0.01em'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#1A2B48',
                    fontSize: '15px',
                    lineHeight: '1.85',
                    opacity: 0.8
                  }}>
                    {item.description}
                  </p>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-16">
        <FadeTransition keyValue={`philosophy-${language}`}>
          <h2 style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: '#1A2B48',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            {t.master.page.philosophy.heading}
          </h2>
          <p style={{ 
            color: '#1A2B48',
            fontSize: '15px',
            lineHeight: '1.8',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {t.master.page.philosophy.text}
          </p>
        </FadeTransition>
      </section>

      {/* Benefits Section */}
      <section style={{ backgroundColor: '#6B1F23' }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <FadeTransition keyValue={`benefits-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: 'white',
              lineHeight: '1.4',
              marginBottom: '48px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {t.selfDefense.benefits.heading}
            </h2>
          </FadeTransition>

          <div className="space-y-5">
            {t.selfDefense.benefits.items.map((item, index) => (
              <FadeTransition key={index} keyValue={`benefit-${index}-${language}`}>
                <div 
                  className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-opacity-10" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <Check size={28} color="#E8E2D6" className="flex-shrink-0 mt-1" style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' 
                  }} />
                  <p style={{ 
                    color: 'white',
                    fontSize: '17px',
                    lineHeight: '1.8',
                    opacity: 0.95
                  }}>
                    {item}
                  </p>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeTransition keyValue={`schedule-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#1A2B48',
              lineHeight: '1.4',
              marginBottom: '16px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {t.selfDefense.schedule.heading}
            </h2>
            <p style={{ 
              color: '#8C272E',
              fontSize: '15px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              fontWeight: 600
            }}>
              {t.selfDefense.schedule.note}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ 
              aspectRatio: '4/3', 
              backgroundColor: 'white',
              border: '1px solid rgba(26, 43, 72, 0.1)'
            }}>
              <img 
                src={dojoInteriorImage} 
                alt="Dojo Interior" 
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
              />
            </div>

            <FadeTransition keyValue={`schedule-text-${language}`}>
              <p style={{ 
                color: '#1A2B48',
                fontSize: '17px',
                lineHeight: '1.9',
                opacity: 0.85
              }}>
                {t.selfDefense.schedule.text}
              </p>
            </FadeTransition>
          </div>
        </div>
      </section>

      {/* Dojo Atmosphere Gallery Section */}
      <section style={{ backgroundColor: '#6B1F23' }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition keyValue={`dojo-gallery-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.4',
              marginBottom: '12px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {language === 'jp' ? '道場の様子' : 'Dojo Atmosphere'}
            </h2>
            <p style={{ 
              color: 'white',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              opacity: '0.85'
            }}>
              {language === 'jp' ? '実際の稽古の雰囲気をご覧ください' : 'Experience our authentic training atmosphere'}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: dojoStudents, alt: 'Hachioji Dojo - Student Practice' },
              { src: dojoTraining1, alt: 'Hachioji Dojo - Individual Instruction' },
              { src: dojoTraining2, alt: 'Hachioji Dojo - Technique Practice' },
              { src: dojoTraining3, alt: 'Hachioji Dojo - Certificate Ceremony' },
              { src: dojoTraining4, alt: 'Hachioji Dojo - Advanced Training' },
              { src: dojoTraining5, alt: 'Hachioji Dojo - Practical Application' },
            ].map((image, index) => (
              <FadeTransition key={index} keyValue={`gallery-${index}-${language}`}>
                <div 
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    aspectRatio: '3/4'
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates and Awards Section */}
      <section style={{ backgroundColor: '#F9F9F7' }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition keyValue={`certificates-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#1A2B48',
              lineHeight: '1.4',
              marginBottom: '12px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {language === 'jp' ? '免状・賞状' : 'Certificates & Awards'}
            </h2>
            <p style={{ 
              color: '#1A2B48',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              opacity: '0.7'
            }}>
              {language === 'jp' ? '宗家ジョセフ・ミラー先生の60年以上にわたる武道修行の証' : 'Evidence of Soke Joseph Miller\'s 60+ years of martial arts training'}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificateImages.map((imageUrl, index) => (
              <FadeTransition key={index} keyValue={`certificate-${index}-${language}`}>
                <div 
                  className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                  style={{ 
                    backgroundColor: 'white',
                    border: '1px solid rgba(26, 43, 72, 0.1)',
                    aspectRatio: '3/4'
                  }}
                  onClick={() => setSelectedCertificate(index)}
                >
                  {typeof imageUrl === 'string' ? (
                    <ImageWithFallback
                      src={imageUrl}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={imageUrl}
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={() => setSelectedCertificate(null)}
            style={{ zIndex: 101 }}
          >
            <X size={32} color="black" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            style={{ zIndex: 101 }}
          >
            <ChevronLeft size={32} color="black" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            style={{ zIndex: 101 }}
          >
            <ChevronRight size={32} color="black" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificateImages[selectedCertificate]}
              alt={`Certificate ${selectedCertificate + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Counter */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white bg-opacity-10"
            style={{ zIndex: 101 }}
          >
            <p style={{ color: 'black', fontSize: '14px', fontWeight: 600 }}>
              {selectedCertificate + 1} / {certificateImages.length}
            </p>
          </div>
        </div>
      )}

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
}

export default SelfDefensePage;