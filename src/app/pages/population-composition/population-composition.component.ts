import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.restApi.getPrefectures().then(
      (res) =>
        (this.prefectureInfoList = res.result.map((item) => ({
          ...item,
          value: false,
        })))
    );
  }
}
