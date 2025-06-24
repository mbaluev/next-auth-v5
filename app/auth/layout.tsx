import { ReactNode } from 'react';
import { MasterCenter } from '@/components/molecules/layout/master';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <MasterCenter className="items-start">{children}</MasterCenter>;
};

export default AuthLayout;
