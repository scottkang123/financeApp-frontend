/* tslint:disable */
/* eslint-disable */
import { EntityModelUser } from '../models/entity-model-user';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelUser {
  '_embedded'?: {
'users'?: Array<EntityModelUser>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
