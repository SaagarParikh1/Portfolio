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

  const meta = [project.label, project.period, project.role, project.status].filter(Boolean).join(' • ');
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
      className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="surface mx-auto flex max-h-[92vh] max-w-6xl flex-col overflow-hidden rounded-[2rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            {meta && (
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                {meta}
              </p>
            )}
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--muted)]">
              {project.summary}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="grid xl:grid-cols-[0.56fr_0.44fr]">
            <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
              {currentImage ? (
                <div className="relative flex min-h-[26rem] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%),linear-gradient(180deg,#14110d_0%,#0c0a08_100%)] p-6 sm:p-8">
                  <img
                    src={currentImage}
                    alt={`${project.title} preview ${activeImageIndex + 1}`}
                    className="max-h-[32rem] w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={showPreviousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)]"
                        aria-label="Previous project image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={showNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)]"
                        aria-label="Next project image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 px-4">
                      {images.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setActiveImageIndex(index)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === activeImageIndex ? 'w-8 bg-[var(--accent-strong)]' : 'w-2.5 bg-white/40'
                          }`}
                          aria-label={`View project image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex min-h-[26rem] flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(208,160,93,0.18),transparent_40%),linear-gradient(180deg,#17130e_0%,#0f0d09_100%)] p-8">
                  <div>
                    <span className="eyebrow-pill">{project.label ?? 'Project details'}</span>
                    <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                      {project.category}
                    </p>
                    <h3 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-7 text-[color:var(--muted)]">
                      {project.headline}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-[var(--text)]"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              {project.decisionFocus && (
                <div className="rounded-[1.3rem] border border-[rgba(208,160,93,0.22)] bg-[rgba(208,160,93,0.08)] px-5 py-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    Decision this supports
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--text)]">
                    {project.decisionFocus}
                  </p>
                </div>
              )}

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  At a glance
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-[var(--text)]"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Overview
                </p>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>
              </div>

              {project.keyInsights && project.keyInsights.length > 0 && (
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    Key insights
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {project.keyInsights.map((insight, index) => (
                      <div
                        key={insight}
                        className="rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                          0{index + 1}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Analysis + execution
                </p>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      <span className="text-sm leading-6 text-[color:var(--muted)]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Business value
                </p>
                <ul className="mt-4 space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      <span className="text-sm leading-6 text-[color:var(--muted)]">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Tool stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#1c1407] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                  >
                    <Github className="h-4 w-4" />
                    View code
                  </a>
                )}
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                  >
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
