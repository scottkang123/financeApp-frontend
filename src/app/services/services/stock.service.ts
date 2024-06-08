/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { fetchStockData } from '../fn/stock/fetch-stock-data';
import { FetchStockData$Params } from '../fn/stock/fetch-stock-data';
import { getTop500StocksByPeRatio } from '../fn/stock/get-top-500-stocks-by-pe-ratio';
import { GetTop500StocksByPeRatio$Params } from '../fn/stock/get-top-500-stocks-by-pe-ratio';

@Injectable({ providedIn: 'root' })
export class StockService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fetchStockData()` */
  static readonly FetchStockDataPath = '/stock/fetchStockData';

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

  /** Path part for operation `getTop500StocksByPeRatio()` */
  static readonly GetTop500StocksByPeRatioPath = '/stock/top500-by-peratio';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTop500StocksByPeRatio()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTop500StocksByPeRatio$Response(params?: GetTop500StocksByPeRatio$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Array<{
  }>>>> {
    return getTop500StocksByPeRatio(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTop500StocksByPeRatio$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTop500StocksByPeRatio(params?: GetTop500StocksByPeRatio$Params, context?: HttpContext): Observable<Array<Array<{
  }>>> {
    return this.getTop500StocksByPeRatio$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Array<{
      }>>>): Array<Array<{
      }>> => r.body)
    );
  }

}
