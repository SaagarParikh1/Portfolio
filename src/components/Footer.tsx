const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.45fr_0.55fr] md:items-end">
          <div>
            <p className="text-2xl font-black">Saagar Parikh</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
              Data, operations, and product analytics portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="border border-white/25 px-3 py-2 text-xs font-bold uppercase text-white/76 transition duration-200 hover:bg-white hover:text-[var(--ink)]"
                style={{ borderRadius: 999 }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-white/15 pt-5 text-sm text-white/58">
          © {currentYear} Saagar Parikh. Built around decisions, not just deliverables.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
