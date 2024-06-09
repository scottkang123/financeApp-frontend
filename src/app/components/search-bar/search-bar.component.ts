import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import { SearchService } from '../../services/services';
import { GetSearchStockResult$Params } from '../../services/fn/search/get-search-stock-result';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  searchResults: any[] = [];
  

  @Output() stockSelected = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): Observable<string[]> {
    const filterValue = value.toLowerCase();
    if (value.trim() !== "") {
      const params: GetSearchStockResult$Params = { query: value };
      return this.searchService.getSearchStockResult(params).pipe(
        map((data: any[]) => data.map(stock => stock.name)),
        catchError(error => {
          console.error(error);
          return of([]); // Return an empty array if there's an error
        })
      );
    } else {
      return of([]); // Return an empty array if the input value is empty
    }
  }

  onSearch(): void {
    const query = this.myControl.value?.trim() || '';
    if (query !== "") {
      console.log("onsearch");
      const params: GetSearchStockResult$Params = { query };
      this.searchService.getSearchStockResult(params).subscribe(
        (data: any[]) => {
          console.log(data);
          this.stockSelected.emit(data[0]);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
}
