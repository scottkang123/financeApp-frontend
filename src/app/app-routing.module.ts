import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserHomeComponent } from './pages/protected/user-home/user-home.component';
//import { authGuard } from './services/guard/auth.guard';
import { authGuard } from './services/guard/auth.guard';
import { noAuthGuard } from './services/guard/no-auth.guard';
import { AnalysisComponent } from './pages/public/analysis/analysis.component';
import { ManagementComponent } from './pages/public/management/management.component';
import { OverviewComponent } from './pages/public/overview/overview.component';
import { CommunityComponent } from './pages/public/community/community.component';
import { SupportComponent } from './pages/public/support/support.component';
import { ReclaimComponent } from './pages/public/reclaim/reclaim.component';
import { SignInComponent } from './pages/public/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [noAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [noAuthGuard] },
  { path: 'analysis', component: AnalysisComponent, canActivate: [noAuthGuard] },
  { path: 'management', component: ManagementComponent, canActivate: [noAuthGuard] },
  { path: 'overview', component: OverviewComponent, canActivate: [noAuthGuard] },
  { path: 'community', component: CommunityComponent, canActivate: [noAuthGuard] },
  { path: 'support', component: SupportComponent, canActivate: [noAuthGuard] },
  { path: 'reclaim', component: ReclaimComponent, canActivate: [noAuthGuard] },
  { path: 'signin', component: SignInComponent, canActivate: [noAuthGuard] },

  { path: 'user-home', component: UserHomeComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
