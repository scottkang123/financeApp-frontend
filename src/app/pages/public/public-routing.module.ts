import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ManagementComponent } from './management/management.component';
import { OverviewComponent } from './overview/overview.component';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';
import { ReclaimComponent } from './reclaim/reclaim.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { noAuthGuard } from '../../services/guard/no-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [noAuthGuard] },
  { path: 'analysis', component: AnalysisComponent, canActivate: [noAuthGuard] },
  { path: 'management', component: ManagementComponent, canActivate: [noAuthGuard] },
  { path: 'overview', component: OverviewComponent, canActivate: [noAuthGuard] },
  { path: 'community', component: CommunityComponent, canActivate: [noAuthGuard] },
  { path: 'support', component: SupportComponent, canActivate: [noAuthGuard] },
  { path: 'reclaim', component: ReclaimComponent, canActivate: [noAuthGuard] },
  { path: 'signin', component: SignInComponent, canActivate: [noAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
