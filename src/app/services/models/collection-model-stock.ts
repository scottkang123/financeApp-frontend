/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { StockResponse } from '../models/stock-response';
export interface CollectionModelStock {
  '_embedded'?: {
'stocks'?: Array<StockResponse>;
};
  '_links'?: Links;
}
