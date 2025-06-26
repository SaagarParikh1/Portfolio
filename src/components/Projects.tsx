import React, { useState } from 'react';
import { ExternalLink, Github, Award, Users, Brain, Zap, ChevronLeft, ChevronRight, Search, TrendingUp, Globe, Gamepad2, MessageCircle, Camera, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Featured projects for slideshow (only 6)
  const featuredProjects = [
    {
      title: 'NeuroNotes',
      subtitle: 'AI-Powered Study Assistant',
      description: 'Developed a full-stack, AI-powered note-taking and study assistant with advanced features including automated summaries, key point extraction, and flashcard generation.',
      detailedDescription: 'NeuroNotes revolutionizes the way students take and organize notes by leveraging artificial intelligence to enhance learning outcomes. The platform combines traditional note-taking with modern AI capabilities to create an intelligent study companion.',
      icon: <Brain className="w-6 h-6" />,
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-600/20',
      borderColor: 'border-indigo-400/30',
      image: '/public/images/NeuroNotes/home.png',
      highlights: [
        'Built with React, Next.js, TypeScript, and Tailwind CSS',
        'Integrated OpenAI\'s API for AI-powered features',
        'Implemented rich markdown editing and folder/tag organization',
        'Created quiz mode and self-testing tools for spaced repetition learning'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'AI'],
      type: 'Personal Project',
      hasLiveDemo: true,
      hasGithub: true,
      challenges: [
        'Integrating multiple AI APIs while maintaining performance',
        'Creating an intuitive user interface for complex features',
        'Implementing real-time collaboration features'
      ],
      outcomes: [
        'Improved study efficiency by 40% in user testing',
        'Successfully processed over 10,000 notes in beta testing',
        'Received positive feedback from 95% of beta users'
      ]
    },
    {
      title: 'Ball Analytics',
      subtitle: 'Multi-Platform Coaching Assistant',
      description: 'A startup I co-founded, developing a multi-platform coaching assistant software that streamlines film analysis, playbook creation, and team collaboration for football coaches.',
      detailedDescription: 'Ball Analytics addresses the inefficiencies in traditional football coaching workflows by providing a comprehensive digital platform that integrates film analysis, playbook management, and team communication in one seamless experience.',
      icon: <Zap className="w-6 h-6" />,
      iconColor: 'text-violet-400',
      bgColor: 'bg-violet-600/20',
      borderColor: 'border-violet-400/30',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Co-founded a startup with two others to revolutionize football coaching workflows',
        'Enabled direct film markup and playbook integration with Hudl and Thundercloud XOS',
        'Replaced spreadsheet-based analysis with a more efficient, real-world coaching workflow',
        'Managed scalable front-end logic using Flutter and Dart'
      ],
      technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Supabase'],
      type: 'Startup Project',
      hasLiveDemo: false,
      hasGithub: true,
      challenges: [
        'Integrating with existing coaching software platforms',
        'Creating a user-friendly interface for non-technical users',
        'Scaling the platform for multiple teams and organizations'
      ],
      outcomes: [
        'Secured initial funding and mentorship',
        'Onboarded 5 high school football programs for beta testing',
        'Reduced game film analysis time by 60%'
      ]
    },
    {
      title: 'Grant County Special Education Cooperative Website',
      subtitle: 'Capstone Project',
      description: 'A responsive and user-friendly website for the Grant County School District\'s Special Education Cooperative.',
      detailedDescription: 'This capstone project involved creating a comprehensive web solution for the Grant County Special Education Cooperative, focusing on accessibility, user experience, and providing essential resources for students, parents, and educators.',
      icon: <Award className="w-6 h-6" />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Collaborated with 11 web developers and UX designers',
        'Enhanced usability and accessibility for diverse user groups',
        'Transformed wireframes into functional components',
        'Led front-end development using React, JSX, Bootstrap, and Tailwind CSS'
      ],
      technologies: ['HTML/CSS', 'Tailwind CSS', 'ReactJS', 'TypeScript', 'JSX'],
      type: 'Capstone Project',
      hasLiveDemo: false,
      hasGithub: true,
      challenges: [
        'Meeting strict accessibility requirements (WCAG 2.1 AA)',
        'Coordinating with a large development team',
        'Balancing stakeholder requirements with technical constraints'
      ],
      outcomes: [
        'Successfully delivered on time and within scope',
        'Achieved 100% accessibility compliance',
        'Received excellent feedback from client and faculty'
      ]
    },
    {
      title: 'Ticket Scout',
      subtitle: 'Price Comparison Platform',
      description: 'A personal project for analyzing ticket prices across multiple platforms, providing real-time access to the best deals.',
      detailedDescription: 'Ticket Scout simplifies the ticket purchasing process by aggregating prices from multiple vendors and providing users with comprehensive comparison tools, saving both time and money.',
      icon: <Search className="w-6 h-6" />,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-600/20',
      borderColor: 'border-emerald-400/30',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Implemented real-time price comparison and filtering',
        'Integrated multiple APIs for data aggregation',
        'Developed an interactive and responsive UI',
        'Built efficient search and filtering mechanisms'
      ],
      technologies: ['HTML', 'Tailwind CSS', 'ReactJS', 'TypeScript', 'API Integration'],
      type: 'Personal Project',
      hasLiveDemo: true,
      hasGithub: true
    },
    {
      title: 'TravelX',
      subtitle: 'AI-Enhanced Travel Platform',
      description: 'A multi-page travel personal project offering real-time weather updates, destination information, and AI-generated travel recommendations.',
      detailedDescription: 'TravelX combines traditional travel planning with AI-powered recommendations to create personalized travel experiences, helping users discover new destinations and plan their perfect trips.',
      icon: <Globe className="w-6 h-6" />,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-400/30',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Designed intuitive interface with dynamic features',
        'Implemented responsive design and multi-API integration',
        'Utilized OpenAI\'s API to generate personalized travel recommendations',
        'Real-time weather integration for destination planning'
      ],
      technologies: ['HTML', 'Tailwind CSS', 'ReactJS', 'TypeScript', 'API Integration', 'Responsive Design', 'AI Integration'],
      type: 'Personal Project',
      hasLiveDemo: true,
      hasGithub: true
    },
    {
      title: 'Recipe Finder',
      subtitle: 'Ingredient-Based Recipe Search',
      description: 'A personal project that allows users to search for recipes using ingredients or keywords, fetching results through API integration.',
      detailedDescription: 'Recipe Finder helps users make the most of their available ingredients by suggesting recipes and providing detailed cooking instructions, reducing food waste and inspiring culinary creativity.',
      icon: <Search className="w-6 h-6" />,
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-400/30',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Designed a search-based interface for seamless recipe discovery',
        'Integrated recipe API for real-time recipe data',
        'Focused on user-friendly navigation and data presentation',
        'Implemented advanced filtering and search optimization'
      ],
      technologies: ['HTML', 'Tailwind CSS', 'ReactJS', 'API Integration', 'Search Optimization'],
      type: 'Personal Project',
      hasLiveDemo: true,
      hasGithub: true
    }
  ];

  // All projects for grid display
  const allProjects = [
    ...featuredProjects,
    {
      title: 'Stock Tracker',
      subtitle: 'Real-Time Financial Dashboard',
      description: 'A dynamic stock tracking personal project featuring a moving stock ticker, a searchable stock database, and real-time graphical updates.',
      icon: <TrendingUp className="w-6 h-6" />,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-400/30',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Built a moving stock ticker for live updates',
        'Developed a graph to visualize stock trends in real time',
        'Implemented a search function for detailed stock information',
        'Real-time data visualization and interactive charts'
      ],
      technologies: ['HTML', 'Tailwind CSS', 'ReactJS', 'TypeScript', 'API Integration', 'Data Visualization'],
      type: 'Personal Project',
      hasLiveDemo: true,
      hasGithub: true
    },
    {
      title: 'The Shoreline Hotel',
      subtitle: 'Luxury Hotel Website',
      description: 'The Shoreline Hotel is a multi-page website for an imaginary hotel, including sections for rooms, amenities, and bookings.',
      icon: <Camera className="w-6 h-6" />,
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-600/20',
      borderColor: 'border-cyan-400/30',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Designed an elegant multi-page website with a user-friendly interface',
        'Incorporated parallax scrolling effects for an immersive experience',
        'Utilized high-quality visuals to captivate and engage visitors',
        'Ensured responsiveness across all devices'
      ],
      technologies: ['Wix', 'Adobe Photoshop', 'Responsive Design', 'UI/UX Design'],
      type: 'Design Project',
      hasLiveDemo: true,
      hasGithub: false
    },
    {
      title: 'Whack-a-Mole & Sliding Puzzle Game',
      subtitle: 'Interactive Game Suite',
      description: 'A dual-game experience featuring a classic whack-a-mole game and a sliding puzzle, offering both quick reflex challenges and strategic thinking.',
      icon: <Gamepad2 className="w-6 h-6" />,
      iconColor: 'text-pink-400',
      bgColor: 'bg-pink-600/20',
      borderColor: 'border-pink-400/30',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Developed interactive gameplay mechanics for both games',
        'Implemented dynamic animations and smooth transitions',
        'Enhanced user engagement with score tracking and feedback',
        'Created responsive game controls and user interface'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Game Development', 'UI Design'],
      type: 'Game Development',
      hasLiveDemo: false,
      hasGithub: true
    },
    {
      title: 'Ask Me Anything',
      subtitle: 'Multi-Source Q&A Platform',
      description: 'A Q&A personal project for comparative insights from multiple sources (Google and OpenAI), providing users with comprehensive answers to their queries.',
      icon: <MessageCircle className="w-6 h-6" />,
      iconColor: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      borderColor: 'border-yellow-400/30',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Built a dynamic Q&A platform integrating multiple data sources',
        'Implemented asynchronous JavaScript for seamless API interactions',
        'Enhanced query processing and result comparison functionality',
        'Comparative analysis between different AI and search sources'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      type: 'Personal Project',
      hasLiveDemo: false,
      hasGithub: true
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web Development Projects
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Full-stack development projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        {/* Interactive Project Showcase - Only Featured 6 */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Visual */}
              <div className="relative">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <img 
                    src={featuredProjects[currentProject].image} 
                    alt={featuredProjects[currentProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 p-4 rounded-full bg-white/10 backdrop-blur-sm ${featuredProjects[currentProject].iconColor}`}>
                    {React.cloneElement(featuredProjects[currentProject].icon, { className: "w-8 h-8" })}
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-200 bg-white/20 px-3 py-1 rounded-full border border-white/20">
                    {featuredProjects[currentProject].type}
                  </span>
                  <div className="flex space-x-2">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentProject ? 'bg-purple-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {featuredProjects[currentProject].title}
                </h3>
                <p className={`text-lg font-medium mb-4 ${featuredProjects[currentProject].iconColor}`}>
                  {featuredProjects[currentProject].subtitle}
                </p>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {featuredProjects[currentProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {featuredProjects[currentProject].highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${featuredProjects[currentProject].iconColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-sm text-gray-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[currentProject].technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {featuredProjects[currentProject].technologies.length > 4 && (
                      <span className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                        +{featuredProjects[currentProject].technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => openModal(featuredProjects[currentProject])}
                    className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex-1 justify-center"
                  >
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                  {featuredProjects[currentProject].hasGithub && (
                    <button className="flex items-center space-x-2 bg-white/20 text-gray-200 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 border border-white/20">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  )}
                  {featuredProjects[currentProject].hasLiveDemo && (
                    <button className={`flex items-center space-x-2 ${featuredProjects[currentProject].iconColor.replace('text-', 'bg-')} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300`}>
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-200">
            Featured Project {currentProject + 1} of {featuredProjects.length}
          </p>
        </div>

        {/* All Projects Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">All Development Projects</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Layers className="w-5 h-5" />
              <span className="text-sm">Click projects to view details</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index < featuredProjects.length && index === currentProject ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => {
                  if (index < featuredProjects.length) {
                    setCurrentProject(index);
                  }
                  openModal(project);
                }}
              >
                <div className={`${project.bgColor} backdrop-blur-sm rounded-xl overflow-hidden border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Project Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                          {project.type}
                        </span>
                      </div>

                      {/* Project Icon */}
                      <div className={`absolute bottom-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-sm ${project.iconColor}`}>
                        {project.icon}
                      </div>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${project.iconColor}`}>
                      {project.subtitle}
                    </p>
                    
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.hasGithub && (
                          <Github className="w-4 h-4 text-gray-400" />
                        )}
                        {project.hasLiveDemo && (
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs text-gray-400">+{project.technologies.length - 2}</span>
                        )}
                      </div>
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

export default Projects;