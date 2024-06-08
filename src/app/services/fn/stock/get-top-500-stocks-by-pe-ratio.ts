/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetTop500StocksByPeRatio$Params {
}

export function getTop500StocksByPeRatio(http: HttpClient, rootUrl: string, params?: GetTop500StocksByPeRatio$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Array<{
}>>>> {
  const rb = new RequestBuilder(rootUrl, getTop500StocksByPeRatio.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Array<{
      }>>>;
    })
  );
}

getTop500StocksByPeRatio.PATH = '/stock/top500-by-peratio';
