import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './views/player-list/player-list.component';
import { TeamListComponent } from './views/team-list/team-list.component';


const routes: Routes = [
  {
    path: '',
    component: TeamListComponent
  }, {
    path: 'player-list/:id/:name',
    component: PlayerListComponent
  }, {
    path: 'team-list',
    component: TeamListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
