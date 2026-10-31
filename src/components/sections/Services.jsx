import SectionWrapper from '../common/SectionWrapper';
import AnimatedElement from '../common/AnimatedElement';
import SectionHeading from '../common/SectionHeading';
import GradientText from '../common/GradientText';
import { services } from '../../data/siteData';
import { serviceDetails } from '../../data/serviceDetails';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Layers3, ShieldCheck, Settings2, Sparkles, Brain, Users,
  BarChart3, Zap, Smartphone, Apple, Bot, Gauge, Search, Monitor,
  Palette, MousePointer2, Star, Rocket, Box, TrendingUp, LayoutDashboard,
  Radio, Workflow, CheckCircle2, Code2, Globe, Cloud, LockKeyhole,
} from 'lucide-react';

const cardStyles = [
  {
    tone: 'violet',
    chips: [{ label: 'Scalable', icon: Layers3 }, { label: 'Secure', icon: ShieldCheck }, { label: 'Custom', icon: Settings2 }],
    art: [Code2, Layers3, Sparkles],
  },
  {
    tone: 'blue',
    chips: [{ label: 'Automate', icon: Zap }, { label: 'Predict', icon: BarChart3 }, { label: 'Optimize', icon: Brain }],
    art: [Brain, Sparkles, BarChart3],
  },
  {
    tone: 'cyan',
    chips: [{ label: 'iOS', icon: Apple }, { label: 'Android', icon: Bot }, { label: 'Fast', icon: Zap }],
    art: [Smartphone, Apple, Bot],
  },
  {
    tone: 'sky',
    chips: [{ label: 'Fast', icon: Zap }, { label: 'SEO', icon: Search }, { label: 'Responsive', icon: Smartphone }],
    art: [Monitor, Code2, Globe],
  },
  {
    tone: 'pink',
    chips: [{ label: 'User-Centric', icon: UsersIcon }, { label: 'Modern', icon: SlidersIcon }, { label: 'Intuitive', icon: Star }],
    art: [Palette, MousePointer2, Sparkles],
  },
  {
    tone: 'blue',
    chips: [{ label: 'Rapid', icon: Rocket }, { label: 'MVP', icon: Box }, { label: 'Market-Ready', icon: TrendingUp }],
    art: [Rocket, Cloud, Sparkles],
  },
  {
    tone: 'violet',
    chips: [{ label: 'Real-time', icon: Radio }, { label: 'Integrations', icon: Workflow }, { label: 'Secure', icon: LockKeyhole }],
    art: [LayoutDashboard, BarChart3, Gauge],
  },
  {
    tone: 'teal',
    chips: [{ label: 'Automate', icon: Bot }, { label: 'Efficient', icon: Settings2 }, { label: 'Scalable', icon: CheckCircle2 }],
    art: [Workflow, Settings2, CheckCircle2],
  },
];

function UsersIcon(props) { return <Users {...props} />; }
function SlidersIcon(props) { return <Settings2 {...props} />; }

const toneClasses = {
  violet: {
    border: 'hover:border-violet-300',
    number: 'bg-violet-50 text-violet-700 border-violet-100',
    icon: 'bg-violet-100/90 text-violet-600',
    glow: 'from-violet-200/80 via-purple-100/70 to-transparent',
    art: 'text-violet-600',
    button: 'from-violet-500 to-indigo-700 shadow-violet-500/20',
    chip: 'text-violet-700',
  },
  blue: {
    border: 'hover:border-blue-300',
    number: 'bg-blue-50 text-blue-700 border-blue-100',
    icon: 'bg-blue-100/90 text-blue-600',
    glow: 'from-blue-200/80 via-indigo-100/70 to-transparent',
    art: 'text-blue-600',
    button: 'from-blue-500 to-indigo-600 shadow-blue-500/20',
    chip: 'text-blue-700',
  },
  cyan: {
    border: 'hover:border-cyan-300',
    number: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    icon: 'bg-cyan-100/90 text-cyan-600',
    glow: 'from-cyan-200/80 via-sky-100/70 to-transparent',
    art: 'text-cyan-600',
    button: 'from-cyan-500 to-blue-600 shadow-cyan-500/20',
    chip: 'text-cyan-700',
  },
  sky: {
    border: 'hover:border-sky-300',
    number: 'bg-sky-50 text-sky-700 border-sky-100',
    icon: 'bg-sky-100/90 text-sky-600',
    glow: 'from-sky-200/80 via-cyan-100/70 to-transparent',
    art: 'text-sky-600',
    button: 'from-sky-500 to-cyan-600 shadow-sky-500/20',
    chip: 'text-sky-700',
  },
  pink: {
    border: 'hover:border-fuchsia-300',
    number: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100',
    icon: 'bg-fuchsia-100/90 text-fuchsia-600',
    glow: 'from-fuchsia-200/80 via-pink-100/70 to-transparent',
    art: 'text-fuchsia-600',
    button: 'from-fuchsia-500 to-violet-600 shadow-fuchsia-500/20',
    chip: 'text-fuchsia-700',
  },
  teal: {
    border: 'hover:border-teal-300',
    number: 'bg-teal-50 text-teal-700 border-teal-100',
    icon: 'bg-teal-100/90 text-teal-600',
    glow: 'from-teal-200/80 via-cyan-100/70 to-transparent',
    art: 'text-teal-600',
    button: 'from-teal-500 to-blue-600 shadow-teal-500/20',
    chip: 'text-teal-700',
  },
};

