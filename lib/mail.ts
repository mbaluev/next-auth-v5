import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.APP_URL}/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'confirm your email',
    html: `<p>click <a href=${confirmLink}>here<a/> to confirm email</p>`,
  });
};
