export default function Resume() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, background: 'linear-gradient(120deg, #0066cc, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tristan Govier</h1>
          <p style={{ margin: '8px 0 0 0', opacity: 0.7, fontSize: '0.95rem' }}>
            🏠 Vancouver, BC • 📧 tristan.govier@mail.mcgill.ca • 📱 604-828-8852
          </p>
          <p style={{ margin: '4px 0 0 0', opacity: 0.7, fontSize: '0.95rem' }}>
            🔗 <a href="https://www.linkedin.com/in/tristan-govier" style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a> • 🌍 <a href="https://tristan-govier.ca" style={{ textDecoration: 'none', color: 'inherit' }}>Portfolio</a> • 🇨🇦 🇸🇬 🇬🇧 Citizenships
          </p>
        </div>
      </div>

      {/* Education */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: 8, marginBottom: 16 }}>
          EDUCATION
        </h2>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>BEng Computer Engineering</h3>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>2023 - 2027</span>
          </div>
          <p style={{ margin: '4px 0 12px 0', fontWeight: 500, opacity: 0.8 }}>McGill University – Faculty of Engineering • Montreal, Canada</p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <li>McGill Athletic Scholarship recipient and Vancouver District Scholarship recipient</li>
            <li>Coursework: Electrical Circuits, Digital Logic, Discrete Mathematics, Probability and Statistics, Calculus (1-3), Linear Algebra, Differential Equations, Software Systems, Software Development, Signals and Systems, Design Principles and Methods, Algorithms and Data Structures</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: 8, marginBottom: 16 }}>
          TECHNICAL SKILLS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          <div>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.95rem' }}>Languages</p>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem' }}>Python, Java, JavaScript, Bash, C, VHDL, HTML, CSS</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.95rem' }}>Technologies</p>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem' }}>Docker, Rest APIs, Power BI, Power Automate, Git, React.js, Pandas, Umple</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.95rem' }}>Interests</p>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem' }}>Alpine Skiing, Golfing, Travel, Baking, Investing</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0', fontSize: '0.95rem' }}>Trading Projects</p>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem' }}>Algorithmic Trading, Hidden Markov Models, Data Analysis</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: 8, marginBottom: 16 }}>
          WORK EXPERIENCE
        </h2>
        
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Technical Data Analyst Intern</h3>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>May 2025 – Aug 2025</span>
          </div>
          <p style={{ margin: '4px 0 12px 0', fontWeight: 500, opacity: 0.8 }}>Compass Group • Singapore</p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <li>Built Power BI dashboards under the finance sector; gathered requirements and analyzed data with users.</li>
            <li>Collaborated with project managers on system testing, configuration, and setup for new builds, including content uploads.</li>
            <li>Provided Level 2 technical support for Microsoft systems, Windows OS, M365, SharePoint, and end-user hardware issues.</li>
          </ul>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Technical Data Analyst Intern</h3>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Nov 2024 – May 2025</span>
          </div>
          <p style={{ margin: '4px 0 12px 0', fontWeight: 500, opacity: 0.8 }}>Cremeworkz Pte Ltd • Singapore (Remote)</p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <li>Provide financial data analysis solutions for one of the world's largest food service companies</li>
            <li>Implement integration from SAP procurement purchases data for processing and reporting</li>
            <li>Develop trend analysis with data from MS SharePoint to Power BI to facilitate decision making for vendor engagements and procurement</li>
          </ul>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Software Engineer</h3>
            <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Jan 2025 - May 2025</span>
          </div>
          <p style={{ margin: '4px 0 12px 0', fontWeight: 500, opacity: 0.8 }}>Alta Construction Group • Montreal, Canada</p>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <li>Led the design and deployment of the company's public website www.groupalta.com</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: 8, marginBottom: 16 }}>
          PROJECTS
        </h2>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: '0 0 8px 0' }}>Algorithmic Trading Application</h3>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <li>Analyzed historical market data to derive daily returns, volatility, and volume changes using advanced statistical methods</li>
            <li>Developed a 3-state Gaussian Hidden Markov Model to predict market states, enhancing accuracy through robust feature scaling</li>
            <li>Implemented data visualizations to display market trends and used predictive algorithms for informed trading decisions</li>
          </ul>
        </div>
      </section>

      {/* Extracurriculars & Achievements */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: 8, marginBottom: 16 }}>
          EXTRACURRICULARS & ACHIEVEMENTS
        </h2>
        <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.8 }}>
          <li><strong>McGill Varsity Athletics</strong> - Redbird Men's Swimming, Record Holder & Committed to 20h/week of training</li>
          <li><strong>2024 Olympic Trials</strong> - Bronze Medalist</li>
          <li><strong>Quebec Age Group Record Holder</strong> - Multiple swimming events</li>
          <li><strong>USPORTS</strong> - 4-time individual finalist and team bronze medalist</li>
          <li><strong>2022 Canada Games</strong> - 1x Gold medalist, 1x Bronze medalist</li>
          <li><strong>Certified Swim Canada Swimming Coach</strong> - Coaching swimming at competitive levels</li>
        </ul>
      </section>

  {/* Download Button */}
  <div style={{ textAlign: 'center', paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
    <div style={{ display: 'grid', gap: 12, justifyContent: 'center' }}>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '14px 28px',
          backgroundColor: 'rgba(0,0,0,0.08)',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          color: 'inherit',
          fontSize: '1rem',
        }}
      >
        📄 View PDF Resume (Opens in New Tab)
      </a>
      <a
        href="/resume.pdf"
        download="Tristan_Govier_Resume.pdf"
        style={{
          display: 'inline-block',
          padding: '14px 28px',
          backgroundColor: 'rgba(0,0,0,0.02)',
          border: '2px solid rgba(0,0,0,0.1)',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          color: 'inherit',
          fontSize: '1rem',
        }}
      >
        ⬇️ Download PDF
      </a>
    </div>
  </div>
    </main>
  );
}
