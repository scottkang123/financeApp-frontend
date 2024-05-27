/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelStock } from '../models/collection-model-entity-model-stock';
import { executeSearchStockGet } from '../fn/stock-search-controller/execute-search-stock-get';
import { ExecuteSearchStockGet$Params } from '../fn/stock-search-controller/execute-search-stock-get';

@Injectable({ providedIn: 'root' })
export class StockSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchStockGet()` */
  static readonly ExecuteSearchStockGetPath = '/stocks/search/findbyNameContainingKeywordIgnoreCase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchStockGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet$Response(params?: ExecuteSearchStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelStock>> {
    return executeSearchStockGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchStockGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet(params?: ExecuteSearchStockGet$Params, context?: HttpContext): Observable<CollectionModelEntityModelStock> {
    return this.executeSearchStockGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelStock>): CollectionModelEntityModelStock => r.body)
    );
  }

}
