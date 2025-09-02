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
    <section id="education" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation in web development and computer science
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - University Info */}
              <div>
                <div className="flex items-start space-x-6 mb-6">
                  {/* Purdue Logo */}
                  <div className="bg-white p-4 rounded-xl shadow-lg flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png"
                      alt="Purdue University Logo"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-xl text-purple-300 font-semibold mb-3">
                      {education.school}
                    </p>
                    <div className="flex flex-col space-y-2 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-violet-400" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-white">Academic Focus</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Minor:</p>
                      <p className="text-purple-300">{education.minor}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Certificate:</p>
                      <p className="text-purple-300">{education.certificate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Coursework */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Book className="w-5 h-5 text-fuchsia-400" />
                    <span className="font-semibold text-white">Relevant Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {education.coursework.map((course, index) => (
                      <div
                        key={index}
                        className="bg-fuchsia-600/20 backdrop-blur-sm rounded-lg p-3 border border-fuchsia-400/30 hover:bg-fuchsia-600/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-fuchsia-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-200 font-medium">{course}</span>
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
