import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/navbar';

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex flex-col pb-20 min-h-full bg-gray-100">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
