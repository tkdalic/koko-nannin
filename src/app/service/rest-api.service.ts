import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PopulationCompositionResponse } from './models/population-composition-response';
import { PrefectureResponse } from './models/prefecture-response';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private host = `${environment.host_url}/${environment.host_version}`;

  constructor(private http: HttpClient) {}

  private get<T>(path: string, httpOptions: object): Promise<T> {
    return this.http.get<T>(`${this.host}/${path}`, httpOptions).toPromise();
  }

  public getPrefectures(): Promise<PrefectureResponse> {
    const path = 'prefectures';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': environment.resas_token as string,
      }),
    };
    return this.get<PrefectureResponse>(path, httpOptions);
  }

  public getPopulationComposition(
    prefCode: string
  ): Promise<PopulationCompositionResponse> {
    const path = 'population/composition/perYear';
    const httpOptions = {
      params: {
        prefCode,
        cityCode: '-',
      },
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-api-key': environment.resas_token as string,
      }),
    };
    return this.get<PopulationCompositionResponse>(path, httpOptions);
  }
}
