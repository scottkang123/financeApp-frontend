/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPerson } from '../fn/user-controller/add-person';
import { AddPerson$Params } from '../fn/user-controller/add-person';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addPerson()` */
  static readonly AddPersonPath = '/addUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPerson()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPerson$Response(params: AddPerson$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return addPerson(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPerson$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPerson(params: AddPerson$Params, context?: HttpContext): Observable<void> {
    return this.addPerson$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
