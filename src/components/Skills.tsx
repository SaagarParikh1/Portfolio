const skillGroups = [
  {
    title: 'Analytics & Modeling',
    description:
      'My core toolkit for cleaning data, defining KPIs, and building decision-ready analysis.',
    tone: 'tone-amber tint-border-amber',
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
    tone: 'tone-teal tint-border-teal',
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
    tone: 'tone-blue tint-border-blue',
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

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`surface interactive-surface rounded-[2rem] p-6 sm:p-8 ${group.tone}`}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--text)]">
                {group.title}
              </p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[rgba(8,8,6,0.18)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
