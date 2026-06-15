import { useEffect, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const syncActiveSection = () => {
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);

        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
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
    <header className="nav-shell">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-black text-[var(--ink)] transition duration-200 hover:text-[var(--blue)]"
          >
            Saagar Parikh
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'text-[var(--blue)]' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href="mailto:Saagar.parikh.11@gmail.com"
            className="hidden items-center gap-2 border border-[var(--line)] bg-[var(--ink)] px-4 py-2 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 md:inline-flex"
            style={{ borderRadius: 999 }}
          >
            <Mail className="h-4 w-4" />
            Email
          </a>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="border border-[var(--line)] bg-white p-2 text-[var(--ink)] lg:hidden"
            style={{ borderRadius: 8 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[var(--line)] bg-[#f6f3ec] lg:hidden">
          <div className="section-shell py-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`border border-[var(--line)] px-4 py-3 text-left text-sm font-bold uppercase ${
                    activeSection === item.id ? 'bg-[var(--yellow)]' : 'bg-white'
                  }`}
                  style={{ borderRadius: 8 }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
