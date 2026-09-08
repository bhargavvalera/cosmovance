import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { processSteps } from '../../data/siteData';

/**
 * Development Process — vertical timeline with numbered steps and detail tags.
 */
export default function Process() {
  return (
    <SectionWrapper id="process" className="scroll-mt-20">
      {/* Header */}
      <AnimatedElement animation="fade-up">
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
      </AnimatedElement>

      {/* Timeline */}
      <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto px-2 sm:px-4">
        {/* Vertical connector line */}
        <div
          className="absolute top-4 bottom-4 left-6 sm:left-8 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary/30 hidden md:block"
          aria-hidden="true"
        />
        <div
          className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary/30 md:hidden"
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="flex flex-col gap-12 md:gap-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 0;

            return (
              <AnimatedElement
                key={step.title}
                animation={isEven ? 'fade-left' : 'fade-right'}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0`}
                >
                  {/* Step Card — inset from center so badge never overlaps content */}
                  <div
                    className={`w-full md:w-[calc(50%-2.75rem)] ${
                      isEven ? 'md:ml-auto md:pl-6' : 'md:mr-auto md:pr-6'
                    } pl-14 md:pl-0`}
                  >
                    <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary-light" />
                          </div>
                          <h3 className="font-display font-semibold text-xl text-white group-hover:text-purple-300 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <span className="shrink-0 text-xs font-mono font-bold text-primary-light bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20">
                          STEP {stepNumber}
                        </span>
                      </div>

                      <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 text-xs sm:text-sm font-medium"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Number Circle Badge */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-8 -translate-x-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-primary bg-[#080d1a] flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                    <span className="font-display font-bold text-white text-sm">
                      {stepNumber}
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

