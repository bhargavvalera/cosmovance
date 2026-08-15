import { ArrowRight, Mail, MapPin } from 'lucide-react';
import Button from '../common/Button';
import GradientText from '../common/GradientText';
import AnimatedElement from '../common/AnimatedElement';
import { companyInfo } from '../../data/navigation';

/**
 * Contact CTA section — final conversion point before footer.
 */
export default function ContactCTA() {
  const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-narrow mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        {/* Badge */}
        <AnimatedElement animation="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-purple-300 text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
            Get in Touch
          </span>
        </AnimatedElement>

        {/* Heading */}
        <AnimatedElement animation="fade-up" delay={0.1}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            Let's Build Something{' '}
            <GradientText>Extraordinary</GradientText>
          </h2>
        </AnimatedElement>

        {/* Description */}
        <AnimatedElement animation="fade-up" delay={0.2}>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Ready to transform your vision into a market-leading digital product? Let's discuss how Cosmovance can engineer your next platform.
          </p>
        </AnimatedElement>

        {/* CTAs */}
        <AnimatedElement animation="fade-up" delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              href={MAILTO_URL}
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#services"
              className="w-full sm:w-auto"
            >
              Explore Offerings
            </Button>
          </div>
        </AnimatedElement>

        {/* Contact info */}
        <AnimatedElement animation="fade-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 pt-6 border-t border-white/[0.08]">
            <a
              href={MAILTO_URL}
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                <Mail className="w-4 h-4 text-primary-light" />
              </div>
              <span className="text-sm font-medium">{companyInfo.email}</span>
            </a>
            <div className="inline-flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-light" />
              </div>
              <span className="text-sm font-medium">Global / India</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

