import { randomInt } from '@/core/utils/random';
import moment from 'moment';

export enum EChartType {
  stackedBarChart = 'stackedBarChart',
  groupedBarChart = 'groupedBarChart',
  areaChart = 'areaChart',
  stackedAreaChart = 'stackedAreaChart',
  lineChart = 'lineChart',
}

export interface IChartItem extends Record<string, any> {
  total: number;
  unbilled: number;
  draft: number;
  date: string;
}

export interface IChartLegendItem {
  key: string;
  name: string;
  color: string;
  color2?: string;
  visible?: boolean;
  percent?: number;
  amount?: number;
}

const length = 12;

export const DEFAULT_CHART_TYPE = EChartType.stackedBarChart;

export const MOCK_CHART_DATA: IChartItem[] = Array.from({ length }).map((_, i) => {
  const unbilled = randomInt(-200000, 200000);
  const draft = randomInt(-200000, 200000);
  return {
    total: unbilled + draft,
    unbilled,
    draft,
    date: moment({
      year: moment(new Date())
        .subtract(length - i - 1, 'months')
        .year(),
      month: moment(new Date())
        .subtract(length - i - 1, 'months')
        .month(),
    })
      .startOf('month')
      .format('YYYY-MM-DD'),
  };
});

export const MOCK_CHART_LEGEND = (): IChartLegendItem[] => {
  const total = MOCK_CHART_DATA.reduce((prev: number, curr: any) => prev + curr.total, 0);
  const unbilled = MOCK_CHART_DATA.reduce((prev: number, curr: any) => prev + curr.unbilled, 0);
  const draft = MOCK_CHART_DATA.reduce((prev: number, curr: any) => prev + curr.draft, 0);
  return [
    {
      key: 'total',
      name: 'total',
      color: 'hsla(4, 100%, 80%, 1)',
      color2: 'hsla(4, 100%, 85%, 1)',
      visible: true,
      amount: unbilled,
      percent: (unbilled * 100) / total,
    },
    {
      key: 'unbilled',
      name: 'unbilled',
      color: 'hsla(240, 100%, 80%, 1)',
      color2: 'hsla(240, 100%, 85%, 1)',
      visible: true,
      amount: unbilled,
      percent: (unbilled * 100) / total,
    },
    {
      key: 'draft',
      name: 'draft',
      color: 'hsla(240, 100%, 65%, 1)',
      color2: 'hsla(240, 100%, 70%, 1)',
      visible: true,
      amount: draft,
      percent: (draft * 100) / total,
    },
  ];
};
