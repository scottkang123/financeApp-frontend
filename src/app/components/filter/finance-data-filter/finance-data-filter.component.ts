import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component'; // Assuming you have a separate dialog component for filtering

@Component({
  selector: 'app-finance-data-filter',
  templateUrl: './finance-data-filter.component.html',
  styleUrl: './finance-data-filter.component.css'
})
export class FinanceDataFilterComponent implements OnInit{

  isPopupOpen: boolean = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    if (!this.isPopupOpen) {
      this.isPopupOpen = true;
      const dialogRef = this.dialog.open(FilterDialogComponent, {
        width: '500px', // Adjust width as needed
        maxWidth: '90vw', // Limit maximum width
        autoFocus: false // Disable auto focusing
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Apply the filter logic here
          console.log('Filter applied');
        }
        this.isPopupOpen = false;
      });
    }
  }

  ngOnInit(): void {
      
  }

}
