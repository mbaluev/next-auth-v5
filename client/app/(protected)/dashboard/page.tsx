'use client';

import { WidgetChart } from '@/components/widgets/chart';

const DashboardPage = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 lg:grid-cols-2">
      <WidgetChart className="max-h-[400px]" />
    </div>
  );
};

export default DashboardPage;
