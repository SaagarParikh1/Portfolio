const experiences = [
  {
    company: 'Masergy Communications',
    role: 'Front-End Web Developer (Contract)',
    period: 'May 2024 - Aug 2024',
    location: 'Remote',
    summary:
      'Translated enterprise HR product requirements into production-ready interfaces and reusable front-end patterns.',
    highlights: [
      'Migrated and rebranded 15+ enterprise platform pages using React and TypeScript, aligning delivery with business and performance goals.',
      'Built reusable UI components that reduced development time for similar features by roughly 20% and improved interface consistency across applications.',
      'Resolved 30+ cross-browser and responsiveness issues, improving usability and reducing QA rework cycles.',
    ],
    technologies: ['React', 'TypeScript', 'HTML/CSS', 'Reusable Components', 'QA Collaboration'],
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
  },
  {
    company: 'CASHe',
    role: 'Risk Analyst Intern',
    period: 'June 2022 - Aug 2022',
    location: 'Remote',
    summary:
      'Focused on loan risk, fraud detection, and reporting automation across large financial datasets.',
    highlights: [
      'Improved loan risk and eligibility model accuracy by 6% by analyzing 50K+ financial records and identifying stronger behavioral features.',
      'Identified fraudulent transaction patterns through data mining and risk segmentation, reducing projected fraud exposure and surfacing compliance gaps.',
      'Automated KPI reporting workflows using Python and Excel, saving 10+ hours per week and improving turnaround time.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Risk Modeling', 'Fraud Analysis'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-band section-band-soft py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Professional work that sharpened both the analysis and the delivery.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
              The through-line across these roles is straightforward: clean up the signal, frame it
              clearly, and make the output useful for the people making decisions.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="surface rounded-[1.75rem] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
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

                  <div className="space-y-2 text-sm text-[color:var(--muted)] lg:text-right">
                    <p>{experience.period}</p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
