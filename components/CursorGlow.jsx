'use client';

import { useEffect, useRef } from 'react';

/**
 * Two subtle pointer effects, delucks-style:
 * 1. A soft steel-blue light that trails the cursor (screen-blended, so it
 *    reads on dark sections and nearly disappears on white).
 * 2. A spotlight highlight inside .card-lift cards that follows the pointer.
 * Skipped entirely on touch devices and for reduced-motion users.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const glow = glowRef.current;
    if (!glow) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;
    let raf;
    let shown = false;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        glow.style.opacity = '1';
      }
      // Card spotlight coordinates
      const card = e.target.closest?.('.card-lift');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const onLeave = () => {
      shown = false;
      glow.style.opacity = '0';
    };

    const loop = () => {
      // Lazy follow: the light drifts toward the cursor instead of sticking to it
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      glow.style.transform = `translate3d(${cx - 400}px, ${cy - 400}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} aria-hidden className="cursor-glow" />;
}
