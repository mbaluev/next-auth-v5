import { ReactNode } from 'react';
import { Navbar } from '@/app/(protected)/_components/navbar';

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex flex-col p-4 pb-20 gap-4 min-h-full bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
