const experiences = [
  {
    company: 'Mswipe Technologies',
    role: 'Management Trainee - Operations',
    period: 'June 2026 - Present',
    summary:
      'Current operations trainee role focused on learning fintech operations, merchant onboarding, device deployment, reporting workflows, and process visibility.',
    highlights: [
      'Learning how merchant acquisition, onboarding, device inventory flow, deployment, activation, service requests, and support processes connect inside the business.',
      'Expected to support daily operational reporting around shipments, activations, pending requests, tickets, and other process health metrics.',
      'Applying an analytics background to understand bottlenecks, improve visibility, and identify where dashboards or cleaner tracking can support better operations decisions.',
    ],
    technologies: ['Operations', 'Merchant Onboarding', 'Device Deployment', 'Reporting', 'Process Analysis'],
    logoSrc: '/images/logos/mswipe.png',
    logoAlt: 'Mswipe logo',
    current: true,
  },
  {
    company: 'Flomad Labs R&D',
    role: 'Product Analyst Intern',
    period: 'May 2023 - Aug 2023',
    summary:
      'Used SQL, Python, and Tableau to support KPI development, experimentation, and decision-making for product and engineering stakeholders.',
    highlights: [
      'Analyzed 500K+ behavioral and biometric data points to validate digital performance metrics and surface actionable insight.',
      'Delivered dashboards tracking health metrics, anomaly detection, and experimentation workflows in language stakeholders could actually use.',
      'Collaborated with ML researchers and engineers to define success metrics, validate outputs, and support product iteration.',
    ],
    technologies: ['SQL', 'Python', 'Tableau', 'KPI Design', 'Experiment Analysis'],
    logoSrc: '/images/logos/flomad.jpg',
    logoAlt: 'Flomad Labs logo',
  },
  {
    company: 'CASHe',
    role: 'Risk Analyst Intern',
    period: 'June 2022 - Aug 2022',
    summary:
      'Focused on loan risk, fraud detection, and reporting automation across large financial datasets.',
    highlights: [
      'Improved loan risk and eligibility model accuracy by 6% by analyzing 50K+ financial records and identifying stronger behavioral features.',
      'Identified fraudulent transaction patterns through data mining and risk segmentation, reducing projected fraud exposure and surfacing compliance gaps.',
      'Automated KPI reporting workflows using Python and Excel, saving 10+ hours per week and improving turnaround time.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Risk Modeling', 'Fraud Analysis'],
    logoSrc: '/images/logos/cashe.png',
    logoAlt: 'CASHe logo',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-block experience-section">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Operations, product, and risk work.</h2>
          </div>

          <div className="grid gap-5">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className={`timeline-card ${experience.current ? 'timeline-card-current' : ''}`}
              >
                <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
                  <div
                    className={`flex h-14 w-14 items-center justify-center border ${
                      experience.current ? 'border-white bg-[var(--yellow)] text-[var(--ink)]' : 'border-[var(--line)] bg-white'
                    }`}
                    style={{ borderRadius: 8 }}
                  >
                    {experience.logoSrc ? (
                      <img
                        src={experience.logoSrc}
                        alt={experience.logoAlt}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-lg font-black">M</span>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={experience.current ? 'chip-dark' : 'chip'}>
                        {index === 0 ? 'Current' : `0${index + 1}`}
                      </span>
                      <p className="font-bold">{experience.period}</p>
                    </div>
                    <h3 className="mt-4 text-3xl leading-tight">{experience.company}</h3>
                    <p className={experience.current ? 'mt-1 text-lg font-semibold text-white/80' : 'mt-1 text-lg font-semibold text-[var(--muted)]'}>
                      {experience.role}
                    </p>
                    <p className={experience.current ? 'mt-4 max-w-3xl leading-7 text-white/78' : 'mt-4 max-w-3xl leading-7 text-[var(--muted)]'}>
                      {experience.summary}
                    </p>

                    <ul className="mt-5 grid gap-3">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6">
                          <span className={`mt-2 h-2 w-2 shrink-0 ${experience.current ? 'bg-[var(--yellow)]' : 'bg-[var(--red)]'}`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span key={technology} className={experience.current ? 'chip-dark' : 'chip'}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
