import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex flex-col pb-20 min-h-full bg-background">
      <Header />
      <hr />
      <div className="flex justify-center pt-10 px-4">
        <div className="w-[400px]">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
