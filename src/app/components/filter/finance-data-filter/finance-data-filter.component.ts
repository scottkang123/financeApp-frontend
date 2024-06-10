import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-finance-data-filter',
  templateUrl: './finance-data-filter.component.html',
  styleUrl: './finance-data-filter.component.css'
})
export class FinanceDataFilterComponent implements OnInit{

  isPopupOpen: boolean = false;
  selectedFields: any = {}; // To store selected fields

  @Output() fieldsSelected = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    if (!this.isPopupOpen) {
      this.isPopupOpen = true;
      const dialogRef = this.dialog.open(FilterDialogComponent, {
        width: '500px', // Adjust width as needed
        maxWidth: '90vw', // Limit maximum width
        autoFocus: false, // Disable auto focusing
        data: { selectedFields: this.selectedFields } // Pass the selected fields
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.selectedFields = result;
          this.fieldsSelected.emit(this.selectedFields); // Emit the selected fields
          console.log('Selected fields:', this.selectedFields);
        }
        this.isPopupOpen = false;
      });
    }
  }

  ngOnInit(): void {
      
  }

  getSelectedFieldCount(): number {
    return Object.values(this.selectedFields).filter(value => value).length;
  }

}