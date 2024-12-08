'use client';

import { WidgetChart } from '@/components/widgets/chart';

const DashboardPage = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 {/*md:grid-cols-2*/}">
      <WidgetChart />
    </div>
  );
};

export default DashboardPage;
