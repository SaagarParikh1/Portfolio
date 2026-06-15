import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  PanelsTopLeft,
} from 'lucide-react';

const conceptLinks = [
  {
    slug: 'operator',
    title: 'Operator Console',
    description: 'Dark, compact, systems-minded. Best if you want to feel like analytics + operations.',
    palette: ['#07110d', '#b8ff5c', '#46d7c4', '#f4f1e8'],
  },
  {
    slug: 'editorial',
    title: 'Editorial Ledger',
    description: 'Clean, publication-style, more mature. Best if you want polished analyst storytelling.',
    palette: ['#f7f0e3', '#151515', '#d84c35', '#1b67ff'],
  },
  {
    slug: 'signal',
    title: 'Signal Lab',
    description: 'Bright, modern, product-forward. Best if you want more color and motion energy.',
    palette: ['#ecf8ff', '#1037a3', '#00a884', '#ffbe3d'],
  },
];

const featuredWork = [
  {
    title: 'NIL Athlete Valuation',
    label: 'Market model',
    image: '/images/projects/nil-athlete-valuation/market-overview.png',
    result: 'Modeled 300+ athletes to identify valuation gaps and sponsorship opportunities.',
  },
  {
    title: 'Put-Selling Dashboard',
    label: 'Decision engine',
    image: '/images/projects/Putdashboard/screen-01.png',
    result: 'Ranked 100+ equities with scoring, signal explanations, and backtesting.',
  },
  {
    title: 'NBA Availability Analytics',
    label: 'Sports analysis',
    image: '/images/projects/analytics/nba-injury-dashboard.png',
    result: 'Explored how injury timing and player availability shape team-level outcomes.',
  },
];

const experience = [
  ['Current', 'Mswipe Technologies', 'Management Trainee - Operations', 'June 2026 - Present'],
  ['Product', 'Flomad Labs R&D', 'Product Development Intern', 'May 2023 - Aug 2023'],
  ['Risk', 'CASHe', 'Risk Analyst Intern', 'June 2022 - Aug 2022'],
];

const skills = ['SQL', 'Python', 'Tableau', 'Excel', 'BigQuery ML', 'React', 'TypeScript', 'Operations'];

const ConceptSwitcher = ({ active }: { active?: string }) => (
  <div className="concept-switcher">
    <a href="/" className="concept-pill">
      Current site
    </a>
    {conceptLinks.map((concept) => (
      <a
        key={concept.slug}
        href={`/concepts/${concept.slug}`}
        className={`concept-pill ${active === concept.slug ? 'is-active' : ''}`}
      >
        {concept.title}
      </a>
    ))}
  </div>
);

const ColorSwatches = ({ colors }: { colors: string[] }) => (
  <div className="concept-swatches">
    {colors.map((color) => (
      <span key={color} style={{ background: color }} />
    ))}
  </div>
);

const ConceptIndex = () => (
  <main className="concept-index">
    <ConceptSwitcher />
    <section className="concept-index-hero">
      <p className="concept-kicker">Portfolio Concept Board</p>
      <h1>Three alternate directions to compare against the current site.</h1>
      <p>
        These are live prototypes, not just color palettes. Each one changes the hero, project
        hierarchy, section rhythm, and overall personality.
      </p>
    </section>

    <section className="concept-card-grid">
      {conceptLinks.map((concept, index) => (
        <a key={concept.slug} href={`/concepts/${concept.slug}`} className="concept-choice-card">
          <div className="concept-choice-top">
            <span>0{index + 1}</span>
            <ColorSwatches colors={concept.palette} />
          </div>
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
          <span className="concept-choice-cta">
            Open prototype
            <ArrowRight />
          </span>
        </a>
      ))}
    </section>
  </main>
);

