'use client';

import { Logo } from '@/components/layout/logo';

export default function Debug() {
  return (
    <div className="space-y-10 text-center">
      <div className="text-6xl flex gap-8 flex-row flex-wrap items-center justify-center">
        <Logo />
        <h1 className="text-6xl font-semibold">{process.env.APP_NAME}</h1>
      </div>
      <div className="flex gap-1 flex-col items-center text-lg text-muted-foreground">
        <p>{process.env.APP_NAME}</p>
        <p>{process.env.APP_URL}</p>
        {/*<p>{process.env.DATABASE_URL}</p>*/}
      </div>
    </div>
  );
}
