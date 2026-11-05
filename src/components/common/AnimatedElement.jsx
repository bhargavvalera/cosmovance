import { motion } from 'framer-motion';

/**
 * Wrapper for scroll-triggered entrance animations.
 * @param {'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade'} animation
 */
export default function AnimatedElement({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  ...props
}) {
  const animations = {
    'fade-up': {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
    },
    'fade-down': {
      initial: { opacity: 0, y: -40 },
      whileInView: { opacity: 1, y: 0 },
    },
    'fade-left': {
      initial: { opacity: 0, x: -40 },
      whileInView: { opacity: 1, x: 0 },
    },
    'fade-right': {
      initial: { opacity: 0, x: 40 },
      whileInView: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
    },
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      {...selectedAnimation}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
