import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const titles = [
    'Data Analyst',
    'Front-End Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % titles.length);
      }
    }, isDeleting ? 75 : 100); // Faster typing: reduced from 100/150 to 75/100

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden pt-20">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        ></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Saagar Parikh" 
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-up"><br></br>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Hi, I'm <span className="text-purple-300">Saagar</span>
            </h1>
            
            <div className="h-16 md:h-20 mb-8">
              <p className="text-2xl md:text-3xl font-medium text-gray-200">
                I'm a <span className="text-indigo-300 font-bold">{currentText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Recent Purdue graduate passionate about building beautiful, user-focused digital experiences and uncovering insights through data. 
              I blend front-end development skills in React and TypeScript with data analytics expertise in SQL, Python, and Tableau.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Frisco, TX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>214-471-0668</span>
              </div>
              <div className="text-gray-300">
                Open to Relocation
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/saagar-parikh1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <Linkedin className="w-6 h-6 text-purple-300 group-hover:text-purple-200" />
              </a>
              <a
                href="https://github.com/saagarparikh1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:Saagar.parikh.11@gmail.com"
                className="bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-white/20"
              >
                <Mail className="w-6 h-6 text-indigo-300 group-hover:text-indigo-200" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/30"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fixed Animated Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
           onClick={scrollToAbout}>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-purple-300 transition-colors duration-300">
          <ChevronDown className="w-4 h-4 text-gray-300 mt-2 animate-pulse hover:text-purple-300 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;