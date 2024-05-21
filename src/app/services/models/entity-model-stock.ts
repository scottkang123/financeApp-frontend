/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelStock {
  '_links'?: Links;
  createdDate?: string;
  exchange?: string;
  industry?: string;
  lastModifiedDate?: string;
  name?: string;
  price?: number;
  sector?: string;
  symbol?: string;
}
