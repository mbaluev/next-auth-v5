import { MasterCenter } from '@/components/layout/master';
import { ButtonBack } from '@/components/auth/button-back';
import { SvgTrash } from '@/components/svg/components/trash';

export default function NotFound() {
  return (
    <MasterCenter>
      <div className="flex flex-col gap-6 items-center w-full py-10">
        <SvgTrash className="text-[12rem]" />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-4xl font-medium">404</p>
          <p>page not found</p>
          <ButtonBack href="/" label="back home" />
        </div>
      </div>
    </MasterCenter>
  );
}
