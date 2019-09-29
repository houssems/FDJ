import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../../models/team.model';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.sass']
})
export class StadiumComponent implements OnInit {

  @Input() team: TeamModel;

  constructor() { }

  ngOnInit() {
  }

}
