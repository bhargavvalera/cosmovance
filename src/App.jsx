
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

import { serviceDetails } from './data/serviceDetails';

const SITE_URL = 'https://cosmovance.com';

const pageSEO = {
  '/': {
    title: 'Website Development Company in Surat, India | Cosmovance Technologies',
    description:
      'Need a business website? Cosmovance Technologies provides website development, custom software, e-commerce, mobile app and AI development services for businesses and startups in India.'
  },

  '/services': {
    title: 'Website, Software, E-commerce & App Development Services | Cosmovance',
    description:
      'Explore custom website development services, business website design, e-commerce development, mobile app development, custom software, AI chatbot development and SaaS solutions.'
  },

  '/process': {
    title: 'Our Development Process | Cosmovance Technologies',
    description:
      'Discover how Cosmovance plans, designs, develops, tests and deploys scalable websites, software applications and digital products.',
  },

  '/about': {
    title: 'About Cosmovance Technologies | Digital Development Company',
    description:
      'Learn about Cosmovance Technologies, our development approach, technical expertise and commitment to building intelligent digital experiences.',
  },

  '/portfolio': {
    title: 'Our Projects & Portfolio | Cosmovance Technologies',
    description:
      'Explore web applications, mobile app projects, SaaS platforms and digital product solutions from Cosmovance Technologies.',
  },

  '/contact': {
    title: 'Hire Web Developers & Software Development Team | Cosmovance',
    description:
      'Looking to hire web developers or a software development agency? Contact Cosmovance Technologies to discuss website development cost, mobile apps, e-commerce and custom software.'
  },
};

function updateMeta(name, content, attribute = 'name') {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateSEO(pathname) {
  let currentPage = pageSEO[pathname];

  // Dynamic SEO for individual service pages
  if (pathname.startsWith('/services/')) {
    const slug = pathname.split('/').filter(Boolean).pop();

    const service = serviceDetails.find(
      (item) => item.slug === slug
    );

    if (service) {
      currentPage = {
        title: service.seoTitle || `${service.title} Services | Cosmovance Technologies`,
        description: service.seoDescription || service.description,
      };
    }
  }

  // Default SEO
  currentPage ||= {
    title: 'Digital Development Solutions | Cosmovance Technologies',
    description:
      'Explore professional website development, custom software, mobile applications and AI-powered digital solutions by Cosmovance Technologies.',
  };

  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const canonicalURL = `${SITE_URL}${normalizedPath}`;

  // Page title
  document.title = currentPage.title;

  // Meta description and robots
  updateMeta('description', currentPage.description);
  updateMeta('robots', 'index, follow');

  // Open Graph SEO
  updateMeta('og:type', 'website', 'property');
  updateMeta('og:title', currentPage.title, 'property');
  updateMeta('og:description', currentPage.description, 'property');
  updateMeta('og:url', canonicalURL, 'property');
  updateMeta('og:site_name', 'Cosmovance Technologies', 'property');
  updateMeta(
    'og:image',
    `${SITE_URL}/cosmovance_technologies_icon.png`,
    'property'
  );

  // Twitter SEO
  updateMeta('twitter:card', 'summary_large_image');
  updateMeta('twitter:title', currentPage.title);
  updateMeta('twitter:description', currentPage.description);
  updateMeta(
    'twitter:image',
    `${SITE_URL}/cosmovance_technologies_icon.png`
  );

  // Canonical URL
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalURL;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="site-scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    updateSEO(location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#F5F8FF] text-[#1E293B] selection:bg-primary/30 selection:text-[#1E293B] noise overflow-x-hidden">
      <ScrollProgress />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />

      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
