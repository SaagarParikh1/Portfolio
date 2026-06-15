import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConceptPrototypes from './components/ConceptPrototypes';

function App() {
  const pathname = window.location.pathname;

  if (pathname.startsWith('/concepts')) {
    return <ConceptPrototypes pathname={pathname} />;
  }

  return (
    <div className="site-shell min-h-screen">
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
    </div>
  );
}

export default App;
