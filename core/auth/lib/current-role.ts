import { auth } from '@/core/auth/auth';

export const currentRole = async () => {
  const session = await auth();
  return session?.user.role;
};
