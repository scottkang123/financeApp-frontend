// filter-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {
  fields: string[] = [
    'exchange', 'sector', 'industry', 'description', 'assetType', 'CIK', 'currency', 'country', 
    'address', 'fiscalYearEnd', 'latestQuarter', 'marketCapitalization', 'EBITDA', 'PERatio', 
    'PEGRatio', 'bookValue', 'dividendPerShare', 'dividendYield', 'EPS', 'revenuePerShareTTM', 
    'profitMargin', 'operatingMarginTTM', 'returnOnAssetsTTM', 'returnOnEquityTTM', 'revenueTTM', 
    'grossProfitTTM', 'dilutedEPSTTM', 'quarterlyEarningsGrowthYOY', 'quarterlyRevenueGrowthYOY', 
    'analystTargetPrice', 'analystRatingStrongBuy', 'analystRatingBuy', 'analystRatingHold', 
    'analystRatingSell', 'analystRatingStrongSell', 'trailingPE', 'forwardPE', 'priceToSalesRatioTTM', 
    'priceToBookRatio', 'EVToRevenue', 'EVToEBITDA', 'beta', 'week52High', 'week52Low', 
    'movingAverage50Day', 'movingAverage200Day', 'sharesOutstanding', 'dividendDate', 'exDividendDate'
  ];
  selectedFields: any = {};

  constructor(
    private dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
      // Initialize selectedFields with the data passed from the parent component
    this.selectedFields = { ...this.data.selectedFields };
  }

  applyFilters(): void {
    // Pass selectedFields back to the component that opened the dialog
    this.dialogRef.close(this.selectedFields);
  }
}
