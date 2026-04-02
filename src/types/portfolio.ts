export interface PortfolioProject {
  title: string;
  category: string;
  headline: string;
  summary: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  technologies: string[];
  metrics: string[];
  decisionFocus?: string;
  keyInsights?: string[];
  label?: string;
  role?: string;
  period?: string;
  status?: string;
  images?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  figmaLink?: string;
}
