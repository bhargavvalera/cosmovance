import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import SceneCanvas from '../three/SceneCanvas';
import { useMousePosition } from '../../hooks/useMousePosition';
import { heroStats, companyInfo } from '../../data/navigation';
import Button from '../common/Button';
import GradientText from '../common/GradientText';

/**
 * Animated counter that counts up when in view.
 */
function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 20);
    const increment = Math.ceil(end / (duration * 1000 / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const mouse = useMousePosition();
  const heroRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary radial glow */}
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-primary/[0.07] rounded-full blur-[120px]" />
        {/* Accent glow */}
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-accent/[0.05] rounded-full blur-[100px]" />
        {/* Secondary glow */}
        <div className="absolute top-[30%] right-[30%] w-[25vw] h-[25vw] bg-secondary/[0.04] rounded-full blur-[80px]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Content Grid */}
      <div className="container-wide mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 md:gap-8 max-w-2xl"
          >
            

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-[1.05] tracking-tight"
            >
              Building{' '}
              <GradientText>Intelligent</GradientText>
              <br />
              Digital Experiences.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {companyInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button variant="primary" size="lg" href="#portfolio" icon={ArrowRight}>
                Explore Our Work
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Get in Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 md:gap-12 mt-4 md:mt-8 pt-8 border-t border-white/[0.06]"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-text-dim text-xs sm:text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square max-w-[600px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Glow behind sphere */}
            <div
              className="absolute inset-0 rounded-full bg-primary/[0.08] blur-[60px] scale-75"
              aria-hidden="true"
            />
            <SceneCanvas mouse={mouse} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-text-dim text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
