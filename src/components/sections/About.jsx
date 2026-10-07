import { MapPin, ExternalLink } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import AnimatedElement from '../common/AnimatedElement';
import { aboutFeatures } from '../../data/siteData';

/**
 * About section — company mission, vision, founder card, and key differentiators.
 */
export default function About() {
  return (
    <SectionWrapper id="about" className="scroll-mt-20">
      <SectionHeading
        badge="About Us"
        title={
          <>
            We Build the <GradientText>Future</GradientText> of Digital
          </>
        }
        description="Cosmovance Technologies is a premier consultancy of engineers, designers, and AI strategists dedicated to crafting digital products that set industry benchmarks."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left — Company story + founder card */}
        <AnimatedElement animation="fade-left" className="lg:col-span-6 space-y-6">
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            Founded with a mission to deliver high-performance software and AI solutions,
            we combine deep technical expertise with design-driven thinking to engineer
            products that drive real business growth.
          </p>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            From intelligent web applications to cross-platform mobile apps, every project
            we undertake is architected for scalability, security, and exceptional user delight.
          </p>

          {/* Core philosophy quote */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent" />
            <h4 className="font-display font-semibold text-white text-base mb-2 pl-2">
              Our Core Philosophy
            </h4>
            <p className="text-sm text-slate-300 italic pl-2">
              &ldquo;Understand deeply, design intentionally, build meticulously, and ship continuously.&rdquo;
            </p>
          </div>

          {/* Founder card */}
          <GlassCard className="p-5 sm:p-6" hover glow={false}>
            <div className="flex items-start gap-4">
              {/* Founder avatar placeholder with initials */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 text-white font-display font-bold text-xl">
                BV
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                  Bhargav Valera
                </p>
                <p className="text-primary-light text-sm font-medium mt-0.5">
                  Founder &amp; CEO
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5">
                  <span className="inline-flex items-center gap-1.5 text-text-dim text-xs">
                    <MapPin className="w-3 h-3" />
                    Jamnagar, Gujarat, India
                  </span>
                  <a
                    href="https://linkedin.com/in/bhargavvalera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-dim text-xs hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    LinkedIn Profile
                  </a>
                </div>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mt-3">
                  Visionary technologist building India&apos;s next-generation digital product studio —
                  where craft meets intelligence.
                </p>
              </div>
            </div>
          </GlassCard>
        </AnimatedElement>

        {/* Right — Feature cards grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {aboutFeatures.map((feature, index) => (
            <AnimatedElement
              key={feature.title}
              animation="fade-up"
              delay={index * 0.08}
            >
              <GlassCard className="p-6 h-full border border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-300" hover glow={false}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
