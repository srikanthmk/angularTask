import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingTableComponent } from './standing-table/standing-table.component';
import { TeamHistoryComponent } from './team-history/team-history.component';

const routes: Routes = [
  { path: 'dashboard/england', component: StandingTableComponent, data: { leagueId: '39' }},
  { path: 'dashboard/spain', component: StandingTableComponent, data: { leagueId: '140' }},
  { path: 'dashboard/france', component: StandingTableComponent, data: { leagueId: '61' }},
  { path: 'dashboard/germany', component: StandingTableComponent, data: { leagueId: '78' }},
  { path: 'dashboard/italy', component: StandingTableComponent, data: { leagueId: '138' }},
  {path: 'teamHistory/:id', component:TeamHistoryComponent},
  { path: '', redirectTo: '/dashboard/england', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
