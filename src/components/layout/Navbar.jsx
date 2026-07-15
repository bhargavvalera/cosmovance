import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_logo.png';

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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-10 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
  className="
    container-wide
    mx-auto
    h-20
    px-8
    xl:px-12
    grid
    grid-cols-[220px_1fr_220px]
    items-center
"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group justify self-start select-none"
            aria-label={`${companyInfo.name} - Home`}
          >
            <motion.img
              src={logo}
              alt={`${companyInfo.name} logo`}
              className="w-14 h-14 md:w-16 md:h-16 rounded-lg"
              whileHover={{ rotate: [0, 5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-primary-light transition-colors duration-300">
              Cosmovance Technologies
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul   className="
    hidden
    lg:flex
    justify-center
    items-center
    gap-8
    justify-self-center
" role="menubar">
            {navLinks.map((link) => (
              <li key={link.id} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-xl
                         bg-gradient-to-r from-primary to-accent
                         hover:shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:scale-[1.03]
                         active:scale-[0.98] transition-all duration-300 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center min-h-screen gap-2 px-6"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="text-3xl font-display font-bold text-white/70 hover:text-white transition-colors duration-300 py-3"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white rounded-xl
                             bg-gradient-to-r from-primary to-accent
                             hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
