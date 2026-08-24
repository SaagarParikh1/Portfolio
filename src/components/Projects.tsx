import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  Compass,
  Sparkles,
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import type { PortfolioProject } from '../types/portfolio';

const categoryIcons = {
  Analytics: BarChart3,
  Frontend: Blocks,
  Operations: BarChart3,
  Product: Sparkles,
  UX: Compass,
  'AI Product': BrainCircuit,
};

const categoryToneMap = {
  Analytics: {
    accent: 'text-[var(--blue)]',
    tag: 'bg-[var(--blue)] text-white',
    panel: 'border-[var(--blue)]',
  },
  Frontend: {
    accent: 'text-[var(--red)]',
    tag: 'bg-[var(--red)] text-white',
    panel: 'border-[var(--red)]',
  },
  Operations: {
    accent: 'text-[var(--copper)]',
    tag: 'bg-[var(--copper)] text-white',
    panel: 'border-[var(--copper)]',
  },
  Product: {
    accent: 'text-[var(--teal)]',
    tag: 'bg-[var(--teal)] text-white',
    panel: 'border-[var(--teal)]',
  },
  'AI Product': {
    accent: 'text-[var(--green)]',
    tag: 'bg-[var(--green)] text-[var(--ink)]',
    panel: 'border-[var(--green)]',
  },
  UX: {
    accent: 'text-[var(--red)]',
    tag: 'bg-[var(--red)] text-white',
    panel: 'border-[var(--red)]',
  },
};

