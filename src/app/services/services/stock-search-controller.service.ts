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
import { EntityModelStock } from '../models/entity-model-stock';
import { executeSearchStockGet } from '../fn/stock-search-controller/execute-search-stock-get';
import { ExecuteSearchStockGet$Params } from '../fn/stock-search-controller/execute-search-stock-get';
import { executeSearchStockGet1 } from '../fn/stock-search-controller/execute-search-stock-get-1';
import { ExecuteSearchStockGet1$Params } from '../fn/stock-search-controller/execute-search-stock-get-1';
import { executeSearchStockGet2 } from '../fn/stock-search-controller/execute-search-stock-get-2';
import { ExecuteSearchStockGet2$Params } from '../fn/stock-search-controller/execute-search-stock-get-2';

@Injectable({ providedIn: 'root' })
export class StockSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchStockGet()` */
  static readonly ExecuteSearchStockGetPath = '/stocks/search/findBySymbol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchStockGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet$Response(params?: ExecuteSearchStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
    return executeSearchStockGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchStockGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet(params?: ExecuteSearchStockGet$Params, context?: HttpContext): Observable<EntityModelStock> {
    return this.executeSearchStockGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStock>): EntityModelStock => r.body)
    );
  }

  /** Path part for operation `executeSearchStockGet1()` */
  static readonly ExecuteSearchStockGet1Path = '/stocks/search/findFirst500ByOrderByPERatioAsc';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchStockGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet1$Response(params?: ExecuteSearchStockGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelStock>> {
    return executeSearchStockGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchStockGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet1(params?: ExecuteSearchStockGet1$Params, context?: HttpContext): Observable<CollectionModelEntityModelStock> {
    return this.executeSearchStockGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelStock>): CollectionModelEntityModelStock => r.body)
    );
  }

  /** Path part for operation `executeSearchStockGet2()` */
  static readonly ExecuteSearchStockGet2Path = '/stocks/search/findbyNameContainingKeywordIgnoreCase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchStockGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet2$Response(params?: ExecuteSearchStockGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelStock>> {
    return executeSearchStockGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchStockGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchStockGet2(params?: ExecuteSearchStockGet2$Params, context?: HttpContext): Observable<CollectionModelEntityModelStock> {
    return this.executeSearchStockGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelStock>): CollectionModelEntityModelStock => r.body)
    );
  }

}
