import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-image-blur" aria-hidden="true" />
      <img
        src="/images/portrait/saagar-parikh-suit-2026.jpeg"
        alt="Saagar Parikh portrait"
        className="hero-image"
      />

      <div className="hero-content">
        <div className="section-shell">
          <div className="reveal-rise max-w-4xl">
            <p className="text-base font-black uppercase text-[var(--yellow)]">
              Operations &amp; Logistics Analytics Portfolio
            </p>
            <h1 className="hero-name mt-5">Saagar Parikh</h1>
            <p className="hero-line">
              I turn logistics data, inventory movement, and operational workflows into clearer
              reporting, stronger KPIs, and better decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View analytics work
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-dark">
                Contact
                <Mail className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/saagar-parikh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip-dark"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/saagarparikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="chip-dark"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <span className="chip-dark">
                <MapPin className="mr-2 h-4 w-4" />
                Frisco, TX · Open to relocation
              </span>
            </div>
          </div>

          <div className="hero-meta-grid">
            <div className="hero-meta-item">
              <p className="text-sm font-bold text-[var(--yellow)]">Current role</p>
              <p className="mt-1 text-base font-semibold">
                Operations &amp; Logistics Analyst at Mswipe Technologies
              </p>
            </div>
            <div className="hero-meta-item">
              <p className="text-sm font-bold text-[var(--yellow)]">Focus</p>
              <p className="mt-1 text-base font-semibold">Supply chain, inventory, dispatch, KPI reporting</p>
            </div>
            <div className="hero-meta-item">
              <p className="text-sm font-bold text-[var(--yellow)]">Toolkit</p>
              <p className="mt-1 text-base font-semibold">Excel, SQL, Power BI, Tableau, ERP systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
