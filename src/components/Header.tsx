import { useEffect, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Career', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Connect', id: 'contact' },
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
        <div className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left transition duration-300 hover:opacity-90"
            >
              <span className="block text-lg font-semibold text-[var(--text)] sm:text-xl">
                Saagar Parikh
              </span>
            </button>
          </div>

          <nav className="hidden items-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.035)] p-1 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-[var(--text)]'
                    : 'text-[color:var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full border border-white/10 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] xl:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[rgba(10,10,8,0.94)] backdrop-blur-xl xl:hidden">
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
