import { BarChart3, Boxes, Route, Target } from 'lucide-react';

const principles = [
  {
    title: 'Operational visibility',
    description: 'I organize ERP extracts, trackers, and recurring reports so teams can see pending work, aging, and exceptions clearly.',
    icon: Target,
    accent: 'bg-[var(--blue)] text-white',
  },
  {
    title: 'KPI reporting',
    description: 'I use Excel, SQL, Power BI, and Tableau to turn operational activity into practical performance measures.',
    icon: BarChart3,
    accent: 'bg-[var(--teal)] text-white',
  },
  {
    title: 'Supply chain thinking',
    description: 'I look across inventory, allocation, dispatch, transportation, and fulfillment instead of treating each step in isolation.',
    icon: Boxes,
    accent: 'bg-[var(--yellow)] text-[var(--ink)]',
  },
  {
    title: 'Exception analysis',
    description: 'I investigate delays, serviceability issues, and workflow bottlenecks to help teams focus on the cases that need action.',
    icon: Route,
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
            <h2 className="section-title">Analytics grounded in real operations.</h2>
          </div>

          <div className="grid gap-8">
            <div className="about-copy max-w-4xl space-y-5 text-xl leading-9 text-[var(--ink)]">
              <p>
                I am an Operations &amp; Logistics Analyst and Purdue graduate working across ERP
                transaction processing, inventory movement, allocation, dispatch, courier
                coordination, cost analysis, and recurring operational reporting.
              </p>
              <p className="text-[var(--muted)]">
                My work combines hands-on logistics exposure with Excel, SQL, Power BI, Tableau,
                and dashboard design. I am especially interested in making complex workflows easier
                to monitor, identifying the exceptions slowing them down, and translating the data
                into decision support for operations and supply-chain teams.
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
