import './About.css';

const STATS = [
  { num: '7.62', label: 'CGPA', sub: 'B.Tech CSE' },
  { num: '2026', label: 'Grad Year', sub: 'LNCT Bhopal' },
  { num: '3+', label: 'Certs', sub: 'Verified' },
  { num: '1+', label: 'Projects', sub: 'Shipped' },
];

export default function About({ data }) {
  return (
    <section id="about" className="section">
      <p className="sec-label">01 / About Me</p>
      <h2 className="sec-title">Who I Am</h2>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-bio">{data.objective}</p>
          <p className="about-bio about-bio--2">
            I enjoy tackling complex problems and turning them into clean, efficient solutions.
            Currently exploring full-stack development with the MERN stack while building a
            strong foundation in DSA and system design.
          </p>
          <div className="about-links">
            <a href={data.github} target="_blank" rel="noreferrer" className="about-link">
              ↗ GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="about-link">
              ↗ LinkedIn
            </a>
            <a href={`mailto:${data.email}`} className="about-link">
              ↗ Email Me
            </a>
          </div>
        </div>

        <div className="about-stats">
          {STATS.map(s => (
            <div key={s.label} className="stat-card card">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
