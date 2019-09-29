import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../models/player.model';

@Component({
  selector: 'app-player-thumb',
  templateUrl: './player-thumb.component.html',
  styleUrls: ['./player-thumb.component.sass']
})
export class PlayerThumbComponent implements OnInit {

  @Input() player: PlayerModel;

  constructor() { }

  ngOnInit() {
  }

}
