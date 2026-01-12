import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import * as Images from '../assets/images';

const heroImages = [
  {
    src: Images.heroGrandmaster,
    alt: "Grandmaster"
  },
  {
    src: Images.heroDojoTraining,
    alt: "Dojo Training"
  },
  {
    src: Images.heroTrainingAtmosphere,
    alt: "Training Atmosphere"
  },
  {
    src: Images.heroGroupTraining,
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