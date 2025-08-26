import React, { useState } from 'react';
import { Code, Database, Palette, Zap, Globe, Settings, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);


const skillCategories = [
  {
    title: "Data Analytics & Methods",
    icon: <Database className="w-6 h-6" />,
    color: "purple",
    skills: [
      "SQL (BigQuery, MySQL, SQL Server)",
      "Python (Pandas, Matplotlib, Jupyter)",
      "R",
      "Tableau",
      "Looker",
      "Excel",
      "Data Cleaning",
      "Exploratory Analysis",
      "Visualization Design",
      "A/B Testing",
      "Hypothesis Testing",
      "Statistical & Predictive Modeling"
    ]
  },
  {
    title: "Backend Development",
    icon: <Settings className="w-6 h-6" />,
    color: "emerald",
    skills: [
      ".NET / C#",
      "Python",
      "Node.js",
      "REST API Integration",
      "MySQL / SQL Server",
      "PHP"
    ]
  },
  {
    title: "Frontend Development",
    icon: <Zap className="w-6 h-6" />,
    color: "fuchsia",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "jQuery",
      "Bootstrap",
      "Angular"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Palette className="w-6 h-6" />,
    color: "indigo",
    skills: [
      "GitHub",
      "Figma",
      "Adobe Creative Suite",
      "UI/UX Design",
      "Shopify",
      "Flutter/Dart",
      "Agile Methodologies"
    ]
  }
];


  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-600/20',
        border: 'border-purple-400/30',
        icon: 'bg-purple-600',
        text: 'text-purple-300',
        hover: 'hover:bg-purple-600/30',
        active: 'bg-purple-600/40'
      },
      indigo: {
        bg: 'bg-indigo-600/20',
        border: 'border-indigo-400/30',
        icon: 'bg-indigo-600',
        text: 'text-indigo-300',
        hover: 'hover:bg-indigo-600/30',
        active: 'bg-indigo-600/40'
      },
      violet: {
        bg: 'bg-violet-600/20',
        border: 'border-violet-400/30',
        icon: 'bg-violet-600',
        text: 'text-violet-300',
        hover: 'hover:bg-violet-600/30',
        active: 'bg-violet-600/40'
      },
      fuchsia: {
        bg: 'bg-fuchsia-600/20',
        border: 'border-fuchsia-400/30',
        icon: 'bg-fuchsia-600',
        text: 'text-fuchsia-300',
        hover: 'hover:bg-fuchsia-600/30',
        active: 'bg-fuchsia-600/40'
      },
      emerald: {
        bg: 'bg-emerald-600/20',
        border: 'border-emerald-400/30',
        icon: 'bg-emerald-600',
        text: 'text-emerald-300',
        hover: 'hover:bg-emerald-600/30',
        active: 'bg-emerald-600/40'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="skills" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </div>

        {/* Interactive Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">Skill Categories</h3>
              <div className="space-y-3">
                {skillCategories.map((category, index) => {
                  const colorClasses = getColorClasses(category.color);
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                        activeCategory === index 
                          ? `${colorClasses.active} border ${colorClasses.border}` 
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <div className={`${colorClasses.icon} p-2 rounded-lg`}>
                        {category.icon}
                      </div>
                      <span className="text-white font-medium">{category.title}</span>
                      <ChevronRight className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${
                        activeCategory === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Category Skills */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`${getColorClasses(skillCategories[activeCategory].color).icon} p-3 rounded-lg`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {skillCategories[activeCategory].skills.map((skill, index) => {
                  const colorClasses = getColorClasses(skillCategories[activeCategory].color);
                  return (
                    <div
                      key={index}
                      className={`${colorClasses.bg} backdrop-blur-sm rounded-lg p-4 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 cursor-pointer transform hover:scale-105`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{skill}</span>
                        {hoveredSkill === skill && (
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* All Skills Overview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Complete Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <span
                key={index}
                className="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30 hover:bg-purple-600/50 hover:scale-110 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Additional Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Supabase', 'Cross-browser Compatibility',
                'Accessibility', 'Data Visualization', 'Usability Testing', 'DevOps', 'MVC Architecture'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:border-purple-400/50 hover:text-purple-200 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;