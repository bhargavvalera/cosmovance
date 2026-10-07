import AnimatedElement from '../common/AnimatedElement';
import { trustedByLogos } from '../../data/siteData';

/**
 * Trusted By section — infinite marquee of client company logos.
 * Provides social proof immediately after the hero.
 */
export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative overflow-hidden py-14 md:py-16 border-y border-white/[0.04] scroll-mt-20"
    >
      {/* Subtle background layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-white/[0.01] to-bg-primary pointer-events-none" aria-hidden="true" />

      <div className="container-wide mx-auto px-6 md:px-8">
        {/* Label */}
        <AnimatedElement animation="fade" className="text-center mb-10">
          <p className="text-text-dim text-xs font-medium tracking-[0.25em] uppercase">
            Trusted by innovative companies
          </p>
        </AnimatedElement>
      </div>

      {/* Marquee — edge fade masks */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" aria-hidden="true" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div className="flex animate-marquee whitespace-nowrap" aria-label="Client companies">
          {/* Duplicate logos for seamless loop */}
          {[...trustedByLogos, ...trustedByLogos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center px-10 md:px-16"
            >
              {/* Pill-style logo placeholder */}
              <span
                className="font-display font-bold text-base md:text-lg text-white/20
                           hover:text-white/50 transition-colors duration-300
                           select-none whitespace-nowrap tracking-wide"
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
