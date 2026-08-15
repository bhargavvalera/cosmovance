import Navbar from './components/layout/Navbar';
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
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white selection:bg-primary/30 selection:text-white noise overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Technologies />
        <About />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

