import './Skills.css';

const CATEGORIES = [
  { key: 'languages',  label: 'Languages',        icon: '{ }' },
  { key: 'frameworks', label: 'Frameworks & Libs', icon: '⚛' },
  { key: 'databases',  label: 'Databases',         icon: '🗄' },
  { key: 'tools',      label: 'Tools',             icon: '🔧' },
  { key: 'concepts',   label: 'Concepts',          icon: '💡' },
  { key: 'soft',       label: 'Soft Skills',       icon: '🤝' },
];

export default function Skills({ skills, certs }) {
  return (
    <section id="skills" className="section">
      <p className="sec-label">02 / Skills</p>
      <h2 className="sec-title">What I Work With</h2>

      <div className="skills-grid">
        {CATEGORIES.map(cat => {
          const items = skills?.[cat.key] || [];
          if (!items.length) return null;
          return (
            <div key={cat.key} className="skill-card card">
              <div className="skill-card-head">
                <span className="skill-icon">{cat.icon}</span>
                <span className="skill-cat">{cat.label}</span>
              </div>
              <div className="skill-tags">
                {items.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          );
        })}
      </div>

      {certs?.length > 0 && (
        <div className="certs-wrap">
          <h3 className="certs-title">
            <span className="sec-label" style={{ margin: 0 }}>Certifications</span>
          </h3>
          <div className="certs-list">
            {certs.map((c, i) => (
              <div key={i} className="cert-item">
                <span className="cert-tick">✓</span>
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
