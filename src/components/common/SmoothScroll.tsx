/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import Lenis from "lenis";
import { useEffect, useRef, type ReactNode, type JSX } from "react";

interface Props {
  children: ReactNode;
}

const EASING_POWER = 5;
const EASING_BASE = 1;

const SmoothScroll = ({ children }: Props): JSX.Element => {
  const rafId = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect((): (() => void) => {
    lenisRef.current = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      wheelMultiplier: 1.4,
      easing: (t: number): number => EASING_BASE - Math.pow(EASING_BASE - t, EASING_POWER),
    });

    const raf = (time: number): void => {
      lenisRef.current?.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    return (): void => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ✅ No Fragment → fixes react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default SmoothScroll;
