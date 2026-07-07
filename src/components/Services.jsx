import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Server, Layers, Palette } from 'lucide-react';
import ServiceCard from './ServiceCard';
import './Services.css';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, responsive interfaces built with React. I care about performance, accessibility, and the tiny details that make a UI feel polished.',
    number: '01',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'REST APIs with Node.js and Express, connected to MongoDB. I design clean data models, handle auth, and write server-side code that scales.',
    number: '02',
  },
  {
    icon: Layers,
    title: 'Full-Stack Integration',
    description:
      'End-to-end features: from the database schema to the React component — deployed on Vercel or Railway, with environment configs done right.',
    number: '03',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'I prototype in Figma before I code. Clean layouts, consistent spacing, and thoughtful micro-interactions that make products enjoyable to use.',
    number: '04',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__inner">
        {/* Left: heading */}
        <motion.div
          className="services__left"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow services__eyebrow">What I do</p>
          <h2 id="services-heading" className="section-heading services__heading">
            How Can I<br />Help You?
          </h2>
        </motion.div>

        {/* Right: 2×2 grid */}
        <motion.div
          className="services__grid"
          variants={prefersReduced ? {} : containerVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={prefersReduced ? {} : itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
