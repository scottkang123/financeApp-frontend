/* tslint:disable */
/* eslint-disable */
import { EntityModelStock } from '../models/entity-model-stock';
import { Links } from '../models/links';
export interface CollectionModelEntityModelStock {
  '_embedded'?: {
'stocks'?: Array<EntityModelStock>;
};
  '_links'?: Links;
}
