import { motion, useReducedMotion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript,
  SiGit, SiFigma, SiNextdotjs, SiTailwindcss, SiJavascript,SiPostgresql
} from 'react-icons/si';
import './MissionBanner.css';

const techStack = [
  { Icon: SiReact,       label: 'React' },
  { Icon: SiNodedotjs,   label: 'Node.js' },
  { Icon: SiMongodb,     label: 'MongoDB' },
  { Icon: SiExpress,     label: 'Express' },
  { Icon: SiTypescript,  label: 'TypeScript' },
  { Icon: SiJavascript,  label: 'JavaScript' },
  { Icon: SiGit,         label: 'Git' },
  { Icon: SiTailwindcss, label: 'Tailwind' },
  { Icon: SiPostgresql, label: 'Postgresql' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function MissionBanner() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mission" aria-label="Mission statement">
      <motion.div
        className="mission__inner"
        initial={prefersReduced ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={prefersReduced ? {} : fadeUp}
      >
        <h2 className="mission__text">
          My goal is to ship clean, performant software that solves real problems —
          and to keep learning until every layer of the stack feels like home.
        </h2>

        <div className="mission__divider" aria-hidden="true" />

        {/* Tech stack as "brands" row */}
        <div className="mission__stack" role="list" aria-label="Technologies I work with">
          {techStack.map(({ Icon, label }) => (
            <div
              key={label}
              className="mission__stack-item"
              title={label}
              role="listitem"
              aria-label={label}
            >
              <Icon size={20} aria-hidden="true" />
              <span className="mission__stack-label">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
