import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { ChipRow } from '../../ui/Chip';
import { Icon } from '../../ui/Icon';
import { Section } from '../../layout/Section';
import { SERVICES, type ServiceItem } from '../../../data/services';

function ServiceCard({ icon, title, description, chips, index }: ServiceItem & { index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div className="service-card reveal" ref={ref} style={{ transitionDelay: `${(index % 2) * 0.1}s` }}>
      <span className="service-card__icon" aria-hidden="true">
        <Icon id={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ChipRow chips={chips} />
    </div>
  );
}

export function Services() {
  const { eyebrow, heading, description, items } = SERVICES;

  return (
    <Section id="servicios" alt bg={['server', 'robot', 'mobile', 'spark', 'layers']}>
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="services-grid">
        {items.map((item, i) => (
          <ServiceCard key={item.id} index={i} {...item} />
        ))}
      </div>
    </Section>
  );
}