const featuredProjectLibrary: PortfolioProject[] = [
  {
    title: 'EV Charging Network Analytics Dashboard',
    category: 'Operations',
    label: 'Featured Power BI analysis',
    role: 'Operations analytics project · SQL, Excel, Power BI',
    period: 'Jul 2026 - Aug 2026',
    headline:
      'A Power BI decision-support dashboard for evaluating revenue, profitability, fleet utilization, and charging-network performance.',
    summary:
      'Analyzed 50,000 autonomous vehicle trips and translated the results into an interactive operating view for understanding network performance and testing strategic business scenarios.',
    description:
      'This project models an EV charging and autonomous fleet network as an operations analytics problem. I used SQL and Excel to prepare trip-level data, structured the Power BI model around a star schema, and created DAX measures that connect revenue and profitability with fleet utilization and broader operating performance.',
    highlights: [
      'Analyzed 50,000 autonomous vehicle trips using SQL, Excel, and Power BI to evaluate revenue, profitability, fleet utilization, and operational performance.',
      'Built a star-schema data model and used Power Query transformations to create a reliable analytical layer for dashboard reporting.',
      'Developed DAX measures and interactive Power BI views to identify revenue drivers and evaluate strategic business scenarios.',
    ],
    outcomes: [
      'Consolidated commercial and operational measures into one decision-support view instead of treating revenue, utilization, and fleet activity as separate analyses.',
      'Made it easier to compare performance drivers and explore how changes in operating assumptions could affect the network.',
      'Demonstrated an end-to-end Power BI workflow spanning data preparation, dimensional modeling, measure development, visualization, and business interpretation.',
    ],
    technologies: [
      'Power BI',
      'SQL',
      'Excel',
      'Power Query',
      'DAX',
      'Star Schema',
      'Data Modeling',
      'Scenario Analysis',
    ],
    metrics: ['50,000 vehicle trips', 'Star-schema Power BI model', 'Revenue + fleet KPI analysis'],
    decisionFocus:
      'Helps operators compare revenue, profitability, fleet utilization, and network performance while evaluating which business scenarios deserve further attention.',
    keyInsights: [
      'Commercial performance is easier to explain when trip activity, utilization, and profitability are evaluated in the same model.',
      'A star schema and reusable DAX measures make scenario comparisons more consistent than disconnected spreadsheet calculations.',
      'Interactive BI views help decision-makers move from high-level KPIs into the operating drivers behind them.',
    ],
    images: ['/images/projects/ev-charging-network/thumbnail.svg'],
  },
  {
    title: 'Project Atlantis OS',
    category: 'Operations',
    label: 'Featured decision-support app',
    role: 'Operations analytics project · React, TypeScript, Excel modeling',
    period: 'Jul 2026',
    status: 'Live',
    headline:
      'A deep-sea logistics optimization and crisis simulation platform built from an Excel-based supply chain model.',
    summary:
      'Translated a fictional 52-week deep-sea operations model into an executive web application covering 14 SKUs, 14 extraction rigs, 6 platforms, 7 vessel classes, and 35 disruption events.',
    description:
      'Project Atlantis OS is a fictional supply chain decision-support model translated from an Excel-based portfolio model into a cinematic web application. The experience models high-value chemical SKUs moving through an extreme deep-sea logistics network where disruptions can cascade across extraction rigs, midstream platforms, vessels, refinery intake, and commercial contracts.',
    highlights: [
      'Built a React and TypeScript command-center experience that turns workbook-modeled supply chain data into interactive dashboards, route views, financial readouts, and scenario simulations.',
      'Designed explainable route-scoring logic across revenue protection, platform capacity, weather risk, security exposure, vessel compatibility, cost score, delay risk, penalty exposure, and active disruption severity.',
      'Modeled crisis scenarios including typhoon shocks, piracy, platform failure, fuel crisis, cyber spoofing, and multi-crisis disruption stacks with updated profit, penalties, mitigation cost, affected assets, and recommended actions.',
    ],
    outcomes: [
      'Demonstrated how optimized routing and capacity-aware allocation can protect high-value SKUs when the operating network is under stress.',
      'Converted a spreadsheet-style analytics model into a more recruiter-friendly executive operations platform with clear narrative, visuals, and decision pathways.',
      'Connected supply chain analytics, financial modeling, scenario planning, dashboard design, and web product execution in one portfolio project.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'Excel Modeling',
      'SheetJS',
      'Scenario Modeling',
      'Route Optimization',
    ],
    metrics: [
      '728 SKU-week simulation rows',
      '35 disruption events modeled',
      'Executive control tower interface',
    ],
    decisionFocus:
      'Helps evaluate which routes, SKUs, platforms, and response actions preserve the most value when deep-sea logistics disruptions affect capacity, risk, and financial performance.',
    keyInsights: [
      'Route optimization is most useful when the scoring logic is explainable enough for operators to understand the tradeoffs behind each recommendation.',
      'Scenario simulation makes second-order impacts visible by showing how disruptions affect profit, penalties, affected assets, recovery confidence, and operational risk.',
      'Turning an Excel model into an interactive application can make complex operations analysis easier to scan, trust, and discuss with non-technical stakeholders.',
    ],
    images: ['/images/projects/project-atlantis/screen-01.png'],
    liveDemoUrl: 'https://project-atlantis-rust.vercel.app/',
  },
  {
    title: 'Galactic Relief Network: Supply Chain Resilience & Logistics Analytics Platform',
    category: 'Operations',
    label: 'Featured logistics simulation',
    role: 'Supply chain analytics project · Excel, Google Sheets, Tableau',
    period: 'Jun 2026 - Jul 2026',
    status: 'Live',
    headline:
      'A Star Wars-inspired humanitarian logistics simulator for prioritizing relief delivery across disruption-prone supply chains.',
    summary:
      'Built an end-to-end analytics framework for a Rebel-aligned relief network operating under blockade conditions, balancing humanitarian demand, depot capacity, inventory coverage, route risk, and scenario disruptions.',
    description:
      'Galactic Relief Network is a serious supply chain analytics and business intelligence project set inside a Star Wars-inspired humanitarian logistics scenario. Acting as a Rebel-aligned relief command, the model evaluates planetary demand, depot placement, fleet capacity, transportation risk, cargo priority, inventory availability, relief requests, and disruption scenarios to support better logistics decisions under constrained capacity.',
    highlights: [
      'Developed an end-to-end supply chain analytics model spanning 25+ locations and 100+ transportation routes to evaluate demand prioritization, depot selection, inventory allocation, routing, and fulfillment decisions.',
      'Built weighted scoring models, risk-adjusted cost calculations, inventory urgency metrics, and disruption scenario analyses to evaluate resilience, bottlenecks, and resource allocation tradeoffs.',
      'Designed three executive Tableau dashboards with KPI scorecards, network visualizations, route risk analysis, inventory heatmaps, and scenario simulations for strategic and tactical decision-making.',
    ],
    outcomes: [
      'Showed that the highest humanitarian demand was not always the best first-served location once transportation risk, inventory availability, and network constraints were considered.',
      'Demonstrated that medium-sized depots could outperform larger facilities when cost, security exposure, detection risk, and response coverage were scored together.',
      'Replaced first-come-first-served relief processing with a structured fulfillment queue aligned to humanitarian impact, cargo urgency, operational feasibility, and capacity constraints.',
    ],
    technologies: [
      'Excel',
      'Google Sheets',
      'Tableau',
      'Supply Chain Analytics',
      'Scenario Modeling',
      'Network Optimization',
      'Route Risk Analysis',
      'Inventory Management',
      'KPI Development',
    ],
    metrics: [
      '25+ locations modeled',
      '100+ transportation routes',
      'Scenario-based optimization',
    ],
    decisionFocus:
      'Helps determine which relief requests should be served first, which depots are most resilient, which routes are operationally viable, and how disruptions could cascade across the logistics network.',
    keyInsights: [
      'Humanitarian urgency and operational feasibility have to be scored together because the highest-demand destination is not always the best first fulfillment decision.',
      'Low transportation cost can become misleading when delay probability, interdiction risk, cargo loss exposure, and disruption penalties are included.',
      'Inventory health is more useful when measured by cargo criticality and projected stockout risk rather than total stock volume alone.',
    ],
    images: [
      '/images/projects/galactic-relief-network/screen-01.png',
      '/images/projects/galactic-relief-network/screen-02.png',
      '/images/projects/galactic-relief-network/screen-03.png',
    ],
    liveDemoUrl: 'https://supply-chain-resilie-v100.bolt.host/',
  },
  {
    title: 'Lost Colony Expedition: Asteria-7 Failure Investigation',
    category: 'Analytics',
    label: 'Featured investigation',
    role: 'BI project · Excel, Google Sheets, Tableau',
    period: 'Jun 2026',
    headline:
      'A mission-control analytics project for investigating a simulated colony collapse through multi-source operational data.',
    summary:
      'Built a multi-source incident investigation using Excel, Google Sheets, and Tableau to analyze colony operations data across life support, logistics, medical, equipment, research, security, and communications systems.',
    description:
      'This project turns a fictional 2147 colony failure into a practical analytics workflow. After Outpost Asteria-7 loses contact with Earth, the investigation uses recovered logs, resource records, medical incidents, research sample data, access events, and communications archives to determine whether the collapse came from resource shortages, equipment failures, biological contamination, human error, or cascading system breakdowns.',
    highlights: [
      'Combined operational, cargo, equipment, medical, security, research, and communications datasets into one investigation model.',
      'Built spreadsheet-based risk scores, anomaly flags, shortage analysis, and timeline logic using lookup functions, conditional formulas, pivots, and validation checks.',
      'Designed a mission-control Tableau dashboard to surface colony health, atmospheric stability, equipment downtime, medical clusters, research risk, and recovered transmissions.',
    ],
    outcomes: [
      'Reframed dashboarding as root-cause investigation instead of static metric reporting.',
      'Connected evidence across multiple systems to identify cascading failure patterns and escalation points.',
      'Created an analyst-friendly story where conclusions are reached through trends, anomalies, and evidence correlation.',
    ],
    technologies: [
      'Excel',
      'Google Sheets',
      'Tableau',
      'Pivot Tables',
      'Risk Scoring',
      'Anomaly Detection',
      'Root Cause Analysis',
    ],
    metrics: [
      '7 operational datasets',
      'Risk scoring + anomaly detection',
      'Mission-control Tableau dashboard',
    ],
    decisionFocus:
      'Helps determine which systems failed first, which anomalies mattered most, and whether the colony collapse was driven by a single root cause or multiple cascading failures.',
    keyInsights: [
      'The strongest investigation path comes from correlating life support, medical, logistics, research, and communications signals rather than reviewing each dataset in isolation.',
      'Risk scoring makes the unknown failure scenario easier to triage by ranking systems, samples, and events by investigation priority.',
      'A narrative dashboard can guide users from mission status to root-cause evidence without handing them a predefined answer.',
    ],
    images: [
      '/images/projects/lost-colony-asteria/screen-01.png',
      '/images/projects/lost-colony-asteria/screen-02.png',
    ],
    liveDemoUrl: 'https://lost-colony-data-inv-nhrb.bolt.host/',
  },
  {
    title: 'Quantitative Options Strategy Dashboard',
    category: 'Analytics',
    label: 'Featured build',
    role: 'Independent project · Python, Streamlit, backtesting',
    period: 'Mar 2026 - Present',
    status: 'Live',
    headline:
      'A deployed analytics platform for ranking cash-secured put opportunities with live signals and backtested rules.',
    summary:
      'Built and deployed a Python and Streamlit analytics platform that evaluates 100+ equities to identify high-probability cash-secured put opportunities, replacing manual chart analysis with a scalable, data-driven decision system.',
    description:
      'The platform pulls real-time market data, scores setups across technical and risk dimensions, and ranks opportunities into actionable buckets such as trade-ready, candidate, watchlist, and avoid. I also added automated backtesting, ranked trade queues, technical chart overlays, and interpretable signal explanations so the workflow is faster to trust, review, and refine.',
    highlights: [
      'Built and deployed a Python and Streamlit platform that evaluates 100+ equities instead of relying on manual chart-by-chart review.',
      'Engineered a multi-factor scoring model using trend strength, support clustering, liquidity, market regime, and downside-risk signals to classify setups into trade-ready, candidate, watchlist, and avoid.',
      'Implemented automated backtesting, ranked trade queues, technical chart overlays, and interpretable signal explanations to support faster and more consistent trading decisions.',
    ],
    outcomes: [
      'Replaces manual chart analysis with a scalable workflow that can screen and prioritize opportunities consistently.',
      'Makes it easier to compare setups across different market conditions using one rules-based scoring lens.',
      'Creates a stronger foundation for strategy refinement because live signals and backtesting now sit in the same system.',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'REST APIs',
      'Technical Analysis',
      'Backtesting',
      'Signal Engineering',
      'Data Pipelines',
    ],
    metrics: ['100+ equities evaluated', 'Automated backtesting workflow', 'Trade-ready classification engine'],
    decisionFocus:
      'Helps determine which cash-secured put setups are trade-ready now, which deserve monitoring, and which should be avoided using repeatable signal logic and backtested rules.',
    keyInsights: [
      'A ranked classification system is more useful than a simple pass-fail signal because it creates a clearer trade queue.',
      'Backtesting adds another layer of discipline by checking whether attractive-looking setups actually hold up under repeated rules.',
      'Interpretable signal explanations and chart overlays make the model easier to trust and refine during active review.',
    ],
    images: [
      '/images/projects/Putdashboard/screen-01.png',
      '/images/projects/Putdashboard/screen-02.png',
      '/images/projects/Putdashboard/screen-03.png',
      '/images/projects/Putdashboard/screen-04.png',
      '/images/projects/Putdashboard/screen-05.png',
      '/images/projects/Putdashboard/screen-06.png',
    ],
    liveDemoUrl: 'https://put-selling-dashboard.streamlit.app/',
  },
  {
    title: 'NIL Athlete Valuation Modeling & Market Analysis',
    category: 'Analytics',
    label: 'Featured project',
    role: 'Analytics project · BigQuery ML, SQL, Python, Tableau',
    period: 'Feb 2026 - Mar 2026',
    headline:
      'A model and dashboard suite for spotting overvalued, undervalued, and strategically attractive NIL opportunities.',
    summary:
      'I analyzed athlete performance, social reach, and valuation data to estimate what an athlete should be worth and where the market looked inefficient for a hypothetical brand partnership decision.',
    description:
      'I scraped and joined athlete performance stats, valuation rankings, and social media metrics to create a clean analytical dataset for 300 Division I athletes. From there I built a BigQuery ML regression model, tested transformed features, and translated the results into Tableau dashboards designed to compare valuation gaps, market share, and the signals that matter most.',
    highlights: [
      'Joined valuation rankings, performance data, and social metrics into a single analytical dataset for 300 Division I athletes.',
      'Estimated expected NIL value with a BigQuery ML regression model using transformed features and composite metrics.',
      'Translated model output into dashboards that made valuation gaps, market share, and athlete comparisons easy to scan.',
    ],
    outcomes: [
      'Surfaced potentially overvalued and undervalued athletes for hypothetical sponsorship decisions.',
      'Showed how market price can diverge from performance once audience reach enters the picture.',
      'Combined modeling and dashboards so the findings were useful beyond the notebook.',
    ],
    technologies: ['BigQuery', 'SQL', 'Python', 'BigQuery ML', 'Tableau', 'Excel'],
    metrics: ['300 D1 athletes modeled', 'BigQuery ML regression', 'Interactive Tableau dashboards'],
    decisionFocus:
      'Helps evaluate where NIL valuations appear mispriced before making partnership or sponsorship decisions.',
    keyInsights: [
      'Social reach emerged as one of the clearest drivers of NIL value once basic performance measures were accounted for.',
      'Prediction gaps surfaced athletes whose market valuations looked richer or cheaper than their underlying profile suggested.',
      'Position-based views made it easier to compare where valuation patterns were structural versus player-specific.',
    ],
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
      'A stakeholder-first website built to help families and staff find the right information faster.',
    summary:
      'I translated district requirements and Figma direction into an accessible front-end experience designed to reduce confusion and make important information easier to find for families, students, and staff.',
    description:
      'This capstone project focused on a public-facing site for the Grant County Special Education Cooperative. The work centered on content clarity, accessibility, and stakeholder needs rather than visual polish alone, with iterative feedback used to improve trust and usability.',
    highlights: [
      'Translated stakeholder requirements and design prototypes into modular React and Tailwind components.',
      'Improved accessibility and usability through WCAG-focused design decisions and structured testing feedback.',
      'Worked closely with a larger team to keep implementation aligned with content, design, and communication goals.',
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
    decisionFocus:
      'Helps families and staff find the right service, contact, or program information quickly without navigating a confusing district site.',
    keyInsights: [
      'Accessibility improvements had to support trust and clarity, not just compliance.',
      'Different audiences needed different paths through the same content, so structure mattered as much as design.',
      'Stakeholder feedback was most valuable when turned into concrete navigation and content decisions.',
    ],
    images: ['/images/projects/grant-county/thumbnail.svg'],
    githubUrl: 'https://github.com/Griffinov22/Grant_County_Special_Education_Cooperative',
  },
  {
    title: 'NeuroNotes',
    category: 'AI Product',
    label: 'Product project',
    role: 'Personal project · Next.js, TypeScript, OpenAI',
    period: '2025',
    headline:
      'An AI-assisted study workspace designed to turn notes into summaries, flashcards, and active recall faster.',
    summary:
      'I approached NeuroNotes as a workflow problem, not just an AI feature demo. The goal was to help students move from note capture to review and self-testing without jumping between separate tools.',
    description:
      'The project explores how AI can support study habits without getting in the way of them. I focused on making the experience practical: structured notes, rich editing, folder organization, and study features that help users move from capture to recall inside one product flow.',
    highlights: [
      'Integrated OpenAI-powered summaries, key point extraction, and flashcard generation into a single note workflow.',
      'Designed note organization with folders, tags, and editing features to support repeated study sessions.',
      'Connected capture, organization, and recall so the product felt like a full workflow instead of a one-off AI tool.',
    ],
    outcomes: [
      'Demonstrates product thinking beyond the API integration by connecting content creation and study workflows.',
      'Shows how AI features can support an existing workflow instead of acting as isolated novelty features.',
      'Expanded my experience with frontend architecture, UX decisions, and integrating AI-driven features into a cohesive product.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Product Design'],
    metrics: ['AI summaries + flashcards', 'Structured study workflow', 'Rich note organization'],
    decisionFocus:
      'Helps students decide what to review next and move from passive notes to active recall with less friction.',
    keyInsights: [
      'AI features are most useful when they are embedded in an existing note workflow instead of exposed as standalone prompts.',
      'Structured organization matters because summaries, flashcards, and quizzes are only helpful when source material stays easy to retrieve.',
      'The product is strongest when generation, editing, and review live in the same study flow.',
    ],
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
    decisionFocus:
      'Helps coaches review film, organize plays, and collaborate in one workflow instead of switching between disconnected tools.',
    keyInsights: [
      'Coaching workflows break down when film review, play design, and team communication are separated across tools.',
      'A product for coaches has to match their daily habits closely or adoption friction rises quickly.',
      'Reducing operational friction can matter as much as adding features when the audience works under time pressure.',
    ],
    images: ['/images/projects/ball-analytics/thumbnail.svg'],
    githubUrl: 'https://github.com/SaagarParikh1/ball-analytics',
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
];

const allProjects = [...featuredProjectLibrary, ...archiveProjects];

const featuredProjects = [
  'EV Charging Network Analytics Dashboard',
  'Galactic Relief Network: Supply Chain Resilience & Logistics Analytics Platform',
  'NIL Athlete Valuation Modeling & Market Analysis',
].flatMap((title) => allProjects.filter((project) => project.title === title));

const orderedArchiveProjects = [
  'Project Atlantis OS',
  'Lost Colony Expedition: Asteria-7 Failure Investigation',
  'Quantitative Options Strategy Dashboard',
  'Grant County Special Education Cooperative Website',
  'Ball Analytics',
  'NBA Injury & Availability Analytics',
  'NeuroNotes',
].flatMap((title) => allProjects.filter((project) => project.title === title));

const getCategoryIcon = (category: string) =>
  categoryIcons[category as keyof typeof categoryIcons] ?? Sparkles;

const getCategoryTone = (category: string) =>
  categoryToneMap[category as keyof typeof categoryToneMap] ?? categoryToneMap.Product;

const ProjectThumbnail = ({
  project,
  className,
}: {
  project: PortfolioProject;
  className?: string;
}) => {
  const preview = project.images?.[0];
  const Icon = getCategoryIcon(project.category);

  if (preview) {
    return (
      <div
        className={`project-image-frame ${className ?? ''}`}
      >
        <img
          src={preview}
          alt={`${project.title} thumbnail`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-[var(--line)] bg-white text-[var(--ink)] ${className ?? ''}`}
      style={{ borderRadius: 8 }}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
};

const FeaturedProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: PortfolioProject;
  index: number;
  onSelect: (project: PortfolioProject) => void;
}) => {
  const preview = project.images?.[0];
  const Icon = getCategoryIcon(project.category);
  const isLead = index === 0;

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className={`selected-work-card ${isLead ? 'selected-work-card-lead lg:col-span-2' : ''}`}
    >
      <div className="selected-work-media">
        {preview ? (
          <img src={preview} alt={`${project.title} dashboard preview`} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon className="h-10 w-10" />
          </div>
        )}
        <span className="selected-work-number">0{index + 1}</span>
      </div>

      <div className="selected-work-body">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`project-type-pill ${getCategoryTone(project.category).tag}`}>
            {project.category}
          </span>
          {project.period && <span className="text-xs font-bold uppercase text-white/55">{project.period}</span>}
        </div>

        <h3 className={isLead ? 'mt-4 text-3xl leading-tight text-white sm:text-4xl' : 'mt-4 text-2xl leading-tight text-white sm:text-3xl'}>
          {project.title}
        </h3>
        <p className={isLead ? 'mt-4 text-base leading-7 text-white/72' : 'mt-3 text-sm leading-6 text-white/68'}>
          {project.headline}
        </p>

        {isLead && (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/58">
            {project.summary}
          </p>
        )}

        <div className={isLead ? 'mt-6 flex flex-wrap gap-2' : 'mt-5 flex flex-wrap gap-2'}>
          {project.metrics.slice(0, isLead ? 3 : 1).map((metric) => (
            <span key={metric} className="selected-work-metric">
              {metric}
            </span>
          ))}
        </div>

        <div className={isLead ? 'mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--yellow)]' : 'mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--yellow)]'}>
          View project
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="projects" className="section-block-dark projects-section">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <div>
            <p className="section-kicker text-[var(--yellow)]">Selected Work</p>
            <h2 className="section-title-light">Operations analytics built for decisions.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/68">
            These projects show how I model operational performance, supply-chain tradeoffs, and
            business drivers using Power BI, Tableau, Excel, SQL, and Python.
          </p>
        </div>

        <div className="selected-work-grid mt-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <div className="archive-redesign mt-20">
          <div>
            <p className="section-kicker text-[var(--yellow)]">Archive</p>
            <h3 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
              Additional builds
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
              Additional analytics and product builds that show broader modeling, investigation,
              and technical delivery experience.
            </p>
          </div>

          <div className="archive-ledger">
            {orderedArchiveProjects.map((project, index) => {
              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="archive-redesign-row"
                >
                  <span className="archive-index">0{index + 1}</span>
                  <ProjectThumbnail
                    project={project}
                    className="h-16 w-20 shrink-0 sm:h-[4.5rem] sm:w-24"
                  />

                  <div className="min-w-0">
                    <p className={`text-xs font-black uppercase ${getCategoryTone(project.category).accent}`}>
                      {project.category}
                    </p>
                    <h4 className="mt-1 text-xl leading-tight text-white">{project.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/58">{project.summary}</p>
                  </div>

                  <div className="hidden flex-wrap gap-2 xl:flex">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <span key={metric} className="chip-dark">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-[var(--yellow)] md:justify-end">
                    View project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
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
