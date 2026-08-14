import { useRef, useEffect, useCallback } from 'react';

/**
 * Tracks normalized mouse position (-1 to 1) for 3D scene interactions.
 * Uses useRef instead of useState to avoid triggering React re-renders
 * on every mouse move — the Three.js useFrame loop reads the ref directly.
 */
export function useMousePosition() {
  const position = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    position.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
