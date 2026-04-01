const skillGroups = [
  {
    title: 'Analytics & Modeling',
    description:
      'The toolkit I rely on most for cleaning data, building models, defining KPIs, and translating findings into decision-ready analysis.',
    skills: [
      'SQL (BigQuery, MySQL)',
      'Python',
      'R',
      'Tableau',
      'Excel',
      'Statistical Analysis',
      'Regression Analysis',
      'Feature Engineering',
      'A/B Testing',
      'Data Cleaning',
    ],
  },
  {
    title: 'Product & Front-End',
    description:
      'Useful when the analysis has to live inside a workflow, a dashboard, or a product experience people actually interact with.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'REST APIs',
      'Tailwind CSS',
      'Accessibility',
      'Dashboard Design',
      'Usability Testing',
      'UI/UX Design',
    ],
  },
  {
    title: 'Workflow & Collaboration',
    description:
      'The supporting tools and working habits I use to keep projects moving clearly across product, analytics, and engineering teams.',
    skills: [
      'Git/GitHub',
      'BigQuery ML',
      'Jupyter Notebook',
      'Supabase',
      'Google Suite',
      'PowerPoint',
      'Agile/Scrum',
      'Generative AI',
      'Stakeholder Communication',
      'Experiment Readouts',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Toolbox</p>
            <h2 className="section-title">A practical stack shaped by analytics work, product collaboration, and front-end execution.</h2>
          </div>
          <p className="section-copy max-w-xl">
            I care less about listing every tool I have touched and more about showing the stack I
            can use confidently to move a project from question to decision.
          </p>
        </div>

        <div className="surface mt-12 overflow-hidden rounded-[2rem]">
          <div className="grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {skillGroups.map((group) => (
              <div key={group.title} className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  {group.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="metric-label">Go-to workflow</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              SQL or Python to clean the signal, Tableau or product UI to make it usable, then a
              clear narrative for the stakeholder.
            </p>
          </div>
          <div>
            <p className="metric-label">Analytical focus</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              KPI design, regression analysis, feature engineering, dashboarding, and exploratory
              decision support.
            </p>
          </div>
          <div>
            <p className="metric-label">Product angle</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              I think about how the output will be read, used, and acted on rather than stopping at
              the analysis itself.
            </p>
          </div>
          <div>
            <p className="metric-label">Collaboration style</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Comfortable working with product managers, engineers, researchers, and stakeholders
              who need clarity more than technical jargon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
