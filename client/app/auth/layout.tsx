import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center p-4 pt-20 pb-20 min-h-full bg-gray-100">{children}</div>
  );
};

export default AuthLayout;
