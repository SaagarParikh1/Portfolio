import {
  ArrowRight,
  BarChart3,
  Database,
  Github,
  LayoutPanelTop,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

const focusAreas = [
  {
    icon: Database,
    label: 'SQL + Python',
    detail: 'Cleaning, querying, and feature work',
  },
  {
    icon: BarChart3,
    label: 'Dashboards',
    detail: 'Decision-ready Tableau and reporting views',
  },
  {
    icon: LayoutPanelTop,
    label: 'Product context',
    detail: 'Front-end instincts when the story needs polish',
  },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[14%] h-20 w-20 rounded-full border border-[rgba(241,193,122,0.2)]" />
        <div className="absolute bottom-[18%] right-[10%] h-28 w-28 rounded-full border border-white/8" />
      </div>

      <div className="section-shell relative z-10 py-10 sm:py-12">
        <div className="reveal-rise max-w-4xl">
          <span className="eyebrow-pill">Data analyst portfolio</span>
          <p className="mt-7 text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
            Saagar Parikh
          </p>
          <h1 className="mt-4 max-w-[11ch] text-[clamp(2.2rem,4vw,3.55rem)] font-semibold leading-[0.98] text-[var(--text)]">
            Dashboards and analysis built to make the next decision easier.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-[1.02rem] sm:leading-8">
            Data analyst with experience across fintech, health-tech, and enterprise
            environments. I work in SQL, Python, Tableau, and front-end tools when the analysis
            needs a cleaner interface.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <MapPin className="h-4 w-4 text-[var(--accent-strong)]" />
              Frisco, TX
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">U.S. Citizen</span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Open to relocation
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#1c1407] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              View selected work
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
            >
              Get in touch
            </button>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/saagar-parikh1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--muted)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--text)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/saagarparikh1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--muted)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--text)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:Saagar.parikh.11@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--muted)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--text)]"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(10,10,8,0.82)] p-3">
              <div className="overflow-hidden rounded-[1.1rem]">
                <img
                  src="/images/portrait/saagar-parikh.jpeg"
                  alt="Saagar Parikh portrait"
                  className="h-[22rem] w-full object-cover object-center"
                />
              </div>
              <div className="px-1 pb-1 pt-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(246,240,229,0.72)]">
                  Analyst • builder • collaborator
                </p>
                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-[var(--text)]">
                  Comfortable moving from raw data to the way the work is actually presented.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(10,10,8,0.78)] px-5 py-5 sm:px-6 sm:py-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border border-white/10 p-2.5 text-[var(--accent-strong)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-[var(--text)]">{item.label}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
