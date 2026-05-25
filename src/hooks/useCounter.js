import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target, { suffix = '', prefix = '', duration = 1800 } = {}) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return undefined;
    started.current = true;

    const start = performance.now();
    const numericTarget = Number(target);
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(numericTarget * eased);
      setDisplay(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(`${prefix}${numericTarget}${suffix}`);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, suffix, prefix, duration]);

  return display;
}
