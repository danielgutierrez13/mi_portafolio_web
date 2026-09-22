import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import { SectionBackground } from '../../ui/SectionBackground';
import { CONTACT, type SocialLink } from '../../../data/contact';

interface TerminalProps {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
}

function Terminal({ name, email, phone, location }: TerminalProps) {
  const ref = useScrollReveal();
  const phoneHref = phone.replace(/\s/g, '');

  return (
    <div className="term reveal" ref={ref}>
      <div className="term__bar">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
      <div className="term__body">
        <div><span className="cmd">$</span> ./contactar.sh</div>
        <div><span className="ok">✓</span> Conexión segura establecida</div>
        <div>&nbsp;</div>
        <div><span className="k">nombre</span>: {name}</div>
        <div><span className="k">correo</span>: <a href={`mailto:${email}`}>{email}</a></div>
        <div><span className="k">telefono</span>: <a href={`tel:${phoneHref}`}>{phone}</a></div>
        <div><span className="k">ubicacion</span>: {location}</div>
        <div><span className="cursor-blink">_</span></div>
      </div>
    </div>
  );
}

interface ContactActionsProps {
  readonly email: string;
  readonly phoneHref: string;
  readonly socials: SocialLink[];
}

function ContactActions({ email, phoneHref, socials }: ContactActionsProps) {
  const ref = useScrollReveal();
  return (
    <div className="contact-actions reveal" ref={ref}>
      <Button variant="primary" href={`mailto:${email}`} icon="mail">Escribir un correo</Button>
      <Button variant="light" href={`tel:${phoneHref}`} icon="phone">Llamar ahora</Button>
      <div className="contact-socials">
        {socials.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social__btn"
            aria-label={s.label}
          >
            <Icon id={s.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  const { eyebrow, heading, description, name, email, phone, phoneHref, location, socials } = CONTACT;

  return (
    <section className="contact" id="contacto">
      <SectionBackground icons={['mail', 'phone', 'whatsapp', 'pin', 'linkedin']} />
      <div className="container">
        <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
        <div className="contact__grid">
          <Terminal name={name} email={email} phone={phone} location={location} />
          <ContactActions email={email} phoneHref={phoneHref} socials={socials} />
        </div>
      </div>
    </section>
  );
}
