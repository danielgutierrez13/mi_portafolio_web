import { useEffect, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01xz$&';

/**
 * Efecto "decode": el texto aparece como glifos aleatorios que se van
 * resolviendo de izquierda a derecha hasta el valor final. Respeta
 * prefers-reduced-motion mostrando el texto final de inmediato.
 */
export function useScramble(text: string, charsPerFrame = 0.34): string {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    const reduce = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    let raf = 0;
    if (reduce) {
      raf = requestAnimationFrame(() => setOutput(text));
      return () => cancelAnimationFrame(raf);
    }

    let revealed = 0;
    const tick = () => {
      revealed += charsPerFrame;
      const cut = Math.floor(revealed);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === ' ') { out += ' '; continue; }
        out += i < cut ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOutput(out);
      if (cut < text.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, charsPerFrame]);

  return output;
}
