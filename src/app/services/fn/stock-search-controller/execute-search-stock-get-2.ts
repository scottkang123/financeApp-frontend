/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelStock } from '../../models/collection-model-entity-model-stock';

export interface ExecuteSearchStockGet2$Params {
  keyword?: string;
}

export function executeSearchStockGet2(http: HttpClient, rootUrl: string, params?: ExecuteSearchStockGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelStock>> {
  const rb = new RequestBuilder(rootUrl, executeSearchStockGet2.PATH, 'get');
  if (params) {
    rb.query('keyword', params.keyword, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelStock>;
    })
  );
}

executeSearchStockGet2.PATH = '/stocks/search/findbyNameContainingKeywordIgnoreCase';
