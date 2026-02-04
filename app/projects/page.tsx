'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Trading NQ - Quantitative Trading System',
      description: 'Developed a quantitative trading system using advanced statistical models to predict market states and optimize trading decisions for NQ futures. Real-time P&L tracking and performance analytics.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Statistical Models', 'Data Visualization'],
      highlights: [
        'Real-time NQ futures trading and analysis',
        'Statistical models for market state prediction',
        'P&L tracking and performance metrics',
        'Interactive trading journal dashboard',
      ],
      link: '/trading',
      featured: true,
    },
    {
      title: 'Alta Construction Group Website',
      description: 'Led the complete design and deployment of a production public website for a Montreal-based construction company. Implemented modern responsive design and integrated business information architecture.',
      technologies: ['React', 'Next.js', 'TypeScript', 'CSS', 'Responsive Design'],
      highlights: [
        'Full website design and deployment',
        'Responsive mobile-first approach',
        'Performance optimization',
        'Production deployment',
      ],
      link: 'https://www.groupalta.com',
      featured: true,
    },

    {
      title: 'Power BI Financial Dashboards',
      description: 'Designed and deployed comprehensive Power BI dashboards for Compass Group finance sector, analyzing financial data and providing actionable insights for business decision-making.',
      technologies: ['Power BI', 'DAX', 'Power Automate', 'Data Analysis', 'SharePoint'],
      highlights: [
        'Financial data analysis and visualization',
        'Real-time dashboard metrics',
        'User requirement gathering and implementation',
        'Enterprise-level deployment',
      ],
      featured: false,
    },
    {
      title: 'SAP Integration & Data Pipeline',
      description: 'Implemented procurement data integration from SAP to Power BI at Cremeworkz, enabling real-time trend analysis for vendor engagement and procurement optimization.',
      technologies: ['SAP', 'Power BI', 'Data Integration', 'ETL', 'SharePoint'],
      highlights: [
        'SAP procurement data extraction',
        'Data processing and transformation',
        'Trend analysis and visualization',
        'Business intelligence integration',
      ],
      featured: false,
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12 }}>Projects & Work</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: 50, maxWidth: 700 }}>
        A selection of projects I've worked on across quantitative trading, software engineering, and data analytics. 
        Each project showcases different aspects of my technical skills and problem-solving approach.
      </p>

      {/* Featured Projects */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 32 }}>Featured Projects</h2>
        <div style={{ display: 'grid', gap: 32 }}>
          {projects
            .filter((p) => p.featured)
            .map((project, idx) => (
              <ProjectCard key={idx} project={project} featured={true} />
            ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 32 }}>Other Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {projects
            .filter((p) => !p.featured)
            .map((project, idx) => (
              <ProjectCard key={idx} project={project} featured={false} />
            ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: any;
  featured: boolean;
}) {
  const handleClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      style={{
        padding: '28px',
        borderRadius: '12px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'grid',
        gridTemplateRows: featured ? 'auto' : 'auto',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onClick={() => handleClick(project.link)}
    >
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: featured ? '1.4rem' : '1.15rem', margin: '0 0 8px 0' }}>
          {project.title}
        </h3>
        <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.6, fontSize: featured ? '1rem' : '0.95rem' }}>
          {project.description}
        </p>
      </div>

      {project.highlights && (
        <div style={{ marginBottom: 16 }}>
          <ul
            style={{
              margin: 0,
              paddingLeft: '20px',
              fontSize: featured ? '0.95rem' : '0.9rem',
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            {project.highlights.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {project.technologies.map((tech: string, i: number) => (
          <span
            key={i}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <a
            href={project.link}
            style={{
              color: '#1a1a1a',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
            target={project.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            {project.link.startsWith('http') ? 'View Website →' : 'View Project →'}
          </a>
        </div>
      )}
    </div>
  );
}
