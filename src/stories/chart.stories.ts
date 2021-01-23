// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from 'src/app/parts/chart/chart.component';

export default {
  title: 'Chart',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartsModule],
    }),
  ],
} as Meta;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  component: ChartComponent,
  props: args,
});

export const LineChart = Template.bind({});
LineChart.args = {
  lineChartData: [
    {
      data: [100, 60, 90, 0, 80, 50],
      label: '平均湿度',
    },
    {
      data: [0, 60, 90, 0, 80, 50],
      label: '平均温度',
    },
  ],
  lineChartLabels: ['January', 'February', 'March', 'April', 'May', 'June'],
  xAxesLabel: '季節',
  yAxesLabel: '湿度(%)',
};
