import { db } from '@/lib/db';
import { v4 as uuid } from 'uuid';
import { getVerificationTokenByEmail } from '@/data/verification-token';

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }
  return db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
};
