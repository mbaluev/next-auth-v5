import { ReactNode } from 'react';

const CenterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-grow justify-center items-center">
      <div className="h-fit w-[min(400px,100%)] px-4">{children}</div>
    </section>
  );
};

export default CenterLayout;
