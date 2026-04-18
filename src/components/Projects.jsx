import './Projects.css';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <p className="sec-label">03 / Projects</p>
      <h2 className="sec-title">Things I've Built</h2>

      <div className="projects-list">
        {projects?.map((p, i) => (
          <div key={i} className="project-card card">
            <div className="project-header">
              <div className="project-num">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link--live">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc">{p.description}</p>

            {p.features?.length > 0 && (
              <ul className="project-features">
                {p.features.map((f, fi) => (
                  <li key={fi}>
                    <span className="feat-arrow">→</span> {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="project-tech">
              {p.tech?.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <p>More projects on my GitHub</p>
        <a href="https://github.com/ashmitsinghbyare" target="_blank" rel="noreferrer" className="btn-ghost">
          View GitHub ↗
        </a>
      </div>
    </section>
  );
}
