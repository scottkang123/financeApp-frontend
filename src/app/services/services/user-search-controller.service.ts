/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelUser } from '../models/entity-model-user';
import { executeSearchUserGet } from '../fn/user-search-controller/execute-search-user-get';
import { ExecuteSearchUserGet$Params } from '../fn/user-search-controller/execute-search-user-get';

@Injectable({ providedIn: 'root' })
export class UserSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchUserGet()` */
  static readonly ExecuteSearchUserGetPath = '/users/search/findByEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet$Response(params?: ExecuteSearchUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return executeSearchUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet(params?: ExecuteSearchUserGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.executeSearchUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

}
