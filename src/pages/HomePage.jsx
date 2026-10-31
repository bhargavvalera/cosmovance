import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Technologies from '../components/sections/Technologies';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

/**
 * Homepage brings the key information from every main site page together
 * as a complete, scrollable company overview. Dedicated routes remain intact.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
