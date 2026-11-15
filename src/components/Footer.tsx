import { useT } from '../i18n/ui';

export function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="site-footer">
      <span>{t.footer(year)}</span>
    </footer>
  );
}
