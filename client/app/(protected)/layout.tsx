import { ReactNode } from 'react';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-grow items-center justify-center w-full">
      <div className="h-fit w-[400px] px-4">{children}</div>
    </section>
  );
};

export default ProtectedLayout;
