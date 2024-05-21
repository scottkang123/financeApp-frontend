/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceStockDelete } from '../fn/stock-entity-controller/delete-item-resource-stock-delete';
import { DeleteItemResourceStockDelete$Params } from '../fn/stock-entity-controller/delete-item-resource-stock-delete';
import { EntityModelStock } from '../models/entity-model-stock';
import { getCollectionResourceStockGet1$Json } from '../fn/stock-entity-controller/get-collection-resource-stock-get-1-json';
import { GetCollectionResourceStockGet1$Json$Params } from '../fn/stock-entity-controller/get-collection-resource-stock-get-1-json';
import { getCollectionResourceStockGet1$UriList } from '../fn/stock-entity-controller/get-collection-resource-stock-get-1-uri-list';
import { GetCollectionResourceStockGet1$UriList$Params } from '../fn/stock-entity-controller/get-collection-resource-stock-get-1-uri-list';
import { getItemResourceStockGet } from '../fn/stock-entity-controller/get-item-resource-stock-get';
import { GetItemResourceStockGet$Params } from '../fn/stock-entity-controller/get-item-resource-stock-get';
import { PagedModelEntityModelStock } from '../models/paged-model-entity-model-stock';
import { patchItemResourceStockPatch } from '../fn/stock-entity-controller/patch-item-resource-stock-patch';
import { PatchItemResourceStockPatch$Params } from '../fn/stock-entity-controller/patch-item-resource-stock-patch';
import { postCollectionResourceStockPost } from '../fn/stock-entity-controller/post-collection-resource-stock-post';
import { PostCollectionResourceStockPost$Params } from '../fn/stock-entity-controller/post-collection-resource-stock-post';
import { putItemResourceStockPut } from '../fn/stock-entity-controller/put-item-resource-stock-put';
import { PutItemResourceStockPut$Params } from '../fn/stock-entity-controller/put-item-resource-stock-put';

@Injectable({ providedIn: 'root' })
export class StockEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceStockGet1()` */
  static readonly GetCollectionResourceStockGet1Path = '/stocks';

  /**
   * get-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceStockGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStockGet1$Json$Response(params?: GetCollectionResourceStockGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelStock>> {
    return getCollectionResourceStockGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceStockGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStockGet1$Json(params?: GetCollectionResourceStockGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelStock> {
    return this.getCollectionResourceStockGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelStock>): PagedModelEntityModelStock => r.body)
    );
  }

  /**
   * get-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceStockGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStockGet1$UriList$Response(params?: GetCollectionResourceStockGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceStockGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceStockGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceStockGet1$UriList(params?: GetCollectionResourceStockGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceStockGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceStockPost()` */
  static readonly PostCollectionResourceStockPostPath = '/stocks';

  /**
   * create-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceStockPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceStockPost$Response(params: PostCollectionResourceStockPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
    return postCollectionResourceStockPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceStockPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceStockPost(params: PostCollectionResourceStockPost$Params, context?: HttpContext): Observable<EntityModelStock> {
    return this.postCollectionResourceStockPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStock>): EntityModelStock => r.body)
    );
  }

  /** Path part for operation `getItemResourceStockGet()` */
  static readonly GetItemResourceStockGetPath = '/stocks/{id}';

  /**
   * get-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceStockGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceStockGet$Response(params: GetItemResourceStockGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
    return getItemResourceStockGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceStockGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceStockGet(params: GetItemResourceStockGet$Params, context?: HttpContext): Observable<EntityModelStock> {
    return this.getItemResourceStockGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStock>): EntityModelStock => r.body)
    );
  }

  /** Path part for operation `putItemResourceStockPut()` */
  static readonly PutItemResourceStockPutPath = '/stocks/{id}';

  /**
   * update-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceStockPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceStockPut$Response(params: PutItemResourceStockPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
    return putItemResourceStockPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceStockPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceStockPut(params: PutItemResourceStockPut$Params, context?: HttpContext): Observable<EntityModelStock> {
    return this.putItemResourceStockPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStock>): EntityModelStock => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceStockDelete()` */
  static readonly DeleteItemResourceStockDeletePath = '/stocks/{id}';

  /**
   * delete-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceStockDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceStockDelete$Response(params: DeleteItemResourceStockDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceStockDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceStockDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceStockDelete(params: DeleteItemResourceStockDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceStockDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceStockPatch()` */
  static readonly PatchItemResourceStockPatchPath = '/stocks/{id}';

  /**
   * patch-stock
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceStockPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceStockPatch$Response(params: PatchItemResourceStockPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelStock>> {
    return patchItemResourceStockPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-stock
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceStockPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceStockPatch(params: PatchItemResourceStockPatch$Params, context?: HttpContext): Observable<EntityModelStock> {
    return this.patchItemResourceStockPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelStock>): EntityModelStock => r.body)
    );
  }

}
