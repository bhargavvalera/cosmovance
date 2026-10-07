import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GlassCard from '../common/GlassCard';
import GradientText from '../common/GradientText';
import { portfolioProjects } from '../../data/siteData';

/**
 * Portfolio section — showcases featured project cards in a responsive grid.
 */
export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="scroll-mt-20">
      <SectionHeading
        badge="Our Work"
        title={
          <>
            Projects That <GradientText>Speak Results</GradientText>
          </>
        }
        description="From concept to launch, we build digital products that drive real business outcomes. Here's a look at some of our recent work."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {portfolioProjects.map((project, index) => (
          <AnimatedElement
            key={project.title}
            animation="fade-up"
            delay={index * 0.1}
          >
            <GlassCard hover glow className="h-full">
              {/* Gradient showcase area */}
              <div
                className={`h-48 rounded-t-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span
                  className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
                             text-white text-xs font-medium tracking-wide"
                >
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/[0.06] text-text-dim text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
