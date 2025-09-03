import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { X, ExternalLink, Github, Figma, ChevronLeft, ChevronRight, Target } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactElement;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  highlights: string[];
  technologies: string[];
  type: string;
  hasLiveDemo: boolean;
  hasGithub: boolean;
  detailedDescription?: string;
  challenges?: string[];
  outcomes?: string[];
  images?: string[];        // used by the carousel
  figmaLink?: string;
  githubUrl?: string;       // optional: enable real links
  liveDemoUrl?: string;     // optional: enable real links
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [idx, setIdx] = useState(0);

  // Reset index when project changes or modal reopens
  useEffect(() => {
    setIdx(0);
  }, [project, isOpen]);

  const images = useMemo(() => project?.images ?? [], [project]);
  const hasImages = images.length > 0;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isUXProject = project?.type === 'UX Design Project';

  const prev = useCallback(() => {
    if (!hasImages) return;
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [hasImages, images.length]);

  const next = useCallback(() => {
    if (!hasImages) return;
    setIdx((i) => (i + 1) % images.length);
  }, [hasImages, images.length]);

  // Keyboard support: Left/Right arrows to navigate, Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full bg-white/10 ${project.iconColor}`}>
              {React.cloneElement(project.icon, { className: 'w-6 h-6' })}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className={`text-lg font-medium ${project.iconColor}`}>{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Type + Actions */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-200 bg-white/20 px-4 py-2 rounded-full border border-white/20">
              {project.type}
            </span>
            <div className="flex space-x-3">
              {project.hasGithub && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 text-gray-200 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 border border-white/20"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">View Code</span>
                </a>
              )}
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  <Figma className="w-4 h-4" />
                  <span className="text-sm font-medium">View in Figma</span>
                </a>
              )}
              {project.hasLiveDemo && !isUXProject && project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${project.iconColor.replace('text-', 'bg-')} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Visual: Carousel if images exist, else original icon tile */}
          <div className="w-full">
            {hasImages ? (
              <div className={`relative ${project.bgColor} backdrop-blur-sm rounded-xl p-2 border ${project.borderColor}`}>
                {/* Main image */}
                <div className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                  <img
                    src={images[idx]}
                    alt={`${project.title} – ${idx + 1} of ${images.length}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Left/Right arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${
                        i === idx ? 'bg-white/90' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${project.bgColor} backdrop-blur-sm rounded-xl p-12 border ${project.borderColor} h-64 flex items-center justify-center`}>
                <div className={`p-8 rounded-full bg-white/10 ${project.iconColor}`}>
                  {React.cloneElement(project.icon, { className: 'w-16 h-16' })}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-gray-200 leading-relaxed mb-4">{project.description}</p>
            {project.detailedDescription && (
              <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
            )}
          </div>

          {/* Key Highlights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span>Key Highlights</span>
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${project.iconColor.replace('text-', 'bg-')}`} />
                  <span className="text-gray-200 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              {isUXProject ? 'Design Tools & Methods' : 'Technologies Used'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
