import React, { useState } from 'react';
import { Palette, Figma, Users, Target, Eye, Lightbulb, ArrowRight, ExternalLink, Plus, Image, Layers, Activity, Award } from 'lucide-react';
import ProjectModal from './ProjectModal';

const UXWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Your actual UX projects - replace with your real work
  const uxProjects = [
    {
      id: 1,
      title: 'USPS App Redesign',
      subtitle: 'Mobile Experience Enhancement',
      description: 'Complete redesign of the USPS mobile application focusing on improved user experience, streamlined package tracking, and enhanced accessibility features.',
      detailedDescription: 'This project involved a comprehensive analysis of the existing USPS mobile application and a complete redesign to address user pain points. The focus was on creating a more intuitive navigation system, improving the package tracking experience, and ensuring accessibility compliance.',
      icon: <Palette className="w-6 h-6" />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30',
      highlights: [
        'Conducted comprehensive user research and usability testing',
        'Redesigned information architecture for better navigation',
        'Created high-fidelity prototypes in Figma',
        'Improved accessibility compliance and mobile responsiveness',
        'Streamlined package tracking and delivery notifications'
      ],
      technologies: ['Figma', 'User Research', 'Prototyping', 'Accessibility Design', 'Mobile UX'],
      type: 'UX Design Project',
      hasLiveDemo: true,
      hasGithub: false,
      figmaLink: 'https://www.figma.com/design/OoZFNcSJT69s2zhgFm2SgR/USPS-App-Redesign?t=XTolf1VzMEgCjn8g-1',
      category: 'Mobile UX',
      year: '2022',
      role: 'UX Designer',
      color: 'purple',
      bgGradient: 'from-purple-600/20 to-indigo-600/20',
      borderColor: 'border-purple-400/30',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Grant County Special Education Cooperative Website',
      subtitle: 'Accessible Web Design',
      description: 'A responsive and user-friendly website for the Grant County School District\'s Special Education Cooperative, focusing on accessibility, user experience, and providing essential resources.',
      detailedDescription: 'This capstone project involved creating a comprehensive web solution for the Grant County Special Education Cooperative, focusing on accessibility, user experience, and providing essential resources for students, parents, and educators.',
      icon: <Award className="w-6 h-6" />,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-600/20',
      borderColor: 'border-emerald-400/30',
      highlights: [
        'Collaborated with 11 web developers and UX designers',
        'Enhanced usability and accessibility for diverse user groups',
        'Transformed wireframes into functional components',
        'Led front-end development using React, JSX, Bootstrap, and Tailwind CSS',
        'Achieved 100% accessibility compliance (WCAG 2.1 AA)'
      ],
      technologies: ['Figma', 'User Research', 'Accessibility Design', 'Wireframing', 'Prototyping'],
      type: 'UX Design Project',
      hasLiveDemo: false,
      hasGithub: true,
      figmaLink: '#', // Replace with your actual Figma link
      category: 'Web UX',
      year: '2024-2025',
      role: 'UX Designer',
      color: 'emerald',
      bgGradient: 'from-emerald-600/20 to-green-600/20',
      borderColor: 'border-emerald-400/30',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed'
    }
  ];

  const openModal = (project) => {
    if (project.status !== 'placeholder') {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="ux-work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            UI/UX Design Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            User-centered design projects showcasing research, ideation, and problem-solving
          </p>
        </div>

        {/* UX Projects Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Design Projects</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Layers className="w-5 h-5" />
              <span className="text-sm">Click projects to view details</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uxProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  project.status === 'placeholder' ? 'hover:scale-100' : ''
                }`}
                onClick={() => openModal(project)}
              >
                <div className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-2xl overflow-hidden border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                  {/* Project Image */}
                  <div className="relative h-32 overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        {project.status === 'placeholder' ? (
                          <Plus className="w-12 h-12 text-gray-400" />
                        ) : (
                          <Image className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Project Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium border border-white/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Indicator */}
                    {project.status === 'completed' && (
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-200 text-xs leading-relaxed mb-2 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    {/* Tools */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies.slice(0, 3).map((tool, toolIndex) => (
                        <span key={toolIndex} className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default UXWork;