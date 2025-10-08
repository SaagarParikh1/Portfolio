import React, { useState } from 'react';
import {
  BarChart3, ZoomIn, Layers, Calendar, Code, ChevronLeft, ChevronRight,
  Database, TrendingUp, PieChart, Eye
} from 'lucide-react';
import ProjectModal from './ProjectModal';

const DataVisualization: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Portfolio projects (content only — UI unchanged)
  const projects = [
    {
      id: 1,
      // Card content
      title: 'Cyclistic Member Conversion Dashboard',
      subtitle: 'Ride patterns → conversion strategy',
      description:
        'Explored usage patterns of casual vs. annual riders and recommended conversion tactics. Segmented by ride length, day-of-week, and top station clusters with funnel-style insights.',
      image:
        'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',

      // Modal content (ProjectModal expects these)
      icon: <BarChart3 />,
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-600/20',
      borderColor: 'border-indigo-400/30',
      highlights: [
        'Segmented cohorts by ride length and weekday patterns',
        'Identified top pickup/return clusters to target promos',
        'Outlined 3 conversion levers (passes, bundles, geo-targeting)'
      ],
      technologies: ['SQL (BigQuery)', 'Python (Pandas)', 'Tableau', 'Excel'],
      type: 'Data Analytics Project',
      hasLiveDemo: false,
      hasGithub: true,
      githubUrl: 'https://github.com/SaagarParikh1/cyclistic_case_study',
      detailedDescription:
        'Cleaned and joined multi-month ride logs, engineered features like ride_length and day_of_week, and visualized behaviors across clusters. Produced stakeholder-ready recs with experiment ideas.'
    },
    {
      id: 2,
      title: 'E-commerce Performance (Shopify) KPI Suite',
      subtitle: 'Revenue, AOV, CR, retention cohorts',
      description:
        'Built exec dashboards tracking revenue, AOV, conversion rate, repeat purchase, and channel mix. Automated weekly refresh; added cohort retention views.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',

      icon: <TrendingUp />,
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-600/20',
      borderColor: 'border-emerald-400/30',
      highlights: [
        'Cohort analysis for 30/60/90-day retention',
        'Attribution mix readout by campaign/channel',
        'Alerting for sudden CR/AOV deltas'
      ],
      technologies: ['Tableau', 'Looker Studio', 'Shopify Data', 'SQL'],
      type: 'Data Analytics Project',
      hasLiveDemo: false,
      hasGithub: false,
      detailedDescription:
        'Modeled order/customer tables for clean metrics. Built cohort retention and CAC-to-LTV snapshots for weekly reviews. Added calculated fields and parameter controls for drill-downs.'
    },
    {
      id: 3,
      title: 'Climate & Extreme Weather Trends — 40 Years',
      subtitle: 'Long-term indicators + anomaly detection',
      description:
        'Analyzed long-term climate indicators and extreme-event frequency. Trend lines, rolling windows, and anomaly detection to surface regional risk patterns.',
      image:
        'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',

      icon: <PieChart />,
      iconColor: 'text-fuchsia-400',
      bgColor: 'bg-fuchsia-600/20',
      borderColor: 'border-fuchsia-400/30',
      highlights: [
        '40-year trend lines with rolling averages',
        'Outlier detection for extreme events',
        'Regional breakdowns and comparisons'
      ],
      technologies: ['Tableau', 'Python (Pandas)', 'Matplotlib', 'NOAA/Open Data'],
      type: 'Data Analytics Project',
      hasLiveDemo: false,
      hasGithub: true,
      githubUrl: 'https://github.com/SaagarParikh1/WeatherEvents-ClimateChange',
      detailedDescription:
        'Compiled multi-source datasets, normalized units, and built anomaly flags. Visuals emphasize seasonality and deviations, with callouts for policy/infra risk.'
    },
    {
      id: 4,
      title: 'NBA Injury & Availability Analytics',
      subtitle: 'Availability impact on team performance',
      description:
        'Modeled injury patterns across seasons and linked availability to team outcomes. Position/team splits and interactive timelines.',
      image:
        'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=800',

      icon: <Eye />,
      iconColor: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      borderColor: 'border-yellow-400/30',
      highlights: [
        'Time-to-return and injury frequency by position',
        'On/Off availability effect estimates',
        'Team-level availability dashboards'
      ],
      technologies: ['Python (Pandas)', 'Jupyter', 'Matplotlib', 'Scikit-learn'],
      type: 'Data Analytics Project',
      hasLiveDemo: false,
      hasGithub: true,
      githubUrl: 'https://github.com/SaagarParikh1/NBAInjuryRiskCaseStudy',
      detailedDescription:
        'Cleaned box scores and injury logs, engineered availability features, and tested simple models to estimate impact on team-level performance.'
    },
    {
      id: 5,
      title: 'Ball Analytics — Film Markup & Playbook Metrics',
      subtitle: 'Coaching assistant: tendencies & success rate',
      description:
        'Early product visuals: play frequency, success rates by formation, and opponent tendencies, with export flows to Hudl/XOS.',
      image:
        'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',

      icon: <Database />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30',
      highlights: [
        'Play tagging → analytics pipeline',
        'Formation/coverage breakdowns',
        'Export flows for coaching platforms'
      ],
      technologies: ['Flutter/Dart', 'Supabase', 'Python', 'Product Analytics'],
      type: 'Product & Data Project',
      hasLiveDemo: false,
      hasGithub: false,
      detailedDescription:
        'Defined early metrics and visuals, prototyped film-tag pipelines, and designed dashboards to fit coaching workflows.'
    }
  ];

  const openModal = (project: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="data-visualization" className="py-16 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Data Analytics Work
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Turning messy datasets into clear, interactive visuals that drive product and business decisions
          </p>
        </div>

        {/* Interactive Project Showcase */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Project Visual */}
              <div className="relative">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={projects[selectedProject || 0].image}
                    alt={projects[selectedProject || 0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute bottom-3 left-3 p-3 rounded-full bg-white/10 backdrop-blur-sm ${projects[selectedProject || 0].iconColor}`}>
                    {React.cloneElement(projects[selectedProject || 0].icon, { className: "w-6 h-6" })}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedProject(selectedProject === null ? projects.length - 1 : (selectedProject - 1 + projects.length) % projects.length)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setSelectedProject(selectedProject === null ? 1 : (selectedProject + 1) % projects.length)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-200 bg-white/20 px-3 py-1 rounded-full border border-white/20">
                    {projects[selectedProject || 0].type}
                  </span>
                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedProject(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === (selectedProject || 0) ? 'bg-purple-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {projects[selectedProject || 0].title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${projects[selectedProject || 0].iconColor}`}>
                  {projects[selectedProject || 0].subtitle}
                </p>

                <p className="text-gray-200 mb-4 leading-relaxed text-sm">
                  {projects[selectedProject || 0].description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject || 0].highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${projects[selectedProject || 0].iconColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-xs text-gray-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject || 0].technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {projects[selectedProject || 0].technologies.length > 4 && (
                      <span className="bg-white/20 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-white/20">
                        +{projects[selectedProject || 0].technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => openModal(projects[selectedProject || 0])}
                    className="flex items-center space-x-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex-1 justify-center"
                  >
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mb-6">
          <p className="text-gray-200">
            Featured Project {(selectedProject || 0) + 1} of {projects.length}
          </p>
        </div>

        {/* All Projects Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">All Data Analytics Projects</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Layers className="w-5 h-5" />
              <span className="text-sm">Click projects to view details</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((proj, index) => (
              <div
                key={proj.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-102 ${
                  index === (selectedProject || 0) ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => {
                  setSelectedProject(index);
                  openModal(proj);
                }}
              >
                <div className={`${proj.bgColor} backdrop-blur-sm rounded-lg overflow-hidden border ${proj.borderColor} hover:border-opacity-60 transition-all duration-300`}>
                  {/* Visualization Image (kept) */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Zoom Icon (kept) */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-1 rounded-full">
                        <ZoomIn className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {proj.title}
                    </h4>
                    <p className="text-gray-200 text-xs leading-relaxed mb-2 line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 2).map((tool: string, index: number) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                      {proj.technologies.length > 2 && (
                        <span className="text-xs text-gray-500">+{proj.technologies.length - 2}</span>
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
        project={projects[selectedProject || 0]}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default DataVisualization;
