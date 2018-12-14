import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../player-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  players = [];
  activatedRoute: ActivatedRoute;
  plService: PlayerService;
  loadedSide = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, plService: PlayerService) {
    this.activatedRoute = activatedRoute;
    this.plService = plService;
  }

  ngOnInit() {
    this.plService.fetchPlayers();
    this.activatedRoute.params.subscribe(
      (params) => {
        this.players = this.plService.getPlayers(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.plService.playersChanged.subscribe(
      () => {
        this.players = this.plService.getPlayers(this.loadedSide);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
