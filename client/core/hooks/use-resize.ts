import { MutableRefObject, useMemo, useEffect, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export function useResize(
  ref: MutableRefObject<HTMLElement | undefined>,
  deps: unknown[]
): Dimensions {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const observer = useMemo(() => {
    if (typeof window !== 'undefined')
      return new ResizeObserver((entries) => {
        // Using the scrollWidth and scrollHeight of the target ensures this works with CSS transitions
        // because it accounts for the height of the content before it's visually fully expanded, which elements[0].contentRect does not
        setWidth(entries[0].target.scrollWidth);
        setHeight(entries[0].target.scrollHeight);
      });
  }, []);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [deps, observer, ref]);

  return { width, height };
}
