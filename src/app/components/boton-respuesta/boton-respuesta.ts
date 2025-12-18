import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
} from '@angular/core';
import { InfogameService } from '../../services/infogame.service';

@Component({
  selector: 'app-boton-respuesta',
  imports: [],
  templateUrl: './boton-respuesta.html',
  styleUrl: './boton-respuesta.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotonRespuesta implements AfterViewInit {
  tipo = input<string>('');
  valor = input<number>(0);
  idSteamGame = input<number>(0);

  indexBTN = model<number>(0);

  private gamesService = inject(InfogameService);

  ngAfterViewInit(): void {
    // console.log('Tipo de boton respuesta:', this.tipo());
    // console.log('Valor de boton respuesta:', this.valor());
    // console.log('ID Steam Game de boton respuesta:', this.idSteamGame());
    console.log('Index de boton respuesta:', this.indexBTN());
  }

  skipGame(): void {
    this.indexBTN.set(this.indexBTN() + 1);
  }

  addGame(): void {
    const dataToSend = {
      idSteamGame: this.idSteamGame(),
      gameValue: this.valor(),
    };

    this.gamesService.createInfoGame(dataToSend).subscribe({
      next: (game) => {
        this.indexBTN.set(this.indexBTN() + 1);

        console.log('Respuesta del servidor al agregar info del juego:', game);
      },
      error: (err) => {
        console.error('Error al añadir juego: ', err);
      },
    });
  }
}
