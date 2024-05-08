/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Links } from '../models/links';
export interface EntityModelUser {
  '_links'?: Links;
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth?: string;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  lastModifiedDate?: string;
  lastname?: string;
  name?: string;
  password?: string;
  username?: string;
}
