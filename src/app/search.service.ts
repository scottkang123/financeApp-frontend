import { Injectable } from '@angular/core';
import { BaseService } from './services/base-service';
import { ApiConfiguration } from './services/api-configuration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from './services/strict-http-response';
import { StockDto } from './services/models';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  private readonly SEARCH_STOCK_API = "/search/stock/";

  processQuery(rawQuery: string): string {
    let result: string = "";
    let word: string = "";

    for (const c of rawQuery) {
      // TODO: Only alphabetical queries allowed for now
      if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        word += c
      } else {
        result += word + '+';
        word = "";
      }
    }

    if (word) {
      result += word;
    }

    return result;
  }

  searchStock(query: string): Observable<Array<StockDto>> {
    let completedUrl: string = this.rootUrl + this.SEARCH_STOCK_API + this.processQuery(query);
    return this.http.get<any>(completedUrl);
  }
}
