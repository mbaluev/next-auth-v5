import { useCallback, useEffect, useRef, useState } from 'react';
import { dashboardChartsCreate } from '@/components/dashboard/chart/create';
import { SIDEBAR_EVENT_END, SIDEBAR_EVENT_START } from '@/components/layout/sidebar';
import {
  EChartType,
  MOCK_CHART_DATA,
  MOCK_CHART_LEGEND,
  DEFAULT_CHART_TYPE,
} from '@/components/dashboard/chart/mock';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
  WidgetButtons,
} from '@/components/layout/widget';
import { Button } from '@/components/ui/button';
import { ChartArea, ChartColumn, ChartColumnStacked, ChartLine, ChartSpline } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export const DashboardCharts = () => {
  const ref = useRef<any>(null);
  const [chart, setChart] = useState<any>();
  const router = useRouter();
  const params = useSearchParams();
  const type = params.get('type');

  // create chart
  const formatValue = (value: number) => value.toString();
  const create = useCallback(() => {
    const obj = dashboardChartsCreate(
      ref,
      MOCK_CHART_DATA,
      MOCK_CHART_LEGEND,
      params.get('type') ?? DEFAULT_CHART_TYPE,
      formatValue
    );
    setChart(obj);
  }, [ref]);
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

  // update
  const handleChange = (type: EChartType) => {
    router.push(`/dashboard?type=${type}`);
  };
  useEffect(() => {
    if (chart) {
      chart.update(MOCK_CHART_DATA, type ?? DEFAULT_CHART_TYPE);
    }
  }, [chart, type]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>widget</WidgetTitle>
        <WidgetButtons>
          <Button
            variant={type === EChartType.stackedBarChart ? 'default' : 'ghost'}
            size="icon"
            onClick={() => handleChange(EChartType.stackedBarChart)}
          >
            <ChartColumnStacked />
          </Button>
          <Button
            variant={type === EChartType.groupedBarChart ? 'default' : 'ghost'}
            size="icon"
            onClick={() => handleChange(EChartType.groupedBarChart)}
          >
            <ChartColumn />
          </Button>
          <Button
            variant={type === EChartType.areaChart ? 'default' : 'ghost'}
            size="icon"
            onClick={() => handleChange(EChartType.areaChart)}
          >
            <ChartSpline />
          </Button>
          <Button
            variant={type === EChartType.stackedAreaChart ? 'default' : 'ghost'}
            size="icon"
            onClick={() => handleChange(EChartType.stackedAreaChart)}
          >
            <ChartArea />
          </Button>
          <Button
            variant={type === EChartType.lineChart ? 'default' : 'ghost'}
            size="icon"
            onClick={() => handleChange(EChartType.lineChart)}
          >
            <ChartLine />
          </Button>
        </WidgetButtons>
      </WidgetHeader>
      <WidgetContent>
        <div ref={ref} className="w-full h-full" />
      </WidgetContent>
    </Widget>
  );
};
