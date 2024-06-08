/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getUserName } from '../fn/user/get-user-name';
import { GetUserName$Params } from '../fn/user/get-user-name';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserName()` */
  static readonly GetUserNamePath = '/user/name';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserName$Response(params?: GetUserName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: string;
}>> {
    return getUserName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserName(params?: GetUserName$Params, context?: HttpContext): Observable<{
[key: string]: string;
}> {
    return this.getUserName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: string;
}>): {
[key: string]: string;
} => r.body)
    );
  }

}
