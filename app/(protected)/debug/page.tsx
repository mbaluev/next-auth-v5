'use client';

import { WidgetDebug } from '@/components/widgets/debug';
import { WidgetProfile } from '@/components/widgets/profile';

export default function Debug() {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <WidgetDebug />
      <WidgetProfile />
    </div>
  );
}
