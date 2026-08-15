import { Mail, MapPin } from 'lucide-react';
import { footerData } from '../../data/siteData';
import { companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_logo.png';

/**
 * Footer — 4-column layout with company info, services, links, and contact.
 */
export default function Footer() {
  const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#030612]">
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1 — Company */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/15 group-hover:border-primary/40 transition-colors">
                <img
                  src={logo}
                  alt={`${companyInfo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                Cosmovance
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {companyInfo.tagline} We craft high-performance AI software, platforms, and digital products that set new standards.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5 text-purple-300">
              Services
            </h4>
            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <li key={service}>
                  <span className="text-text-muted text-sm hover:text-white transition-colors duration-200 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5 text-purple-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={MAILTO_URL}
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5 text-purple-300">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={MAILTO_URL}
                  className="flex items-center gap-3 text-text-muted text-sm hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                    <Mail className="w-3.5 h-3.5 text-primary-light" />
                  </div>
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-primary-light" />
                </div>
                India / Global Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-xs sm:text-sm text-center md:text-left">
            © {companyInfo.year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerData.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-text-dim text-xs sm:text-sm hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
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

