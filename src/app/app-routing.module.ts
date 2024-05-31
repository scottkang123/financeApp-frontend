import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserHomeComponent } from './pages/protected/user-home/user-home.component';
//import { authGuard } from './services/guard/auth.guard';
import { authGuard } from './services/guard/auth.guard';
import { noAuthGuard } from './services/guard/no-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [noAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
  { path: 'user-home', component: UserHomeComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
