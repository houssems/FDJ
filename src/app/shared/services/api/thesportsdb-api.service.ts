import { Injectable } from '@angular/core';
import { BaseApiService } from '../core/base-api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { PlayerModel } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class ThesportsdbApiService {

  constructor(private baseApi: BaseApiService) { }

  /**
   * get team details
   * @param teamId string
   */
  getTeam(teamId: string): Observable<TeamModel> {
    return this.baseApi.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
      .pipe(map<any, TeamModel>(({ teams }) => teams[0]));
  }

  /**
   * Get Players by team
   * @param teamStr string
   */
  getPlayersByTeam(teamStr: string): Observable<PlayerModel[]> {
    return this.baseApi
      .get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamStr}`)
      .pipe(map<any, PlayerModel[]>(({ player }) => player));
  }

  /**
   * Get teams by league name
   * @param league string
   */
  getTeamsByLeague(league: string): Observable<TeamModel[]> {
    return this.baseApi
      .get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
      .pipe(map<any, TeamModel[]>(({ teams }) => teams));
  }
}
