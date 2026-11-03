
import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { processSteps } from '../../data/siteData';

export default function Process() {
  return (
    <SectionWrapper id="process" className="scroll-mt-20">
      {/* Section Heading */}
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
      <div className="process-timeline relative mt-12 md:mt-16 max-w-5xl mx-auto px-2 sm:px-4">

        {/* Timeline Line */}
        <div
          className="process-timeline-line absolute top-4 bottom-4 left-6 md:left-1/2 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-primary via-accent to-secondary/30"
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="flex flex-col gap-10 md:gap-16">
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
                  className={`process-step-row relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div
                    className={`process-step-content w-full md:w-[calc(50%-2.75rem)] ${
                      isEven
                        ? 'md:ml-auto md:pl-6'
                        : 'md:mr-auto md:pr-6'
                    } pl-14 md:pl-0`}
                  >
                    <div className="process-step-card p-5 sm:p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl group">

                      {/* Card Header */}
                      <div className="process-step-header flex items-center justify-between gap-3 mb-5">

                        <div className="process-step-heading flex items-center gap-3 min-w-0 flex-1">
                          <div className="process-step-icon w-10 h-10 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary-light" />
                          </div>

                          <h3 className="process-step-title min-w-0 font-display font-semibold text-lg sm:text-xl text-white group-hover:text-[#A78BFA] transition-colors">
                            {step.title}
                          </h3>
                        </div>

                        <span className="process-step-label shrink-0 text-[10px] sm:text-xs font-mono font-bold text-primary-light bg-primary/10 px-2.5 sm:px-3 py-1.5 rounded-md border border-primary/20">
                          STEP {stepNumber}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="process-step-description text-text-muted text-sm sm:text-base leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="process-step-details flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#64748B] text-xs sm:text-sm font-medium"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Number */}
                  <div className="process-step-marker absolute left-6 md:left-1/2 top-7 md:top-8 -translate-x-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-primary bg-[#1E1B4B] flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
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
