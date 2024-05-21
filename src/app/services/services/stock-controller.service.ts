/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { fetchAndSaveStocks } from '../fn/stock-controller/fetch-and-save-stocks';
import { FetchAndSaveStocks$Params } from '../fn/stock-controller/fetch-and-save-stocks';
import { StockDto } from '../models/stock-dto';

@Injectable({ providedIn: 'root' })
export class StockControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fetchAndSaveStocks()` */
  static readonly FetchAndSaveStocksPath = '/fetch-and-save-stocks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fetchAndSaveStocks()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchAndSaveStocks$Response(params?: FetchAndSaveStocks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StockDto>>> {
    return fetchAndSaveStocks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fetchAndSaveStocks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchAndSaveStocks(params?: FetchAndSaveStocks$Params, context?: HttpContext): Observable<Array<StockDto>> {
    return this.fetchAndSaveStocks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StockDto>>): Array<StockDto> => r.body)
    );
  }

}
