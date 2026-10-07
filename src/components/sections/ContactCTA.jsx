import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../common/Button';
import GradientText from '../common/GradientText';
import AnimatedElement from '../common/AnimatedElement';
import SectionWrapper from '../common/SectionWrapper';
import { companyInfo } from '../../data/navigation';

/**
 * Contact CTA section — final conversion point before footer.
 */
export default function ContactCTA() {
  const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;
  const TEL_URL = `tel:+919773034833`;

  return (
    <SectionWrapper id="contact" className="scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        {/* Radial glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow mx-auto text-center relative z-10">
        {/* Badge */}
        <AnimatedElement animation="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-purple-300 text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Get in Touch
          </span>
        </AnimatedElement>

        {/* Heading */}
        <AnimatedElement animation="fade-up" delay={0.1}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight text-white">
            Let&apos;s Build Something{' '}
            <GradientText>Extraordinary</GradientText>
          </h2>
        </AnimatedElement>

        {/* Description */}
        <AnimatedElement animation="fade-up" delay={0.2}>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Ready to transform your vision into a market-leading digital product?
            Share your idea and we&apos;ll respond within 24 hours to discuss how
            Cosmovance can engineer your next platform.
          </p>
        </AnimatedElement>

        {/* CTAs */}
        <AnimatedElement animation="fade-up" delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
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
              href={TEL_URL}
              className="w-full sm:w-auto"
            >
              Schedule a Call
            </Button>
          </div>
        </AnimatedElement>

        {/* Contact info row */}
        <AnimatedElement animation="fade-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 pt-8 border-t border-white/[0.08]">
            <a
              href={MAILTO_URL}
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Mail className="w-4 h-4 text-primary-light" />
              </div>
              <span className="text-sm font-medium">{companyInfo.email}</span>
            </a>

            <a
              href={TEL_URL}
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Phone className="w-4 h-4 text-primary-light" />
              </div>
              <span className="text-sm font-medium">+91 97730 34833</span>
            </a>

            <div className="inline-flex items-center gap-3 text-slate-400">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-light" />
              </div>
              <span className="text-sm font-medium">Jamnagar, Gujarat, India</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
