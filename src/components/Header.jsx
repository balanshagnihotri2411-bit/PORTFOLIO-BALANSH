import { useReducedMotion } from 'framer-motion';
import './Header.css';
import profileImg from '../assets/images/profile.webp';

export default function Header() {
  const prefersReduced = useReducedMotion();

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        {/* Logo + Wordmark */}
        <a href="#hero" className="header__logo" aria-label="Go to top">
          <div className="header__monogram" aria-hidden="true">
            <img src={profileImg} alt="" />
          
          </div>
          <span className="header__wordmark">Balansh Agnihotri</span>
        </a>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-pill btn-pill--dark header__cta"
          id="header-cta"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
