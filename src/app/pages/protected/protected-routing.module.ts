import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { StockAnalysisComponent } from './analysis-pages/stock-analysis/stock-analysis.component';
import { authGuard } from '../../services/guard/auth.guard';

const routes: Routes = [
  { path: 'user-home', component: UserHomeComponent, canActivate: [authGuard] },
  { path: 'stock-analysis', component: StockAnalysisComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
