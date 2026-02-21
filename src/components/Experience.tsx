import React from 'react';
import { Calendar, MapPin, Building, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Front-End Web Developer (Contract)',
      company: 'Masergy Communications',
      duration: 'May 2024 - Aug 2024',
      location: 'Remote',
      accomplishments: [
        'Translated enterprise HR product requirements by migrating and rebranding 15+ enterprise platform pages using React and TypeScript, aligning enhancements with business and performance goals.',
        'Accelerated feature development and UI consistency by building reusable UI components, contributing to shared component libraries, and supporting GitHub CI/CD pipelines across internal applications.',
        'Collaborated with product owners, QA, and engineering teams to refine feature requirements and iterate on releases by resolving 30+ cross-browser issues, strengthening brand consistency, and improving overall user experience.'
      ],
      technologies: ['React', 'TypeScript', 'HTML/CSS', 'GitHub CI/CD', 'Chrome DevTools', 'Vite'],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'violet'
    },
    {
      title: 'Product Development Intern',
      company: 'Flomad Labs R&D',
      duration: 'May 2023 - Aug 2023',
      location: 'Remote',
      accomplishments: [
        'Conducted advanced SQL and Python analysis on behavioral and biometric datasets to define KPIs and validate digital performance metrics used in executive dashboards.',
        'Delivered Tableau dashboards and KPI visualizations to stakeholders to monitor health metrics, anomaly detection, and product experimentation workflows, translating complex findings into actionable product and business recommendations.',
        'Increased experiment reliability by collaborating with ML researchers and engineers to define success metrics, validate outputs, and support product discovery and iteration cycles.'
      ],
      technologies: ['SQL', 'Python', 'Tableau', 'Snowflake', 'Excel', 'Product Analytics'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'Risk Analyst Intern',
      company: 'CASHe',
      duration: 'June 2022 - Aug 2022',
      location: 'Remote',
      accomplishments: [
        'Improved loan risk and eligibility model accuracy by 6% by analyzing 50K+ financial records using SQL, Python, Excel, and statistical techniques to identify predictive behavioral features.',
        'Reduced fraud exposure by detecting unusual transaction patterns through data mining, risk segmentation, and compliance analysis.',
        'Automated KPI reporting workflows using Python scripts and Excel pipelines, saving 10+ hours/week and improving operational visibility and turnaround time.'
      ],
      technologies: ['SQL', 'Python', 'Excel', 'Data Mining', 'Risk Modeling', 'Process Automation'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'indigo'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional experience in data analysis, risk assessment, and web development
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((experience, index) => {
            const colorClasses = {
              purple: 'bg-purple-900/30 border-purple-500/30 hover:border-purple-400/50',
              indigo: 'bg-indigo-900/30 border-indigo-500/30 hover:border-indigo-400/50',
              violet: 'bg-violet-900/30 border-violet-500/30 hover:border-violet-400/50'
            };
            
            return (
              <div key={index} className={`${colorClasses[experience.color]} backdrop-blur-sm rounded-lg p-6 border transition-all duration-300`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-2 rounded-full bg-white/10 text-${experience.color}-400`}>
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-3">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-purple-400" />
                          <span className="font-medium text-sm">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-violet-400" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold text-white mb-3 flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Key Accomplishments</span>
                  </h4>
                  <ul className="space-y-2">
                    {experience.accomplishments.map((accomplishment, accomplishmentIndex) => (
                      <li key={accomplishmentIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed text-sm">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Ready to bring value to your team
              </h3>
              <p className="text-base mb-4 opacity-90">
                I'm actively seeking opportunities to apply my skills and continue growing as a developer
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Experience;