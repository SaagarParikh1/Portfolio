import { BarChart3, Blocks, Handshake } from 'lucide-react';

const strengths = [
  {
    title: 'Business-ready analytics',
    description: 'KPI design, dashboard structure, and analysis that leads to a usable next step.',
    icon: BarChart3,
  },
  {
    title: 'Product awareness',
    description: 'A front-end background helps me think about how the insight actually lands.',
    icon: Blocks,
  },
  {
    title: 'Cross-functional delivery',
    description: 'Comfortable working across technical detail, stakeholder context, and polish.',
    icon: Handshake,
  },
];

const proofPoints = [
  {
    value: '50K+',
    label: 'financial records analyzed in lending risk work',
  },
  {
    value: '30+',
    label: 'cross-browser and responsive issues resolved in enterprise delivery',
  },
  {
    value: '20%',
    label: 'faster development on repeat UI work through reusable components',
  },
  {
    value: '3 domains',
    label: 'hands-on exposure across fintech, health-tech, and enterprise products',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Approach</p>
            <h2 className="section-title">The goal is clarity, not complexity.</h2>
          </div>

          <div className="space-y-6">
            <p className="section-copy max-w-none">
              I like analysis that helps a team move, not analysis that just looks impressive in a
              notebook. That usually means cleaner questions, tighter visuals, and outputs that
              are easy to explain in the room.
            </p>
            <p className="section-copy max-w-none">
              My experience across enterprise UX delivery, health-tech product analysis, and
              fintech risk work gave me a practical view of how data, users, and business context
              connect.
            </p>

            <div className="grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item.label}>
              <p className="metric-value">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
