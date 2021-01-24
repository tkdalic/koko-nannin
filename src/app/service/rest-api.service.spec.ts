import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { doesNotReject } from 'assert';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  let service: RestApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RestApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get prefectures', async () => {
    const testData: any = { result: 'test' };
    service.getPrefectures().then((data) => {
      expect(data).toEqual(testData);
    });
    const req = httpTestingController.expectOne(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });

  it('can get population composition', async () => {
    const testData = { result: 'test' };
    service.getPopulationComposition('1').then((data) => {
      expect(data).toEqual(testData);
    });
    const req = httpTestingController.expectOne(
      'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  });
});
