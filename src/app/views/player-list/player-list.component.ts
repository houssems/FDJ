import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services/core/base-api.service';
import { map } from 'rxjs/operators';
import { PlayerModel } from 'src/app/shared/models/player.model';
import { TeamModel } from 'src/app/shared/models/team.model';
import { ActivatedRoute } from '@angular/router';
import { ThesportsdbApiService } from 'src/app/shared/services/api/thesportsdb-api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass']
})
export class PlayerListComponent implements OnInit {

  public players: PlayerModel[] = [];
  public team: TeamModel;

  constructor(private thesportsdbApiService: ThesportsdbApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const name = this.route.snapshot.paramMap.get("name");
    this.getTeamDetails(id, name);
  }

  private getTeamDetails(id: string, name: string) {
    this.thesportsdbApiService.getTeam(id).subscribe(team => this.team = team);
    this.thesportsdbApiService.getPlayersByTeam(name).subscribe(players => this.players = players);
  }

}
