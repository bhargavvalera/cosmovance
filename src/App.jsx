import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary noise">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
