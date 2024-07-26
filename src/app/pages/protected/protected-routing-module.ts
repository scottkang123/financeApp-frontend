import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { StockAnalysisComponent } from './analysis/stock-analysis/stock-analysis.component';
import { authGuard } from '../../services/guard/auth.guard';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CalendarPageComponent } from './calendar-page/calendar.component';

const routes: Routes = [
  { path: 'user-home', component: UserHomeComponent, canActivate: [authGuard] },
  { path: 'stock-analysis', component: StockAnalysisComponent, canActivate: [authGuard] },
  { path: 'test', component: SearchBarComponent, canActivate: [authGuard] },
  { path: 'calendar', component: CalendarPageComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }