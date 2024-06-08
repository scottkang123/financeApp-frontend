import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/services';
import { GetSearchStockResult$Params } from '../../services/fn/search/get-search-stock-result';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  query: string = "";
  searchResults: any[] = [];

  @Output() stockSelected = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch(): void {

    const params: GetSearchStockResult$Params = { query: this.query };

    this.searchService.getSearchStockResult(params).subscribe(
      (data: any[]) => {
        this.searchResults = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectStock(stock: any): void {
    this.stockSelected.emit(stock);
  }


}
