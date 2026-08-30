import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
    if (!inView || value === 0) return;

    let start = 0;
    const end = value;
    const totalSteps = Math.min(end, Math.floor((duration * 1000) / 20));
    const stepTime = Math.floor((duration * 1000) / totalSteps);
    const increment = Math.ceil(end / totalSteps);

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
    <span ref={ref} className="font-display font-bold text-3xl md:text-2xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const mouseRef = useMousePosition();
  const heroRef = useRef(null);

  const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-bg-primary pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24"
      aria-label="Hero section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary radial glow */}
        <div className="absolute top-[-10%] right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-primary/[0.08] rounded-full blur-[140px]" />
        {/* Accent glow */}
        <div className="absolute bottom-[-10%] left-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-accent/[0.06] rounded-full blur-[120px]" />
        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid opacity-35" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: Text Content (7 cols on lg) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 md:gap-8"
          >
            {/* Pill Tagline */}
            {/* <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-purple-300 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Intelligent IT Consultancy & Engineering
              </span>
            </motion.div> */}

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] text-white leading-[1.08] tracking-tight"
            >
              Building{' '}
              <GradientText>Intelligent</GradientText>
              <br className="hidden sm:block" />
              {' '}Digital Experiences.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-[620px]"
            >
              {companyInfo.description}
            </motion.p>

            {/* Responsive Call-to-Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href={MAILTO_URL}
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#services"
                className="w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Responsive Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] mt-2"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-text-dim text-xs font-semibold tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[360px] sm:max-w-[420px] lg:max-w-none mx-auto lg:ml-auto block"
          >
            {/* Soft Ambient Radial Glow behind Sphere */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-[70px] scale-90 pointer-events-none"
              aria-hidden="true"
            />
            
            {/* 3D R3F Sphere Canvas */}
            <div className="w-full h-full relative z-10">
              <SceneCanvas mouseRef={mouseRef} />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-text-dim text-[11px] tracking-widest uppercase font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}