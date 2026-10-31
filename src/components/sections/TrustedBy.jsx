import { motion } from 'framer-motion';
import { trustedByLogos } from '../../data/siteData';

/**
 * Compact, high-contrast trust strip.
 * The logo names are editable placeholders from siteData.js.
 */
export default function TrustedBy() {
  const logos = [...trustedByLogos, ...trustedByLogos];

  return (
    <section
      aria-label="Trusted by innovative companies"
      className="trusted-strip relative overflow-hidden border-y border-slate-200/80 bg-white/75 py-9 sm:py-11"
    >
      <div className="container-wide mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-7 text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-blue-600"
        >
          Trusted by innovative companies
        </motion.p>
      </div>

      <div className="trusted-marquee-wrap relative">
        <div className="trusted-marquee flex w-max items-center">
          {logos.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="trusted-logo-item flex items-center justify-center px-7 sm:px-10"
            >
              <span className="whitespace-nowrap font-display text-base sm:text-lg font-bold tracking-tight text-slate-500 transition-colors duration-300 hover:text-blue-600">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
