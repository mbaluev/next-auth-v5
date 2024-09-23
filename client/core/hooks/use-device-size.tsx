import { useEffect, useState } from 'react';
import { useWindowSize } from '@/core/hooks/use-window-size';

export const useDeviceSize = (threshold: number) => {
  const { width, height } = useWindowSize();
  const [less, setLess] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    if (width < threshold || height < threshold) setLess(true);
    else setLess(false);
  }, [width, height]);

  useEffect(() => {
    if (width > threshold || height > threshold) setMore(true);
    else setMore(false);
  }, [width, height]);

  return { less, more };
};
