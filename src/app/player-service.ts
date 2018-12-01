import {LogService} from './log.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PlayerService {

  players = [
    { name: 'Tom Brady', side: ''}
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    console.logService = logService;
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
    this.logService.writeLog('Changed the side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }
}
