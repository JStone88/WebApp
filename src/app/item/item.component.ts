import { Component, OnInit, Input} from '@angular/core';
import {PlayerService} from '../player-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() player;
  plService: PlayerService;

  constructor( plService: PlayerService) {
    this.plService = plService;
  }

  ngOnInit() {
  }

  onAssign(side) {

    // this.sideAssigned.emit({name: this.player.name, side: side});
    this.plService.onSideChosen({name: this.player.name, side: side});
  }

}
