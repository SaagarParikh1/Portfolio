const skillGroups = [
  {
    title: 'Analysis',
    description: 'Data cleaning, modeling, and business questions.',
    skills: ['SQL', 'BigQuery', 'Python', 'R', 'Excel', 'Regression', 'A/B Testing', 'Feature Engineering'],
  },
  {
    title: 'Visualization',
    description: 'Dashboards and reporting that make decisions easier.',
    skills: ['Tableau', 'Dashboard Design', 'KPI Design', 'Storytelling', 'Executive Reporting', 'Data QA'],
  },
  {
    title: 'Product + Build',
    description: 'Useful when insight needs to become an interface or workflow.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Accessibility', 'Supabase'],
  },
  {
    title: 'Operating Style',
    description: 'How I keep analytical work practical with teams.',
    skills: ['Stakeholder Communication', 'Experiment Readouts', 'Agile/Scrum', 'Documentation', 'Google Suite', 'PowerPoint'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-block-dark">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker text-[var(--yellow)]">Skills</p>
            <h2 className="section-title-light">The stack is practical on purpose.</h2>
          </div>

          <div className="skill-table text-[var(--ink)]">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-row">
                <div>
                  <h3 className="text-2xl leading-tight">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{group.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
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
