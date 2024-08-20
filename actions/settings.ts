'use server';

import * as z from 'zod';
import { db } from '@/lib/db';
import { settingsSchema } from '@/schemas';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const settings = async (values: z.infer<typeof settingsSchema>) => {
  const user = await currentUser();
  if (!user) return { error: 'unauthorized' };

  const dbUser = await getUserById(user.id as string);
  if (!dbUser) return { error: 'unauthorized' };

  await db.user.update({ where: { id: dbUser.id }, data: { ...values } });
  return { success: 'settings updated' };
};
