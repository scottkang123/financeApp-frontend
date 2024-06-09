import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from '../../services/services';
import { GetSearchStockResult$Params } from '../../services/fn/search/get-search-stock-result';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query: string = "";
  filteredOptions: any[] = [];
  searchResults: any[] = [];

  @Output() stockSelected = new EventEmitter<any>();



  constructor(private searchService: SearchService) { }

  ngOnInit(): void { }


  onInputChange(value: string): void {
    if (value.trim() !== "") {
      const params: GetSearchStockResult$Params = { query: value };
      this.searchService.getSearchStockResult(params).subscribe(
        (data: any[]) => {
          this.filteredOptions = data;
        },
        (error) => {
          console.error(error);
          this.filteredOptions = [];
        }
      );
    } else {
      this.filteredOptions = [];
    }
    this.query = value;
  }

  onSearch(): void {
    console.log("onsearch");
    if (this.query.trim() !== "") {
      const params: GetSearchStockResult$Params = { query: this.query };
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
