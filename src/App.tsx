import { useEffect, useRef, useState } from 'react';
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
  const cursorCoreRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const cursorCore = cursorCoreRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorCore || !cursorRing) {
      return;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (!mediaQuery.matches) {
      return;
    }

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label';

    const updateCursorPosition = (x: number, y: number) => {
      cursorCore.style.setProperty('--cursor-x', `${x}px`);
      cursorCore.style.setProperty('--cursor-y', `${y}px`);
      cursorRing.style.setProperty('--cursor-x', `${x}px`);
      cursorRing.style.setProperty('--cursor-y', `${y}px`);
    };

    const setCursorState = (className: string, active: boolean) => {
      cursorCore.classList.toggle(className, active);
      cursorRing.classList.toggle(className, active);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateCursorPosition(event.clientX, event.clientY);
      setCursorState('is-visible', true);
    };

    const handleMouseOver = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      setCursorState('is-hovering', Boolean(event.target.closest(interactiveSelector)));
    };

    const handleMouseDown = () => {
      setCursorState('is-pressed', true);
    };

    const handleMouseUp = () => {
      setCursorState('is-pressed', false);
    };

    const handleWindowExit = (event: MouseEvent) => {
      if (event.relatedTarget !== null) {
        return;
      }

      setCursorState('is-visible', false);
      setCursorState('is-hovering', false);
      setCursorState('is-pressed', false);
    };

    document.body.classList.add('cursor-enhanced');
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseout', handleWindowExit);

    return () => {
      document.body.classList.remove('cursor-enhanced');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseout', handleWindowExit);
    };
  }, []);

  return (
    <div className="page-shell min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(208,160,93,0.24),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[12rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(121,207,197,0.18),_transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[12%] left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(224,138,115,0.14),_transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(126,168,255,0.14),_transparent_70%)] blur-3xl" />
      </div>
      <div ref={cursorRingRef} aria-hidden="true" className="cursor-ring" />
      <div ref={cursorCoreRef} aria-hidden="true" className="cursor-core" />

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
