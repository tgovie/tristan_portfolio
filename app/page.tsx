'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 0,
      company: 'Compass Group',
      logo: '📊',
      title: 'Technical Data Analyst Intern',
      period: 'May – Aug 2025',
      location: 'Singapore',
      website: '',
      description: 'Built Power BI dashboards for finance sector analysis, provided Level 2 technical support, and collaborated on enterprise system deployments.',
      highlights: [
        'Developed interactive Power BI dashboards for 50+ financial analysts',
        'Provided Level 2 technical support with 98% resolution rate',
        'Collaborated on enterprise system deployments affecting 1000+ users',
      ],
      skills: ['Power BI', 'Data Analysis', 'SQL', 'Excel'],
    },
    {
      id: 1,
      company: 'Cremeworkz Pte Ltd',
      logo: '🏭',
      title: 'Technical Data Analyst Intern',
      period: 'Nov 2024 – May 2025',
      location: 'Singapore',
      website: '',
      description: 'Implemented SAP procurement data integration, developed trend analysis dashboards, and created business intelligence solutions.',
      highlights: [
        'Implemented SAP procurement data pipeline reducing manual work by 40%',
        'Created automated trend analysis dashboards for executive review',
        'Developed business intelligence solutions for supply chain optimization',
      ],
      skills: ['SAP', 'ETL', 'Data Analytics', 'Python'],
    },
    {
      id: 2,
      company: 'Alta Construction Group',
      logo: '🏗️',
      title: 'Software Engineer',
      period: 'Jan – May 2025',
      location: 'Montreal, Canada',
      website: 'https://www.groupalta.com',
      description: 'Led design and full deployment of production website (www.groupalta.com) including architecture, development, and deployment.',
      highlights: [
        'Designed and architected full-stack website from scratch',
        'Implemented responsive design with 99.9% uptime',
        'Deployed production website serving 500+ monthly visitors',
        'Integrated contact forms and lead capture system',
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Deployment'],
    },
  ];
  useEffect(() => {
    // prevent background scroll when modal is open
    if (selectedExperience !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExperience]);

  return (
    <main style={{ margin: 0, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 40,
          alignItems: 'center',
          width: '100%',
          padding: '80px 120px 60px',
          boxSizing: 'border-box',
          backgroundColor: '#fafafa',
        }}
      >
        <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h1 style={{ fontSize: '5.2rem', fontWeight: 900, margin: 0, lineHeight: 1.02 }}>
            TRISTAN
            <br />
            GOVIER
          </h1>
          <div style={{ marginTop: 24, display: 'grid', gap: 8 }}>
            <p style={{ fontSize: '1.45rem', fontWeight: 700, margin: 0, opacity: 0.95, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              McGill University
            </p>
            <p style={{ fontSize: '1.45rem', fontWeight: 700, margin: 0, opacity: 0.95, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Varsity Swimmer
            </p>
            <p style={{ fontSize: '1.45rem', fontWeight: 700, margin: 0, opacity: 0.95, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Computer Engineer
            </p>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(0,0,0,0.02)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(0,0,0,0.08)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.8s ease-out 0.1s backwards',
            marginLeft: 'auto',
          }}
        >
          <img
            src="/profile.jpg"
            alt="Tristan Govier"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.textContent = '📸 Profile Photo\n(Add /profile.jpg to /public)';
                e.currentTarget.parentElement.style.fontSize = '1.2rem';
                e.currentTarget.parentElement.style.opacity = '0.5';
                e.currentTarget.parentElement.style.whiteSpace = 'pre-line';
                e.currentTarget.parentElement.style.textAlign = 'center';
              }
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          width: '100%',
          padding: '80px 120px',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'flex-start' }}>
          <div>
            <div style={{ width: '100%', height: '340px', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <img src="/about-photo.jpg" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e)=>{e.currentTarget.style.display='none'; if(e.currentTarget.parentElement) e.currentTarget.parentElement.textContent='📸 Add /about-photo.jpg to /public'; e.currentTarget.parentElement.style.fontSize='0.95rem'; e.currentTarget.parentElement.style.opacity='0.5'; e.currentTarget.parentElement.style.display='flex'; e.currentTarget.parentElement.style.alignItems='center'; e.currentTarget.parentElement.style.justifyContent='center'; e.currentTarget.parentElement.style.background='rgba(0,0,0,0.02)'}} />
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 32 }}>About Me</h2>
            <div style={{ display: 'grid', gap: 20, fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85 }}>
              <p>
                I'm a third-year Computer Engineering student at McGill University, paired with three distinct passions: 
                <strong> software engineering, competitive swimming, and trading.</strong>
              </p>
              <p>
                At McGill, I'm an Athletic Scholarship recipient and varsity swimmer competing at an elite level. 
                I've represented Canada at the Olympic Trials (2024 Bronze Medalist), set provincial records, and earned 
                medals at national competitions. Outside the pool, I'm equally dedicated to software engineering, having 
                built production systems, data analytics platforms, and trading algorithms.
              </p>
              <p>
              My unique background combining elite athletics, technical education, and practical development 
                experience drives my approach to problem-solving with discipline, precision, and resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        style={{
          width: '100%',
          padding: '60px 120px',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#f5f5f5',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 32 }}>Experience</h2>
        
        {/* Company Logos Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, marginBottom: 32 }}>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExperience(exp.id)}
              style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0,0,0,0.02)',
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Company Logo Placeholder */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  color: 'rgba(0,0,0,0.4)',
                  border: '1px dashed rgba(0,0,0,0.1)',
                }}
              >
                Logo
              </div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>{exp.title}</p>
              <p style={{ margin: '6px 0 0 0', opacity: 0.7, fontSize: '0.9rem' }}>{exp.company}</p>
            </button>
          ))}
        </div>

        <p style={{ opacity: 0.6, fontSize: '0.95rem', marginTop: 16 }}>Click on any experience to see details</p>
      </section>

      {/* More About Me (Education) */}
      <section
        style={{
          width: '100%',
          padding: '80px 120px',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'flex-start' }}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ width: '360px', height: '470px', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <img src="/education-photo.jpg" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e)=>{e.currentTarget.style.display='none'; if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML='<div style="width:100%;height:100%;display:flex;alignItems:center;justifyContent:center;background:rgba(0,0,0,0.02);border:1px dashed rgba(0,0,0,0.1);fontSize:0.9rem;color:rgba(0,0,0,0.4)">📸 Add /education-photo.jpg to /public</div>'}} />
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 24 }}>More About Me!</h2>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>Education</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 12 }}>
              Currently pursuing a Bachelor of Science in Mathematics and Computer Science at McGill University, expected to graduate in spring 2026.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85 }}>
              My coursework spans Machine Learning, Quantitative Risk Management, Probability, Statistics, Calculus, Abstract Algebra, Data Structures, Algorithms and more.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section
        style={{
          width: '100%',
          padding: '60px 120px',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#f5f5f5',
          boxSizing: 'border-box',
        }}
      >
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 16 }}>Technical Skills</h3>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 12 }}>
          I'm currently in my third year studying Computer Engineering. I have experience coding in many languages and building production services during internships.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 20 }}>
          In previous internships I used tools like Power BI, SAP, Docker, and cloud deployment platforms; in my trading work I applied statistical models, backtesting frameworks, and risk management techniques.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 20 }}>
          Skills learned include data analysis, model validation, system design, and production monitoring for reliability under load.
        </p>

        {/* Logos row - place image files in /public/logos/ */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24, alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>Python</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>Java</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>React</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>JS</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>HTML</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>CSS</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>PyTorch</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>R</div>
          <div style={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', border: '1px dashed rgba(0,0,0,0.1)' }}>Power BI</div>
        </div>
      </section>

      {/* Extracurriculars (compact with photo) */}
      <section
        style={{
          width: '100%',
          padding: '80px 120px',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ width: '360px', height: '470px', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px dashed rgba(0,0,0,0.1)' }}>
              <img src="/extra-photo.jpg" alt="Extracurricular" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e)=>{e.currentTarget.style.display='none'; if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML='<div style="width:100%;height:100%;display:flex;alignItems:center;justifyContent:center;background:rgba(0,0,0,0.02);fontSize:0.9rem;color:rgba(0,0,0,0.4)">📸 Add /extra-photo.jpg to /public</div>'}} />
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 16 }}>Extracurriculars</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 12 }}>
              I've dedicated over 13 years to competitive swimming. Currently on the McGill Varsity Swim Team, I train 15–20 hours per week with focus on race-pace sets, technical refinement, and strength conditioning. I hold provincial records, have medalled at nationals, and represented Canada at the Olympic Trials (2024 Bronze Medalist).
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.85, marginBottom: 12 }}>
              I employ both technical and fundamental analysis to identify market inefficiencies. I focus on recognizing patterns in price action, studying discount and premium zones, and trading with momentum when volume supports movement. My approach balances disciplined risk management with opportunistic positioning based on market structure.
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
              Other interests: tennis, chess, and surfing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects removed from main page (link remains in navbar) */}

      {/* Contact Section (boxed) */}
      <section
        style={{
          width: '100%',
          padding: '80px 120px 60px',
          textAlign: 'center',
          borderTop: '2px solid rgba(0,0,0,0.08)',
          backgroundColor: '#f5f5f5',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 12, border: '1px solid rgba(0,0,0,0.08)', padding: 28, background: '#f0f0f0' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 12 }}>Get In Touch</h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, marginBottom: 24 }}>I'd love to connect! Reach out anytime.</p>
          <div style={{ display: 'grid', gap: 12, fontSize: '1.05rem', marginBottom: 20 }}>
            <a href="mailto:trisgovier@gmail.com" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: 600 }}>
              📧 trisgovier@gmail.com
            </a>
            <a href="tel:+16048288852" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: 600 }}>
              📱 604-828-8852
            </a>
          </div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
            <a href="https://www.linkedin.com/in/tristan-govier" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontSize: '1.05rem', color: '#1a1a1a', fontWeight: 600 }}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Experience Details */}
      {selectedExperience !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
          }}
          onClick={() => setSelectedExperience(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: 600,
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              animation: 'fadeInUp 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {experiences[selectedExperience] && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0,0,0,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      overflow: 'hidden',
                    }}
                  >
                    {experiences[selectedExperience].logo.startsWith('/') ? (
                      <img
                        src={experiences[selectedExperience].logo}
                        alt={experiences[selectedExperience].company}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }}
                      />
                    ) : (
                      experiences[selectedExperience].logo
                    )}
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '1.3rem', fontWeight: 700 }}>
                      {experiences[selectedExperience].company}
                    </h3>
                    <p style={{ margin: 0, opacity: 0.7, fontWeight: 500 }}>
                      {experiences[selectedExperience].title}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: '0 0 8px 0', opacity: 0.6, fontSize: '0.95rem', fontWeight: 500 }}>
                    {experiences[selectedExperience].period} • {experiences[selectedExperience].location}
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.6, fontSize: '1rem', opacity: 0.85 }}>
                    {experiences[selectedExperience].description}
                  </p>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <h4 style={{ margin: '0 0 12px 0', fontWeight: 700, fontSize: '0.95rem' }}>Highlights</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
                    {experiences[selectedExperience].highlights.map((h, i) => (
                      <li key={i} style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.5 }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {experiences[selectedExperience].skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {experiences[selectedExperience].website && (
                  <a
                    href={experiences[selectedExperience].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 24,
                      padding: '10px 20px',
                      backgroundColor: '#1a1a1a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                    }}
                  >
                    View Website
                  </a>
                )}

                <button
                  onClick={() => setSelectedExperience(null)}
                  style={{
                    marginTop: 24,
                    padding: '8px 16px',
                    backgroundColor: 'rgba(0,0,0,0.08)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)';
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '2px solid rgba(0,0,0,0.08)', padding: '40px 20px', textAlign: 'center', opacity: 0.6 }}>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>Tristan Govier © 2026</p>
      </footer>
    </main>
  );
}

function TechSkillGroup({ title, skills }: { title: string; skills: string }) {
  return (
    <div>
      <h4 style={{ fontWeight: 700, marginBottom: 12, fontSize: '1rem' }}>
        {title}
      </h4>
      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8 }}>{skills}</p>
    </div>
  );
}

function AchievementHighlight({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
      }}
    >
      <p style={{ fontSize: '2rem', margin: '0 0 8px 0' }}>{icon}</p>
      <h4 style={{ fontWeight: 700, margin: '0 0 4px 0', fontSize: '1rem' }}>{title}</h4>
      <p style={{ margin: 0, opacity: 0.7, fontSize: '0.9rem' }}>{subtitle}</p>
    </div>
  );
}

function ProjectHighlight({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a
      href={link}
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s ease',
        display: 'block',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <h4 style={{ fontWeight: 700, margin: '0 0 8px 0', fontSize: '1rem' }}>{title}</h4>
      <p style={{ margin: 0, opacity: 0.75, fontSize: '0.95rem' }}>{description}</p>
      <p style={{ margin: '12px 0 0 0', fontSize: '0.9rem', fontWeight: 600 }}>Learn more →</p>
    </a>
  );
}
