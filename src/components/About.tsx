import React from 'react';
import { GraduationCap, Code, Palette, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      description: 'B.S. Web Programming & Design from Purdue University',
      color: 'purple'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      description: 'Full-stack development with modern technologies',
      color: 'indigo'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      description: 'UI/UX design with Figma and Adobe Creative Suite',
      color: 'violet'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Agile methodologies and cross-functional teamwork',
      color: 'fuchsia'
    }
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'User-Centered Design',
      description: 'Every project starts with understanding user needs and creating intuitive experiences.'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay current with the latest trends and best practices.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Collaborative Approach',
      description: 'Great products are built by great teams working together towards common goals.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-600/20 border-purple-400/30 text-purple-300',
      indigo: 'bg-indigo-600/20 border-indigo-400/30 text-indigo-300',
      violet: 'bg-violet-600/20 border-violet-400/30 text-violet-300',
      fuchsia: 'bg-fuchsia-600/20 border-fuchsia-400/30 text-fuchsia-300'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference
          </p>
        </div>

<div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
  <div className="space-y-4">
    <p className="text-sm text-gray-300 leading-relaxed">
      As a <strong>recent graduate</strong> in <strong>Web Programming and Design</strong> from <strong>Purdue University</strong>, I bring a strong foundation in <strong>data analytics</strong>, <strong>database management</strong>, and <strong>full-stack development</strong>, backed by hands-on <strong>internship experience</strong> and impactful <strong>academic projects</strong>. I specialize in using <strong>SQL</strong>, <strong>Python</strong>, <strong>Tableau</strong>, and <strong>Excel</strong> to clean, analyze, and visualize data, while also leveraging tools like <strong>Looker</strong> and <strong>R</strong> to uncover trends and drive actionable insights.
    </p>
    
    <p className="text-sm text-gray-300 leading-relaxed">
      Alongside my analytics work, I have experience building <strong>user-friendly digital solutions</strong> using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and design tools such as <strong>Figma</strong> and <strong>Adobe Creative Suite</strong>. This combination of <strong>technical</strong> and <strong>analytical skills</strong> allows me to approach problems from both a <strong>user-centered</strong> and <strong>data-driven perspective</strong>.
    </p>
    
    <p className="text-sm text-gray-300 leading-relaxed">
      I'm passionate about turning <strong>raw data</strong> into <strong>meaningful stories</strong>, solving <strong>real-world challenges</strong> through <strong>analysis</strong>, and <strong>collaborating with teams</strong> to create <strong>measurable impact</strong>. With a drive to keep <strong>learning</strong>, I'm excited to contribute to <strong>innovative projects</strong> and grow in the <strong>tech industry</strong>.
    </p>



            <div className="flex flex-wrap gap-3 pt-3">
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                Data Analyst
              </span>
              <span className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30">
                Full-Stack Developer
              </span>
              <span className="bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full text-xs font-medium border border-violet-500/30">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className={`${colorClasses} backdrop-blur-sm p-4 rounded-lg text-center hover:scale-105 transition-all duration-300 border`}
                >
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;