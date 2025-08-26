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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a recent graduate from Purdue University with expertise in both 
              development and design. I specialize in creating clean, responsive 
              user interfaces and user experiences using modern web technologies 
              like React, TypeScript, and design tools including Figma and Adobe Creative Suite.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My skills span full-stack development with experience in .NET, Python, and SQL, 
              combined with UX design capabilities. I'm passionate about building user-centered 
              digital experiences and solving real-world problems through thoughtful design and code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                Full-Stack Developer
              </span>
              <span className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/30">
                UI/UX Designer
              </span>
              <span className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className={`${colorClasses} backdrop-blur-sm p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border`}
                >
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
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