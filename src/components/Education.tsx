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
  'Vice President of External Affairs & 2x Social Chair, Beta Chi Theta',
  'Purdue IT Professionals',
  'Purdue EVC',
  'Purdue Association of Learning Design & Technology',
];

const certifications = [
  'Google Data Analytics Professional Certificate, 2025',
  'Foundations of User Experience Design Certificate, Google, 2023',
  'Cornerstone Integrated Liberal Arts Certificate, Purdue University, 2025',
];

const Education = () => {
  return (
    <section id="education" className="section-block bg-[var(--paper)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Purdue foundation, analytics focus.</h2>
          </div>

          <div className="grid gap-5">
            <article className="panel p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[var(--line)] bg-white p-2" style={{ borderRadius: 8 }}>
                  <img src="/images/logos/purdue.jpg" alt="Purdue University logo" className="h-full w-full object-contain" />
                </div>

                <div>
                  <p className="chip">Purdue University</p>
                  <h3 className="mt-4 text-4xl leading-tight">Web Programming and Design (B.S.)</h3>
                  <p className="mt-3 font-semibold text-[var(--muted)]">
                    Aug 2021 - May 2025, West Lafayette, IN
                  </p>
                  <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">
                    Coursework connected development, UX, information architecture, systems
                    thinking, and data visualization.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 border-t border-[var(--line-soft)] pt-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-xl">Relevant coursework</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span key={course} className="chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl">Campus involvement</h4>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                    {involvement.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="grid gap-3 border border-[var(--line)] bg-[var(--blue)] p-6 text-white sm:grid-cols-[0.35fr_0.65fr]" style={{ borderRadius: 8 }}>
              <h3 className="text-3xl leading-tight">Certifications</h3>
              <div className="grid gap-3">
                {certifications.map((certification) => {
                  const isCornerstone = certification.includes('Cornerstone');

                  return (
                    <div
                      key={certification}
                      className={`border p-4 text-sm font-semibold ${
                        isCornerstone
                          ? 'border-[var(--line)] bg-[var(--yellow)] text-[var(--ink)]'
                          : 'border-white/40 bg-white/10 text-white'
                      }`}
                      style={{ borderRadius: 8 }}
                    >
                      {certification}
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
