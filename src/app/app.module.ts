import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpTokenInterceptor } from './services/interceptor/http-token.interceptor';

import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { MaterialModule } from './shared/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule -- this is used for now instead of the top one
import {CodeInputModule} from "angular-code-input";


import { HomeComponent } from './pages/public/home/home.component';
import { HeaderComponent } from './components/header/login-header/login-header.component';
import { LoginComponent } from './auth/login/login.component';
import { UserHomeComponent } from './pages/protected/user-home/user-home.component';
import { EmptyHeaderComponent } from './components/header/empty-header/empty-header.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { KeycloakService } from './services/keycloak/keycloak.service';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading..",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  bgsColor:"#7b1fa2",
  fgsColor:"#7b1fa2",
  fgsType:SPINNER.circle,
  fgsSize:100,
  hasProgressBar:false
}

export function kcFactory(kcService: KeycloakService){
    return () => kcService.init();
}
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
        UserHomeComponent,
        EmptyHeaderComponent,
        UserHeaderComponent,
        SearchBarComponent
    ],
    providers: [
        provideHttpClient(withInterceptors([httpTokenInterceptor])),
        {
            provide:APP_INITIALIZER,
            deps: [KeycloakService],
            useFactory: kcFactory,
            multi: true
        }
    ], //HttpClient],   //multi because spring has its own interceptors as well but no need to provide if using functional approach to implement the interceptor
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CodeInputModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    ]
})
export class AppModule { }
