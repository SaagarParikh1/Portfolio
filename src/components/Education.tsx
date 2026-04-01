const coursework = [
  'Advanced Web Programming',
  'Server-Side Development',
  'Data Integration',
  'Information Architecture',
  'UX Design',
  'Systems Analysis',
  'Data Analysis & Visualization',
];

const involvement = [
  'Vice President of External Affairs & Social Chair — Beta Chi Theta',
  'Purdue IT Professionals (PITP)',
  'Purdue EVC',
  'Purdue Association of Learning Design & Technology (PALDT)',
];

const certifications = [
  'Google Data Analytics Professional Certificate (2025)',
  'Foundations of User Experience (UX) Design Certificate — Google (2023)',
];

const Education = () => {
  return (
    <section id="education" className="section-band section-band-soft py-24">
      <div className="section-shell">
        <div>
          <p className="section-kicker">Education</p>
          <h2 className="section-title">A web and UX foundation that makes my analytics work more useful.</h2>
        </div>

        <div className="surface mt-12 overflow-hidden rounded-[2rem]">
          <div className="grid divide-y divide-white/10 lg:grid-cols-[0.44fr_0.56fr] lg:divide-x lg:divide-y-0">
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Purdue University
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--text)]">
                Web Programming and Design (B.S.)
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Aug 2021 - May 2025 • West Lafayette, IN
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Why it matters
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  The program combined technical implementation with UX, information architecture,
                  and systems thinking. That mix shows up directly in how I frame dashboards,
                  product workflows, and stakeholder-facing analysis.
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Involvement
                </p>
                <ul className="mt-4 space-y-3">
                  {involvement.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      <span className="text-sm leading-6 text-[color:var(--muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Relevant coursework
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Certifications
                </p>
                <ul className="mt-4 space-y-4">
                  {certifications.map((certification) => (
                    <li
                      key={certification}
                      className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-[color:var(--muted)]"
                    >
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
