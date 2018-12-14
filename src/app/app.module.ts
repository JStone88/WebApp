import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {PlayerService} from './player-service';
import {LogService} from './log.service';
import { CreatePlayerComponent } from './create-player/create-player.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  { path: 'players', component: TabsComponent, children: [
      {path: '', redirectTo: 'all', pathMatch: 'full' },
      {path: ':side', component: ListComponent }
    ]},
  { path: 'new-player', component: CreatePlayerComponent},
  { path: '**', redirectTo: '/players'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreatePlayerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [PlayerService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
