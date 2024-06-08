import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../../../components/search-bar/search-bar.component';
@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrl: './stock-analysis.component.css'
})
export class StockAnalysisComponent implements OnInit{
  selectedStocks: any[] = [];

  ngOnInit(): void {
  }

  addStock(stock: any): void {
    console.log("adding stock");
    if (!this.selectedStocks.some(s => s.symbol === stock.symbol)) {
      this.selectedStocks.push(stock);
    }
  }

  removeStock(stock: any): void {
    this.selectedStocks = this.selectedStocks.filter(s => s.symbol !== stock.symbol);
  }
}
