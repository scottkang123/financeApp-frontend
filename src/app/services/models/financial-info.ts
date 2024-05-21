/* tslint:disable */
/* eslint-disable */
import { Stock } from '../models/stock';
export interface FinancialInfo {
  createdDate?: string;
  currentRatio?: number;
  der?: number;
  dividend?: number;
  eps?: number;
  freeCashFlow?: number;
  grossProfitMargin?: number;
  id?: number;
  lastModifiedDate?: string;
  netProfitMargin?: number;
  operatingProfitMargin?: number;
  per?: number;
  profit?: number;
  quarter?: string;
  quickRatio?: number;
  revenue?: number;
  roa?: number;
  roe?: number;
  stock?: Stock;
  year?: string;
}
