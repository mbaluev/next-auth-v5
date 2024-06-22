import { UserRole } from '@prisma/client';
import { DefaultSession } from '@auth/core/types';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      role: UserRole;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: UserRole;
  }
}
