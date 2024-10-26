import { useCallback, useEffect, useRef, useState } from 'react';
import { dashboardChartsCreate } from '@/components/dashboard/chart/create';
import { SIDEBAR_EVENT_END, SIDEBAR_EVENT_START } from '@/components/layout/sidebar';
import {
  DEFAULT_CHART_TYPE,
  MOCK_CHART_DATA,
  MOCK_CHART_LEGEND,
} from '@/components/dashboard/chart/mock';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
  WidgetButtons,
} from '@/components/layout/widget';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export const DashboardCharts = () => {
  const ref = useRef<any>(null);

  // data
  const [type, setType] = useState<string>(DEFAULT_CHART_TYPE);
  const [chart, setChart] = useState<any>();

  // create chart
  const formatValue = (value: number) => value.toString();
  const create = useCallback(() => {
    const obj = dashboardChartsCreate(ref, MOCK_CHART_DATA, MOCK_CHART_LEGEND, type, formatValue);
    setChart(obj);
  }, [type, ref]);
  const update = useCallback(() => {
    if (chart) chart.update(MOCK_CHART_DATA, type);
  }, [type, chart]);
  useEffect(() => create(), [create]);

  // window size
  useEffect(() => {
    const resize = () => create();
    const resizeStart = () => chart?.remove();
    const resizeEnd = () => create();
    window.addEventListener('resize', resize);
    window.addEventListener(SIDEBAR_EVENT_START, resizeStart);
    window.addEventListener(SIDEBAR_EVENT_END, resizeEnd);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener(SIDEBAR_EVENT_START, resizeStart);
      window.removeEventListener(SIDEBAR_EVENT_END, resizeEnd);
    };
  }, [chart, create]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>widget</WidgetTitle>
        <WidgetButtons>
          <Button variant="ghost" size="icon">
            <Link href="/dashboard/line">
              <LayoutDashboard />
            </Link>
          </Button>
        </WidgetButtons>
      </WidgetHeader>
      <WidgetContent>
        <div ref={ref} className="w-full h-full" />
      </WidgetContent>
    </Widget>
  );
};
