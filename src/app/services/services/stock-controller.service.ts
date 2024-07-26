/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { fetchStockData } from '../fn/stock-controller/fetch-stock-data';
import { FetchStockData$Params } from '../fn/stock-controller/fetch-stock-data';

@Injectable({ providedIn: 'root' })
export class StockControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fetchStockData()` */
  static readonly FetchStockDataPath = '/api/v1/stock/fetchStockData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fetchStockData()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchStockData$Response(params?: FetchStockData$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fetchStockData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fetchStockData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchStockData(params?: FetchStockData$Params, context?: HttpContext): Observable<void> {
    return this.fetchStockData$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
