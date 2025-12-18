import {
  Component,
  OnInit,
  signal,
  WritableSignal,
  ChangeDetectionStrategy,
  model,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  effect,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BotonRespuesta } from '../../components/boton-respuesta/boton-respuesta';
import { HubGame } from '../../components/hub-game/hub-game';
import { SteamService } from '../../services/steam';
import {
  GameListRequest,
  InfogameService,
  list,
  listGamesRecommended,
} from '../../services/infogame.service';
import { NavComponent } from '../../components/nav-component/nav-component';

@Component({
  selector: 'app-clasificador',
  imports: [BotonRespuesta, HubGame, NavComponent],
  templateUrl: './clasificador.html',
  styleUrl: './clasificador.css',
})
export class Clasificador implements OnInit, OnChanges, AfterViewInit {
  game: any;
  idSteamGame: number = 740130;
  numberOfGames: number = 5;
  list: listGamesRecommended = { message: '', games: [] };
  index = model(0);
  router: any;
  isNewUser: boolean = true;

  constructor(private steam: SteamService, private infogameService: InfogameService) {
    effect(() => {
      if (this.isNewUser) {
        if (this.index() > 40) {
          this.isNewUser = false;
          this.getGames();
        } else {
          this.loadGameView();
        }
      } else {
        if (this.index() >= 10) {
          this.getGames();
        } else {
          this.loadGameView();
        }
      }
    });
  }

  ngOnInit(): void {
    this.infogameService.getIsNewUser().subscribe((isNewUser) => {
      this.isNewUser = isNewUser.isNewUser;
      if (isNewUser.isNewUser) {
        this.getGamesColdStart();
      } else {
        this.getGames();
      }
    });
  }

  getGames(): void {
    try {
      this.infogameService.getRecommendedListGames().subscribe((data) => {
        this.list = data;
        console.log(this.list);
        this.loadGameView();
      });
    } catch (error) {
      console.log('ERROR obteniendo lista', error);
    }
    this.index.set(0);
  }

  getGamesColdStart(): void {
    try {
      this.infogameService.getColdStartListGame().subscribe((data) => {
        this.list = data;
        console.log(this.list);
        this.loadGameView();
      });
    } catch (error) {
      console.log('ERROR obteniendo lista', error);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {}

  loadGameView(): void {
    this.steam.getGame(this.list.games[this.index()].idSteamGame).subscribe((data) => {
      this.game = data;
    });
  }
}
