import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ── Ashmit's real data as fallback (works without backend) ──────────────────
const ASHMIT = {
  name: 'Ashmit Byare',
  title: 'MERN Stack Developer',
  tagline: 'B.Tech CSE Student · Problem Solver · Building Web Solutions',
  phone: '+91-7722829983',
  email: 'ashmitbyare9926@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashmitbyare04',
  github: 'https://github.com/ashmitsinghbyare',
  objective:
    'Highly motivated B.Tech Computer Science student skilled in the MERN stack, Core Java, and DSA. Strong problem-solving and teamwork abilities, dedicated to developing efficient, user-focused solutions and contributing to innovative, growth-oriented projects.',
  skills: {
    languages: ['JavaScript', 'Core Java', 'HTML5', 'CSS3'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'EJS Templates'],
    databases: ['MongoDB', 'MySQL', 'SQL'],
    tools: ['Git', 'GitHub', 'VS Code'],
    concepts: ['OOPs', 'DSA', 'DBMS', 'REST APIs'],
    soft: ['Communication', 'Problem Solving', 'Team Collaboration', 'Quick Learner'],
  },
  projects: [
    {
      title: 'Food Waste Management System',
      description:
        'A comprehensive web application that connects food donors with receivers to reduce waste and serve those in need.',
      features: [
        'Multi-role System: Donors, receivers, and admin roles',
        'Real-time notifications for all users',
        'Feedback & Testimonials system',
        'Comprehensive user profile management',
        'Full admin dashboard with system control',
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS Templates', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/ashmitsinghbyare',
      live: '',
    },
  ],
  education: [
    {
      institution: 'LNCT Group of Colleges',
      degree: 'B.Tech — Computer Science & Engineering',
      period: 'Aug 2022 – May 2026',
      score: 'CGPA: 7.62',
    },
    {
      institution: 'Noble Public School',
      degree: 'Class XII (PCM)',
      period: '2022',
      score: '81.2%',
    },
    {
      institution: 'Noble Public School',
      degree: 'Class X',
      period: '2019',
      score: '86.2%',
    },
  ],
  certifications: [
    { name: 'Introduction to Java', issuer: 'Infosys Springboard' },
    { name: 'Database Management System', issuer: 'Infosys Springboard' },
    { name: 'SQL (Easy)', issuer: 'HackerRank' },
  ],
};

export default function App() {
  const [data, setData] = useState(ASHMIT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => setData(d))
      .catch(() => {}) // keep fallback
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ opacity: loading ? 0 : 1, transition: 'opacity .5s' }}>
      <Navbar name={data.name} />
      <main>
        <Hero data={data} />
        <div className="divider" />
        <About data={data} />
        <div className="divider" />
        <Skills skills={data.skills} certs={data.certifications} />
        <div className="divider" />
        <Projects projects={data.projects} />
        <div className="divider" />
        <Education education={data.education} />
        <div className="divider" />
        <Contact email={data.email} phone={data.phone} linkedin={data.linkedin} github={data.github} />
      </main>
      <Footer name={data.name} email={data.email} />
    </div>
  );
}
