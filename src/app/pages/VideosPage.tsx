import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { NavigationDrawer } from '../components/NavigationDrawer';
import { Header } from '../components/Header';
import { FadeTransition } from '../components/FadeTransition';
import { AccessSection } from '../components/AccessSection';
import { ContactFooter } from '../components/ContactFooter';
import { Play } from 'lucide-react';
import { 
  videosData, 
  getCloudflareStreamUrl, 
  getCloudflareStreamThumbnail,
  type VideoData 
} from '../data/videosData';

function VideosPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const handleVideoClick = (videoId: number) => {
    setSelectedVideo(videoId);
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
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '40px',
              fontWeight: 700,
              color: 'white',
              lineHeight: '1.3',
              marginBottom: '24px',
              letterSpacing: '0.02em'
            }}>
              {t.videos.page.hero.headline}
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

      {/* Videos Grid Section */}
      <section style={{ backgroundColor: '#F9F9F7' }} className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((video, index) => (
              <FadeTransition key={video.id} keyValue={`video-${video.id}-${language}`}>
                <div 
                  className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                  style={{ 
                    backgroundColor: 'white',
                    border: '1px solid rgba(26, 43, 72, 0.1)'
                  }}
                  onClick={() => handleVideoClick(video.id)}
                >
                  {/* Video Thumbnail */}
                  <div 
                    className="relative"
                    style={{ 
                      aspectRatio: '16/9',
                      backgroundColor: '#1A2B48'
                    }}
                  >
                    {/* Cloudflare Stream Thumbnail */}
                    <img
                      src={getCloudflareStreamThumbnail(video.cloudflareVideoId, video.thumbnailTime || 0)}
                      alt={language === 'jp' ? video.titleJP : video.titleEN}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // サムネイル読み込みエラー時はグラデーション背景を表示
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" style={{ zIndex: -1 }} />
                    
                    {/* Overlay and Play Button */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play 
                        size={56} 
                        color="white" 
                        className="relative z-10 transition-transform duration-300 group-hover:scale-125"
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                      />
                    </div>
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
                    <p style={{ 
                      color: '#1A2B48',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      opacity: 0.75
                    }}>
                      {language === 'jp' ? video.descriptionJP : video.descriptionEN}
                    </p>
                  </div>
                </div>
              </FadeTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo !== null && selectedVideoData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={handleCloseVideo}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white text-lg font-semibold hover:text-gray-300 transition-colors"
              onClick={handleCloseVideo}
            >
              {language === 'jp' ? '閉じる ×' : 'Close ×'}
            </button>

            {/* Video Container */}
            <div 
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: '#000',
                aspectRatio: '16/9'
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={getCloudflareStreamUrl(selectedVideoData.cloudflareVideoId)}
                title={language === 'jp' ? selectedVideoData.titleJP : selectedVideoData.titleEN}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            {/* Video Title */}
            <div className="mt-6 text-center">
              <h3 style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '24px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '8px'
              }}>
                {language === 'jp' ? selectedVideoData.titleJP : selectedVideoData.titleEN}
              </h3>
              <p style={{ 
                color: 'white',
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.85
              }}>
                {language === 'jp' ? selectedVideoData.descriptionJP : selectedVideoData.descriptionEN}
              </p>
            </div>
          </div>
        </div>
      )}

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