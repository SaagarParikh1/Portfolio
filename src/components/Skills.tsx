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
    title: 'Analytics',
    description: 'Tools for preparing operational data, measuring performance, and building decision-ready reporting.',
    skills: [
      { name: 'SQL (BigQuery, MySQL)', logo: iconUrl('googlebigquery', '669DF6'), initials: 'SQL', tone: '#669df6' },
      { name: 'Python', logo: iconUrl('python', '3776AB'), initials: 'PY', tone: '#3776ab' },
      {
        name: 'Microsoft Excel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
        initials: 'XL',
        tone: '#217346',
      },
      { name: 'Power BI', logo: iconUrl('powerbi', 'F2C811'), initials: 'BI', tone: '#f2c811' },
      {
        name: 'Tableau',
        logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
        initials: 'TB',
        tone: '#e97627',
      },
      { name: 'Power Query', initials: 'PQ', tone: '#217346' },
      { name: 'DAX', initials: 'DAX', tone: '#f2c811' },
      { name: 'Data Cleaning', initials: 'DC', tone: '#8bc34a' },
      { name: 'Data Visualization', initials: 'DV', tone: '#1f5eff' },
      { name: 'KPI Reporting', initials: 'KPI', tone: '#e9b949' },
      { name: 'Dashboard Development', initials: 'DB', tone: '#13b8a6' },
    ],
  },
  {
    title: 'Operations',
    description: 'Hands-on logistics and supply-chain capabilities spanning transaction processing through exception resolution.',
    skills: [
      { name: 'ERP Systems', initials: 'ERP', tone: '#b96f45' },
      { name: 'Supply Chain Operations', initials: 'SC', tone: '#14f1c9' },
      { name: 'Warehouse Operations', initials: 'WH', tone: '#e9b949' },
      { name: 'Logistics Reporting', initials: 'LR', tone: '#669df6' },
      { name: 'Operational Reporting', initials: 'OR', tone: '#8bc34a' },
      { name: 'Inventory Management', initials: 'IM', tone: '#13b8a6' },
      { name: 'Inventory Allocation', initials: 'IA', tone: '#f59e0b' },
      { name: 'Dispatch', initials: 'DP', tone: '#d94b38' },
      { name: 'Cost Analysis', initials: 'CA', tone: '#b96f45' },
    ],
  },
  {
    title: 'Data & BI',
    description: 'Analytical foundations for building reliable models and exploring operational drivers.',
    skills: [
      { name: 'Data Modeling', initials: 'DM', tone: '#669df6' },
      { name: 'Star Schema', initials: 'SS', tone: '#f2c811' },
      { name: 'ETL', initials: 'ETL', tone: '#13b8a6' },
      { name: 'Exploratory Data Analysis', initials: 'EDA', tone: '#8bc34a' },
      { name: 'Business Intelligence', initials: 'BI', tone: '#b96f45' },
    ],
  },
  {
    title: 'Technical',
    description: 'Development and integration skills for delivering analytics through usable web experiences.',
    skills: [
      { name: 'JavaScript', logo: iconUrl('javascript', 'F7DF1E'), initials: 'JS', tone: '#f7df1e' },
      { name: 'TypeScript', logo: iconUrl('typescript', '3178C6'), initials: 'TS', tone: '#3178c6' },
      { name: 'React', logo: iconUrl('react', '61DAFB'), initials: 'RX', tone: '#61dafb' },
      { name: 'HTML/CSS', logo: iconUrl('html5', 'E34F26'), initials: 'H/C', tone: '#e34f26' },
      { name: 'REST APIs', initials: 'API', tone: '#14f1c9' },
      { name: 'Git/GitHub', logo: iconUrl('github', 'ffffff'), initials: 'GH', tone: '#ffffff' },
      { name: 'Supabase', logo: iconUrl('supabase', '3ECF8E'), initials: 'SB', tone: '#3ecf8e' },
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
            <h2 className="section-title-light">A toolkit for operations, logistics, and BI.</h2>
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
