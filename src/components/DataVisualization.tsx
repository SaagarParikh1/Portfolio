import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Database, Eye, Layers, X, ZoomIn, Calendar, Code } from 'lucide-react';

const DataVisualization = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Your data visualization images - simplified format
  const visualizations = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard showing quarterly sales metrics with drill-down capabilities',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['D3.js', 'Chart.js', 'React']
    },
    {
      id: 2,
      title: 'Geographic Heat Map',
      description: 'Geographic visualization with time-series analysis',
      image: 'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Python', 'Matplotlib', 'Plotly']
    },
    {
      id: 3,
      title: 'Financial Trend Analysis',
      description: 'Time-series visualization of stock market trends',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['Python', 'Pandas', 'Seaborn']
    },
    {
      id: 4,
      title: 'User Behavior Analytics',
      description: 'User engagement patterns and conversion funnels',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tools: ['D3.js', 'JavaScript', 'CSS']
    }
  ];

  const openModal = (visualization) => {
    setSelectedImage(visualization);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="data-visualization" className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data Visualization Work
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transforming complex data into clear, actionable insights through interactive visualizations
          </p>
        </div>

        {/* Visualization Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Visualization Gallery</h3>
            <p className="text-gray-300 text-sm">Click images to view full size</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visualizations.map((viz) => (
              <div
                key={viz.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-102"
                onClick={() => openModal(viz)}
              >
                <div className="bg-indigo-600/20 backdrop-blur-sm rounded-lg overflow-hidden border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
                  {/* Visualization Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={viz.image} 
                      alt={viz.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-1 rounded-full">
                        <ZoomIn className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Visualization Details */}
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                      {viz.title}
                    </h4>
                    
                    <p className="text-gray-300 text-xs leading-relaxed mb-2 line-clamp-2">
                      {viz.description}
                    </p>

                    {/* Tools Used */}
                    <div className="flex flex-wrap gap-1">
                      {viz.tools.slice(0, 2).map((tool, index) => (
                        <span key={index} className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                      {viz.tools.length > 2 && (
                        <span className="text-xs text-gray-500">+{viz.tools.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-indigo-500/30">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-indigo-600/20 text-indigo-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
                  <p className="text-lg font-medium text-indigo-300">Data Visualization</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Full Size Image */}
              <div className="w-full">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Description */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                <p className="text-gray-200 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              {/* Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span>Tools Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DataVisualization;