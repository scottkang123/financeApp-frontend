/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ProfileControllerService } from './services/profile-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { StockEntityControllerService } from './services/stock-entity-controller.service';
import { TokenEntityControllerService } from './services/token-entity-controller.service';
import { TokenSearchControllerService } from './services/token-search-controller.service';
import { TokenPropertyReferenceControllerService } from './services/token-property-reference-controller.service';
import { UserEntityControllerService } from './services/user-entity-controller.service';
import { UserSearchControllerService } from './services/user-search-controller.service';
import { UserPropertyReferenceControllerService } from './services/user-property-reference-controller.service';
import { StockService } from './services/stock.service';
import { AuthenticationService } from './services/authentication.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ProfileControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    StockEntityControllerService,
    TokenEntityControllerService,
    TokenSearchControllerService,
    TokenPropertyReferenceControllerService,
    UserEntityControllerService,
    UserSearchControllerService,
    UserPropertyReferenceControllerService,
    StockService,
    AuthenticationService,
    UserControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
