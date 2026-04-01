const strengths = [
  {
    title: 'Business-ready analytics',
    description:
      'I build KPI frameworks, dashboards, and analytical models that help product and business stakeholders make clearer decisions.',
  },
  {
    title: 'Product and UX context',
    description:
      'My front-end background helps me understand how data lands in a product, what users actually see, and where insights should turn into action.',
  },
  {
    title: 'Execution across disciplines',
    description:
      'I am comfortable moving between SQL, Python, Tableau, stakeholder conversations, and implementation details when the work calls for it.',
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
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="section-kicker">Approach</p>
            <h2 className="section-title">
              I work best where analytical rigor, product empathy, and delivery discipline need to
              live in the same workflow.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="section-copy max-w-none">
              Your portfolio should make one thing unmistakable: what happens when someone brings
              you into the room. In my case, that means translating large, messy datasets into
              clearer decisions, stronger product direction, and stakeholder-ready dashboards.
            </p>
            <p className="section-copy max-w-none">
              I have worked across enterprise UX delivery, health-tech product analysis, and
              fintech risk modeling. That mix gives me a practical lens on business questions,
              experimentation, and user-facing execution instead of analysis that lives only in a
              notebook.
            </p>

            <div className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title}>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
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
