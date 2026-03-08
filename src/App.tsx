import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Support } from './components/Support';
import { Services } from './components/Services';
import { Network } from './components/Network';
import { WhyGreece } from './components/WhyGreece';
import { TargetAudience } from './components/TargetAudience';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Support />
        <Services />
        <Network />
        <WhyGreece />
        <TargetAudience />
        <FAQ />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