const OperatorConcept = () => (
  <main className="operator-concept concept-page">
    <ConceptSwitcher active="operator" />
    <section className="operator-hero">
      <div className="operator-hero-copy">
        <p className="concept-kicker">Operator Console</p>
        <h1>Analytics for messy operations and fast decisions.</h1>
        <p>
          A darker, denser direction that positions you as someone who understands workflows,
          dashboards, risk, and execution.
        </p>
        <div className="operator-actions">
          <a href="mailto:Saagar.parikh.11@gmail.com">
            <Mail />
            Contact
          </a>
          <a href="https://www.linkedin.com/in/saagar-parikh1/" target="_blank" rel="noreferrer">
            <Linkedin />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="operator-portrait">
        <img src="/images/portrait/Portrait2.png" alt="Saagar Parikh" />
      </div>
      <div className="operator-status">
        <div>
          <span>Current role</span>
          <strong>Mswipe Technologies / Management Trainee - Operations</strong>
        </div>
        <div>
          <span>Core stack</span>
          <strong>SQL / Python / Tableau / Excel</strong>
        </div>
        <div>
          <span>Positioning</span>
          <strong>Data analyst with operations context</strong>
        </div>
      </div>
    </section>

    <section className="operator-work">
      <div>
        <p className="concept-kicker">Selected systems</p>
        <h2>Built for decision queues, not portfolio decoration.</h2>
      </div>
      <div className="operator-work-grid">
        {featuredWork.map((project) => (
          <article key={project.title}>
            <img src={project.image} alt={project.title} />
            <span>{project.label}</span>
            <h3>{project.title}</h3>
            <p>{project.result}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="operator-strip">
      {experience.map(([type, company, role, date]) => (
        <article key={company}>
          <span>{type}</span>
          <h3>{company}</h3>
          <p>{role}</p>
          <small>{date}</small>
        </article>
      ))}
    </section>
  </main>
);

const EditorialConcept = () => (
  <main className="editorial-concept concept-page">
    <ConceptSwitcher active="editorial" />
    <section className="editorial-hero">
      <img src="/images/portrait/Portrait2.png" alt="Saagar Parikh" />
      <div>
        <p className="concept-kicker">Editorial Ledger</p>
        <h1>Saagar Parikh</h1>
        <p>
          Data analyst translating messy datasets into business decisions, dashboards, and clear
          operational readouts.
        </p>
        <div className="editorial-meta">
          <span>Current: Mswipe Technologies Operations</span>
          <span>Frisco, TX / Open to relocation</span>
          <span>SQL / Python / Tableau / Excel</span>
        </div>
      </div>
    </section>

    <section className="editorial-story">
      <div>
        <span>01</span>
        <h2>Why this direction works</h2>
      </div>
      <p>
        This version feels more refined and recruiter-friendly. It emphasizes writing, hierarchy,
        and case-study framing instead of a heavy technical dashboard vibe.
      </p>
    </section>

    <section className="editorial-work">
      {featuredWork.map((project, index) => (
        <article key={project.title}>
          <div className="editorial-index">0{index + 1}</div>
          <img src={project.image} alt={project.title} />
          <div>
            <span>{project.label}</span>
            <h3>{project.title}</h3>
            <p>{project.result}</p>
          </div>
        </article>
      ))}
    </section>
  </main>
);

const SignalConcept = () => (
  <main className="signal-concept concept-page">
    <ConceptSwitcher active="signal" />
    <section className="signal-hero">
      <div className="signal-hero-copy">
        <p className="concept-kicker">Signal Lab</p>
        <h1>Data analyst building dashboards, models, and operational signal.</h1>
        <p>
          A brighter product-analytics direction with more color, stronger visual rhythm, and a
          friendlier modern feel.
        </p>
        <div className="signal-actions">
          <a href="mailto:Saagar.parikh.11@gmail.com">
            <Mail />
            Email
          </a>
          <a href="https://github.com/saagarparikh1" target="_blank" rel="noreferrer">
            <Github />
            GitHub
          </a>
        </div>
      </div>
      <div className="signal-photo-panel">
        <img src="/images/portrait/Portrait2.png" alt="Saagar Parikh" />
      </div>
    </section>

    <section className="signal-metrics">
      <article>
        <Database />
        <strong>500K+</strong>
        <span>behavioral and biometric data points analyzed</span>
      </article>
      <article>
        <BarChart3 />
        <strong>100+</strong>
        <span>equities screened in put-selling dashboard</span>
      </article>
      <article>
        <PanelsTopLeft />
        <strong>25K+</strong>
        <span>transaction records converted into KPI dashboards</span>
      </article>
      <article>
        <Briefcase />
        <strong>Now</strong>
        <span>Mswipe Technologies operations role, June 2026 - present</span>
      </article>
    </section>

    <section className="signal-work">
      <div>
        <p className="concept-kicker">Project signal</p>
        <h2>Colorful, readable, and product-forward.</h2>
      </div>
      <div className="signal-work-list">
        {featuredWork.map((project) => (
          <article key={project.title}>
            <img src={project.image} alt={project.title} />
            <div>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.result}</p>
            </div>
            <ExternalLink />
          </article>
        ))}
      </div>
    </section>

    <section className="signal-skills">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </section>
  </main>
);

const ConceptPrototypes = ({ pathname }: { pathname: string }) => {
  if (pathname.endsWith('/operator')) {
    return <OperatorConcept />;
  }

  if (pathname.endsWith('/editorial')) {
    return <EditorialConcept />;
  }

  if (pathname.endsWith('/signal')) {
    return <SignalConcept />;
  }

  return <ConceptIndex />;
};

export default ConceptPrototypes;
