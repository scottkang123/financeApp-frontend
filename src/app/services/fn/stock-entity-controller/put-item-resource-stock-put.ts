/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStock } from '../../models/entity-model-stock';
import { StockRequestBody } from '../../models/stock-request-body';

export interface PutItemResourceStockPut$Params {
  id: string;
      body: StockRequestBody
}

export function putItemResourceStockPut(http: HttpClient, rootUrl: string, params: PutItemResourceStockPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceStockPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceStockPut.PATH = '/stocks/{id}';
