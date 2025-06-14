import { MasterCenter } from '@/components/layout/master';
import { Frown } from 'lucide-react';
import { ButtonBack } from '@/components/auth/button-back';

export default function NotFound() {
  return (
    <MasterCenter>
      <div className="flex flex-col gap-10 items-center w-full py-10">
        <Frown className="text-9xl text-muted-foreground" />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-6xl font-medium">404</p>
          <p>page not found</p>
        </div>
        <ButtonBack href="/" label="back home" />
      </div>
    </MasterCenter>
  );
}
