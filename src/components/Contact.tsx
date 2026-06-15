import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-block bg-[var(--yellow)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div>
            <p className="section-kicker text-[var(--ink)]">Contact</p>
            <h2 className="mt-3 max-w-4xl text-5xl leading-none text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Let&apos;s talk about data, operations, or product analytics.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(23,23,23,0.78)]">
              I am open to analyst and operations-focused roles where clean thinking, useful
              dashboards, and practical execution matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:Saagar.parikh.11@gmail.com" className="btn-secondary bg-[var(--ink)] text-white">
                <Mail className="h-4 w-4" />
                Email Saagar
              </a>
              <a
                href="https://www.linkedin.com/in/saagar-parikh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="panel bg-[#fffdf8] p-6">
            <div className="grid gap-3">
              <a href="mailto:Saagar.parikh.11@gmail.com" className="flex items-start gap-4 border border-[var(--line-soft)] bg-white p-4" style={{ borderRadius: 8 }}>
                <Mail className="mt-1 h-5 w-5 text-[var(--red)]" />
                <div>
                  <p className="text-sm font-bold uppercase text-[var(--muted)]">Email</p>
                  <p className="mt-1 font-semibold">Saagar.parikh.11@gmail.com</p>
                </div>
              </a>
              <a href="tel:2144710668" className="flex items-start gap-4 border border-[var(--line-soft)] bg-white p-4" style={{ borderRadius: 8 }}>
                <Phone className="mt-1 h-5 w-5 text-[var(--blue)]" />
                <div>
                  <p className="text-sm font-bold uppercase text-[var(--muted)]">Phone</p>
                  <p className="mt-1 font-semibold">214-471-0668</p>
                </div>
              </a>
              <div className="flex items-start gap-4 border border-[var(--line-soft)] bg-white p-4" style={{ borderRadius: 8 }}>
                <MapPin className="mt-1 h-5 w-5 text-[var(--teal)]" />
                <div>
                  <p className="text-sm font-bold uppercase text-[var(--muted)]">Location</p>
                  <p className="mt-1 font-semibold">Frisco, TX, open to relocation</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--line-soft)] pt-6">
              <a
                href="https://github.com/saagarparikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/saagar-parikh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
