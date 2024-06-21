import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center
        {/*bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-950*/}
        {/*bg-gray-200*/}
        "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
