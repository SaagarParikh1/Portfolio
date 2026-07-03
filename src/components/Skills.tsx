import type { CSSProperties } from 'react';

type Skill = {
  name: string;
  logo?: string;
  initials?: string;
  tone?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const iconUrl = (slug: string, color = 'ffffff') => `https://cdn.simpleicons.org/${slug}/${color}`;

const skillGroups: SkillGroup[] = [
  {
    title: 'Analytics & Modeling',
    description: 'Core tools for cleaning data, modeling outcomes, and explaining business drivers.',
    skills: [
      { name: 'SQL (BigQuery, MySQL)', logo: iconUrl('googlebigquery', '669DF6'), initials: 'SQL', tone: '#669df6' },
      { name: 'Python', logo: iconUrl('python', '3776AB'), initials: 'PY', tone: '#3776ab' },
      { name: 'R', logo: iconUrl('r', '276DC3'), initials: 'R', tone: '#276dc3' },
      {
        name: 'Excel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
        initials: 'XL',
        tone: '#217346',
      },
      {
        name: 'Tableau',
        logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
        initials: 'TB',
        tone: '#e97627',
      },
      { name: 'Statistical Analysis', initials: 'Σ', tone: '#e9b949' },
      { name: 'Predictive Modeling', initials: 'PM', tone: '#8bc34a' },
      { name: 'Regression Analysis', initials: 'RA', tone: '#d94b38' },
      { name: 'Data Visualization', initials: 'DV', tone: '#1f5eff' },
      { name: 'A/B Testing', initials: 'A/B', tone: '#13b8a6' },
      { name: 'ERP Systems', initials: 'ERP', tone: '#b96f45' },
      { name: 'Optimization', initials: 'OPT', tone: '#f59e0b' },
      { name: 'Scenario Planning', initials: 'SP', tone: '#14f1c9' },
    ],
  },
  {
    title: 'Technical Build',
    description: 'Front-end and integration skills for turning analysis into usable products.',
    skills: [
      { name: 'React', logo: iconUrl('react', '61DAFB'), initials: 'RX', tone: '#61dafb' },
      { name: 'TypeScript', logo: iconUrl('typescript', '3178C6'), initials: 'TS', tone: '#3178c6' },
      { name: 'JavaScript', logo: iconUrl('javascript', 'F7DF1E'), initials: 'JS', tone: '#f7df1e' },
      { name: 'HTML/CSS', logo: iconUrl('html5', 'E34F26'), initials: 'H/C', tone: '#e34f26' },
      { name: 'REST APIs', initials: 'API', tone: '#14f1c9' },
      { name: 'GitHub', logo: iconUrl('github', 'ffffff'), initials: 'GH', tone: '#ffffff' },
    ],
  },
  {
    title: 'Supporting Tools',
    description: 'Collaboration, creative, and workflow tools that support polished delivery.',
    skills: [
      { name: 'Supabase', logo: iconUrl('supabase', '3ECF8E'), initials: 'SB', tone: '#3ecf8e' },
      {
        name: 'Adobe Creative Cloud',
        logo: 'https://cdn.worldvectorlogo.com/logos/creative-cloud-cc.svg',
        initials: 'CC',
        tone: '#da1f26',
      },
      { name: 'Google Suite', logo: iconUrl('google', '4285F4'), initials: 'G', tone: '#4285f4' },
      {
        name: 'Generative AI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        initials: 'AI',
        tone: '#ffffff',
      },
      { name: 'Agile/Scrum', initials: 'AS', tone: '#e9b949' },
    ],
  },
];

const SkillPill = ({ skill }: { skill: Skill }) => {
  return (
    <span className="skill-pill" style={{ '--skill-tone': skill.tone ?? '#e9b949' } as CSSProperties}>
      <span className="skill-logo-bubble">
        {skill.logo ? (
          <img src={skill.logo} alt="" loading="lazy" />
        ) : (
          <span>{skill.initials ?? skill.name.slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      <span>{skill.name}</span>
    </span>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-block-dark skills-section">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="section-kicker text-[var(--yellow)]">Skills</p>
            <h2 className="section-title-light">Tools I use to turn signal into decisions.</h2>
          </div>

          <div className="skill-table">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-row">
                <div>
                  <h3 className="text-2xl leading-tight">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{group.description}</p>
                </div>

                <div className="skill-pill-grid">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
