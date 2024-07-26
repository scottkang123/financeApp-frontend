/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EarningCalenderDto } from '../models/earning-calender-dto';
import { fetchAndSaveEarningsCalendar } from '../fn/earnings-calender-controller/fetch-and-save-earnings-calendar';
import { FetchAndSaveEarningsCalendar$Params } from '../fn/earnings-calender-controller/fetch-and-save-earnings-calendar';
import { retreiveEarningsCalendar } from '../fn/earnings-calender-controller/retreive-earnings-calendar';
import { RetreiveEarningsCalendar$Params } from '../fn/earnings-calender-controller/retreive-earnings-calendar';

@Injectable({ providedIn: 'root' })
export class EarningsCalenderControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fetchAndSaveEarningsCalendar()` */
  static readonly FetchAndSaveEarningsCalendarPath = '/api/v1/calendar/fetch-and-save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fetchAndSaveEarningsCalendar()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchAndSaveEarningsCalendar$Response(params?: FetchAndSaveEarningsCalendar$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fetchAndSaveEarningsCalendar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fetchAndSaveEarningsCalendar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchAndSaveEarningsCalendar(params?: FetchAndSaveEarningsCalendar$Params, context?: HttpContext): Observable<void> {
    return this.fetchAndSaveEarningsCalendar$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `retreiveEarningsCalendar()` */
  static readonly RetreiveEarningsCalendarPath = '/api/v1/calendar/retrieve-earnings-calendar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retreiveEarningsCalendar()` instead.
   *
   * This method doesn't expect any request body.
   */
  retreiveEarningsCalendar$Response(params?: RetreiveEarningsCalendar$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EarningCalenderDto>>> {
    return retreiveEarningsCalendar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retreiveEarningsCalendar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retreiveEarningsCalendar(params?: RetreiveEarningsCalendar$Params, context?: HttpContext): Observable<Array<EarningCalenderDto>> {
    return this.retreiveEarningsCalendar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EarningCalenderDto>>): Array<EarningCalenderDto> => r.body)
    );
  }

}
