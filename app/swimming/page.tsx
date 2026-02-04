export default function Swimming() {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12, background: 'linear-gradient(120deg, #059669, #0066cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Swimming</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: 40 }}>
        Competitive varsity swimmer at McGill University specializing in high-performance training, 
        elite-level competition, and athletic excellence.
      </p>

      {/* Quick Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 50,
        }}
      >
        <AchievementCard title="Olympic Trials" subtitle="2024 Bronze Medalist" />
        <AchievementCard title="USPORTS" subtitle="4x Individual Finalist" />
        <AchievementCard title="Canada Games" subtitle="Gold & Bronze Medalist" />
        <AchievementCard title="Quebec Records" subtitle="Age Group Record Holder" />
      </div>

      {/* Main Achievements Section */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24 }}>Major Achievements</h2>
        <div style={{ display: 'grid', gap: 20 }}>
          <AchievementBlock
            title="2024 Olympic Trials"
            subtitle="Bronze Medalist"
            description="Qualified and competed at the 2024 Canadian Olympic Swimming Trials, earning a bronze medal and demonstrating elite-level performance against Canada's top swimmers."
            highlights={['Top 8 Finisher', 'National Competition', 'Elite Level Performance']}
          />
          <AchievementBlock
            title="Quebec Age Group Records"
            subtitle="Multiple Event Record Holder"
            description="Set and maintain provincial age group records in multiple swimming events, showcasing consistent excellence and technical proficiency."
            highlights={['Provincial Recognition', 'Multiple Events', 'Performance Excellence']}
          />
          <AchievementBlock
            title="USPORTS Championships"
            subtitle="4-Time Individual Finalist, Team Bronze Medalist"
            description="Competed at the highest level of Canadian university swimming, earning individual finals appearances and contributing to team bronze medal performance."
            highlights={['4x Individual Finalist', 'Team Medal Winner', 'University Elite Level']}
          />
          <AchievementBlock
            title="2022 Canada Games"
            subtitle="1x Gold Medalist, 1x Bronze Medalist"
            description="Represented British Columbia at the national Canada Games, earning both gold and bronze medals in competitive swimming events."
            highlights={['National Games', 'Multi-Medal Winner', 'Provincial Representative']}
          />
        </div>
      </section>

      {/* McGill Varsity Athletics */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24 }}>McGill Varsity Athletics</h2>
        <div
          style={{
            padding: '28px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0,0,0,0.02)',
            border: '2px solid rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '0 0 16px 0' }}>
            Redbird Men's Swimming
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 8, opacity: 0.8 }}>Training Commitment</p>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>20+ Hours/Week</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', opacity: 0.6 }}>Year-round competitive training</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 8, opacity: 0.8 }}>Program Level</p>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>NCAA/USPORTS Caliber</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', opacity: 0.6 }}>Elite university athletics</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: 8, opacity: 0.8 }}>Event Specialization</p>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Distance Freestyle</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', opacity: 0.6 }}>200m-1500m events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24 }}>Coaching & Mentorship</h2>
        <div
          style={{
            padding: '28px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0,0,0,0.02)',
            border: '2px solid rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '0 0 16px 0' }}>
            Certified Swim Canada Swimming Coach
          </h3>
          <p style={{ margin: '0 0 16px 0', lineHeight: 1.7, opacity: 0.85 }}>
            Certified by Swim Canada to coach competitive swimming at all levels. Leveraging competitive experience 
            and technical expertise to develop the next generation of swimmers. Passionate about sharing knowledge and 
            fostering athletic excellence in young athletes.
          </p>
          <ul style={{ margin: 0, paddingLeft: '20px', opacity: 0.85, lineHeight: 1.8 }}>
            <li>Technical coaching expertise in distance freestyle events</li>
            <li>Training program development and periodization</li>
            <li>Athlete development and performance optimization</li>
            <li>Competitive strategy and mental preparation</li>
          </ul>
        </div>
      </section>

      {/* Other Sports & Interests */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24 }}>Beyond Swimming</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, opacity: 0.85, marginBottom: 20 }}>
          Outside of competitive swimming, I'm passionate about various sports and activities:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {['Alpine Skiing', 'Golfing', 'Tennis', 'Surfing', 'Chess', 'Hiking'].map((sport) => (
            <div
              key={sport}
              style={{
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0,0,0,0.04)',
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              {sport}
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <div
          style={{
            padding: '32px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0,0,0,0.02)',
            border: '2px solid rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 16px 0' }}>Philosophy</h2>
          <p style={{ margin: '0', lineHeight: 1.8, opacity: 0.85, fontSize: '1.05rem' }}>
            Competitive swimming has taught me discipline, resilience, and the importance of consistent effort. 
            These values extend beyond the pool—they guide my approach to software engineering, trading, and every 
            challenge I face. The combination of athletic excellence and technical skills creates a unique perspective 
            on problem-solving and performance optimization.
          </p>
        </div>
      </section>
    </main>
  );
}

function AchievementCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
        textAlign: 'center',
      }}
    >
      <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 8px 0' }}>{title}</p>
      <p style={{ margin: 0, opacity: 0.7, fontSize: '0.95rem' }}>{subtitle}</p>
    </div>
  );
}

function AchievementBlock({
  title,
  subtitle,
  description,
  highlights,
}: {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.15rem', margin: 0 }}>{title}</h3>
        <p style={{ margin: '4px 0 0 0', fontWeight: 600, opacity: 0.7, fontSize: '0.95rem' }}>{subtitle}</p>
      </div>
      <p style={{ margin: '0 0 12px 0', lineHeight: 1.6, opacity: 0.85 }}>{description}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {highlights.map((highlight) => (
          <span
            key={highlight}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}
