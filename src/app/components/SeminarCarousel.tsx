import Slider from 'react-slick';
import { FadeTransition } from './FadeTransition';
import { memo } from 'react';

interface SeminarCarouselProps {
  title?: string;
  subtitle: string;
  images: { src: string; alt: string }[];
  autoplaySpeed?: number;
  language: string;
}

export const SeminarCarousel = memo(function SeminarCarousel({ 
  title, 
  subtitle, 
  images, 
  autoplaySpeed = 4000,
  language 
}: SeminarCarouselProps) {
  return (
    <div>
      {title && (
        <FadeTransition keyValue={`seminar-title-${title}-${language}`}>
          <div className="mb-6">
            <h3 style={{ 
              fontFamily: "'Zen Old Mincho', serif",
              fontSize: '20px',
              fontWeight: 600,
              color: '#8C272E',
              marginBottom: '4px',
              textAlign: 'center'
            }}>
              {title}
            </h3>
            <p style={{ 
              color: '#6B1F23',
              fontSize: '13px',
              textAlign: 'center',
              opacity: 0.7
            }}>
              {subtitle}
            </p>
          </div>
        </FadeTransition>
      )}

      <div className="pb-12">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={autoplaySpeed}
          arrows={true}
          lazyLoad="progressive"
        >
          {images.map((image, index) => (
            <div key={index}>
              <div className="px-2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      height: '500px',
                      objectPosition: 'center 30%'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});