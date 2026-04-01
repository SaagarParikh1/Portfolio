import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Github,
  Sparkles,
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import type { PortfolioProject } from '../types/portfolio';

const categoryIcons = {
  Analytics: BarChart3,
  Frontend: Blocks,
  Product: Sparkles,
  UX: Compass,
  'AI Product': BrainCircuit,
};

const featuredProjects: PortfolioProject[] = [
  {
    title: 'Quantitative Options Strategy Dashboard',
    category: 'Analytics',
    label: 'Featured build',
    role: 'Independent project · Python + Streamlit',
    period: 'Mar 2026 - Present',
    status: 'In progress',
    headline:
      'A decision engine for screening cash-secured put opportunities across 100+ equities.',
    summary:
      'I built this project to turn discretionary options review into a repeatable workflow. It combines market data, technical context, and downside filters to rank trades based on setup quality instead of intuition alone.',
    description:
      'The dashboard pulls market data, computes technical indicators, evaluates support and trend conditions, and surfaces higher-probability put-selling setups in a single interface. The emphasis is on consistency: faster screening, clearer risk filters, and a scoring system that can be stress-tested and refined over time.',
    highlights: [
      'Engineered a multi-factor scoring model using trend strength, pullback quality, support proximity, and downside-risk filters.',
      'Automated real-time data ingestion and signal generation so candidate trades can be screened at scale instead of chart-by-chart.',
      'Designed the Streamlit experience to make ranking, filtering, and next-step evaluation fast for repeated daily use.',
    ],
    outcomes: [
      'Cuts down manual chart review by moving setup evaluation into a repeatable rules-based workflow.',
      'Makes it easier to compare opportunities across sectors and market regimes using one consistent scoring lens.',
      'Creates a foundation for future backtesting, alerting, and strategy refinement.',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'REST APIs',
      'Technical Analysis',
      'Signal Engineering',
      'Data Pipelines',
    ],
    metrics: ['100+ equities screened', 'Rules-based scoring engine', 'Real-time market data inputs'],
    images: [
      '/images/projects/stocks-tracker/dashboard-01.png',
      '/images/projects/stocks-tracker/dashboard-02.png',
      '/images/projects/stocks-tracker/dashboard-03.png',
    ],
  },
  {
    title: 'NIL Athlete Valuation Modeling & Market Analysis',
    category: 'Analytics',
    label: 'Featured case study',
    role: 'Analytics project · BigQuery ML, SQL, Python, Tableau',
    period: 'Mar 2026',
    headline:
      'Modeling athlete brand value by combining performance data, social reach, and valuation benchmarks.',
    summary:
      'This project started with a messy NIL market question: which athletes look overpriced, underpriced, or undervalued once you account for performance and audience reach? I built the analytical dataset, modeled expected valuations, and visualized the market in dashboards designed for decision-making.',
    description:
      'I scraped and joined athlete performance stats, valuation rankings, and social media metrics to create a clean analytical dataset for 300+ Division I athletes. From there I built a linear regression model in BigQuery ML, tested transformed features, and used Tableau to visualize market share, prediction error, and the variables driving athlete brand value.',
    highlights: [
      'Built the dataset from scratch by joining valuation rankings, performance stats, and social media metrics for 300+ Division I athletes.',
      'Developed a BigQuery ML regression model using transformed features and composite metrics to estimate expected NIL value.',
      'Designed interactive dashboards that made prediction error, market share, media influence, and positional patterns easy to explore.',
    ],
    outcomes: [
      'Produced a decision-ready view of overvalued and undervalued athletes for hypothetical brand partnership analysis.',
      'Combined statistical modeling with executive-facing dashboards so the analysis was useful beyond the notebook.',
      'Showed how social reach, position, and performance interact instead of relying on headline valuation alone.',
    ],
    technologies: ['BigQuery', 'SQL', 'Python', 'BigQuery ML', 'Tableau', 'Excel'],
    metrics: ['300+ D1 athletes modeled', 'BigQuery ML regression', 'Interactive Tableau dashboards'],
    images: [
      '/images/projects/nil-athlete-valuation/market-overview.png',
      '/images/projects/nil-athlete-valuation/actual-vs-predicted.png',
      '/images/projects/nil-athlete-valuation/performance-vs-valuation.png',
      '/images/projects/nil-athlete-valuation/social-media-influence.png',
      '/images/projects/nil-athlete-valuation/player-market-analysis.png',
    ],
    liveDemoUrl: 'https://nil-value-drivers-an-8oih.bolt.host/',
  },
  {
    title: 'Grant County Special Education Cooperative Website',
    category: 'Frontend',
    label: 'Featured delivery',
    role: 'Capstone project · React, Tailwind, accessibility',
    period: 'Nov 2024 - Apr 2025',
    headline:
      'A stakeholder-driven website for a public school special education cooperative.',
    summary:
      'I translated district requirements and Figma direction into modular front-end components that prioritized accessibility, clarity, and trust for parents, students, and educators.',
    description:
      'This capstone project required shipping a responsive public-facing site for the Grant County Special Education Cooperative. The work involved aligning with stakeholder needs, translating designs into reusable components, and improving usability through structured accessibility and feedback cycles.',
    highlights: [
      'Built modular React and Tailwind components from stakeholder requirements and design prototypes.',
      'Improved accessibility and usability through WCAG-focused design decisions and structured testing feedback.',
      'Worked collaboratively with a larger team to keep implementation aligned with content, design, and communication goals.',
    ],
    outcomes: [
      'Delivered a cleaner information experience for multiple audience types, including parents, students, and staff.',
      'Balanced stakeholder requests with practical implementation decisions in a real client environment.',
      'Strengthened the site’s credibility through clearer structure, stronger usability, and accessibility-minded execution.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Accessibility',
      'Usability Testing',
      'Stakeholder Collaboration',
    ],
    metrics: [
      'Public-sector stakeholder project',
      'WCAG-focused UX improvements',
      'Modular React components',
    ],
    githubUrl: 'https://github.com/Griffinov22/Grant_County_Special_Education_Cooperative',
  },
  {
    title: 'NeuroNotes',
    category: 'AI Product',
    label: 'Featured product',
    role: 'Personal project · Next.js, TypeScript, OpenAI',
    period: '2025',
    headline:
      'An AI-assisted study workspace that turns raw notes into summaries, flashcards, and self-testing tools.',
    summary:
      'I built NeuroNotes to combine the structure of a note-taking app with study workflows that feel immediately useful: summaries, key point extraction, quiz generation, and a cleaner way to organize learning.',
    description:
      'The project explores how AI can support study habits without getting in the way of them. I focused on making the experience practical: structured notes, rich editing, folder organization, and study features that help users move from capture to recall.',
    highlights: [
      'Integrated OpenAI-powered summaries, key point extraction, and flashcard generation into a single note workflow.',
      'Built rich note organization with folders, tags, and editing features designed for repeated study sessions.',
      'Treated the product like a full experience instead of a simple API demo by connecting capture, organization, and recall.',
    ],
    outcomes: [
      'Demonstrates product thinking beyond the API integration by connecting content creation and study workflows.',
      'Shows how AI features can support an existing workflow instead of acting as isolated novelty features.',
      'Expanded my experience with frontend architecture, UX decisions, and integrating AI-driven features into a cohesive product.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Product Design'],
    metrics: ['AI summaries + flashcards', 'Structured study workflow', 'Rich note organization'],
    images: [
      '/images/projects/neuro-notes/home.png',
      '/images/projects/neuro-notes/screen-01.png',
      '/images/projects/neuro-notes/screen-03.png',
      '/images/projects/neuro-notes/screen-05.png',
    ],
    githubUrl: 'https://github.com/SaagarParikh1/NeuroNotes',
  },
];

