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
];

const purdueCredential = 'Cornerstone Integrated Liberal Arts Certificate, 2025';

const Education = () => {
  return (
    <section id="education" className="section-block education-section">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Purdue foundation, analytics focus.</h2>
          </div>

          <div className="grid gap-5">
            <article className="education-degree-card p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[var(--line)] bg-[#f7edda] p-2" style={{ borderRadius: 8 }}>
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
                  <div className="mt-5 inline-flex max-w-fit items-center border border-[var(--line)] bg-[#fff8e8] px-4 py-2 text-sm font-bold text-[var(--ink)]" style={{ borderRadius: 999 }}>
                    {purdueCredential}
                  </div>
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

            <article className="credential-board">
              <div>
                <p className="text-sm font-black uppercase text-[var(--copper)]">Credentials</p>
                <h3 className="mt-3 text-3xl leading-tight text-[var(--ink)]">Certifications</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  Focused training in analytics and user-centered product thinking.
                </p>
              </div>

              <div className="credential-list">
                {certifications.map((certification, index) => (
                  <div key={certification} className="credential-card">
                    <span>0{index + 1}</span>
                    <p>{certification}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
