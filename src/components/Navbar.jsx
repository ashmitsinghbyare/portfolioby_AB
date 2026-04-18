import { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = ['about', 'skills', 'projects', 'education', 'contact'];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const initials = name?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a href="#hero" className="nav-logo">{initials}</a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              <span className="nav-num">0{LINKS.indexOf(l) + 1}.</span> {l}
            </a>
          </li>
        ))}
      </ul>

      <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="toggle menu">
        <span /><span />
      </button>
    </nav>
  );
}
