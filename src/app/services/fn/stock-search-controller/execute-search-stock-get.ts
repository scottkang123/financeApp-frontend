/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStock } from '../../models/entity-model-stock';

export interface ExecuteSearchStockGet$Params {
  symbol?: string;
}

export function executeSearchStockGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
  const rb = new RequestBuilder(rootUrl, executeSearchStockGet.PATH, 'get');
  if (params) {
    rb.query('symbol', params.symbol, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelStock>;
    })
  );
}

executeSearchStockGet.PATH = '/stocks/search/findBySymbol';
