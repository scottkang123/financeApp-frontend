/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelStock } from '../../models/entity-model-stock';

export interface GetItemResourceStockGet$Params {
  id: string;
}

export function getItemResourceStockGet(http: HttpClient, rootUrl: string, params: GetItemResourceStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceStockGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceStockGet.PATH = '/stocks/{id}';
