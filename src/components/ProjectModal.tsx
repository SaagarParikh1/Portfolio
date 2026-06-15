import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Figma, Github, X } from 'lucide-react';
import type { PortfolioProject } from '../types/portfolio';

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = project?.images ?? [];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (images.length > 1 && event.key === 'ArrowLeft') {
        setActiveImageIndex((currentIndex) =>
          currentIndex === 0 ? images.length - 1 : currentIndex - 1,
        );
      }

      if (images.length > 1 && event.key === 'ArrowRight') {
        setActiveImageIndex((currentIndex) =>
          currentIndex === images.length - 1 ? 0 : currentIndex + 1,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen || !project) {
    return null;
  }

  const meta = [project.period, project.role, project.status].filter(Boolean).join(' / ');
  const currentImage = images[activeImageIndex];

  const showPreviousImage = () => {
    if (images.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (images.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/72 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-surface" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] px-5 py-5 sm:px-7">
          <div>
            <p className="chip">{project.category}</p>
            <h2 className="mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl">{project.title}</h2>
            {meta && <p className="mt-3 font-semibold text-[var(--muted)]">{meta}</p>}
          </div>

          <button
            onClick={onClose}
            className="shrink-0 border border-[var(--line)] bg-white p-2"
            style={{ borderRadius: 999 }}
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="grid xl:grid-cols-[0.58fr_0.42fr]">
            <div className="border-b border-[var(--line)] bg-white xl:border-b-0 xl:border-r">
              {currentImage ? (
                <div className="relative flex min-h-[24rem] items-center justify-center p-5 sm:p-8">
                  <img
                    src={currentImage}
                    alt={`${project.title} preview ${activeImageIndex + 1}`}
                    className="max-h-[34rem] w-full object-contain"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={showPreviousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 border border-[var(--line)] bg-white p-2"
                        style={{ borderRadius: 999 }}
                        aria-label="Previous project image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={showNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 border border-[var(--line)] bg-white p-2"
                        style={{ borderRadius: 999 }}
                        aria-label="Next project image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex min-h-[24rem] items-center justify-center bg-[var(--blue)] p-8 text-center text-white">
                  <h3 className="max-w-lg text-5xl leading-tight">{project.headline}</h3>
                </div>
              )}
            </div>

            <div className="space-y-8 p-5 sm:p-7">
              <div>
                <p className="text-sm font-bold uppercase text-[var(--red)]">Overview</p>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{project.description}</p>
              </div>

              {project.decisionFocus && (
                <div className="border border-[var(--line)] bg-[var(--yellow)] p-5" style={{ borderRadius: 8 }}>
                  <p className="text-sm font-bold uppercase">Decision this supports</p>
                  <p className="mt-3 text-sm font-semibold leading-6">{project.decisionFocus}</p>
                </div>
              )}

              <div>
                <p className="text-sm font-bold uppercase text-[var(--red)]">At a glance</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="border border-[var(--line-soft)] bg-white p-4 text-sm font-semibold" style={{ borderRadius: 8 }}>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              {project.keyInsights && project.keyInsights.length > 0 && (
                <div>
                  <p className="text-sm font-bold uppercase text-[var(--red)]">Key insights</p>
                  <div className="mt-4 grid gap-3">
                    {project.keyInsights.map((insight, index) => (
                      <div key={insight} className="grid gap-3 border border-[var(--line-soft)] bg-white p-4 sm:grid-cols-[auto_1fr]" style={{ borderRadius: 8 }}>
                        <span className="font-black text-[var(--blue)]">0{index + 1}</span>
                        <p className="text-sm leading-6 text-[var(--muted)]">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm font-bold uppercase text-[var(--red)]">Execution</p>
                <ul className="mt-4 grid gap-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-[var(--red)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-[var(--red)]">Tool stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="chip">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github className="h-4 w-4" />
                    View code
                  </a>
                )}
                {project.figmaLink && (
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Figma className="h-4 w-4" />
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
