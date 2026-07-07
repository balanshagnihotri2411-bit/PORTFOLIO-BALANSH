import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Mail } from 'lucide-react';
import './Experience.css';

// PLACEHOLDER: Replace these with your real milestones.
// Leave any you don't have yet — they're clearly marked.
const milestones = [
  {
    id: 'btech',
    icon: GraduationCap,
    org: 'Maharshi Dayanand University - Rohtak', // PLACEHOLDER — replace with your actual university
    role: 'B.Tech — Computer Science & Engineering',
    years: '2023 – 2027',          // PLACEHOLDER — adjust years
    note: null,
  },
  {
    id: 'internship',
    icon: Briefcase,
    org: 'Wayspire Edtech Private Limited',    // PLACEHOLDER — replace with company name when you have one
    role: 'Frontend-developer intern',
    years: 'March 2024 - May 2024 ',
    note: 'Learned react from scratch and built a fully functional blog app',
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="experience__inner">
        <h2 id="experience-heading" className="sr-only">Experience &amp; Education</h2>

        <div className="experience__grid">
          {/* CTA Card */}
          <motion.div
            className="exp-cta card"
            custom={0}
            initial={prefersReduced ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={prefersReduced ? {} : fadeUp}
          >
            <h2 className="exp-cta__heading">
              Want to see<br />more of my<br />work?
            </h2>
            <a
              href="#contact"
              className="btn-pill btn-pill--dark exp-cta__btn"
              id="exp-cta-btn"
            >
              <Mail size={15} aria-hidden="true" />
              Get in Touch
            </a>
          </motion.div>

          {/* Milestone Cards */}
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.id}
                className="exp-card card"
                aria-label={`${m.org} — ${m.role}`}
                custom={i + 1}
                initial={prefersReduced ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={prefersReduced ? {} : fadeUp}
              >
                <div className="exp-card__top">
                  <div className="exp-card__icon-wrap" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <span className="exp-card__org">{m.org}</span>
                </div>
                <div className="exp-card__body">
                  <p className="exp-card__role">{m.role}</p>
                  {m.note && <p className="exp-card__note">{m.note}</p>}
                </div>
                <p className="exp-card__years">{m.years}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
