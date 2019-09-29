import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../../models/team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-thumb',
  templateUrl: './team-thumb.component.html',
  styleUrls: ['./team-thumb.component.sass']
})
export class TeamThumbComponent implements OnInit {

  @Input() team: TeamModel;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getTeamDetails() {

    this.router.navigate(['/player-list', this.team.idTeam, this.team.strTeam]);
  }

}
