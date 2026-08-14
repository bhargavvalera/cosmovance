import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_logo.png';

const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        closeMobile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, link) => {
    if (link.isMailto) {
      // Direct email action, let default anchor behavior open email client
      if (mobileOpen) closeMobile();
      return;
    }

    e.preventDefault();
    if (mobileOpen) closeMobile();

    const targetElement = document.querySelector(link.href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (link.href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, { href: '#home', isMailto: false })}
          className="flex items-center gap-3 group select-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.08] border border-white/15 p-1 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            <img
              src={logo}
              alt={companyInfo.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Cosmovance
            </span>
            <span className="text-[10px] uppercase tracking-widest text-text-dim font-medium -mt-1 hidden sm:block">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Top-Right Action Button ("Contact Us" — High Contrast Pill Button) */}
        <div className="hidden lg:flex items-center">
          <a
            href={MAILTO_URL}
            className="relative inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-white rounded-full hover:bg-slate-100 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] group overflow-hidden"
          >
            <Mail className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 text-slate-950 font-bold tracking-tight">Contact Us</span>
            <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              aria-hidden="true"
            />

            {/* Slide-in Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#070b16] border-b border-white/15 px-6 pt-5 pb-8 shadow-2xl flex flex-col gap-6"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 p-1 flex items-center justify-center">
                    <img src={logo} alt={companyInfo.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-display font-bold text-lg text-white">
                    Cosmovance
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeMobile}
                  className="p-2 rounded-lg bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links List: Home, Services, Process, About, Contact */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-base transition-all border border-white/[0.04]"
                  >
                    <span>{link.label}</span>
                    {link.isMailto ? (
                      <Mail className="w-4 h-4 text-accent" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTA Button */}
              <a
                href={MAILTO_URL}
                onClick={closeMobile}
                className="mt-2 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base shadow-lg shadow-primary/30 hover:opacity-95 active:scale-98 transition-all"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}