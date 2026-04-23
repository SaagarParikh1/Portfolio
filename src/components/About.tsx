import { BarChart3, Blocks, Handshake } from 'lucide-react';

const strengths = [
  {
    title: 'Analytics foundation',
    description:
      'I am most comfortable in SQL, Python, Tableau, and Excel when the work calls for cleaning messy data, building the right metric logic, and turning analysis into something decision-ready.',
    icon: BarChart3,
    tone: 'tone-amber tint-border-amber',
  },
  {
    title: 'Product-minded delivery',
    description:
      'Because I also have a front-end and UX background, I pay attention to how insights are presented, what users notice first, and what makes a dashboard or data product genuinely useful.',
    icon: Blocks,
    tone: 'tone-teal tint-border-teal',
  },
  {
    title: 'Clear collaboration',
    description:
      'I enjoy work that connects analysis to real business questions, practical next steps, and communication that works for both technical and non-technical teams.',
    icon: Handshake,
    tone: 'tone-blue tint-border-blue',
  },
];

const About = () => {
  return (
    <section id="about" className="section-band section-band-amber py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-5xl">
            <p className="section-kicker">About</p>
            <h2 className="text-[1.9rem] font-semibold leading-tight text-[var(--text)] sm:text-[2.35rem]">
              I combine analytics, product thinking, and development experience so the output is
              not just accurate, but useful to real teams.
            </h2>

            <div className="mt-6 max-w-5xl space-y-5">
              <p className="section-copy max-w-none">
                As a recent graduate in Web Programming and Design from Purdue University, I bring
                a strong foundation in data analytics, product thinking, and front-end development
                shaped by internships and hands-on projects across fintech, health-tech, and
                enterprise environments. I use SQL, Python, Tableau, and Excel to turn complex
                datasets into clear, actionable insight, whether that means writing efficient
                queries, automating reporting workflows, or building dashboards that help teams
                track performance and spot meaningful trends.
              </p>
              <p className="section-copy max-w-none">
                I am especially interested in work that turns raw data into a clear story people
                can actually use. My background in front-end development and UI/UX helps me bridge
                the gap between the analysis and the person using it, so I naturally think about
                both the logic behind the work and the experience of consuming it. That combination
                has made me care just as much about clarity, usability, and business context as I
                do about the numbers themselves.
              </p>
            </div>
          </div>

          <div className="surface mesh-panel rounded-[1.8rem] border border-[rgba(121,207,197,0.2)] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent-teal)]">
              How I tend to work
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[1.3rem] border border-[rgba(241,193,122,0.18)] bg-[rgba(241,193,122,0.08)] px-4 py-4">
                <p className="text-sm font-medium text-[var(--text)]">Start with the decision</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  I try to understand what someone actually needs to decide before building the
                  analysis around it.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-[rgba(121,207,197,0.18)] bg-[rgba(121,207,197,0.08)] px-4 py-4">
                <p className="text-sm font-medium text-[var(--text)]">Make the output usable</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  Good dashboards and data products should reduce friction, not add another layer
                  of interpretation.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-[rgba(126,168,255,0.18)] bg-[rgba(126,168,255,0.08)] px-4 py-4">
                <p className="text-sm font-medium text-[var(--text)]">Communicate clearly</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  I like work that connects analysis with the people using it, whether that means
                  a stakeholder readout or a better product surface.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`interactive-surface rounded-[1.5rem] border px-5 py-5 ${item.tone}`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[rgba(8,8,6,0.24)] text-[var(--text)]">
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
