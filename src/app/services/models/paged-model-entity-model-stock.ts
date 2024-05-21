/* tslint:disable */
/* eslint-disable */
import { EntityModelStock } from '../models/entity-model-stock';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelStock {
  '_embedded'?: {
'stocks'?: Array<EntityModelStock>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
