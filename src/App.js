import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import './App.css';

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const projects = [
  {
    number: '01',
    title: 'Shoply Commerce',
    type: 'Full-stack commerce experience',
    description:
      'A complete storefront experience with reusable product UI, Pinia state management, Tailwind styling, and an Express API layer.',
    tags: ['Vue 3', 'Pinia', 'Tailwind', 'Express'],
    accent: 'violet',
    link: 'https://github.com/TayybaFardos527/shoply-ecommerce',
    visual: 'shoply',
  },
  {
    number: '02',
    title: 'Dashora Analytics',
    type: 'Admin dashboard system',
    description:
      'A responsive analytics workspace with KPI cards, data visualisation, navigation states, and a polished dark-first visual system.',
    tags: ['Vue 3', 'Chart.js', 'Pinia', 'Responsive UI'],
    accent: 'orange',
    link: 'https://github.com/TayybaFardos527/dashora-admin-dashboard',
    visual: 'dashora',
  },
  {
    number: '03',
    title: 'Task Flow',
    type: 'Productivity application',
    description:
      'A focused task management interface with search, filters, completion tracking, editing, and persistent browser storage.',
    tags: ['JavaScript', 'UI States', 'Local Storage', 'CSS'],
    accent: 'blue',
    link: 'https://github.com/TayybaFardos527/To-do-list-App',
    visual: 'task',
  },
];

