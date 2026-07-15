import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { BeforeAfter } from './components/BeforeAfter';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingBubbles } from './components/FloatingBubbles';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary-blue selection:text-white">
      <FloatingBubbles />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Advantages />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
