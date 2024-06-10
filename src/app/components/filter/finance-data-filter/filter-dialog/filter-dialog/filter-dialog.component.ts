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
    "address",
    "analystRatingBuy",
    "analystRatingHold",
    "analystRatingSell",
    "analystRatingStrongBuy",
    "analystRatingStrongSell",
    "analystTargetPrice",
    "assetType",
    "beta",
    "bookValue",
    "cik",
    "country",
    "currency",
    "description",
    "dilutedEPSTTM",
    "dividendDate",
    "dividendPerShare",
    "dividendYield",
    "ebitda",
    "eps",
    "evtoEBITDA",
    "evtoRevenue",
    "exDividendDate",
    "exchange",
    "fiscalYearEnd",
    "forwardPE",
    "grossProfitTTM",
    "industry",
    "latestQuarter",
    "marketCapitalization",
    "movingAverage50Day",
    "movingAverage200Day",
    "name",
    "operatingMarginTTM",
    "pegratio",
    "peratio",
    "priceToBookRatio",
    "priceToSalesRatioTTM",
    "profitMargin",
    "quarterlyEarningsGrowthYOY",
    "quarterlyRevenueGrowthYOY",
    "returnOnAssetsTTM",
    "returnOnEquityTTM",
    "revenuePerShareTTM",
    "revenueTTM",
    "sector",
    "sharesOutstanding",
    "symbol",
    "trailingPE",
    "week52High",
    "week52Low"
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
