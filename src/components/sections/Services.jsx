import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import { services } from '../../data/siteData';

/**
 * Services section — showcases core service offerings in a responsive grid.
 */
export default function Services() {
  return (
    <SectionWrapper id="services" className="scroll-mt-20">
      <SectionHeading
        badge="Our Services"
        title={
          <>
            Comprehensive Digital <GradientText>Solutions</GradientText>
          </>
        }
        description="From custom software to AI-powered platforms, we deliver end-to-end digital services that transform ambitious ideas into scalable products."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {services.map((service, index) => (
          <AnimatedElement
            key={service.title}
            animation="fade-up"
            delay={index * 0.08}
            once
          >
            <GlassCard
              className="p-6 md:p-7 group h-full flex flex-col justify-between border border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-300"
              hover
              glow
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <span>Explore offering</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </GlassCard>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}

