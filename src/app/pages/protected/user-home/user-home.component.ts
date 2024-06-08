import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../services/services';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit{

  topStocksByPer: string[] = [];


  constructor(
    private stockService:StockService
  ){}

  ngOnInit(): void {
    this.getTop500StocksByPERatio();
  }

  getTop500StocksByPERatio() {
    console.log("inside");
    this.stockService.getTop500StocksByPeRatio().subscribe(
      (stocks: any[][]) => {
        console.log(stocks);
        // Extracting names from each stock object and pushing to the topStockNames array
        //this.topStocksByPer = stocks.map(stock => stock[0].name); // Assuming the first element in each array is the stock name
        this.topStocksByPer = stocks.map(stock => stock[0]);

      },
      (error) => {
        console.error('Error fetching top 500 stocks:', error);
      }
    );
  }
}
