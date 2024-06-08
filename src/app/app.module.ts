import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

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
import { LoginComponent } from './auth/login/login.component';
import { UserHomeComponent } from './pages/protected/user-home/user-home.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { KeycloakService } from './services/keycloak/keycloak.service';
import { UnauthHeaderComponent } from './components/header/unauth-header/unauth-header.component';
import { AnalysisComponent } from './pages/public/analysis/analysis.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ImageSkeletonComponent } from './components/image-skeleton/image-skeleton.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { ManagementComponent } from './pages/public/management/management.component';
import { OverviewComponent } from './pages/public/overview/overview.component';
import { CommunityComponent } from './pages/public/community/community.component';
import { SupportComponent } from './pages/public/support/support.component';
import { ReclaimComponent } from './pages/public/reclaim/reclaim.component';
import { SignInComponent } from './pages/public/sign-in/sign-in.component';



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
        HomeComponent,
        LoginComponent,
        UserHomeComponent,
        UserHeaderComponent,
        SearchBarComponent,
        AnalysisComponent,
        HeaderComponent,
        UnauthHeaderComponent,
        ImageSkeletonComponent,
        ManagementComponent,
        OverviewComponent,
        CommunityComponent,
        SupportComponent,
        ReclaimComponent,
        SignInComponent,
        FooterComponent
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
        MatIconModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CodeInputModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    ]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  registerIcons() {
    this.matIconRegistry.addSvgIcon(
      "south",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/south.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "arrowRightAlt",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/arrow_right_alt.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "east",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/east.svg")
    );
  }
}
