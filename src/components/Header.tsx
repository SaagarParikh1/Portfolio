import { useEffect, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Approach', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Toolbox', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const syncActiveSection = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', ...navItems.map((item) => item.id)];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    syncActiveSection();
    window.addEventListener('scroll', syncActiveSection);

    return () => {
      window.removeEventListener('scroll', syncActiveSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[rgba(10,10,8,0.82)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left transition duration-300 hover:opacity-90"
            >
              <span className="block text-xl font-semibold text-[var(--text)]">Saagar Parikh</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-[color:var(--muted)]">
                Data Analyst • Product-minded builder
              </span>
            </button>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm transition duration-300 ${
                  activeSection === item.id
                    ? 'text-[var(--text)]'
                    : 'text-[color:var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-[linear-gradient(90deg,transparent,rgba(241,193,122,0.95),transparent)]" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[color:var(--muted)]">
              Open to relocation
            </span>
            <a
              href="mailto:Saagar.parikh.11@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[#1c1407] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full border border-white/10 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[rgba(10,10,8,0.94)] backdrop-blur-xl lg:hidden">
          <div className="section-shell py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm transition duration-300 ${
                    activeSection === item.id
                      ? 'bg-white/10 text-[var(--text)]'
                      : 'text-[color:var(--muted)] hover:bg-white/5 hover:text-[var(--text)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href="mailto:Saagar.parikh.11@gmail.com"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-medium text-[#1c1407]"
            >
              <Mail className="h-4 w-4" />
              Email Saagar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
