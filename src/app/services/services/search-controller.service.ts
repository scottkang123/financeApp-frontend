/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getSearchStockResults } from '../fn/search-controller/get-search-stock-results';
import { GetSearchStockResults$Params } from '../fn/search-controller/get-search-stock-results';

@Injectable({ providedIn: 'root' })
export class SearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getSearchStockResults()` */
  static readonly GetSearchStockResultsPath = '/api/v1/search/stock/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSearchStockResults()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSearchStockResults$Response(params: GetSearchStockResults$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return getSearchStockResults(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSearchStockResults$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSearchStockResults(params: GetSearchStockResults$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.getSearchStockResults$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

}
