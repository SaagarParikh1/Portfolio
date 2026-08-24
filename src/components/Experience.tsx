const experiences = [
  {
    company: 'Mswipe Technologies',
    role: 'Operations & Logistics Analyst (Management Trainee)',
    period: 'Jun 2026 - Present',
    summary:
      'Support end-to-end domestic and international logistics operations spanning ERP transaction processing, inwarding, inventory movement, allocation, dispatch, courier coordination, and cost analysis.',
    highlights: [
      'Execute inventory and logistics workflows for a nationwide network of 11 warehouses and 200+ field service engineers, including courier documentation, e-way bills, serviceability checks, pending-case tracking, and shipment exception handling.',
      'Prepare recurring logistics-pending, service-call, and operational reports by extracting ERP data, maintaining Excel trackers, and monitoring KPI, aging, and exception trends across 5+ workflow areas.',
      'Analyze pending cases, aging trends, serviceability issues, and shipment exceptions to identify bottlenecks and support resolution across warehouse, logistics, and field-service workflows.',
    ],
    technologies: ['ERP Systems', 'Excel', 'Inventory', 'Dispatch', 'Logistics Reporting', 'Cost Analysis'],
    logoSrc: '/images/logos/mswipe.png',
    logoAlt: 'Mswipe logo',
    current: true,
  },
  {
    company: 'Flomad Labs R&D',
    role: 'Product Development Intern',
    period: 'May 2023 - Aug 2023',
    summary:
      'Analyzed behavioral and biometric data to support digital health product analysis and stakeholder reporting.',
    highlights: [
      'Analyzed behavioral and biometric datasets using SQL and Python to identify performance trends and support digital health product analysis.',
      'Built Tableau dashboards tracking 10+ health metrics, anomaly patterns, and research outputs for product stakeholders.',
      'Collaborated with ML researchers and engineers across 3 product discovery and experiment review cycles to validate outputs and translate findings into product recommendations.',
    ],
    technologies: ['SQL', 'Python', 'Tableau', 'KPI Design', 'Experiment Analysis'],
    logoSrc: '/images/logos/flomad.jpg',
    logoAlt: 'Flomad Labs logo',
  },
  {
    company: 'CASHe',
    role: 'Risk Analyst Intern',
    period: 'Jun 2022 - Aug 2022',
    summary:
      'Used financial and customer behavior data to support loan risk review, segmentation, and fraud investigation.',
    highlights: [
      'Analyzed financial and user behavior records using SQL, Python, and Excel to support loan eligibility review, repayment risk analysis, and customer segmentation.',
      'Performed exploratory analysis on transaction data to flag suspicious activity patterns and support fraud investigations.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Risk Analysis', 'Customer Segmentation', 'Fraud Investigation'],
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
            <h2 className="section-title">From operational execution to decision support.</h2>
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
