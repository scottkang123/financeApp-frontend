/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSearchStockResult } from '../fn/search/get-search-stock-result';
import { GetSearchStockResult$Params } from '../fn/search/get-search-stock-result';

@Injectable({ providedIn: 'root' })
export class SearchService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSearchStockResult()` */
  static readonly GetSearchStockResultPath = '/search/stock/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSearchStockResult()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSearchStockResult$Response(params: GetSearchStockResult$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return getSearchStockResult(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSearchStockResult$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSearchStockResult(params: GetSearchStockResult$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.getSearchStockResult$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

}
