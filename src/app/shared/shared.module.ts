import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseApiService } from './services/core/base-api.service';
import { HttpClientModule } from '@angular/common/http';
import { StadiumComponent } from './components/stadium/stadium.component';
import { PlayerThumbComponent } from './components/player-thumb/player-thumb.component';
import { TeamThumbComponent } from './components/team-thumb/team-thumb.component';
import { ThesportsdbApiService } from './services/api/thesportsdb-api.service';



@NgModule({
  declarations: [StadiumComponent, PlayerThumbComponent, TeamThumbComponent],
  exports: [StadiumComponent, PlayerThumbComponent, TeamThumbComponent],
  providers: [BaseApiService, ThesportsdbApiService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
