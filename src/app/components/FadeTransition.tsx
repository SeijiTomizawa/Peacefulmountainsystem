import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, memo } from 'react';

interface FadeTransitionProps {
  children: ReactNode;
  keyValue: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeTransition = memo(function FadeTransition({ children, keyValue, className, style }: FadeTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyValue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});