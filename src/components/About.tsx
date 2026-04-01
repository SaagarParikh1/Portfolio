import { BarChart3, Blocks, Handshake } from 'lucide-react';

const strengths = [
  {
    title: 'Business-ready analytics',
    description:
      'I focus on structuring analysis so the logic is defensible, the takeaways are easy to scan, and the output supports an actual decision.',
    icon: BarChart3,
  },
  {
    title: 'Product-aware thinking',
    description:
      'Because I have shipped front-end work, I pay attention to how analysis will be consumed, what a stakeholder actually sees, and where clarity can break down.',
    icon: Blocks,
  },
  {
    title: 'Cross-functional delivery',
    description:
      'I am comfortable working across SQL, Python, dashboards, stakeholder communication, and implementation details when a project needs all of them to line up.',
    icon: Handshake,
  },
];

const About = () => {
  return (
    <section id="about" className="section-band section-band-amber py-24">
      <div className="section-shell">
        <div className="max-w-5xl">
          <p className="section-kicker">About</p>
          <h2 className="text-[1.55rem] font-semibold leading-tight text-[var(--text)] sm:text-[1.9rem]">
            About me
          </h2>

          <div className="mt-6 max-w-4xl space-y-5">
            <p className="section-copy max-w-none">
              I approach analytics as decision support, not just a reporting exercise. The work is
              most valuable when the question is framed well, the logic is easy to trust, and the
              final output helps someone understand what matters without needing a long explanation.
            </p>
            <p className="section-copy max-w-none">
              My background across enterprise front-end delivery, health-tech product analysis, and
              fintech risk work shaped that perspective. I tend to think about the full path from
              raw data to stakeholder use: what needs to be cleaned, what deserves emphasis, and
              how the presentation can make the analysis easier to act on.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-5 py-5"
              >
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
    </section>
  );
};

export default About;
