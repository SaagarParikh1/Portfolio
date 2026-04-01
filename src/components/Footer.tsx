const links = [
  { label: 'Approach', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Toolbox', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Saagar Parikh
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              Data analyst focused on decision-ready dashboards, cleaner product thinking, and
              analytical work that can actually be used.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--text)]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-[color:var(--muted)]">
          © {currentYear} Saagar Parikh. Built to highlight impact, not just tools.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
