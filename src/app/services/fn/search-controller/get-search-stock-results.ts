/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetSearchStockResults$Params {
  query: string;
}

export function getSearchStockResults(http: HttpClient, rootUrl: string, params: GetSearchStockResults$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
  const rb = new RequestBuilder(rootUrl, getSearchStockResults.PATH, 'get');
  if (params) {
    rb.path('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<{
      }>>;
    })
  );
}

getSearchStockResults.PATH = '/api/v1/search/stock/{query}';
