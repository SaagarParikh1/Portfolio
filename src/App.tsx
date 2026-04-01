import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page-shell min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(208,160,93,0.22),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(109,137,135,0.14),_transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.06),_transparent_70%)] blur-3xl" />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-[rgba(12,12,10,0.82)] p-3 text-[var(--text)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
