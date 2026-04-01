import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const impactNotes = [
  {
    value: '500K+',
    label: 'behavioral and biometric records analyzed',
  },
  {
    value: '15+',
    label: 'enterprise product pages migrated and rebranded',
  },
  {
    value: '6%',
    label: 'model accuracy improvement in lending risk analysis',
  },
  {
    value: '10+ hrs/wk',
    label: 'saved by automating KPI reporting workflows',
  },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-30" />
        <div className="absolute left-[10%] top-[16%] h-24 w-24 rounded-full border border-[rgba(241,193,122,0.22)]" />
        <div className="absolute bottom-[12%] right-[10%] h-32 w-32 rounded-full border border-white/10" />
      </div>

      <div className="section-shell relative z-10 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.96fr] lg:items-end">
          <div className="reveal-rise">
            <span className="eyebrow-pill">Portfolio 2026</span>
            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-[color:var(--muted)]">
              Saagar Parikh
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(3.15rem,7vw,5.5rem)] font-semibold leading-[0.98] text-[var(--text)]">
              Turning messy data into decisions, dashboards, and polished product experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              Data analyst with experience across fintech, health-tech, and enterprise
              environments. I use SQL, Python, Tableau, and product thinking to uncover the
              signal, then shape it into work stakeholders can act on.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <MapPin className="h-4 w-4 text-[var(--accent-strong)]" />
                Frisco, TX
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                U.S. Citizen
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Open to relocation
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
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
                Start a conversation
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
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

          <div
            className="surface reveal-rise overflow-hidden rounded-[2rem]"
            style={{ animationDelay: '140ms' }}
          >
            <div className="grid gap-4 p-4 md:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/profile.jpeg"
                  alt="Saagar Parikh portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0907] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[rgba(246,240,229,0.72)]">
                    Analyst • Builder • Collaborator
                  </p>
                  <p className="mt-3 max-w-xs text-xl font-semibold leading-tight text-[var(--text)] sm:text-2xl">
                    Comfortable in SQL notebooks, product conversations, and front-end delivery.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[rgba(0,0,0,0.18)] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  Selected impact
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                  {impactNotes.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-2xl font-semibold text-[var(--text)]">{item.value}</p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
