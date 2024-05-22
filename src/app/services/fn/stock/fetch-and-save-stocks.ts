/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockDto } from '../../models/stock-dto';

export interface FetchAndSaveStocks$Params {
}

export function fetchAndSaveStocks(http: HttpClient, rootUrl: string, params?: FetchAndSaveStocks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StockDto>>> {
  const rb = new RequestBuilder(rootUrl, fetchAndSaveStocks.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StockDto>>;
    })
  );
}

fetchAndSaveStocks.PATH = '/stock/fetch-and-save-stocks';
