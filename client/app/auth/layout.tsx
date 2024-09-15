import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-full bg-background">
      <Header />
      <div className="flex justify-center p-4 pt-0">{children}</div>
    </div>
  );
};

export default AuthLayout;
