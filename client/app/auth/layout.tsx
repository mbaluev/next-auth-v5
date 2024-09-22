import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-fit w-[400px] px-4">{children}</div>;
};

export default AuthLayout;
