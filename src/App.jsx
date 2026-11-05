
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, MotionConfig } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/common/FloatingContact';

import { lazy, Suspense } from 'react';

// Keep route modules out of the initial bundle until the visitor opens that route.
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import { serviceDetails } from './data/serviceDetails';

const SITE_URL = 'https://cosmovance.com';
const BRAND = 'Cosmovance Technologies';
const DEFAULT_IMAGE = `${SITE_URL}/cosmovance_technologies_icon.webp`;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/cosmo_logo.webp`,
  description: 'Website development, custom software, e-commerce, mobile application and AI development services.',
  email: 'founder@cosmovance.com',
  areaServed: { '@type': 'Country', name: 'India' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND,
  url: `${SITE_URL}/`,
  publisher: { '@type': 'Organization', name: BRAND },
};

const pageSEO = {
  '/': {
    title: 'Software Development Company | Cosmovance Technologies',
    description:
      'Cosmovance Technologies is a software development company delivering custom software, web applications, mobile apps, eCommerce solutions and AI-powered digital products for businesses.',
  },

  '/services': {
    title: 'Software Development Services | Cosmovance Technologies',
    description:
      'Explore software development services by Cosmovance Technologies, including custom software, web applications, mobile app development, eCommerce solutions and AI-powered solutions.',
  },

  '/process': {
    title: 'Our Website & Software Development Process | Cosmovance',
    description:
      'Discover how Cosmovance plans, designs, develops, tests and deploys scalable websites, software applications and digital products.',
  },

  '/about': {
    title: 'About Cosmovance Technologies | Website & Software Developers',
    description:
      'Learn about Cosmovance Technologies, our development approach, technical expertise and commitment to building intelligent digital experiences.',
  },

  '/portfolio': {
    title: 'Website & Software Development Portfolio | Cosmovance',
    description:
      'Explore web applications, mobile app projects, SaaS platforms and digital product solutions from Cosmovance Technologies.',
  },

  '/contact': {
    title: 'Hire Software Developers | Contact Cosmovance Technologies',
    description:
      'Looking to build custom software, web applications, mobile apps or AI-powered solutions? Contact Cosmovance Technologies to discuss your project and development requirements.',
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

function setJsonLd(id, data) {
  let script = document.head.querySelector(`script[data-seo-schema="${id}"]`);
  if (!data) {
    script?.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function updateSEO(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  let currentPage = pageSEO[normalizedPath];
  let service = null;

  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.split('/').filter(Boolean).pop();
    service = serviceDetails.find((item) => item.slug === slug) || null;
    if (service) {
      currentPage = {
        title: service.seoTitle || `${service.title} | ${BRAND}`,
        description: service.seoDescription || service.description,
      };
    }
  }

  const isNotFound = !currentPage && !service && normalizedPath !== '/';
  currentPage ||= {
    title: 'Website Development Company in India | Cosmovance Technologies',
    description: 'Professional website development, business websites, e-commerce, custom software, mobile apps and AI solutions from Cosmovance Technologies.',
  };

  const canonicalURL = `${SITE_URL}${normalizedPath}`;
  document.title = currentPage.title;
  updateMeta('description', currentPage.description);
  updateMeta('robots', isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  updateMeta('author', BRAND);
  updateMeta('og:type', 'website', 'property');
  updateMeta('og:title', currentPage.title, 'property');
  updateMeta('og:description', currentPage.description, 'property');
  updateMeta('og:url', canonicalURL, 'property');
  updateMeta('og:site_name', BRAND, 'property');
  updateMeta('og:image', DEFAULT_IMAGE, 'property');
  updateMeta('og:image:alt', `${BRAND} logo`, 'property');
  updateMeta('twitter:card', 'summary_large_image');
  updateMeta('twitter:title', currentPage.title);
  updateMeta('twitter:description', currentPage.description);
  updateMeta('twitter:image', DEFAULT_IMAGE);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalURL;

  setJsonLd('organization', organizationSchema);
  setJsonLd('website', websiteSchema);

  const pageName = service?.title || (normalizedPath === '/' ? 'Home' : normalizedPath.split('/').filter(Boolean).pop()?.replace(/-/g, ' '));
  const pageSchema = isNotFound ? null : {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: currentPage.title,
    description: currentPage.description,
    url: canonicalURL,
    isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE_URL}/` },
  };
  setJsonLd('webpage', pageSchema);

  const breadcrumbItems = [{ name: 'Home', url: `${SITE_URL}/` }];
  if (normalizedPath.startsWith('/services/')) {
    breadcrumbItems.push({ name: 'Services', url: `${SITE_URL}/services` });
  }
  if (normalizedPath !== '/') breadcrumbItems.push({ name: pageName, url: canonicalURL });
  const breadcrumbSchema = isNotFound ? null : {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: item.url,
    })),
  };
  setJsonLd('breadcrumb', breadcrumbSchema);

  const serviceSchema = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.primaryKeyword || service.title,
    description: service.seoDescription || service.description,
    url: canonicalURL,
    provider: { '@type': 'Organization', name: BRAND, url: `${SITE_URL}/` },
    areaServed: { '@type': 'Country', name: 'India' },
  } : null;
  setJsonLd('service', serviceSchema);
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Suspense fallback={<div className="min-h-[60vh]" aria-label="Loading page" />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />

      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </MotionConfig>
  );
}
