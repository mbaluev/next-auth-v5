'use server';

import * as z from 'zod';
import { loginSchema } from '@/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/tokens';
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/lib/mail';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import { db } from '@/lib/db';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';

export const login = async (values: z.infer<typeof loginSchema>, callbackUrl?: string | null) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid fields' };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'email does not exist' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email as string,
      verificationToken.token as string
    );
    return { success: 'confirmation email sent' };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
      if (!twoFactorToken) return { error: 'invalid code' };
      if (twoFactorToken.token !== code) return { error: 'invalid code' };

      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) return { error: 'code expired' };

      await db.twoFactorToken.delete({ where: { id: twoFactorToken.id } });
      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({ where: { id: existingConfirmation.id } });
      }

      await db.twoFactorConfirmation.create({ data: { userId: existingUser.id } });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email as string, twoFactorToken.token as string);
      return { twoFactor: true };
    }
  }

  const redirectTo = `http://localhost:3000${callbackUrl || DEFAULT_LOGIN_REDIRECT}`;
  console.log('--> redirectTo:', redirectTo);

  try {
    return await signIn('credentials', {
      email,
      password,
      redirectTo,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return { error: 'invalid credentials' };
        default:
          return { error: 'something went wrong' };
      }
    }
    throw err;
  }
};
