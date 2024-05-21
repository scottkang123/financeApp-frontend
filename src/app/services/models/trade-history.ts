/* tslint:disable */
/* eslint-disable */
import { Stock } from '../models/stock';
export interface TradeHistory {
  createdDate?: string;
  date?: string;
  endStockPrice?: string;
  id?: number;
  lastModifiedDate?: string;
  startStockPrice?: string;
  stock?: Stock;
}
