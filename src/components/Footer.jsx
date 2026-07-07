import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';
import profileImg from '../assets/images/profile.webp';


const socialLinks = [
  { Icon: FaGithub,   label: 'GitHub',   href: 'https://github.com/balanshagnihotri2411-bit' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/balansh2411/' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Logo + tagline */}
        <div className="footer__brand">
          <div className="footer__monogram" aria-hidden="true">
            <img src={profileImg} alt="" />

          </div>
          <p className="footer__tagline">Building the web, one commit at a time.</p>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links">
          <ul className="footer__social">
            {socialLinks.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Balansh Designed &amp; built with React + Framer Motion.
        </p>
      </div>
    </footer>
  );
}
