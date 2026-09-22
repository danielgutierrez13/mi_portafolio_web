import { useEffect, useRef, useState } from 'react';

/**
 * Cuenta desde 0 hasta el número contenido en `value` (p. ej. "30+") cuando el
 * elemento entra en pantalla. Conserva el sufijo (+, %, …). Respeta
 * prefers-reduced-motion mostrando el valor final de inmediato.
 */
export function useCountUp(value: string, durationMs = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const parse = () => value.match(/^(\d[\d.]*)(.*)$/);
  const [display, setDisplay] = useState<string>(() => {
    const m = parse();
    return m ? `0${m[2]}` : value;
  });

  useEffect(() => {
    const el = ref.current;
    const m = parse();
    if (!el || !m) { setDisplay(value); return; }

    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const reduce = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduce || !('IntersectionObserver' in globalThis)) { setDisplay(value); return; }

    let raf = 0;
    let start = 0;
    let done = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return;
        done = true;
        observer.disconnect();
        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${Math.round(target * eased)}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
  }, [value, durationMs]);

  return { ref, display };
}
