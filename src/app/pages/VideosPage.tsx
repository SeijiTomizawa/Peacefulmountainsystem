import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { FadeTransition } from '../components/FadeTransition';
import { AccessSection } from '../components/AccessSection';
import { ContactFooter } from '../components/ContactFooter';
import { Play } from 'lucide-react';
import {
  videosData,
  martialArtsTechniquesData,
  getCloudflareStreamUrl,
  getCloudflareStreamThumbnail,
  CLOUDFLARE_STREAM_CONFIG,
  type VideoData
} from '../data/videosData';

function VideosPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const handleVideoClick = (videoId: number) => {
    setSelectedVideo(selectedVideo === videoId ? null : videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const selectedVideoData = videosData.find(v => v.id === selectedVideo);

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
        height: '50vh',
        minHeight: '400px',
        backgroundColor: '#6B1F23' 
      }}>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <FadeTransition keyValue={`videos-hero-${language}`} className="text-center max-w-4xl">
            <h1 style={{
              fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
              fontSize: language === 'jp' ? '40px' : '42px',
              fontWeight: language === 'jp' ? 700 : 600,
              color: 'white',
              lineHeight: '1.3',
              marginBottom: '24px',
              letterSpacing: language === 'jp' ? '0.02em' : '0.03em',
              textAlign: 'center'
            }}>
              {t.videos.page.hero.headline}
            </h1>
            <p style={{
              fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
              color: 'white',
              fontSize: '17px',
              lineHeight: '1.8',
              fontWeight: 400,
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              {t.videos.page.hero.subtext}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeTransition keyValue={`videos-intro-${language}`}>
            <h2 style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#1A2B48',
              lineHeight: '1.4',
              marginBottom: '16px',
              letterSpacing: '0.01em'
            }}>
              {t.videos.page.heading}
            </h2>
            <p style={{ 
              color: '#1A2B48',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '24px',
              opacity: 0.85
            }}>
              {t.videos.page.description}
            </p>
            <p style={{ 
              color: '#8C272E',
              fontSize: '14px',
              lineHeight: '1.6',
              fontWeight: 600,
              fontStyle: 'italic'
            }}>
              {language === 'jp' 
                ? '※ビデオをクリックすると再生されます' 
                : '* Click on a video to play'}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Videos Grid Section - Dojo Training */}
      <section style={{ backgroundColor: '#F9F9F7' }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition keyValue={`dojo-training-heading-${language}`}>
            <h2 style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#6B1F23',
              lineHeight: '1.4',
              marginBottom: '16px',
              textAlign: 'center',
              letterSpacing: '0.02em'
            }}>
              {language === 'jp' ? '道場での稽古風景' : 'Dojo Training Sessions'}
            </h2>
            <p style={{
              color: '#1A2B48',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              opacity: 0.85
            }}>
              {language === 'jp'
                ? '八王子本部道場での日常的な稽古の様子をご覧ください'
                : 'Watch our daily training sessions at Hachioji Honbu Dojo'}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((video, index) => (
              <FadeTransition key={video.id} keyValue={`video-${video.id}-${language}`}>
                <div
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(26, 43, 72, 0.1)'
                  }}
                >
                  {/* Cloudflare Stream iframe - always visible with controls */}
                  <div>
                    <div
                      className="relative"
                      style={{
                        aspectRatio: '16/9',
                      }}
                    >
                      <iframe
                        key={`video-${video.id}-${selectedVideo === video.id ? 'active' : 'inactive'}`}
                        src={getCloudflareStreamUrl(
                          video.cloudflareVideoId,
                          selectedVideo === video.id,
                          video.thumbnailTime || 3
                        )}
                        className="w-full h-full"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                        style={{
                          border: 'none',
                        }}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h3 style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#8C272E',
                        marginBottom: '12px',
                        letterSpacing: '0.01em'
                      }}>
                        {language === 'jp' ? video.titleJP : video.titleEN}
                      </h3>
                      {(video.descriptionJP || video.descriptionEN) && (
                        <p style={{
                          color: '#1A2B48',
                          fontSize: '14px',
                          lineHeight: '1.7',
                          opacity: 0.75
                        }}>
                          {language === 'jp' ? video.descriptionJP : video.descriptionEN}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Martial Arts Techniques Section */}
      <section style={{ backgroundColor: '#E8E2D6' }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeTransition keyValue={`techniques-heading-${language}`}>
            <h2 style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#6B1F23',
              lineHeight: '1.4',
              marginBottom: '16px',
              textAlign: 'center',
              letterSpacing: '0.02em'
            }}>
              {language === 'jp' ? '武術の解説' : 'Martial Arts Techniques'}
            </h2>
            <p style={{
              color: '#1A2B48',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '48px',
              textAlign: 'center',
              opacity: 0.85
            }}>
              {language === 'jp'
                ? '宗家による技術解説と実演をご覧ください'
                : 'Watch technical explanations and demonstrations by Soke'}
            </p>
          </FadeTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {martialArtsTechniquesData.map((video) => (
              <FadeTransition key={video.id} keyValue={`technique-${video.id}-${language}`}>
                <div
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(26, 43, 72, 0.1)'
                  }}
                >
                  <div>
                    <div
                      className="relative"
                      style={{
                        aspectRatio: '16/9',
                      }}
                    >
                      <iframe
                        key={`technique-video-${video.id}-${selectedVideo === video.id ? 'active' : 'inactive'}`}
                        src={getCloudflareStreamUrl(
                          video.cloudflareVideoId,
                          selectedVideo === video.id,
                          video.thumbnailTime || 3
                        )}
                        className="w-full h-full"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                        style={{
                          border: 'none',
                        }}
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h3 style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#8C272E',
                        marginBottom: '12px',
                        letterSpacing: '0.01em'
                      }}>
                        {language === 'jp' ? video.titleJP : video.titleEN}
                      </h3>
                      {(video.descriptionJP || video.descriptionEN) && (
                        <p style={{
                          color: '#1A2B48',
                          fontSize: '14px',
                          lineHeight: '1.7',
                          opacity: 0.75
                        }}>
                          {language === 'jp' ? video.descriptionJP : video.descriptionEN}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section style={{ backgroundColor: '#1A2B48' }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeTransition keyValue={`videos-note-${language}`}>
            <p style={{ 
              color: 'white',
              fontSize: '16px',
              lineHeight: '1.8',
              opacity: 0.9
            }}>
              {language === 'jp' 
                ? '定期的に新しいビデオを追加しています。体験クラスや見学をご希望の方は、お問い合わせページからご連絡ください。' 
                : 'We regularly add new videos. If you would like to try a class or visit the dojo, please contact us through the contact page.'}
            </p>
          </FadeTransition>
        </div>
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Contact Footer Section */}
      <ContactFooter />
    </div>
  );
}

export default VideosPage;