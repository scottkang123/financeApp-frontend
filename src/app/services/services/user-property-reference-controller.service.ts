/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelRole } from '../models/collection-model-role';
import { CollectionModelStock } from '../models/collection-model-stock';
import { createPropertyReferenceUserPatch$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { CreatePropertyReferenceUserPatch$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { createPropertyReferenceUserPatch$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { CreatePropertyReferenceUserPatch$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { createPropertyReferenceUserPatch1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { CreatePropertyReferenceUserPatch1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { createPropertyReferenceUserPatch1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { CreatePropertyReferenceUserPatch1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { createPropertyReferenceUserPut$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { CreatePropertyReferenceUserPut$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { createPropertyReferenceUserPut$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { CreatePropertyReferenceUserPut$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { createPropertyReferenceUserPut1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { CreatePropertyReferenceUserPut1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { createPropertyReferenceUserPut1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { CreatePropertyReferenceUserPut1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { deletePropertyReferenceIdUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { DeletePropertyReferenceIdUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { deletePropertyReferenceIdUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { DeletePropertyReferenceIdUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { deletePropertyReferenceUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { DeletePropertyReferenceUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { deletePropertyReferenceUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { DeletePropertyReferenceUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { followPropertyReferenceUserGet } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { FollowPropertyReferenceUserGet$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { followPropertyReferenceUserGet1$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { FollowPropertyReferenceUserGet1$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { followPropertyReferenceUserGet1$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { FollowPropertyReferenceUserGet1$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { followPropertyReferenceUserGet2 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { FollowPropertyReferenceUserGet2$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { followPropertyReferenceUserGet21$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { FollowPropertyReferenceUserGet21$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { followPropertyReferenceUserGet21$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';
import { FollowPropertyReferenceUserGet21$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';

@Injectable({ providedIn: 'root' })
export class UserPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceUserGet1()` */
  static readonly FollowPropertyReferenceUserGet1Path = '/users/{id}/roles';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json$Response(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUserGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUserGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList$Response(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut()` */
  static readonly CreatePropertyReferenceUserPutPath = '/users/{id}/roles';

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json$Response(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList$Response(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete()` */
  static readonly DeletePropertyReferenceUserDeletePath = '/users/{id}/roles';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete$Response(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch()` */
  static readonly CreatePropertyReferenceUserPatchPath = '/users/{id}/roles';

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json$Response(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList$Response(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet()` */
  static readonly FollowPropertyReferenceUserGetPath = '/users/{id}/roles/{propertyId}';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet$Response(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete()` */
  static readonly DeletePropertyReferenceIdUserDeletePath = '/users/{id}/roles/{propertyId}';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete$Response(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet21()` */
  static readonly FollowPropertyReferenceUserGet21Path = '/users/{id}/stocks';

  /**
   * get-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json$Response(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return followPropertyReferenceUserGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.followPropertyReferenceUserGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /**
   * get-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList$Response(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut1()` */
  static readonly CreatePropertyReferenceUserPut1Path = '/users/{id}/stocks';

  /**
   * update-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json$Response(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return createPropertyReferenceUserPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.createPropertyReferenceUserPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /**
   * update-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList$Response(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return createPropertyReferenceUserPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.createPropertyReferenceUserPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete1()` */
  static readonly DeletePropertyReferenceUserDelete1Path = '/users/{id}/stocks';

  /**
   * delete-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1$Response(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch1()` */
  static readonly CreatePropertyReferenceUserPatch1Path = '/users/{id}/stocks';

  /**
   * patch-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json$Response(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return createPropertyReferenceUserPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.createPropertyReferenceUserPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /**
   * patch-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList$Response(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return createPropertyReferenceUserPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.createPropertyReferenceUserPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet2()` */
  static readonly FollowPropertyReferenceUserGet2Path = '/users/{id}/stocks/{propertyId}';

  /**
   * get-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2$Response(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelStock>> {
    return followPropertyReferenceUserGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<CollectionModelStock> {
    return this.followPropertyReferenceUserGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelStock>): CollectionModelStock => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete1()` */
  static readonly DeletePropertyReferenceIdUserDelete1Path = '/users/{id}/stocks/{propertyId}';

  /**
   * delete-stock-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1$Response(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-stock-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
