import { useEffect, useState } from 'react';

export default function UseWindowSize() {
  interface WindowSize {
    width: number;
    height: number;
  }

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: 1080
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    changeWindowSize();

    window.addEventListener('resize', changeWindowSize);
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, [typeof window !== 'undefined']);

  return windowSize;
}
