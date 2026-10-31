
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { footerData } from '../../data/siteData';
import { companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_logo.png';

export default function Footer() {
  const navigate = useNavigate();

  const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const headingClass =
    "mb-6 min-h-[20px] text-xs font-bold uppercase tracking-[0.14em] leading-5 text-[#A78BFA]";

  const listClass = "space-y-4";

  return (
    <footer className="relative overflow-hidden bg-[#0B0F24] text-white border-t border-white/10">

      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 85% 15%, rgba(59,130,246,0.16), transparent 35%), radial-gradient(circle at 10% 100%, rgba(167,139,250,0.10), transparent 35%)'
        }}
      />

      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />

      <div className="relative w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.85fr_1.2fr] gap-x-10 xl:gap-x-14 gap-y-12 items-start">

          {/* Company Information */}
          <div className="w-full max-w-sm">

            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="w-12 h-12 shrink-0 p-1.5 rounded-xl bg-white border border-white/20 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`${companyInfo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="font-display font-bold text-xl text-white group-hover:text-[#A78BFA] transition-colors">
                Cosmovance
              </span>
            </a>

            <p className="text-slate-300 text-sm leading-7">
              {companyInfo.tagline} We craft high-performance AI software,
              platforms, and digital products that set new standards.
            </p>

          </div>

          {/* Services */}
          <div className="w-full">

            <h4 className={headingClass}>
              Our Services
            </h4>

            <ul className={listClass}>
              {footerData.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-300 hover:text-white transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Quick Links */}
          <div className="w-full">

            <h4 className={headingClass}>
              Quick Links
            </h4>

            <ul className={listClass}>
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-[#60A5FA] transition-colors group"
                  >
                    {link.label}

                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Information */}
          <div className="w-full min-w-0">

            <h4 className={headingClass}>
              Contact Us
            </h4>

            <ul className="space-y-5">

              <li>
                <a
                  href={MAILTO_URL}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#60A5FA] group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>

                  <span className="min-w-0 text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                    {companyInfo.email}
                  </span>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-[#60A5FA]">
                  <MapPin className="w-4 h-4" />
                </span>

                <span className="text-sm text-slate-300">
                  India / Global Support
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-slate-400 text-center md:text-left">
            © {companyInfo.year} {companyInfo.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-7">

            {footerData.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-300 hover:text-[#60A5FA] transition-colors"
              >
                {social.label}
              </a>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
}
