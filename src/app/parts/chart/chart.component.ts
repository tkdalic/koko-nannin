import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  // data
  @Input() lineChartData: ChartDataSets[] = [];

  // ラベル
  @Input() lineChartLabels: Label[] = [];
  @Input() xAxesLabel = '';
  @Input() yAxesLabel = '';

  lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
        fill: false,
      },
    },
  };

  lineChartLegend = true; // グラフの属性ラベル
  lineChartPlugins = [];
  lineChartType = 'line'; // グラフの種類

  constructor() {}

  ngOnInit(): void {
    this.lineChartOptions.scales = {
      xAxes: [
        {
          scaleLabel: {
            display: this.xAxesLabel !== '',
            labelString: this.xAxesLabel,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: this.yAxesLabel !== '',
            labelString: this.yAxesLabel,
          },
        },
      ],
    };
  }
}
