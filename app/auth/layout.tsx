import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-600"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
