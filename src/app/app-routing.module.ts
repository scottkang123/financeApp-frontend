import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { noAuthGuard } from './services/guard/no-auth.guard';
import { PublicRoutingModule } from './pages/public/public-routing.module';
import { ProtectedRoutingModule } from './pages/protected/protected-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [noAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    ProtectedRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
