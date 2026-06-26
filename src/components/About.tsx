import { BarChart3, Blocks, Handshake, Target } from 'lucide-react';

const principles = [
  {
    title: 'Start with the decision',
    description: 'I work backward from the question a team needs answered, then shape the data work around that decision.',
    icon: Target,
    accent: 'bg-[var(--blue)] text-white',
  },
  {
    title: 'Make analysis usable',
    description: 'Dashboards, models, and reports only matter if the next step is obvious to the person reading them.',
    icon: BarChart3,
    accent: 'bg-[var(--teal)] text-white',
  },
  {
    title: 'Bridge data and product',
    description: 'My front-end and UX background helps me think about how insight is consumed, not just how it is calculated.',
    icon: Blocks,
    accent: 'bg-[var(--yellow)] text-[var(--ink)]',
  },
  {
    title: 'Communicate clearly',
    description: 'I like translating technical work into practical language for operators, product teams, and business stakeholders.',
    icon: Handshake,
    accent: 'bg-[var(--red)] text-white',
  },
];

const About = () => {
  return (
    <section id="about" className="section-block about-section">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Analytics with product instincts.</h2>
          </div>

          <div className="grid gap-8">
            <div className="about-copy max-w-4xl space-y-5 text-xl leading-9 text-[var(--ink)]">
              <p>
                I am a Purdue graduate with a foundation in data analytics, product thinking, and
                front-end development. I use SQL, Python, Tableau, and Excel to clean messy data,
                define useful metrics, automate reporting, and build dashboards that help teams
                understand what is happening.
              </p>
              <p className="text-[var(--muted)]">
                My background in UI and web development makes me especially interested in the last
                mile of analytics: how a finding gets read, trusted, and used by someone making a
                real operational or product decision.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article key={principle.title} className="insight-card p-5">
                    <div className={`mb-5 flex h-10 w-10 items-center justify-center ${principle.accent}`} style={{ borderRadius: 8 }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl leading-tight">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
