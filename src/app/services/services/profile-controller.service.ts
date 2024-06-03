/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { descriptor111$Any } from '../fn/profile-controller/descriptor-111-any';
import { Descriptor111$Any$Params } from '../fn/profile-controller/descriptor-111-any';
import { descriptor111$Json } from '../fn/profile-controller/descriptor-111-json';
import { Descriptor111$Json$Params } from '../fn/profile-controller/descriptor-111-json';
import { JsonSchema } from '../models/json-schema';
import { listAllFormsOfMetadata1 } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { ListAllFormsOfMetadata1$Params } from '../fn/profile-controller/list-all-forms-of-metadata-1';
import { RepresentationModelObject } from '../models/representation-model-object';

@Injectable({ providedIn: 'root' })
export class ProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listAllFormsOfMetadata1()` */
  static readonly ListAllFormsOfMetadata1Path = '/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAllFormsOfMetadata1()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1$Response(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<StrictHttpResponse<RepresentationModelObject>> {
    return listAllFormsOfMetadata1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAllFormsOfMetadata1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAllFormsOfMetadata1(params?: ListAllFormsOfMetadata1$Params, context?: HttpContext): Observable<RepresentationModelObject> {
    return this.listAllFormsOfMetadata1$Response(params, context).pipe(
      map((r: StrictHttpResponse<RepresentationModelObject>): RepresentationModelObject => r.body)
    );
  }

  /** Path part for operation `descriptor111()` */
  static readonly Descriptor111Path = '/profile/stocks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any$Response(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return descriptor111$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Any(params?: Descriptor111$Any$Params, context?: HttpContext): Observable<string> {
    return this.descriptor111$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `descriptor111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json$Response(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<JsonSchema>> {
    return descriptor111$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `descriptor111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  descriptor111$Json(params?: Descriptor111$Json$Params, context?: HttpContext): Observable<JsonSchema> {
    return this.descriptor111$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<JsonSchema>): JsonSchema => r.body)
    );
  }

}
