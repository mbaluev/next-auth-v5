'use client';

import { WidgetClient } from '@/components/widgets/client';
import { WidgetAdmin } from '@/components/widgets/admin';
import { WidgetSettings } from '@/components/widgets/settings';

const ClientPage = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <WidgetClient />
      <WidgetAdmin />
      <WidgetSettings />
    </div>
  );
};

export default ClientPage;
