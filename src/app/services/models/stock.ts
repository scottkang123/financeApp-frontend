/* tslint:disable */
/* eslint-disable */
import { FinancialInfo } from '../models/financial-info';
import { TradeHistory } from '../models/trade-history';
export interface Stock {
  createdDate?: string;
  exchange?: string;
  financialInfos?: Array<FinancialInfo>;
  id?: number;
  industry?: string;
  lastModifiedDate?: string;
  name?: string;
  price?: number;
  sector?: string;
  symbol?: string;
  tradeHistories?: Array<TradeHistory>;
}
