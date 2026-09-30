import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import notesImg from '../assets/images/project-notes.png';
import rootsImg from '../assets/images/roots.png';
import './SelectedWork.css';

const projects = [
  {
    id: 'notes',
    title: 'Notes AI App',
    image: notesImg,
    imageAlt: 'AI Notes Manager app showing the editor with AI-generated summary and keywords panel',
    category: 'FULL-STACK AI PROJECT',
    year: '2026',
    tags: ['MERN', 'Gemini API', 'REST API'],
    href: 'https://notesai-frontend-33fw.onrender.com/login',
    featured: true,
  },
  {
    id: 'roots',
    title: 'Roots Blogging Platform',
    image: rootsImg,
    imageAlt: 'Roots full-stack blogging platform showing blog posts and user interface',
    category: 'FULL-STACK DEVELOPMENT',
    year: '2026',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    href: 'https://roots-blog-client.onrender.com/',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    image: null,
    imageAlt: 'Portfolio website hero section',
    category: 'PERSONAL PROJECT',
    year: '2025',
    tags: ['React', 'Vite', 'Framer Motion'],
    href: '#hero',
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SelectedWork() {
  const prefersReduced = useReducedMotion();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="work__inner">
        {/* Header row */}
        <div className="work__header">
          <h2 id="work-heading" className="section-heading">Selected Work</h2>
          <a
            href="https://github.com/balanshagnihotri2411-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill--dark"
            id="work-see-all"
            aria-label="See all projects on GitHub"
          >
            See All
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Featured card */}
        <motion.div
          custom={0}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={prefersReduced ? {} : fadeUp}
        >
          <ProjectCard {...featured} />
        </motion.div>

        {/* Two smaller cards */}
        <div className="work__grid">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + 1}
              initial={prefersReduced ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={prefersReduced ? {} : fadeUp}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
