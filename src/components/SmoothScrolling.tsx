import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollingProps {
  children: ReactNode;
  enabled?: boolean;
}

export default function SmoothScrolling({ children, enabled = true }: SmoothScrollingProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) {
      // Destroy lenis if it exists and we're disabling
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return <>{children}</>;
}
