'use client';

import { WidgetChart } from '@/components/widgets/chart';
import { WidgetEmpty } from '@/components/widgets/empty';

const DashboardPage = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <WidgetChart />
      <WidgetEmpty className="h-[400px]" />
      <WidgetEmpty className="h-[300px]" />
    </div>
  );
};

export default DashboardPage;
