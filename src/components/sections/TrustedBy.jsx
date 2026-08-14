import AnimatedElement from '../common/AnimatedElement';
import { trustedByLogos } from '../../data/siteData';

/**
 * Trusted By section — infinite marquee of client company logos.
 * Provides social proof immediately after the hero.
 */
export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 border-y border-white/[0.04]">
      <div className="container-wide mx-auto px-6 md:px-8">
        {/* Label */}
        <AnimatedElement animation="fade" className="text-center mb-10">
          <p className="text-text-dim text-sm font-medium tracking-widest uppercase">
            Trusted by innovative companies
          </p>
        </AnimatedElement>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate logos for seamless loop */}
          {[...trustedByLogos, ...trustedByLogos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center px-10 md:px-14"
            >
              <span className="font-display font-semibold text-lg md:text-xl text-white/20 hover:text-white/40 transition-colors duration-300 select-none whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
