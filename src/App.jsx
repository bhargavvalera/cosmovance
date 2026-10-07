import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Process from './components/sections/Process';
import Technologies from './components/sections/Technologies';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import ContactCTA from './components/sections/ContactCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary noise">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Portfolio />
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
