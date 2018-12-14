import {LogService} from './log.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {
  players = [
    {name: 'Tom Brady', team: 'NE', side: ''}
  ];

  private logService: LogService;
  playersChanged = new Subject<void>();
  http: HttpClient;

  constructor( logService: LogService, http: HttpClient) {
    console.logService = logService;
    this.http = http;
  }

  fetchPlayers() {
  this.http.get('https://api.mysportsfeeds.com/v2.0/pull/nfl/players/')
    .map((response: Response) => {
      const data = response.json();
      const extractedChars = data.name;
      const chars = extractedChars.map((char) => {
        return { name: char.name, side: '' };
      });
      return chars;
    })
    .subscribe(
    (data) => {
      console.log(data);
      this.players = data;
    }
  );
  }

  getPlayers(chosenList) {
    if (chosenList === 'all') {
      return this.players.slice();
    }
    return this.players.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.players.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.players[pos].side = charInfo.side;
    this.playersChanged.next();
    this.logService.writeLog('Changed the side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addPlayer(name, team, side) {
    const pos = this.players.findIndex((char) => {
      return char.name === name;
      return char.team === team;
    });
    if (pos !== -1) {
    return;
    }
    const newChar = {name: name, team: team, side: side};
    this.players.push(newChar);
  }
}
