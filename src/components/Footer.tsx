import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Saagar Parikh</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Full-Stack Developer & UX Designer passionate about creating innovative digital solutions 
              and user-centered experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/saagar-parikh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/saagarparikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:Saagar.parikh.11@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Web Dev Projects', id: 'projects' },
                { label: 'UI/UX Projects', id: 'ux-work' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Frisco, TX</p>
              <p>Open to Relocation</p>
              <a
                href="mailto:Saagar.parikh.11@gmail.com"
                className="hover:text-white transition-colors duration-300 block"
              >
                Saagar.parikh.11@gmail.com
              </a>
              <a
                href="tel:214-471-0668"
                className="hover:text-white transition-colors duration-300 block"
              >
                214-471-0668
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Saagar Parikh.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1 mt-4 md:mt-0">
              <span>Made using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;