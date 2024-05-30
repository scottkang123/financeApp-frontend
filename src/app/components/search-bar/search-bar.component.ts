import { Component } from '@angular/core';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query: string = "";

  constructor(private searchService: SearchService) {

  }

  onSearch(): void {
    this.searchService.searchStock(this.query).subscribe((data: any[]) => {
      console.log(data);
    }, (error) => {
      console.error(error);
    })
  }
}
