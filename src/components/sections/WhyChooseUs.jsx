import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import { whyChooseUs } from '../../data/siteData';

/**
 * Why Choose Us section — highlights key differentiators with bold stat cards.
 */
export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" className="scroll-mt-20">
      <SectionHeading
        badge="Why Choose Us"
        title={
          <>
            Built Different, <GradientText>Delivered Better</GradientText>
          </>
        }
        description="We combine deep technical expertise with a design-first mindset to ship products that outperform, outlast, and outshine the competition."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {whyChooseUs.map((item, index) => (
          <AnimatedElement
            key={item.title}
            animation="fade-up"
            delay={index * 0.1}
            once
          >
            <GlassCard className="p-6 md:p-8 h-full" hover glow>
              {/* Stat */}
              <span
                className="gradient-text font-display text-4xl md:text-5xl font-bold block"
                aria-label={`${item.stat} — ${item.statLabel}`}
              >
                {item.stat}
              </span>
              <span className="text-text-dim text-xs uppercase tracking-wider mt-1 mb-4 block">
                {item.statLabel}
              </span>

              {/* Details */}
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
