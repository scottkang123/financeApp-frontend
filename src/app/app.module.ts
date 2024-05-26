import { NgModule } from '@angular/core';
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


import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './modules/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { EmptyHeaderComponent } from './modules/empty-header/empty-header.component';
import { UserHeaderComponent } from './modules/user-header/user-header.component';
import { SearchBarComponent } from "./search-bar/search-bar.component";



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


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SignupComponent,
        LoginComponent,
        ActivateAccountComponent,
        UserHomeComponent,
        EmptyHeaderComponent,
        UserHeaderComponent,
        SearchBarComponent
    ],
    providers: [provideHttpClient(withInterceptors([httpTokenInterceptor]))], //HttpClient],   //multi because spring has its own interceptors as well but no need to provide if using functional approach to implement the interceptor
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
