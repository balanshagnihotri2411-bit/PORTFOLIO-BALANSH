import { motion, useReducedMotion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript,
  SiGit, SiFigma, SiTailwindcss, SiNextdotjs,SiPostgresql
} from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import profileImg from '../assets/images/profile.webp';
import './Hero.css';

const techIcons = [
  { Icon: SiReact,      label: 'React',      color: '#61DAFB' },
  { Icon: SiNodedotjs,  label: 'Node.js',    color: '#3C873A' },
  { Icon: SiMongodb,    label: 'MongoDB',     color: '#47A248' },
  { Icon: SiExpress,    label: 'Express',     color: '#000000' },
  { Icon: SiTypescript, label: 'TypeScript',  color: '#3178C6' },
  { Icon: SiGit,        label: 'Git',         color: '#F05032' },
  { Icon: SiPostgresql,      label: 'Postgressql',       color: '#A259FF' },
  
];

const socialIcons = [
  { Icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/balanshagnihotri2411-bit' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/balansh2411/' },
  
];

/* Animation variants */
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const leftVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const animate = (variants) =>
    prefersReduced ? {} : variants;

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__grid">

        {/* ── Left Column ── */}
        <motion.div
          className="hero__left"
          initial={prefersReduced ? false : 'hidden'}
          animate="visible"
          variants={animate(leftVariants)}
        >
          {/* Availability badge */}
          <div className="hero__badge" role="status" aria-live="polite">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="eyebrow hero__badge-text">Available for work</span>
          </div>

          {/* H1 */}
          <h1 className="hero__heading">
            Hi, I'm a<br />
            full-stack<br />
            developer.
          </h1>

          {/* Bio */}
          <p className="hero__bio">
            I build end-to-end web apps with React, Node, and MongoDB
            from responsive UIs to REST APIs and AI integrations.
            Currently pursuing B.Tech CSE and looking for internship &amp; Frontend developer role job.
          </p>

          {/* CTA */}
          <div className="hero__actions">
            <a href="#work" className="btn-pill btn-pill--dark" id="hero-cta-work">
              View My Work
            </a>
            <a href="#contact" className="btn-pill btn-pill--outline" id="hero-cta-contact">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* ── Right Column: Card Cluster ── */}
        <div className="hero__right">

          {/* Profile Card */}
          <motion.div
            className="hero__profile-card card"
            custom={0}
            initial={prefersReduced ? false : 'hidden'}
            animate="visible"
            variants={animate(cardVariants)}
            whileHover={prefersReduced ? {} : { y: -6, transition: { duration: 0.25 } }}
          >
            <div className="hero__profile-card-top">
              <div className="hero__profile-info">
                <p className="hero__profile-name">Balansh</p>
                <p className="hero__profile-location">Gurugram Haryana</p>
              </div>
              <div className="hero__profile-badge eyebrow">MERN Stack</div>
            </div>
            <div className="hero__profile-card-bottom">
              <span className="hero__profile-available-dot" aria-hidden="true" />
              <span className="hero__profile-available-text">Open to opportunities</span>
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div
            className="hero__photo-card card"
            custom={1}
            initial={prefersReduced ? false : 'hidden'}
            animate="visible"
            variants={animate(cardVariants)}
            whileHover={prefersReduced ? {} : { y: -6, transition: { duration: 0.25 } }}
          >
            <img
              src={profileImg}
              alt="Developer profile photo placeholder"
              className="hero__photo"
            />
          </motion.div>

          {/* Tools / Social Strip */}
          <motion.div
            className="hero__tools-card"
            custom={2}
            initial={prefersReduced ? false : 'hidden'}
            animate="visible"
            variants={animate(cardVariants)}
          >
            <p className="hero__tools-label eyebrow">Tools & platforms I work with</p>

            <div className="hero__tech-row" role="list" aria-label="Tech stack">
              {techIcons.map(({ Icon, label, color }) => (
                <div
                  key={label}
                  className="hero__icon-badge"
                  title={label}
                  role="listitem"
                  aria-label={label}
                >
                  <Icon size={18} color={color} aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="hero__social-row" role="list" aria-label="Social links">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__icon-badge hero__icon-badge--social"
                  aria-label={label}
                  role="listitem"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
