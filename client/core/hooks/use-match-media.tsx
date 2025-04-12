import * as React from 'react';

export function useMatchMedia(px: number) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${px - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < px);
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < px);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}
