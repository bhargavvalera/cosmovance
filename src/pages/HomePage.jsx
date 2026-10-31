import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Technologies from '../components/sections/Technologies';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
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
