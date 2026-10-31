import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Portfolio from '../components/sections/Portfolio';
import Technologies from '../components/sections/Technologies';
import Testimonials from '../components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <Portfolio />
      <Technologies />
      <Testimonials />
    </>
  );
}
