import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-game-info',
  imports: [],
  templateUrl: './game-info.html',
  styleUrl: './game-info.css',
  encapsulation: ViewEncapsulation.None,
})
export class GameInfo {
  info = input<string>('');
}
