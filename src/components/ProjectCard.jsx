import { ExternalLink } from 'lucide-react';
import './SelectedWork.css';

export default function ProjectCard({ title, image, imageAlt, category, year, tags, href, featured }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`project-card card ${featured ? 'project-card--featured' : 'project-card--small'}`}
      aria-label={`View project: ${title}`}
    >
      {/* Image */}
      <div className="project-card__image-wrap">
        {image ? (
          <img src={image} alt={imageAlt} className="project-card__image" loading="lazy" />
        ) : (
          <div className="project-card__image-placeholder" aria-label={imageAlt}>
            <span className="project-card__placeholder-text">{title}</span>
          </div>
        )}
        <div className="project-card__overlay" aria-hidden="true">
          <ExternalLink size={20} />
        </div>
      </div>

      {/* Meta */}
      <div className="project-card__meta">
        <div className="project-card__meta-row">
          <span className="eyebrow project-card__category">{category}</span>
          <span className="project-card__year">{year}</span>
        </div>
        <div className="project-card__tags" aria-label="Project tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
