import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services/core/base-api.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { ThesportsdbApiService } from 'src/app/shared/services/api/thesportsdb-api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.sass']
})
export class TeamListComponent implements OnInit {

  form: FormGroup;
  teams: TeamModel[];
  league: string = '';

  constructor(private thesportsdbApiService: ThesportsdbApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      league: ['', Validators.required]
    });

  }

  ngOnInit() {

    this.route.queryParamMap
      .subscribe((params) => {
        const league = params.get('league');
        this.getTeamListFromLeague(league);
      });

  }

  getTeamListFromLeague(league: string) {
    this.thesportsdbApiService.getTeamsByLeague(league).subscribe(teams => this.teams = teams);
  }

  search() {

    if (this.form.status !== 'INVALID') {
      const league = this.form.value.league;
      this.router.navigate(['team-list'], { queryParams: { league } })
    }

  }

}
