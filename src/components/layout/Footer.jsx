import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { footerData } from '../../data/siteData';
import { companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_logo.png';

// Social Media Icons
function SocialIcon({ label }) {
  const commonProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  };

  const name = label.toLowerCase();

  if (name === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (name === 'instagram') {
    return (
      <svg {...commonProps}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    );
  }

  if (name === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.61 5.23-5.1 5.5.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  return null;
}
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
            <h4 className={headingClass}>Our Services</h4>

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
            <h4 className={headingClass}>Quick Links</h4>

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
            <h4 className={headingClass}>Contact Us</h4>

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

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center items-center gap-7">
            {footerData.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#60A5FA] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="transition-all duration-300 group-hover:scale-110 group-hover:text-[#A78BFA]">
                  <SocialIcon label={social.label} />
                </span>

                <span>{social.label}</span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
