import { randomInt } from '@/core/utils/random';
import moment from 'moment';

export enum EChartType {
  stackedBarChart = 'bar-stacked',
  groupedBarChart = 'bar-grouped',
  areaChart = 'area',
  stackedAreaChart = 'area-stacked',
  lineChart = 'line',
}

export interface IChartItem extends Record<string, any> {
  a: number;
  b: number;
  c: number;
  date: string;
}

export interface IChartLegendItem {
  key: string;
  color: string;
}

const length = 100;

export const DEFAULT_CHART_TYPE = EChartType.stackedBarChart;

export const MOCK_CHART_DATA: IChartItem[] = Array.from({ length })
  .map((_, i) => {
    return {
      a: randomInt(-200000, 200000),
      b: randomInt(-200000, 200000),
      c: randomInt(-200000, 200000),
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
  })
  .sort((a, b) => a.a + a.b + a.c - (b.a + b.b + b.c));

export const MOCK_CHART_LEGEND: IChartLegendItem[] = [
  {
    key: 'a',
    color: 'hsla(4, 100%, 80%, 1)',
  },
  {
    key: 'b',
    color: 'hsla(240, 100%, 80%, 1)',
  },
  {
    key: 'c',
    color: 'hsla(240, 100%, 65%, 1)',
  },
];
