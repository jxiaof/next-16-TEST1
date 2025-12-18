import { useEffect, useState } from 'react';

interface ViewportSize {
  width: number;
  height: number;
}

export function useViewport(): ViewportSize {
  const [viewport, setViewport] = useState<ViewportSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}