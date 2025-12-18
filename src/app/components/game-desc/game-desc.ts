import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-desc',
  imports: [],
  templateUrl: './game-desc.html',
  styleUrl: './game-desc.css',
})
export class GameDesc {
  @Input() description:   string | undefined;
  @Input() baner: string | undefined;

}
