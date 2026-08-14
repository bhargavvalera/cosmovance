import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import { technologies } from '../../data/siteData';

/**
 * Technologies — responsive grid of tech-stack categories,
 * each item shown in a GlassCard with a colored indicator dot.
 */
export default function Technologies() {
  return (
    <SectionWrapper id="technologies">
      {/* Header */}
      <AnimatedElement animation="fade-up">
        <SectionHeading
          badge="Tech Stack"
          title={
            <>
              Technologies We <GradientText>Master</GradientText>
            </>
          }
          description="We leverage modern, battle-tested tools and frameworks to deliver scalable, high-performance digital products."
          align="center"
        />
      </AnimatedElement>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 md:mt-16">
        {technologies.map((group, groupIndex) => (
          <AnimatedElement
            key={group.category}
            animation="fade-up"
            delay={groupIndex * 0.1}
          >
            <div>
              {/* Category label */}
              <p className="text-text-dim text-xs uppercase tracking-wider font-medium mb-3">
                {group.category}
              </p>

              {/* Tech items */}
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <GlassCard
                    key={item.name}
                    className="p-4"
                    hover
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-white/80">
                        {item.name}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
