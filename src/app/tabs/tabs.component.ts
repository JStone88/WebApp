import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  players = [];
  chosenList = 'all';
  plService: PlayerService;


  constructor( plService: PlayerService) {
    this.plService = plService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getPlayers() {
    this.players = this.plService.getPlayers(this.chosenList)
    return this.players;
  }
}
