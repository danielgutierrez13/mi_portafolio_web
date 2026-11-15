import { type ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { LangContext, type Lang } from './LangContext';

function initialLang(): Lang {
  try {
    const saved = globalThis.localStorage?.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    /* localStorage no disponible */
  }
  const browser = globalThis.navigator?.language?.toLowerCase() ?? 'es';
  return browser.startsWith('es') ? 'es' : 'en';
}

export function LangProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      globalThis.localStorage?.setItem('lang', lang);
    } catch {
      /* localStorage no disponible */
    }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), []);
  const value = useMemo(() => ({ lang, toggle }), [lang, toggle]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
