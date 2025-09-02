import React, { useState } from 'react';
import {
  BarChart3, ZoomIn, Layers, Calendar, Code, // icons for card UI
  Database, TrendingUp, PieChart, Eye // optional (if you swap card icons later)
} from 'lucide-react';
import ProjectModal from './ProjectModal';

const DataVisualization: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
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
      hasGithub: false,
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
      hasGithub: false,
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
      hasGithub: false,
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
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <section id="data-visualization" className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data Visualization Work
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Turning messy datasets into clear, interactive visuals that drive product and business decisions
          </p>
        </div>

        {/* Visualization Gallery (unchanged UI) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">All Data Projects</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Layers className="w-5 h-5" />
              <span className="text-sm">Click projects to view details</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => openModal(proj)}
              >
                <div className="bg-indigo-600/20 backdrop-blur-sm rounded-lg overflow-hidden border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
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

                  {/* Card Details (kept) */}
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                      {proj.title}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed mb-2 line-clamp-2">
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

      {/* Use your ProjectModal instead of the old image modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default DataVisualization;
