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

const PURDUE_LOGO = '/images/logos/purdue.svg';

const Education = () => {
  return (
    <section id="education" className="section-band section-band-soft py-24">
      <div className="section-shell">
        <div>
          <p className="section-kicker">Education</p>
          <h2 className="section-title">
            Education and certifications that support both my analytics work and how I present it.
          </h2>
        </div>

        <div className="surface mt-12 overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-[rgba(12,12,10,0.7)] p-2.5">
                  <img
                    src={PURDUE_LOGO}
                    alt="Purdue University logo"
                    className="max-h-8 w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    Purdue University
                  </p>
                  <h3 className="mt-3 text-[2rem] font-semibold leading-tight text-[var(--text)] sm:text-[2.35rem]">
                    Web Programming and Design (B.S.)
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                    Aug 2021 - May 2025 • West Lafayette, IN
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 border-t border-white/10 pt-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Program focus
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  My degree combined development, information architecture, systems thinking, and
                  UX design. That mix still shows up in how I structure analysis, build dashboards,
                  and communicate ideas clearly to the people using them.
                </p>

                <div className="mt-8">
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
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Campus involvement
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
          </div>

          <div className="mt-6 max-w-4xl rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Certifications
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  Additional coursework that strengthened my foundation in analytics and
                  user-centered design.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {certifications.map((certification) => (
                <div
                  key={certification}
                  className="rounded-[1.25rem] border border-white/10 bg-[rgba(12,12,10,0.5)] px-4 py-4 text-sm leading-6 text-[color:var(--muted)]"
                >
                  {certification}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
