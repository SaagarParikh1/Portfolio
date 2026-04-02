const skillGroups = [
  {
    title: 'Analytics & Modeling',
    description:
      'My core toolkit for cleaning data, defining KPIs, and building decision-ready analysis.',
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
      'Useful when analysis has to live inside a dashboard, workflow, or product experience.',
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
      'The supporting tools I use to keep work moving clearly across product, analytics, and engineering.',
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
    <section id="skills" className="section-band section-band-amber py-24">
      <div className="section-shell">
        <p className="section-kicker">Skills</p>

        <div className="surface mt-8 overflow-hidden rounded-[2rem]">
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

      </div>
    </section>
  );
};

export default Skills;
