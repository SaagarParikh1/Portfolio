import React from 'react';
import { Calendar, MapPin, Building, CheckCircle, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Website Design and Communication Intern',
    company: 'CASHe',
    duration: 'June 2024 - August 2024',
    location: 'Remote',
    accomplishments: [
      'Collaborated with a cross-functional team of IT developers and HR stakeholders to design and launch a high-impact internal platform',
      'Revamped the company\'s internal website using HTML/CSS, React, TypeScript, and Photoshop, aligning visual assets with brand guidelines',
      'Designed detailed wireframes and Figma prototypes, accelerating the design-to-deploy cycle by 20%',
      'Executed end-to-end usability testing with the QA team, ensuring responsive design and cross-browser compatibility'
    ],
    technologies: ['HTML/CSS', 'React', 'TypeScript', 'Photoshop', 'Figma', 'Usability Testing']
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience in web development and design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-purple-400" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-violet-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Key Accomplishments</span>
              </h4>
              <ul className="space-y-3">
                {experience.accomplishments.map((accomplishment, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{accomplishment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to bring value to your team
              </h3>
              <p className="text-lg mb-6 opacity-90">
                I'm actively seeking opportunities to apply my skills and continue growing as a developer
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;