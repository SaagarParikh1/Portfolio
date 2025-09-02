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
        'Migrated and rebranded 15+ internal HR pages using HTML, CSS, React, and TypeScript to align with Comcast\'s design standards, enhancing performance by 20%.',
        'Built reusable front-end components and optimized layout structures to support future scalability and modularity.',
        'Identified and resolved 30+ bugs during QA cycles, accelerating deployment timelines and ensuring cross-browser consistency.'
      ],
      technologies: ['HTML/CSS', 'React', 'TypeScript', 'Component Design', 'Performance Optimization', 'QA Testing'],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'violet'
    },
    {
      title: 'Data Analyst Intern',
      company: 'Flomad Labs R&D',
      duration: 'May 2023 - Aug 2023',
      location: 'Remote',
      accomplishments: [
        'Analyzed behavioral and biometric data from pet wearables and smart monitoring systems to identify behavioral patterns, improving sentiment model accuracy by 12%.',
        'Wrote SQL queries and Python scripts to clean and aggregate multi-source data, reducing processing time by 30%.',
        'Built Tableau dashboards to visualize mood trends, health anomalies, and KPIs, uncovering actionable insights that informed product improvements.',
        'Collaborated with ML researchers to evaluate model bias and performance, improving pilot engagement and model trust.'
      ],
      technologies: ['SQL', 'Python', 'Tableau', 'Data Analysis', 'Machine Learning', 'Dashboard Design'],
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'Risk Analyst Intern',
      company: 'CASHe',
      duration: 'June 2022 - Aug 2022',
      location: 'Remote',
      accomplishments: [
        'Processed 50K+ customer financial records to refine risk models, boosting loan eligibility accuracy by 10%.',
        'Identified fraudulent behavior through data mining, enhancing detection mechanisms, and compliance safeguards.',
        'Automated risk assessment workflows, saving 15 hours/week in manual review time and increasing customer approval speed by 20%.',
        'Designed Tableau and Excel dashboards to communicate KPIs to non-technical stakeholders.'
      ],
      technologies: ['Data Mining', 'Risk Modeling', 'Tableau', 'Excel', 'Process Automation', 'Financial Analysis'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'indigo'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience in data analysis, risk assessment, and web development
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
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
                      <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-purple-400" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-violet-400" />
                          <span>{experience.location}</span>
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
                  <div className="flex flex-wrap gap-3">
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