const archiveProjects: PortfolioProject[] = [
  {
    title: 'Ball Analytics',
    category: 'Product',
    role: 'Co-founded startup · Flutter and product workflow design',
    headline: 'A coaching assistant for film review, playbook creation, and team collaboration.',
    summary: 'Built around real football coaching workflows instead of spreadsheet-heavy review.',
    description:
      'Ball Analytics explored how football coaches could move from disconnected film review and playbook tools into one workflow. I worked on front-end delivery, product structure, and making the interface practical for everyday coaching use.',
    highlights: [
      'Co-founded the product and shaped it around real coaching workflows rather than generic sports-tech assumptions.',
      'Connected film markup, playbook organization, and team collaboration into a single product direction.',
      'Worked in Flutter and Dart to keep the front-end logic scalable as the workflow expanded.',
    ],
    outcomes: [
      'Helped reduce the friction of spreadsheet-based review and fragmented coaching tools.',
      'Created a more realistic product foundation for onboarding high school football programs.',
      'Strengthened my experience in startup collaboration, product iteration, and applied UX thinking.',
    ],
    technologies: ['Flutter', 'Dart', 'Supabase', 'Product Design', 'Workflow Mapping'],
    metrics: ['Startup co-founder', 'Coach-focused workflow design', 'Beta program onboarding'],
    githubUrl: 'https://github.com/SaagarParikh1/ball-analytics',
  },
  {
    title: 'Ticket Scout',
    category: 'Frontend',
    role: 'Personal project · React and API integration',
    headline: 'A ticket comparison experience built to surface better pricing faster.',
    summary: 'Aggregated pricing, search, and filtering into one cleaner comparison flow.',
    description:
      'Ticket Scout focused on making price comparison easier across multiple platforms. The project combined search, trending views, and event-level exploration into a cleaner experience for people trying to compare before they buy.',
    highlights: [
      'Built real-time comparison and filtering workflows across multiple ticket sources.',
      'Designed the search experience to help users move from discovery to evaluation quickly.',
      'Focused on responsive interaction design and clearer data presentation.',
    ],
    outcomes: [
      'Improved how quickly users could compare listings without bouncing across multiple sites.',
      'Expanded my API integration and front-end state management experience.',
      'Demonstrated how utility products can still benefit from stronger UX structure.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    metrics: ['Real-time search flow', 'Cross-platform price comparison', 'Responsive UI'],
    images: [
      '/images/projects/ticket-scout/home.png',
      '/images/projects/ticket-scout/event-search.png',
      '/images/projects/ticket-scout/mavericks-listing.png',
      '/images/projects/ticket-scout/trending.png',
    ],
    githubUrl: 'https://github.com/SaagarParikh1/TicketScoutV2',
  },
  {
    title: 'TravelX',
    category: 'Frontend',
    role: 'Personal project · Multi-page travel platform',
    headline: 'A travel planning concept that combines weather, activities, and AI recommendations.',
    summary: 'Combined live data and AI suggestions into a more guided trip-planning flow.',
    description:
      'This project blended destination research, weather context, activity suggestions, and AI-generated recommendations into a multi-page interface. The emphasis was on a smoother planning journey rather than isolated widgets.',
    highlights: [
      'Combined live weather, activities, and destination research into one travel flow.',
      'Integrated OpenAI-assisted recommendations to personalize trip ideas and itineraries.',
      'Designed the experience across multiple pages with responsiveness in mind from the start.',
    ],
    outcomes: [
      'Created a more cohesive travel experience by unifying data that usually lives across separate tools.',
      'Strengthened my ability to structure multi-page information architecture and API-driven UI.',
      'Showed how AI can support exploration without overwhelming the rest of the product.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration', 'OpenAI API'],
    metrics: ['Weather + activities data', 'AI travel recommendations', 'Multi-page UX flow'],
    images: [
      '/images/projects/travel-x/home.png',
      '/images/projects/travel-x/weather-dallas.png',
      '/images/projects/travel-x/activities.png',
      '/images/projects/travel-x/ai-assistant.png',
    ],
    githubUrl: 'https://github.com/SaagarParikh1/TravelX',
  },
  {
    title: 'Recipe Finder',
    category: 'Frontend',
    role: 'Personal project · Search and API design',
    headline: 'An ingredient-first recipe search flow built to reduce friction in meal discovery.',
    summary: 'Focused on fast search, filtering, and cleaner recipe exploration.',
    description:
      'Recipe Finder was built around a practical user problem: finding something useful to make with what is already available. I designed the interface around fast discovery, filtering, and clean presentation of recipe results.',
    highlights: [
      'Created an ingredient-based search workflow with API-backed recipe results.',
      'Built filtering and navigation patterns designed to reduce friction during browsing.',
      'Prioritized clearer data presentation so users could compare options more quickly.',
    ],
    outcomes: [
      'Improved the usability of a search-heavy interface by simplifying the flow from input to results.',
      'Expanded my experience with API integration and interaction design for utility products.',
      'Demonstrated how better interface structure can improve a straightforward product concept.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    metrics: ['Ingredient-based search', 'Filter-driven browsing', 'Clean recipe discovery flow'],
    images: [
      '/images/projects/recipe-finder/home.png',
      '/images/projects/recipe-finder/mexican-results.png',
      '/images/projects/recipe-finder/edit-mode.png',
      '/images/projects/recipe-finder/random-recipe.png',
    ],
    githubUrl: 'https://github.com/SaagarParikh1/recipe-finder',
  },
  {
    title: 'NBA Injury & Availability Analytics',
    category: 'Analytics',
    role: 'Independent analysis · Python and exploratory modeling',
    headline: 'Linking injury patterns and player availability to team-level outcomes.',
    summary: 'Explored how return timelines and availability shape team performance.',
    description:
      'This project focused on understanding injury patterns beyond isolated anecdotes. I cleaned box scores and injury data, engineered availability features, and used visuals to explore how time lost and player availability affect team-level performance.',
    highlights: [
      'Modeled injury timing and return patterns across positions and teams.',
      'Engineered availability features to estimate team-level impact more clearly.',
      'Used dashboards and exploratory visuals to make patterns easier to compare over time.',
    ],
    outcomes: [
      'Produced a clearer analytical lens for understanding how availability affects results.',
      'Improved my experience working with sports datasets, temporal features, and exploratory storytelling.',
      'Balanced modeling work with visuals that could be explained quickly to non-technical audiences.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'Scikit-learn'],
    metrics: ['Availability feature engineering', 'Season-over-season pattern analysis', 'Team-level dashboards'],
    images: ['/images/projects/analytics/nba-injury-dashboard.png'],
    githubUrl: 'https://github.com/SaagarParikh1/NBAInjuryRiskCaseStudy',
  },
  {
    title: 'Climate & Extreme Weather Trends',
    category: 'Analytics',
    role: 'Independent analysis · Long-horizon trend exploration',
    headline: 'A 40-year view of climate indicators, seasonality, and extreme-event anomalies.',
    summary: 'Used long-horizon environmental data to surface shifts, outliers, and regional risk.',
    description:
      'This project combined multi-source climate and weather data into a cleaner analytical view of long-term change. The work centered on anomaly detection, rolling trends, and visuals designed to make regional patterns easier to interpret.',
    highlights: [
      'Normalized long-horizon data sources and engineered anomaly flags for extreme events.',
      'Used rolling averages and trend comparisons to show how patterns changed over time.',
      'Designed visuals that emphasized seasonality, deviations, and regional comparison.',
    ],
    outcomes: [
      'Created a decision-friendly view of climate risk patterns from otherwise unwieldy public datasets.',
      'Expanded experience with long-range time series analysis and storytelling through visualization.',
      'Strengthened the connection between analytical rigor and public-facing clarity.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Tableau', 'Open Data'],
    metrics: ['40-year time horizon', 'Anomaly detection', 'Regional trend comparison'],
    images: ['/images/projects/analytics/weather-trends-dashboard.png'],
    githubUrl: 'https://github.com/SaagarParikh1/WeatherEvents-ClimateChange',
  },
  {
    title: 'E-Commerce Revenue & Customer Intelligence Dashboard',
    category: 'Analytics',
    role: 'Independent analysis · Executive KPI dashboarding',
    headline: 'Turning transaction data into retention, revenue, and concentration insights.',
    summary: 'Built a KPI dashboard from 25,000+ transaction records with executive-friendly framing.',
    description:
      'This project focused on KPI design and stakeholder-friendly reporting. I engineered metrics including revenue concentration, retention, and average order value, then translated the analysis into dashboards that would be useful for ongoing business review.',
    highlights: [
      'Engineered revenue, retention, and concentration KPIs from 25,000+ transaction records.',
      'Used advanced SQL aggregations and window functions to build reusable analytical logic.',
      'Structured the dashboard around executive scanning: trend first, segmentation second, product detail third.',
    ],
    outcomes: [
      'Created a clearer picture of customer behavior and revenue concentration for business decision-making.',
      'Showed how KPI design choices shape the usefulness of a dashboard for leadership teams.',
      'Strengthened my ability to move from raw transactional data to executive-ready reporting.',
    ],
    technologies: ['SQL', 'Tableau', 'Excel', 'Data Analysis'],
    metrics: ['25,000+ transaction records', 'Executive KPI framework', 'Revenue concentration insights'],
    images: ['/images/projects/analytics/ecommerce-dashboard.png'],
  },
  {
    title: 'The Shoreline Hotel',
    category: 'UX',
    role: 'Concept project · Hospitality website design',
    headline: 'A visual hospitality concept built around atmosphere, trust, and booking clarity.',
    summary: 'Created a visual-first hotel concept focused on navigation, mood, and booking trust.',
    description:
      'The Shoreline Hotel project was an exploration of how layout, imagery, and page pacing can create a stronger hospitality brand feel. The work emphasized atmosphere while still keeping key actions and information easy to navigate.',
    highlights: [
      'Designed a multi-page site with rooms, amenities, activities, and booking context.',
      'Used visual hierarchy and parallax effects to create a more immersive brand experience.',
      'Focused on balancing aesthetic storytelling with practical navigation.',
    ],
    outcomes: [
      'Expanded my comfort with more visual-first design decisions and brand presentation.',
      'Showed how layout and pacing influence perceived quality in hospitality experiences.',
      'Reinforced the importance of balancing emotion, clarity, and usability in a marketing site.',
    ],
    technologies: ['Wix', 'Adobe Photoshop', 'Responsive Design', 'UI/UX Design'],
    metrics: ['Hospitality storytelling', 'Multi-page visual system', 'Responsive presentation'],
    images: [
      '/images/projects/shoreline-hotel/home.png',
      '/images/projects/shoreline-hotel/activities.png',
      '/images/projects/shoreline-hotel/reviews.png',
      '/images/projects/shoreline-hotel/rooms.png',
    ],
    liveDemoUrl: 'https://saagarparikh11.wixsite.com/theshorelinehotel-co',
  },
];

const archiveFilters = ['All', 'Analytics', 'Frontend', 'Product', 'UX'];

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [archiveFilter, setArchiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const activeProject = featuredProjects[activeProjectIndex];
  const activeImages = activeProject.images ?? [];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProjectIndex]);

  const filteredArchiveProjects =
    archiveFilter === 'All'
      ? archiveProjects
      : archiveProjects.filter((project) => project.category === archiveFilter);

  const showPreviousImage = () => {
    if (activeImages.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? activeImages.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (activeImages.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === activeImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const featuredMeta = [activeProject.label, activeProject.period, activeProject.role, activeProject.status]
    .filter(Boolean)
    .join(' • ');

  const currentImage = activeImages[activeImageIndex];

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1,
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 className="section-title">
              Case studies that show how I think, build, and present the work.
            </h2>
          </div>
          <p className="section-copy max-w-lg">
            A few projects get the deeper walkthrough. The rest stay in a lighter archive so the
            page is easier to scan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.3fr_0.7fr]">
          <div className="space-y-3">
            {featuredProjects.map((project, index) => {
              const Icon = categoryIcons[project.category as keyof typeof categoryIcons] ?? Sparkles;

              return (
                <button
                  key={project.title}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`w-full rounded-[1.35rem] border px-5 py-4 text-left transition duration-300 ${
                    index === activeProjectIndex
                      ? 'border-[rgba(208,160,93,0.4)] bg-[rgba(255,255,255,0.06)]'
                      : 'border-white/10 bg-[rgba(255,255,255,0.03)] hover:border-white/20 hover:bg-[rgba(255,255,255,0.045)]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full border border-white/10 p-2.5 text-[var(--accent-strong)]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                            {project.category}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--text)] sm:text-[1.2rem]">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-sm text-[color:var(--muted)]">0{index + 1}</span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                        {project.headline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="surface overflow-hidden rounded-[2rem]">
            <div className="grid xl:grid-cols-[0.6fr_0.4fr]">
              <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
                {currentImage ? (
                  <div className="relative flex min-h-[26rem] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%),linear-gradient(180deg,#14110d_0%,#0c0a08_100%)] p-4 sm:p-6 lg:p-8">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(5,5,4,0.52)] p-3 sm:p-4">
                      <img
                        src={currentImage}
                        alt={`${activeProject.title} preview ${activeImageIndex + 1}`}
                        className="max-h-[34rem] w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                      />
                      <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        {activeImageIndex + 1} / {activeImages.length}
                      </div>
                    </div>

                    {activeImages.length > 1 && (
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

                    {activeImages.length > 1 && (
                      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 px-4">
                        {activeImages.map((image, index) => (
                          <button
                            key={image}
                            onClick={() => setActiveImageIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              index === activeImageIndex
                                ? 'w-8 bg-[var(--accent-strong)]'
                                : 'w-2.5 bg-white/40'
                            }`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex min-h-[25rem] flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(208,160,93,0.18),transparent_40%),linear-gradient(180deg,#17130e_0%,#0f0d09_100%)] p-8">
                    <div>
                      <span className="eyebrow-pill">{activeProject.label ?? 'Selected work'}</span>
                      <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                        {activeProject.category}
                      </p>
                      <h3 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-[var(--text)]">
                        {activeProject.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-base leading-7 text-[color:var(--muted)]">
                        {activeProject.headline}
                      </p>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {activeProject.metrics.map((metric) => (
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

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    {featuredMeta && (
                      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                        {featuredMeta}
                      </p>
                    )}
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--text)] sm:text-[1.9rem]">
                      {activeProject.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={showPreviousProject}
                      className="rounded-full border border-white/10 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                      aria-label="Previous featured project"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={showNextProject}
                      className="rounded-full border border-white/10 p-2 text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                      aria-label="Next featured project"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="mt-5 text-[1rem] leading-7 text-[var(--accent-strong)] sm:text-[1.05rem]">
                  {activeProject.headline}
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)] sm:text-base">
                  {activeProject.summary}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {activeProject.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <p className="text-sm leading-6 text-[var(--text)]">{metric}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    What shipped
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                        <span className="text-sm leading-6 text-[color:var(--muted)]">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeProject.liveDemoUrl && (
                    <a
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#1c1407] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                    >
                      <Github className="h-4 w-4" />
                      View code
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(activeProject)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--accent-strong)]"
                  >
                    Open case study
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="section-kicker">Archive</p>
            <h3 className="text-[1.85rem] font-semibold leading-tight text-[var(--text)] sm:text-[2.2rem]">
              More builds, kept lighter.
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[color:var(--muted)] sm:text-base">
              Still relevant to the story, just easier to scan at a glance.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {archiveFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setArchiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-300 ${
                    archiveFilter === filter
                      ? 'bg-[var(--accent)] text-[#1c1407]'
                      : 'border border-white/10 text-[color:var(--muted)] hover:border-[rgba(208,160,93,0.45)] hover:text-[var(--text)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="surface overflow-hidden rounded-[2rem]">
            <div className="divide-y divide-white/10">
              {filteredArchiveProjects.map((project) => {
                const Icon = categoryIcons[project.category as keyof typeof categoryIcons] ?? Sparkles;

                return (
                  <button
                    key={project.title}
                    onClick={() => setSelectedProject(project)}
                    className="grid w-full gap-4 px-5 py-5 text-left transition duration-300 hover:bg-white/5 md:grid-cols-[1.1fr_0.9fr_auto] md:items-center"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full border border-white/10 p-2.5 text-[var(--accent-strong)]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                          {project.category}
                        </p>
                        <h4 className="mt-2 text-lg font-semibold text-[var(--text)] sm:text-xl">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm text-[var(--text)] md:justify-end">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
