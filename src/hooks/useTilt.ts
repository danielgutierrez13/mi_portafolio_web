import { useEffect, type RefObject } from 'react';

/**
 * Inclina el elemento en 3D siguiendo el cursor (rotateX/Y + leve elevación).
 * Se desactiva en dispositivos táctiles y con prefers-reduced-motion.
 * Recibe un ref existente para poder compartirlo con otros hooks (p. ej. reveal).
 */
export function useTilt<T extends HTMLElement>(ref: RefObject<T | null>, max = 7): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const coarse = globalThis.matchMedia?.('(hover: none)').matches ?? false;
    if (reduce || coarse) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(820px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-3px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [ref, max]);
}
