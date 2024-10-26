import { ReactNode } from 'react';

const CenterLayout = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-grow px-4">{children}</section>;
};

export default CenterLayout;
