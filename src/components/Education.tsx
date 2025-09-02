import React from 'react';
import { Award, Book, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = {
    degree: 'Bachelor of Science in Web Programming and Design',
    school: 'Purdue University',
    duration: 'August 2021 - May 2025',
    location: 'West Lafayette, IN',
    minor: 'Computer and Information Technology',
    certificate: 'Certificate in Cornerstone',
    coursework: [
      'Advanced Web Programming',
      'UX Design',
      'Database Management',
      'Server-Side Development',
      'Data Analysis & Visualization',
      'Software Engineering'
    ]
  };

  return (
    <section id="education" className="py-16 bg-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strong academic foundation in web development and computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - University Info */}
              <div>
                <div className="flex items-start space-x-4 mb-4">
                  {/* Purdue Logo */}
                  <div className="bg-white p-3 rounded-lg shadow-lg flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
                      alt="Purdue University Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-purple-300 font-semibold mb-2">
                      {education.school}
                    </p>
                    <div className="flex flex-col space-y-2 text-gray-300">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-violet-400" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-white text-sm">Academic Focus</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-300 text-xs font-medium">Minor:</p>
                      <p className="text-purple-300 text-sm">{education.minor}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs font-medium">Certificate:</p>
                      <p className="text-purple-300 text-sm">{education.certificate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Coursework */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <Book className="w-5 h-5 text-fuchsia-400" />
                    <span className="font-semibold text-white text-sm">Relevant Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {education.coursework.map((course, index) => (
                      <div
                        key={index}
                        className="bg-fuchsia-600/20 backdrop-blur-sm rounded-lg p-2 border border-fuchsia-400/30 hover:bg-fuchsia-600/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-fuchsia-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-200 font-medium text-sm">{course}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Additional Information */}
          {/* Add more cards/sections here if needed */}

        </div>
      </div>
    </section>
  );
};

export default Education;
