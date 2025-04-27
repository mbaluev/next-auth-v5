'use server';

import { signOut } from '@/core/auth/auth';

export const logout = async () => {
  // some server stuff
  await signOut();
};
