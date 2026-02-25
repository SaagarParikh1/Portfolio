import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setShowProjectsDropdown(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-white hover:text-purple-300 transition-colors"
            >
              Saagar Parikh
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* First two nav items */}
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-purple-300'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
                )}
              </button>
            ))}

            {/* Projects link */}
            <button
              onClick={() => scrollToSection('data-visualization')}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                activeSection === 'data-visualization' || activeSection === 'projects'
                  ? 'text-purple-300'
                  : 'text-gray-300 hover:text-purple-300'
              }`}
            >
              Projects
              {(activeSection === 'data-visualization' || activeSection === 'projects') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
              )}
            </button>

            {/* Remaining nav items */}
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-purple-300'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-300 p-2 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* First two nav items */}
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-purple-300 bg-purple-900/30'
                    : 'text-gray-300 hover:text-purple-300 hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Projects item */}
            <button
              onClick={() => scrollToSection('data-visualization')}
              className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 text-gray-300 hover:text-purple-300 hover:bg-gray-800/50"
            >
              Projects
            </button>

            {/* Remaining nav items */}
            <div className="border-t border-gray-700 pt-2 mt-2">
              {navItems.slice(2).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-300 bg-purple-900/30'
                      : 'text-gray-300 hover:text-purple-300 hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;