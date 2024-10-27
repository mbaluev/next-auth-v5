'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { WidgetChartCreate } from '@/components/widgets/chart/create';
import { SIDEBAR_EVENT_END, SIDEBAR_EVENT_START, useSidebar } from '@/components/layout/sidebar';
import {
  EChartType,
  MOCK_CHART_DATA,
  MOCK_CHART_LEGEND,
  DEFAULT_CHART_TYPE,
} from '@/components/widgets/chart/mock';
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
import { Spinner } from '@/components/ui/spinner';

export const WidgetChart = () => {
  const ref = useRef<any>(null);
  const [chart, setChart] = useState<any>();
  const router = useRouter();
  const params = useSearchParams();
  const { isMobile } = useSidebar();
  const type = params.get('type');

  // create chart
  const [loading, setLoading] = useState(true);
  const formatValue = (value: number) => value.toString();
  const create = useCallback(() => {
    if (ref.current && loading) {
      setLoading(false);
      const obj = WidgetChartCreate(
        ref,
        MOCK_CHART_DATA,
        MOCK_CHART_LEGEND,
        params.get('type') ?? DEFAULT_CHART_TYPE,
        formatValue
      );
      setChart(obj);
    }
  }, [ref]);
  useEffect(() => {
    setTimeout(create, 200);
  }, []);

  // window size
  useEffect(() => {
    const resize = () => {
      setLoading(true);
      chart?.remove();
      setTimeout(create, 200);
    };
    const resizeStart = () => {
      setLoading(true);
      chart?.remove();
    };
    const resizeEnd = () => {
      setTimeout(create, 100);
    };
    window.addEventListener('resize', resize);
    if (!isMobile) {
      window.addEventListener(SIDEBAR_EVENT_START, resizeStart);
      window.addEventListener(SIDEBAR_EVENT_END, resizeEnd);
    }
    return () => {
      window.removeEventListener('resize', resize);
      if (!isMobile) {
        window.removeEventListener(SIDEBAR_EVENT_START, resizeStart);
        window.removeEventListener(SIDEBAR_EVENT_END, resizeEnd);
      }
    };
  }, [chart, create, isMobile]);

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
            variant={!type || type === EChartType.stackedBarChart ? 'default' : 'ghost'}
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
        <div ref={ref} className="w-full h-full relative">
          {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Spinner />
            </div>
          )}
        </div>
      </WidgetContent>
    </Widget>
  );
};
