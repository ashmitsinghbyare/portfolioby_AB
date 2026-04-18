import './Education.css';

export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <p className="sec-label">04 / Education</p>
      <h2 className="sec-title">Academic Background</h2>

      <div className="edu-timeline">
        {education?.map((e, i) => (
          <div key={i} className="edu-item">
            <div className="edu-line">
              <div className="edu-dot" />
              {i < education.length - 1 && <div className="edu-connector" />}
            </div>
            <div className="edu-card card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-institution">{e.institution}</p>
                </div>
                <div className="edu-meta">
                  <span className="edu-score">{e.score}</span>
                  <span className="edu-period">{e.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
