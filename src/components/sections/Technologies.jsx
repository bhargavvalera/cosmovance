
import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { technologies } from '../../data/siteData';

const fallbackColors = [
  '#22D3EE',
  '#3B82F6',
  '#A78BFA',
  '#0EA5E9',
  '#10B981',
  '#F97316',
];

export default function Technologies() {
  return (
    <SectionWrapper
      id="technologies"
      className="technologies-section"
    >
      {/* Section Heading */}
      <AnimatedElement animation="fade-up">
        <SectionHeading
          title={
            <>
              Technologies We{' '}
              <span className="technology-master-text">
                <GradientText>Master</GradientText>
              </span>
            </>
          }
          description="We leverage modern, battle-tested tools and frameworks to deliver scalable, high-performance digital products."
          align="center"
        />
      </AnimatedElement>

      {/* Technology Categories */}
      <div className="technologies-grid">
        {technologies.map((group, index) => (
          <AnimatedElement
            key={group.category}
            animation="fade-up"
            delay={index * 0.1}
          >
            <div className="technology-category">

              {/* Category Heading */}
              <h3 className="technology-category-title">
                {group.category}
              </h3>

              {/* Gradient Underline */}
              <div className="technology-underline" />

              {/* Technology List */}
              <div className="technology-list">
                {group.items.map((item, itemIndex) => {
                  const dotColor =
                    item.name === 'Next.js'
                      ? '#3B82F6'
                      : item.name === 'Express'
                      ? '#10B981'
                      : item.color ||
                        fallbackColors[
                          itemIndex % fallbackColors.length
                        ];

                  return (
                    <div
                      key={item.name}
                      className="technology-item"
                    >
                      {/* Colored Dot */}
                      <span
                        className="technology-dot"
                        style={{ backgroundColor: dotColor }}
                        aria-hidden="true"
                      />

                      {/* Technology Name */}
                      <span className="technology-name">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
