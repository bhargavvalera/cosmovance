import { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const SceneCanvas = lazy(() => import('../three/SceneCanvas'));
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
    <span ref={ref} className="font-display font-bold text-2xl sm:text-3xl lg:text-2xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const mouseRef = useMousePosition();
  const heroRef = useRef(null);
  const sceneContainerRef = useRef(null);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);

  // Defer the Three.js/R3F bundle until the hero visual is near the viewport.
  useEffect(() => {
    const node = sceneContainerRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(() => setShouldLoadScene(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadScene(true);
          observer.disconnect();
        }
      },
      { rootMargin: '160px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
      className="relative min-h-0 lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-bg-primary pt-[7.5rem] sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-24"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Text Content — below sphere on mobile, left column on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-5 sm:gap-6 md:gap-8 lg:pl-14 xl:pl-16"
          >
            {/* Pill Tagline */}
            {/* <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[#A78BFA] text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Intelligent IT Consultancy & Engineering
              </span>
            </motion.div> */}

            {/* Availability / positioning badge */}
            <motion.div variants={itemVariants} className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-600">Intelligent IT Consultancy & Engineering</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] text-white sm:leading-[1.1] tracking-tight"
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
                href="/services"
                className="w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Responsive Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/[0.08] mt-1 sm:mt-2"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-text-dim text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-wider uppercase leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Scene — first on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-5 relative aspect-square w-[min(92vw,400px)] sm:w-[min(88vw,440px)] lg:w-full lg:max-w-none mx-auto lg:ml-auto lg:mr-0 justify-self-center shrink-0"
          >
            {/* Soft Ambient Radial Glow behind Sphere */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-[60px] sm:blur-[70px] scale-90 pointer-events-none"
              aria-hidden="true"
            />
            
            {/* 3D R3F Sphere Canvas */}
            <div ref={sceneContainerRef} className="w-full h-full relative z-10">
              {shouldLoadScene ? (
                <Suspense fallback={<div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)]" />}>
                  <SceneCanvas mouseRef={mouseRef} />
                </Suspense>
              ) : (
                <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_68%)]" aria-hidden="true" />
              )}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute right-1 top-[16%] rounded-2xl border border-blue-100 bg-white/85 px-4 py-3 shadow-xl shadow-blue-500/10 backdrop-blur"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Build</span>
                <span className="font-display text-sm font-bold text-blue-600">Smart Products</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: .4 }}
                className="pointer-events-none absolute bottom-[14%] left-0 rounded-2xl border border-violet-100 bg-white/85 px-4 py-3 shadow-xl shadow-violet-500/10 backdrop-blur"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Create</span>
                <span className="font-display text-sm font-bold text-violet-600">Digital Impact</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}