function ServiceArtwork({ icons, tone }) {
  const [MainIcon, FloatIconOne, FloatIconTwo] = icons;
  const style = toneClasses[tone];
  return (
    <div className="service-artwork pointer-events-none absolute right-4 top-5 flex h-[118px] w-[145px] items-center justify-center sm:right-5">
      <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${style.glow} blur-xl`} />
      <div className={`service-art-orbit absolute h-[102px] w-[102px] rounded-[30px] border border-white/80 bg-white/60 shadow-[0_12px_30px_rgba(76,99,160,0.10)] backdrop-blur-sm ${style.art}`}>
        <MainIcon className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 stroke-[1.7]" />
      </div>
      <div className={`service-art-float absolute right-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white/90 shadow-lg shadow-slate-300/40 ${style.art}`}>
        <FloatIconOne className="h-5 w-5" />
      </div>
      <div className={`service-art-float-delayed absolute bottom-1 left-1 flex h-9 w-9 items-center justify-center rounded-xl border border-white bg-white/90 shadow-lg shadow-slate-300/40 ${style.art}`}>
        <FloatIconTwo className="h-4 w-4" />
      </div>
      <span className={`absolute right-8 bottom-0 h-2 w-2 rounded-full ${tone === 'teal' ? 'bg-teal-400' : tone === 'pink' ? 'bg-fuchsia-400' : 'bg-blue-400'}`} />
    </div>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" className="scroll-mt-20">
      <SectionHeading
        badge="Our Services"
        title={<>{'Comprehensive Digital '}<GradientText>Solutions</GradientText></>}
        description="From custom software to AI-powered platforms, we deliver end-to-end digital services that transform ambitious ideas into scalable products."
        align="center"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
        {services.map((service, index) => {
          const visual = cardStyles[index % cardStyles.length];
          const tone = toneClasses[visual.tone];
          const DetailIcon = service.icon;
          const detail = serviceDetails.find((item) => item.title === service.title);
          return (
            <AnimatedElement key={service.title} animation="fade-up" delay={index * 0.07} once>
              <article className={`service-showcase-card group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-6 shadow-[0_14px_36px_rgba(43,67,120,0.07)] transition-all duration-500 ${tone.border}`}>
                <div className={`pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${tone.glow} opacity-70 blur-2xl transition-transform duration-700 group-hover:scale-125`} />
                <div className="relative z-10 flex items-center justify-between">
                  <span className={`rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-wide ${tone.number}`}>
                    {String(index + 1).padStart(2, '0')} <span className="opacity-50">/</span> {String(services.length).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">COSMO</span>
                </div>

                <ServiceArtwork icons={visual.art} tone={visual.tone} />

                <div className="relative z-10 mt-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white bg-white/90 shadow-sm">
                  <div className={`flex h-full w-full items-center justify-center rounded-[14px] ${tone.icon}`}>
                    <DetailIcon className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <h3 className="max-w-[78%] text-[19px] font-bold leading-[1.18] tracking-tight text-[#0B1535] sm:min-h-[46px]">
                    {service.title}
                  </h3>
                  <p className="mt-2 min-h-[76px] text-[13px] leading-[1.55] text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {visual.chips.map(({ label, icon: ChipIcon }) => (
                      <span key={label} className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/75 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 shadow-sm">
                        <ChipIcon className={`h-3 w-3 ${tone.chip}`} />
                        {label}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={detail ? `/services/${detail.slug}` : '/services'}
                    aria-label={`Explore ${service.title}`}
                    className={`service-offering-link inline-flex w-full items-center justify-between rounded-full bg-gradient-to-r ${tone.button} px-4 py-3 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500`}
                  >
                    <span>Explore Offering</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </AnimatedElement>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
