import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-full flex items-center justify-center p-4">{children}</div>;
};

export default AuthLayout;
