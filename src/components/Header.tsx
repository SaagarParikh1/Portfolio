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
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'ux-work', 'education', 'contact'];
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
            {/* First part of nav items */}
            {navItems.slice(0, 3).map((item) => (
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
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center space-x-1 ${
                  activeSection === 'projects' || activeSection === 'ux-work'
                    ? 'text-purple-300'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className="w-3 h-3" />
                {(activeSection === 'projects' || activeSection === 'ux-work') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
                )}
              </button>
              
              {/* Dropdown Menu */}
              {showProjectsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-purple-500/30 shadow-xl">
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('projects')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-purple-300 hover:bg-purple-900/30 transition-colors duration-300"
                    >
                      Web Dev Projects
                    </button>
                    <button
                      onClick={() => scrollToSection('ux-work')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-purple-300 hover:bg-purple-900/30 transition-colors duration-300"
                    >
                      UI/UX Projects
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining nav items */}
            {navItems.slice(3).map((item) => (
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

          {/* Resume Download Button */}
          <div className="hidden md:flex">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

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
            {/* First part of nav items */}
            {navItems.slice(0, 3).map((item) => (
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
            
            {/* Mobile Projects Section */}
            <div className="border-t border-gray-700 pt-2 mt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 text-gray-300 hover:text-purple-300 hover:bg-gray-800/50"
              >
                Web Dev Projects
              </button>
              <button
                onClick={() => scrollToSection('ux-work')}
                className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 text-gray-300 hover:text-purple-300 hover:bg-gray-800/50"
              >
                UI/UX Projects
              </button>
            </div>

            {/* Remaining nav items */}
            <div className="border-t border-gray-700 pt-2 mt-2">
              {navItems.slice(3).map((item) => (
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
            
            <div className="pt-2">
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;