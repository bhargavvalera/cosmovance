import { Star } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import { testimonials } from '../../data/siteData';

/**
 * Testimonials section — displays client reviews in a responsive card grid.
 * Grid: 1 col (mobile) → 2 col (sm/tablet) → 3 col (lg+)
 */
export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="scroll-mt-20">
      <SectionHeading
        badge="Client Stories"
        title={
          <>
            Trusted by <GradientText>Innovators</GradientText>
          </>
        }
        description="Don't just take our word for it. Here's what our clients say about working with Cosmovance."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedElement
            key={testimonial.name}
            animation="fade-up"
            delay={index * 0.1}
          >
            <GlassCard hover className="p-6 md:p-8 h-full flex flex-col">
              {/* Star rating */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400/80 text-yellow-400/80'
                        : 'fill-transparent text-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 italic flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-4" />

              {/* Author info */}
              <div>
                <p className="font-display font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-text-dim text-sm mt-0.5">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </GlassCard>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
