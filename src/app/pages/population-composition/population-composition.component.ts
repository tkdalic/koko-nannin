import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { RestApiService } from 'src/app/service/rest-api.service';
import { PrefectureModel } from './interfaces/prefecture-model';

@Component({
  selector: 'app-population-composition',
  templateUrl: './population-composition.component.html',
  styleUrls: ['./population-composition.component.scss'],
})
export class PopulationCompositionComponent implements OnInit {
  prefectureInfoList: PrefectureModel[] = [];
  constructor(private restApi: RestApiService) {}

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  ngOnInit(): void {
    this.restApi.getPrefectures().then(
      (res) =>
        (this.prefectureInfoList = res.result.map((item) => ({
          ...item,
          value: false,
        })))
    );
  }

  async prefectureValueChange(): Promise<void> {
    const graphDatas = await Promise.all(
      this.prefectureInfoList
        .filter((prefectureInfo) => prefectureInfo.value)
        .map((prefectureInfo) => this.getPopulationComposition(prefectureInfo))
    );
    const filteredGraphDatas = graphDatas.filter(
      (prefectureInfo) => prefectureInfo
    ) as [ChartDataSets, string[]][];

    if (filteredGraphDatas.length === 0) {
      this.lineChartData = [];
      return;
    }
    this.lineChartData = filteredGraphDatas.map((graphData) => graphData[0]);
    this.lineChartLabels = filteredGraphDatas[0][1];
  }

  async getPopulationComposition(
    prefecture: PrefectureModel
  ): Promise<void | [ChartDataSets, string[]]> {
    const response = await this.restApi.getPopulationComposition(
      prefecture.prefCode.toString()
    );
    const populationData = response.result.data.find(
      (item) => item.label === '総人口'
    );
    if (!populationData) {
      throw Error('on page error');
    }
    return [
      {
        label: prefecture.prefName,
        data: populationData.data.map((item) => item.value),
      },
      populationData.data.map((item) => item.year.toString()),
    ];
  }
}
