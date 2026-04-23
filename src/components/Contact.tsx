import { Briefcase, Github, Linkedin, Mail, MapPin, Phone, Plane } from 'lucide-react';

const contactDetails = [
  {
    label: 'Email',
    value: 'Saagar.parikh.11@gmail.com',
    href: 'mailto:Saagar.parikh.11@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '214-471-0668',
    href: 'tel:2144710668',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Frisco, TX',
    icon: MapPin,
  },
];

const quickNotes = [
  {
    icon: Briefcase,
    label: 'Target roles',
    value: 'Data analyst, product analytics, and dashboard-focused work',
    tone: 'tone-amber tint-border-amber',
  },
  {
    icon: Plane,
    label: 'Availability',
    value: 'Open to relocation and new full-time opportunities',
    tone: 'tone-teal tint-border-teal',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Frisco, Texas',
    tone: 'tone-blue tint-border-blue',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-band section-band-slate py-24">
      <div className="section-shell">
        <div className="surface mesh-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[var(--text)] sm:text-[2.6rem]">
                Open to analyst roles where clear thinking and clean delivery matter.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)] sm:text-base">
                If you&apos;re hiring for data analysis, product analytics, or dashboard work, I&apos;d
                be glad to connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:Saagar.parikh.11@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#1c1407] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  <Mail className="h-4 w-4" />
                  Email Saagar
                </a>
                <a
                  href="https://www.linkedin.com/in/saagar-parikh1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <div className="mt-9 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                {quickNotes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`interactive-surface rounded-[1.35rem] border px-4 py-4 ${item.tone}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full border border-white/10 bg-[rgba(8,8,6,0.18)] p-2 text-[var(--text)]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="metric-label">{item.label}</p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[var(--text)]">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="interactive-surface rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] px-5 py-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full border border-white/10 p-3 text-[var(--accent-strong)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block text-lg font-medium text-[var(--text)] transition duration-300 hover:text-[var(--accent-strong)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-lg font-medium text-[var(--text)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="interactive-surface rounded-[1.5rem] border border-[rgba(121,207,197,0.2)] bg-[rgba(121,207,197,0.08)] px-5 py-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  Socials
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/saagar-parikh1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/saagarparikh1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
