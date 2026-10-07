import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { processSteps } from '../../data/siteData';

/**
 * Development Process — responsive timeline.
 * Mobile: vertical left-aligned cards with connector line.
 * Desktop: alternating left/right zigzag layout with center connector.
 */
export default function Process() {
  return (
    <SectionWrapper id="process" className="scroll-mt-20">
      {/* Header */}
      <SectionHeading
        badge="Our Process"
        title={
          <>
            How We <GradientText>Build</GradientText> Your Product
          </>
        }
        description="A proven five-step workflow that turns your vision into production-ready software — on time, every time."
        align="center"
      />

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical connector line — desktop center, mobile left */}
        <div
          className="absolute left-5 sm:left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2
                     bg-gradient-to-b from-primary/60 via-accent/40 to-transparent"
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="flex flex-col gap-10 md:gap-14">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 0;

            return (
              <AnimatedElement
                key={step.title}
                animation={isEven ? 'fade-right' : 'fade-left'}
                delay={index * 0.1}
              >
                <div className="relative flex items-start gap-0 md:gap-0">
                  {/* ── Mobile layout: offset card to right of the timeline line ── */}
                  {/* ── Desktop layout: alternating sides ── */}

                  {/* Step card wrapper — full width mobile, half width desktop */}
                  <div
                    className={`
                      w-full
                      pl-14 sm:pl-16
                      md:pl-0 md:w-[calc(50%-2rem)]
                      ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
                    `}
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]
                                    hover:border-primary/40 hover:bg-white/[0.05]
                                    transition-all duration-300 shadow-xl group">
                      {/* Step header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20
                                          flex items-center justify-center shrink-0
                                          group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-4 h-4 text-primary-light" />
                          </div>
                          <h3 className="font-display font-semibold text-lg sm:text-xl text-white
                                         group-hover:text-purple-300 transition-colors leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <span className="shrink-0 text-xs font-mono font-bold text-primary-light
                                          bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20
                                          leading-none mt-0.5">
                          {stepNumber}
                        </span>
                      </div>

                      <p className="text-text-muted text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg
                                       bg-white/[0.04] border border-white/[0.06]
                                       text-slate-300 text-xs font-medium"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Number circle — sits on the timeline line ── */}
                  {/* Mobile: absolute, left-aligned to line */}
                  {/* Desktop: absolute, centered on the middle */}
                  <div
                    className="absolute
                               left-5 sm:left-6 top-4
                               md:left-1/2 md:top-5
                               -translate-x-1/2 z-10
                               w-10 h-10 rounded-full border-2 border-primary
                               bg-[#080d1a] flex items-center justify-center
                               shadow-[0_0_16px_rgba(79,70,229,0.5)]"
                    aria-hidden="true"
                  >
                    <span className="font-display font-bold text-white text-sm leading-none">
                      {String(index + 1)}
                    </span>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
