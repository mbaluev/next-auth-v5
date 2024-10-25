import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEFAULT_CHART_TYPE,
  MOCK_CHART_DATA,
  MOCK_CHART_LEGEND,
} from '@/components/dashboard/chart/mock';
import { dashboardChartsCreate } from '@/components/dashboard/chart/create';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { Card } from '@/components/ui/card';

export const DashboardCharts = () => {
  const ref = useRef<any>(null);

  // data
  const height = 300;
  const [type, setType] = useState<string>(DEFAULT_CHART_TYPE);
  const [chart, setChart] = useState<any>();

  // create chart
  const formatValue = (value: number) => value.toString();
  const create = useCallback(() => {
    const obj = dashboardChartsCreate(ref, MOCK_CHART_DATA, MOCK_CHART_LEGEND(), type, formatValue);
    setChart(obj);
  }, [ref, type]);

  useEffect(() => {
    create();
  }, [create]);

  // window size
  useEffect(() => {
    const resize = () => create();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [create]);

  // update chart
  useEffect(() => {
    if (chart && type) chart.update(MOCK_CHART_DATA, type);
  }, [type, chart]);

  return (
    <Card className="flex-grow mx-4 p-4" style={{ height }}>
      <div ref={ref} className="w-full h-full" />
    </Card>
  );
};
