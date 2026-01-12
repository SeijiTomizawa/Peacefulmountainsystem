import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwbWFydGlhbCUyMGFydHMlMjBtYXN0ZXIlMjBkb2pvfGVufDF8fHx8MTc2ODA3MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Grandmaster"
  },
  {
    src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGRvam8lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgwODgxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dojo Training"
  },
  {
    src: "https://images.unsplash.com/photo-1542937307-6b68b8a3e88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc2ODA4ODEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Training Atmosphere"
  },
  {
    src: "https://images.unsplash.com/photo-1688744251358-1a195a6a6e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGdyb3VwJTIwdHJhaW5pbmclMjBzbWlsaW5nfGVufDF8fHx8MTc2ODA3MzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Group Training"
  }
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 1.5,
            ease: 'easeInOut'
          }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />
      
      {/* スライドインジケーター */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-300"
            style={{
              width: currentIndex === index ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentIndex === index ? '#8C272E' : 'rgba(255, 255, 255, 0.5)',
            }}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  );
}
