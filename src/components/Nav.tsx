import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';
import { Icon } from './ui/Icon';
import { Button } from './ui/Button';
import { NAV_LINKS } from '../data/nav';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const { isDark, toggle } = useTheme();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav${isOpen ? ' is-open' : ''}${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__logo">
          <Icon id="terminal" className="nav__logo-icon" />
          <span>~/daniel<span className="nav__cursor">_</span></span>
        </a>

        <nav className="nav__links" id="navLinks">
          {NAV_LINKS.map(({ href, label, icon }) => {
            const isActive = activeId === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'true' : undefined}
              >
                <Icon id={icon} className="nav__link-icon" />
                <span>{label}</span>
              </a>
            );
          })}
        </nav>

        <div className="nav__right">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-pressed={isDark}
          >
            <Icon id="sun" className="icon-sun" />
            <Icon id="moon" className="icon-moon" />
          </button>

          <Button variant="primary" href="#contacto" className="nav__cta">
            Contactar
          </Button>

          <button
            className="nav__toggle"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <Icon id="menu" className="icon--menu" />
            <Icon id="close" className="icon--close" />
          </button>
        </div>
      </div>
    </header>
  );
}
