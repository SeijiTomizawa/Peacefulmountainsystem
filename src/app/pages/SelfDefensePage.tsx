import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { FadeTransition } from '../components/FadeTransition';
import { AccessSection } from '../components/AccessSection';
import { ContactFooter } from '../components/ContactFooter';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Check, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import * as Images from '../assets/images';
import { videosData, getCloudflareStreamThumbnail, getCloudflareStreamUrl, CLOUDFLARE_STREAM_CONFIG } from '../data/videosData';

function SelfDefensePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const certificateImages = [
    Images.selfDefenseCertificate1,
    Images.selfDefenseCertificate2,
    Images.selfDefenseCertificate3,
    Images.selfDefenseCertificate4,
    Images.selfDefenseCertificate5,
    Images.selfDefenseCertificate6,
    Images.selfDefenseCertificate7,
    Images.selfDefenseCertificate8,
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
      {/* SEO Meta Tags */}
      <SEOHead
        title={language === 'jp' 
          ? '泰山流護身術・逮捕術 | 実践的な防御システム - 泰山流八王子本部道場'
          : 'TaizanRyu Self-Defense & Arrest Techniques | Practical Defense System'}
        description={language === 'jp'
          ? '60年以上の武道経験に基づく実践的な護身術・逮捕術。合気柔術、柔道、空手の技術を統合した効果的な防御システムを八王子本部道場で学びます。'
          : 'Practical self-defense and arrest techniques based on 60+ years of martial arts experience. Learn effective defense system integrating Aikijujutsu, Judo, and Karate at Hachioji Honbu Dojo.'}
        keywords={language === 'jp'
          ? '護身術,逮捕術,合気柔術,泰山流,八王子,武道,Self-Defense,実践的防御,防犯,護身'
          : 'Self-Defense,Arrest Techniques,Aikijujutsu,TaizanRyu,Hachioji,Martial Arts,Practical Defense,Personal Safety'}
        canonicalUrl="https://www.taizanryu.com/self-defense"
      />

      {/* Structured Data */}
      <StructuredData 
        type="breadcrumb" 
        data={{
          breadcrumbs: [
            { name: language === 'jp' ? 'ホーム' : 'Home', url: 'https://www.taizanryu.com/' },
            { name: language === 'jp' ? '護身術・逮捕術' : 'Self-Defense', url: 'https://www.taizanryu.com/self-defense' }
          ]
        }}
      />

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
                src={Images.selfDefenseDojoInterior} 
                alt="Dojo Interior" 
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
              {t.selfDefense.legacy.content.split('\n').map((line, index) => {
                // Check if line is a heading (ends with specific patterns or is all caps)
                const isMainHeading = line.trim() === 'SHUHARI - The Three Stages of Mastery' || 
                                     line.trim() === '守破離（SHUHARI）';
                const isSubHeading = [
                  'My Journey in the Martial Arts',
                  'The Formation of TaizanRyu',
                  'My Teaching Philosophy',
                  'Faith and Gratitude',
                  '武道における私の歩み',
                  '泰山流の創設',
                  '私の指導哲学',
                  '信仰と感謝'
                ].includes(line.trim());
                
                if (isMainHeading) {
                  return (
                    <div key={index} style={{ 
                      marginTop: index === 0 ? '0' : '40px',
                      marginBottom: '32px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        display: 'inline-block',
                        position: 'relative',
                        paddingBottom: '12px'
                      }}>
                        <h4 style={{ 
                          fontFamily: "'Noto Serif JP', serif",
                          fontSize: '22px',
                          fontWeight: 700,
                          color: '#6B1F23',
                          letterSpacing: '0.08em',
                          marginBottom: '0'
                        }}>
                          {line}
                        </h4>
                        <div style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60px',
                          height: '3px',
                          backgroundColor: '#5DADE2',
                          borderRadius: '2px'
                        }} />
                      </div>
                    </div>
                  );
                } else if (isSubHeading) {
                  return (
                    <div key={index} style={{ 
                      marginTop: '48px',
                      marginBottom: '20px',
                      paddingLeft: '16px',
                      borderLeft: '4px solid #5DADE2'
                    }}>
                      <h5 style={{ 
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#1A2B48',
                        letterSpacing: '0.05em',
                        marginBottom: '0'
                      }}>
                        {line}
                      </h5>
                    </div>
                  );
                } else if (line.trim() === '') {
                  return <div key={index} style={{ height: '12px' }} />;
                } else {
                  return (
                    <p key={index} style={{ 
                      marginBottom: '16px',
                      color: '#2C3E50',
                      fontSize: '15px',
                      lineHeight: '1.9'
                    }}>
                      {line}
                    </p>
                  );
                }
              })}
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

      {/* Videos Section */}
      <section style={{ backgroundColor: '#1A2B48' }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeTransition keyValue={`videos-heading-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: 'white',
              lineHeight: '1.4',
              marginBottom: '16px',
              textAlign: 'center',
              letterSpacing: '0.01em'
            }}>
              {t.selfDefense.videos.heading}
            </h2>
            <p style={{ 
              color: 'white',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              opacity: 0.85
            }}>
              {t.selfDefense.videos.description}
            </p>
          </FadeTransition>

          {/* 横スクロールコンテナ */}
          <div className="relative mb-6">
            <div 
              className="overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#5DADE2 rgba(255, 255, 255, 0.1)',
              }}
            >
              <style>{`
                .video-scroll-container::-webkit-scrollbar {
                  height: 8px;
                }
                .video-scroll-container::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 4px;
                }
                .video-scroll-container::-webkit-scrollbar-thumb {
                  background: #5DADE2;
                  border-radius: 4px;
                }
                .video-scroll-container::-webkit-scrollbar-thumb:hover {
                  background: #4A9FD8;
                }
              `}</style>
              <div 
                className="flex gap-4 video-scroll-container"
                style={{ minWidth: 'min-content' }}
              >
                {videosData.slice(0, 6).map((video, index) => (
                  <FadeTransition key={index} keyValue={`video-card-${index}-${language}`}>
                    <div 
                      className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl flex-shrink-0"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        width: '160px',
                      }}
                    >
                      {/* Cloudflare Stream iframe - always visible with controls */}
                      <div
                        className="relative w-full"
                        style={{
                          aspectRatio: "9/16",
                        }}
                      >
                        <iframe
                          key={`video-${video.id}-${selectedVideoId === video.id ? 'active' : 'inactive'}`}
                          src={getCloudflareStreamUrl(
                            video.cloudflareVideoId, 
                            selectedVideoId === video.id,
                            video.thumbnailTime || 3
                          )}
                          className="w-full h-full"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen
                          style={{
                            border: "none",
                          }}
                        />
                      </div>

                      {/* Video Title - Compact */}
                      <div className="p-2">
                        <p
                          style={{
                            fontFamily: "'Noto Sans JP', sans-serif",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "white",
                            lineHeight: "1.3",
                            textAlign: "center",
                          }}
                        >
                      {language === 'jp' ? video.titleJP : video.titleEN}
                    </p>
                  </div>
                </div>
              </FadeTransition>
                ))}
              </div>
            </div>

            {/* スクロールヒント（モバイル用） */}
            <div className="md:hidden text-center mt-2">
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  opacity: 0.6,
                  fontStyle: "italic",
                }}
              >
                {language === "jp" ? "← スワイプして他のビデオを見る →" : "← Swipe to see more →"}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/videos')}
              className="px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: '#5DADE2',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {t.selfDefense.videos.button}
            </button>
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
                src={Images.dojoInteriorImage} 
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
              { src: Images.selfDefenseDojoStudents, alt: 'Hachioji Dojo - Student Practice' },
              { src: Images.selfDefenseDojoTraining1, alt: 'Hachioji Dojo - Individual Instruction' },
              { src: Images.selfDefenseDojoTraining2, alt: 'Hachioji Dojo - Technique Practice' },
              { src: Images.selfDefenseDojoTraining3, alt: 'Hachioji Dojo - Certificate Ceremony' },
              { src: Images.selfDefenseDojoTraining4, alt: 'Hachioji Dojo - Advanced Training' },
              { src: Images.selfDefenseDojoTraining5, alt: 'Hachioji Dojo - Practical Application' },
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