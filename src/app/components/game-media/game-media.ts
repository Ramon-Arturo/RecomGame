import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GamePlayer } from '../game-player/game-player';
import { Movie } from '../../models/media';

@Component({
  selector: 'app-game-media',
  imports: [GamePlayer],
  templateUrl: './game-media.html',
  styleUrl: './game-media.css',
})
export class GameMedia implements AfterViewInit {
  titulo = input<string>('');
  movies = input<Movie[]>({id: 0, name: '', hls_h264: ''} as any);
  screenshots = input<any>(null);
  scr: string = '';

  ngAfterViewInit(): void {
    const movies = this.movies();

    if (movies && movies.length > 0) {
      this.scr = movies[0].hls_h264;
    } else {
      console.log(movies);
    }
  }

    
}
