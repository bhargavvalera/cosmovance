import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/common/SectionWrapper';
import GradientText from '../components/common/GradientText';
import { serviceDetails } from '../data/serviceDetails';
import { companyInfo } from '../data/navigation';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <div className="pt-28 sm:pt-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-7">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/services" className="hover:text-[#3B82F6] transition-colors">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-[#1E293B]">{service.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_20%,rgba(96,165,250,0.20),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(167,139,250,0.13),transparent_30%),linear-gradient(135deg,#F5F8FF,#FFFFFF)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3B82F6] shadow-sm">
              <Sparkles className="h-4 w-4" /> {service.eyebrow}
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl">
              {service.title.split(' ').slice(0, -1).join(' ')}{' '}
              <GradientText>{service.title.split(' ').slice(-1)[0]}</GradientText>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#A78BFA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#1E293B] transition hover:border-blue-300 hover:text-[#3B82F6]">
                Explore All Services
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-300/30 via-violet-300/20 to-cyan-200/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-[0_28px_80px_rgba(59,130,246,0.14)] backdrop-blur-xl sm:p-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 blur-2xl" />
              <div className="relative flex min-h-[260px] flex-col items-center justify-center text-center">
                <div className="mb-7 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-xl shadow-blue-500/10">
                  <Icon className="h-14 w-14 text-[#3B82F6]" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6]">Cosmovance Technologies</p>
                <h2 className="mt-3 max-w-xs text-2xl font-bold text-[#1E293B]">Built for your next stage of growth</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#64748B]">{service.outcome}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">Service Overview</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1E293B] sm:text-4xl">A smarter way to move your business forward</h2>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_16px_45px_rgba(30,41,59,0.05)] sm:p-9">
            <p className="text-base leading-8 text-[#64748B] sm:text-lg">{service.intro}</p>
            <div className="mt-7 flex items-start gap-3 border-t border-slate-100 pt-6">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#3B82F6]" />
              <p className="font-semibold leading-7 text-[#1E293B]">{service.outcome}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">What You Get</span>
            <h2 className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">Everything you need to build with confidence</h2>
            <p className="mt-4 text-base leading-7 text-[#64748B]">A thoughtful combination of strategy, technology, and execution for your project.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.article key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-2xl border border-slate-200 bg-[#F8FAFF] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 text-[#3B82F6]">
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#64748B]">{feature.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <SectionWrapper>
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">Technology Stack</span>
          <h2 className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">The right tools for the job</h2>
          <p className="mt-4 text-[#64748B]">Technology choices are tailored to your product goals, requirements, and existing systems.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {service.technologies.map((technology) => (
              <span key={technology} className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-[#3B82F6]">{technology}</span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">How We Work</span>
            <h2 className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">A clear path from idea to launch</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step} className="relative rounded-2xl border border-slate-200 bg-[#F8FAFF] p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#A78BFA] text-sm font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                <p className="font-semibold leading-7 text-[#1E293B]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">FAQs</span>
            <h2 className="mt-4 text-3xl font-bold text-[#1E293B] sm:text-4xl">Questions about {service.title}?</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none pr-6 font-semibold text-[#1E293B] marker:hidden">{question}</summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-[#64748B]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0B0F24] px-7 py-14 text-center shadow-2xl shadow-blue-950/10 sm:px-12 sm:py-16">

          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(167,139,250,0.22),transparent_35%)]" />

          <div className="relative mx-auto max-w-3xl">

            {/* Small Heading */}
            <span
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: '#60A5FA', WebkitTextFillColor: '#60A5FA' }}
            >
              Let's Build Together
            </span>

            {/* Main Heading */}
            <h2
              className="mt-4 text-3xl font-bold sm:text-4xl"
              style={{
                color: '#FFFFFF',
                WebkitTextFillColor: '#FFFFFF',
                opacity: 1,
              }}
            >
              Ready to start your {service.title.toLowerCase()} project?
            </h2>

            {/* Description */}
            <p
              className="mx-auto mt-5 max-w-2xl leading-7"
              style={{
                color: '#CBD5E1',
                WebkitTextFillColor: '#CBD5E1',
                opacity: 1,
              }}
            >
              Tell us what you are planning. We will help you explore the right approach for your goals.
            </p>

            {/* CTA Button */}
            <a
              href={`mailto:${companyInfo.email}?subject=${encodeURIComponent(
                `Project Inquiry - ${service.title}`
              )}&body=${encodeURIComponent(
                `Hello Cosmovance Technologies,\n\nI am interested in your ${service.title} service.\n\nPlease share more details about the project.\n\nThank you.`
              )}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0B0F24] transition hover:-translate-y-0.5 hover:bg-[#F5F8FF]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
