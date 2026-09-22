import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return globalThis.localStorage?.getItem('theme') === 'dark';
    } catch {
      return false; /* localStorage not available (private browsing or SSR) */
    }
  });

  useEffect(() => {
    document.documentElement.dataset['theme'] = isDark ? 'dark' : 'light';
    try {
      globalThis.localStorage?.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // localStorage not available (private browsing or SSR)
    }
  }, [isDark]);

  const toggle = useCallback((origin?: { x: number; y: number }) => {
    const root = document.documentElement;
    const run = () => setIsDark(prev => !prev);
    const startViewTransition = document.startViewTransition?.bind(document);
    const reduce = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (!startViewTransition || reduce) {
      run();
      return;
    }
    if (origin) {
      root.style.setProperty('--vt-x', `${origin.x}px`);
      root.style.setProperty('--vt-y', `${origin.y}px`);
    }
    startViewTransition(() => flushSync(run));
  }, []);

  return (
    <ThemeContext value={{ isDark, toggle }}>
      {children}
    </ThemeContext>
  );
}
