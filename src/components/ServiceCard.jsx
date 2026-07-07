import './Services.css';

export default function ServiceCard({ icon: Icon, title, description, number }) {
  return (
    <article className="service-card card" aria-label={title}>
      <div className="service-card__top">
        <div className="service-card__icon-wrap" aria-hidden="true">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <p className="service-card__description">{description}</p>
      </div>

      <div className="service-card__bottom">
        <h3 className="service-card__title">{title}</h3>
        <span className="service-card__number" aria-hidden="true">{number}</span>
      </div>
    </article>
  );
}
