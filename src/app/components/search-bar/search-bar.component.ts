import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError, take } from 'rxjs/operators';
import { SearchControllerService } from '../../services/services';
import { GetSearchStockResults$Params } from '../../services/fn/search-controller/get-search-stock-results';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  searchResults: any[] = [];

  selectedOption: string | null = null; // To store the selected option
  showMessage: boolean = false;
  errorMessage: string = '';

  @Output() stockSelected = new EventEmitter<any>();

  constructor(private searchService: SearchControllerService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value || ''))
    );
  }

  onOptionSelected(event: any, stock: string): void {
    if (event.isUserInput) {
      this.selectedOption = stock; // Store the selected option
    }
  }


  private _filter(value: string): Observable<string[]> {
    const filterValue = value.toLowerCase();
    if (value.trim() !== "") {
      const params: GetSearchStockResults$Params = { query: value };
      return this.searchService.getSearchStockResults(params).pipe(
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
    console.log(query);
    if (query !== "") {
      if (this.selectedOption === query) {
        const params: GetSearchStockResults$Params = { query };
        this.searchService.getSearchStockResults(params).subscribe(
          (data: any[]) => {
            console.log(data);
            this.stockSelected.emit(data[0]);
            this.showMessage = false; // Hide error message if valid option is selected
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.showMessage = true;
        this.errorMessage = "Please select a valid option from the dropdown.";
      }
    } else {
      this.searchResults = [];
    }
  }
}
