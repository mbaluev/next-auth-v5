import { WidgetWrapper } from '@/components/auth/widget-wrapper';
import { AlertError } from '@/components/ui/alert';

export default function NotFound() {
  return (
    <section className="flex flex-grow justify-center items-center">
      <div className="h-fit w-[min(350px,100%)] px-4">
        <WidgetWrapper
          headerLabel="a simple authentication service"
          backButtonLabel="back home"
          backButtonHref="/"
        >
          <AlertError message="page not found" />
        </WidgetWrapper>
      </div>
    </section>
  );
}