const skillGroups = [
  {
    title: 'Interface engineering',
    icon: Code2,
    skills: ['React', 'Vue 3', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    title: 'Design systems',
    icon: Layers3,
    skills: ['Tailwind CSS', 'Bootstrap', 'Responsive UI', 'Accessibility', 'Motion'],
  },
  {
    title: 'Workflow & delivery',
    icon: Zap,
    skills: ['Git & GitHub', 'REST APIs', 'Chart.js', 'Figma handoff', 'Agile teamwork'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', ...navItems.map((item) => item.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="brand-mark">TF</span>
          <span className="brand-name">Tayyba Fardos</span>
        </button>

        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="availability" href="mailto:tayybafardos527@gmail.com">
            <span className="status-dot" /> Available for work
          </a>
          <a className="icon-button" href="https://github.com/TayybaFardos527" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Code2 size={17} />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
            <motion.div className="eyebrow" variants={fadeUp}>
              <Sparkles size={15} /> Frontend developer · Lahore, Pakistan
            </motion.div>
            <motion.h1 variants={fadeUp}>
              Thoughtful interfaces for <span>real-world products.</span>
            </motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>
              I&apos;m Tayyba — a frontend developer who turns complex ideas into clear, responsive, and beautifully crafted digital experiences.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <button className="primary-button" onClick={() => scrollTo('work')}>
                Explore selected work <ArrowUpRight size={17} />
              </button>
              <a className="text-button" href="mailto:tayybafardos527@gmail.com">
                Let&apos;s talk <ArrowUpRight size={17} />
              </a>
            </motion.div>
            <motion.div className="hero-meta" variants={fadeUp}>
              <span><Check size={15} /> React & Vue specialist</span>
              <span><Check size={15} /> Available for internships</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-topbar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>tayyba.dev / profile.jsx</span>
                <Code2 size={15} />
              </div>
              <div className="code-body">
                <div className="line-number">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10</div>
                <pre><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}{`\n`}
  <span className="code-orange">name</span>: <span className="code-green">&quot;Tayyba Fardos&quot;</span>,{`\n`}
  <span className="code-orange">focus</span>: <span className="code-green">&quot;frontend craft&quot;</span>,{`\n`}
  <span className="code-orange">stack</span>: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;Vue&quot;</span>],{`\n`}
  <span className="code-orange">mindset</span>: <span className="code-green">&quot;learn · build · refine&quot;</span>,{`\n`}
  <span className="code-orange">status</span>: <span className="code-green">&quot;open_to_work&quot;</span>{`\n`}
{'}'};</pre>
              </div>
              <div className="code-footer"><span className="pulse-dot" /> Build succeeded <span>main · 100%</span></div>
            </div>
            <motion.div className="floating-card card-top" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="floating-icon purple"><Layers3 size={17} /></span>
              <div><strong>Clean systems</strong><small>Reusable components</small></div>
            </motion.div>
            <motion.div className="floating-card card-bottom" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="floating-icon green"><Zap size={17} /></span>
              <div><strong>Fast by default</strong><small>Accessible & responsive</small></div>
            </motion.div>
          </motion.div>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span className="trust-label">Currently building with</span>
            <div className="tech-list"><span>React</span><span>Vue 3</span><span>JavaScript</span><span>Tailwind CSS</span><span>Chart.js</span></div>
          </div>
        </section>

        <section className="section-wrap work-section" id="work">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <div><span className="section-kicker">Selected work</span><h2>Small details.<br /><em>Meaningful impact.</em></h2></div>
            <p>Projects where thoughtful interaction design meets maintainable frontend engineering.</p>
          </motion.div>

          <motion.div className="project-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
            {projects.map((project) => (
              <motion.article className={`project-card ${project.accent}`} key={project.title} variants={fadeUp} whileHover={{ y: -8 }}>
                <div className="project-visual">
                  <div className={`mini-app ${project.visual}`}>
                    <div className="mini-sidebar"><b>{project.visual === 'shoply' ? 'S' : project.visual === 'dashora' ? 'D' : 'T'}</b><i /><i /><i /><i /></div>
                    <div className="mini-content"><div className="mini-heading"><span /><span /><span /></div><div className="mini-title" /><div className="mini-cards"><i /><i /><i /></div><div className="mini-chart"><span /><span /><span /><span /><span /></div></div>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View repository <ExternalLink size={15} /></a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="section-wrap about-section" id="about">
          <motion.div className="about-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <div className="about-copy"><span className="section-kicker">A little about me</span><h2>Curious by nature.<br /><em>Intentional by craft.</em></h2><p>I enjoy the space where design, technology, and human behaviour overlap. My goal is simple: build interfaces that feel natural to use and satisfying to return to.</p><p>Whether I&apos;m translating a design system into reusable components or connecting a view to an API, I bring patience, clarity, and a bias toward learning.</p><a className="text-button" href="mailto:tayybafardos527@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div>
            <div className="about-stats"><div><strong>03+</strong><span>Featured<br />projects</span></div><div><strong>∞</strong><span>Curiosity<br />to learn</span></div><div><strong>100%</strong><span>Care for<br />the details</span></div></div>
          </motion.div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <motion.div className="section-heading compact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <div><span className="section-kicker">The toolkit</span><h2>Built to learn.<br /><em>Ready to contribute.</em></h2></div>
            <p>A practical set of tools for turning product ideas into reliable, polished experiences.</p>
          </motion.div>
          <motion.div className="skill-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {skillGroups.map((group) => { const Icon = group.icon; return <motion.div className="skill-card" key={group.title} variants={fadeUp}><div className="skill-icon"><Icon size={20} /></div><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}><Check size={14} />{skill}</li>)}</ul></motion.div>; })}
          </motion.div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <motion.div className="contact-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="contact-copy"><span className="section-kicker">Have a project in mind?</span><h2>Let&apos;s make something<br /><em>people enjoy using.</em></h2><p>I&apos;m currently open to frontend internships, junior roles, and meaningful collaborations.</p><div className="contact-details"><a href="mailto:tayybafardos527@gmail.com"><Mail size={17} /> tayybafardos527@gmail.com</a><span><MapPin size={17} /> Lahore, Pakistan</span></div></div>
            <div className="contact-actions"><a className="primary-button" href="mailto:tayybafardos527@gmail.com">Send an email <Send size={16} /></a><div className="social-row"><a href="https://github.com/TayybaFardos527" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Layers3 size={17} /> LinkedIn</a></div></div>
          </motion.div>
        </section>
      </main>

      <footer className="footer section-wrap"><span>© 2026 Tayyba Fardos</span><span>Designed & built with intention <Sparkles size={14} /></span><button onClick={() => scrollTo('home')} aria-label="Back to top"><ArrowDown size={15} className="rotate-up" /></button></footer>
    </div>
  );
}

export default App;
