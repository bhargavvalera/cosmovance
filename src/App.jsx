import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import Technologies from './components/sections/Technologies';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import ContactCTA from './components/sections/ContactCTA';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function PageFrame({ children }) {
  return (
    <motion.main
      key={useLocation().pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="min-h-[70vh] pt-24 sm:pt-28"
    >{children}</motion.main>
  );
}

function HomePage() {
  return <><Hero /><TrustedBy /><WhyChooseUs /><Portfolio /><ContactCTA /></>;
}
function ServicesPage() {
  return <><Services /><div className="py-8"><WhyChooseUs /></div><ContactCTA /></>;
}
function ProcessPage() {
  return <><Process /><Technologies /><ContactCTA /></>;
}
function AboutPage() {
  return <><About /><WhyChooseUs /><Testimonials /><ContactCTA /></>;
}
function PortfolioPage() {
  return <><Portfolio /><TrustedBy /><Technologies /><Testimonials /><ContactCTA /></>;
}
function FAQPage() {
  return <><FAQ /><ContactCTA /></>;
}
function ContactPage() {
  return <><ContactCTA /><FAQ /></>;
}

function AppRoutes() {
  const location = useLocation();
  return <>
    <ScrollToTop />
    <div className="relative min-h-screen bg-[#F5F8FF] text-[#1E293B] overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageFrame><HomePage /></PageFrame>} />
          <Route path="/services" element={<PageFrame><ServicesPage /></PageFrame>} />
          <Route path="/process" element={<PageFrame><ProcessPage /></PageFrame>} />
          <Route path="/about" element={<PageFrame><AboutPage /></PageFrame>} />
          <Route path="/portfolio" element={<PageFrame><PortfolioPage /></PageFrame>} />
          <Route path="/faq" element={<PageFrame><FAQPage /></PageFrame>} />
          <Route path="/contact" element={<PageFrame><ContactPage /></PageFrame>} />
          <Route path="*" element={<PageFrame><HomePage /></PageFrame>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  </>;
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
