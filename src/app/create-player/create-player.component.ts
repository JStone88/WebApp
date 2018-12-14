import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player-service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  availableSide = [
    {display: 'None', value: ''},
    {display: 'Keep', value: 'keep'},
    {display: 'Sit', value: 'sit'}];

  plService: PlayerService;

  constructor(plService: PlayerService) {
    this.plService = plService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm);
    this.plService.addPlayer(submittedForm.value.name, submittedForm.value.team, submittedForm.value.side);

  }
}
