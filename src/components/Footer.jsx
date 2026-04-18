import './Footer.css';

export default function Footer({ name, email }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-name">{name}</p>
            <p className="footer-sub">MERN Stack Developer · Open to opportunities</p>
          </div>
          <a href={`mailto:${email}`} className="footer-email">{email}</a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {name}. Built with React + Node.js + MongoDB.</p>
          <div className="footer-links">
            <a href="https://github.com/ashmitsinghbyare" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ashmitbyare04" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#hero">↑ Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
