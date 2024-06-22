import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center justify-center p-4 pt-20">{children}</div>;
};

export default AuthLayout;
