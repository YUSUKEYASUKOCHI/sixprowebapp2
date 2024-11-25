import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LazyImage({ src, alt, className }: LazyImageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <AnimatePresence>
        {inView ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={src}
            alt={alt}
            className={className}
            loading="lazy"
          />
        ) : (
          <div className={`bg-gray-200 ${className}`} />
        )}
      </AnimatePresence>
    </div>
  );
}