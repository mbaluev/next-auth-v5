import { auth } from '@/core/auth/auth';

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};
