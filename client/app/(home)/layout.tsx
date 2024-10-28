import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-grow justify-center items-center">
      <div className="h-fit px-4">{children}</div>
    </section>
  );
};

export default HomeLayout;
