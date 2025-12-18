import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GameMedia } from '../game-media/game-media';
import { GameInfo } from '../game-info/game-info';
import { GameDesc } from '../game-desc/game-desc';
import { GameSteamPrice } from '../game-steam-price/game-steam-price';
import { GameSteamReviews } from '../game-steam-reviews/game-steam-reviews';

@Component({
  selector: 'app-hub-game',
  imports: [GameMedia, GameInfo, GameDesc, GameSteamPrice, GameSteamReviews],
  templateUrl: './hub-game.html',
  styleUrl: './hub-game.css',
})
export class HubGame {
  @Input() game: any;
}
