const experiences = [
  {
    company: 'Masergy Communications',
    role: 'Front-End Web Developer (Contract)',
    period: 'May 2024 - Aug 2024',
    location: 'Plano, TX',
    summary:
      'Translated enterprise HR product requirements into production-ready interfaces and reusable front-end patterns.',
    highlights: [
      'Migrated and rebranded 15+ enterprise platform pages using React and TypeScript, aligning delivery with business and performance goals.',
      'Built reusable UI components that reduced development time for similar features by roughly 20% and improved interface consistency across applications.',
      'Resolved 30+ cross-browser and responsiveness issues, improving usability and reducing QA rework cycles.',
    ],
    technologies: ['React', 'TypeScript', 'HTML/CSS', 'Reusable Components', 'QA Collaboration'],
    logoSrc: '/images/logos/masergy.png',
    logoAlt: 'Masergy Communications logo',
  },
  {
    company: 'Flomad Labs R&D',
    role: 'Product Development Intern',
    period: 'May 2023 - Aug 2023',
    location: 'Remote',
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
    location: 'Mumbai',
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
    <section id="experience" className="section-band section-band-soft py-24">
      <div className="section-shell">
        <p className="section-kicker">Experience</p>

        <div className="space-y-6">
          {experiences.map((experience) => {
            const [periodStart, periodEnd] = experience.period.split(' - ');

            return (
              <article
                key={experience.company}
                className="surface rounded-[1.75rem] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.9rem] border border-white/10 bg-[rgba(12,12,10,0.68)] p-1.5 sm:h-14 sm:w-14">
                      {experience.logoSrc ? (
                        <img
                          src={experience.logoSrc}
                          alt={experience.logoAlt}
                          className="h-full w-full rounded-[0.7rem] object-contain"
                        />
                      ) : (
                        <span className="text-sm font-semibold tracking-[0.24em] text-[var(--accent-strong)]">
                          {experience.logoText}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                        {experience.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
                        {experience.role}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
                        {experience.summary}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-[color:var(--muted)] lg:text-right">
                    <p>
                      <span className="whitespace-nowrap">{periodStart} -</span>{' '}
                      <span className="whitespace-nowrap">{periodEnd}</span>
                    </p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      <span className="text-sm leading-6 text-[color:var(--muted)]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
