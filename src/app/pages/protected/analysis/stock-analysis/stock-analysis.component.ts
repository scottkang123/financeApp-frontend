import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrl: './stock-analysis.component.css'
})
export class StockAnalysisComponent implements AfterViewInit{

  selectedStocks: any[] = [];
  selectedFields: any = {};
  displayedColumns: string[] = ['name']; // Always display the 'name' column
  dataSource = new MatTableDataSource<any>(this.selectedStocks);

  @ViewChild(MatSort) sort!: MatSort;
  constructor(){}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  addStock(stock: any): void {
    if (this.selectedStocks.length < 10 && !this.selectedStocks.some(s => s.symbol === stock.symbol)) {
      this.selectedStocks = [...this.selectedStocks, stock]; // Create a new array with the updated stock
      this.updateDataSource();
    }
  }

  updateFields(fields: any): void {
    this.selectedFields = fields;
    this.updateDisplayedColumns();
    this.updateDataSource();
    console.log('Updated fields:', this.selectedFields);
  }

  // removeStock(stock: any): void {
  //   this.selectedStocks = this.selectedStocks.filter(s => s.symbol !== stock.symbol);
  //   this.updateDataSource();
  // }
  removeStock(stock: any): void {
    console.log("clicked");
    console.log(stock);
    console.log("deleting");
    console.log(this.selectedStocks);

    const index = this.selectedStocks.findIndex(s => s.name === stock.name);
    console.log(index);
  if (index !== -1) {
    console.log("deleting")
    console.log(this.selectedStocks)
    this.selectedStocks.splice(index, 1);
    console.log(this.selectedStocks)

    this.updateDataSource();
  }

  console.log(this.selectedStocks);
  console.log("deleted");
  }
  

  getFilteredFields(): string[] {
    return Object.keys(this.selectedFields).filter(key => this.selectedFields[key]);
  }

  updateDisplayedColumns(): void {
    this.displayedColumns = ['name', ...this.getFilteredFields()];
  }

  updateDataSource(): void {
    this.dataSource.data = this.selectedStocks.map(stock => {
      const data: any = {}; // Type assertion to any
      this.displayedColumns.forEach(column => {
        data[column] = stock[column] || '';
      });
      return data;
    });
  }

}