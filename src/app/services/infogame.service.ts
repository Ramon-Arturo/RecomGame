import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { metadataList } from '../models/metadataList';
import { environment } from '../../environment/environment.prod';

const API_URL_DEVELOP = 'http://localhost:3000/info_games/';
const API_URL_PRODUCTION = environment.apiUrl + '/info_games/';

//Interfaz para los datos de Infogame
export interface InfoGame {
  idInfoGame: number;
  idUser: number;
  idSteamGame: number;
  gameValue: number;
}

export interface GameListRequest {
  id: number;
  app_id: string;
}

export interface list {
  newList: GameListRequest[];
}

export interface listGamesRecommended {
  message: string;
  games: gamesRecommended[];
}

export interface gamesRecommended {
  idSteamGame: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class InfogameService {
  constructor(private http: HttpClient) {}

  //POST /infogame (Crear nuevo registro de infogame)
  createInfoGame(data: { idSteamGame: number; gameValue: number }): Observable<InfoGame> {
    return this.http.post<InfoGame>(API_URL_PRODUCTION, data);
  }

  getListOfGames(data: { numberOfGames: number }): Observable<list> {
    return this.http.post<list>(`${API_URL_PRODUCTION}listGames`, data);
  }

  getmetadataList(): Observable<metadataList[]> {
    return this.http.get<metadataList[]>(`${API_URL_PRODUCTION}metadataList`);
  }

  updateMetadata(metadata: metadataList){
    return this.http.post<metadataList[]>(`${API_URL_PRODUCTION}metadataList`, metadata);
  }

  getRecommendedListGames(): Observable<listGamesRecommended> {
    return this.http.get<listGamesRecommended>(`${API_URL_PRODUCTION}recommendations`);
  }

  getColdStartListGame(): Observable<listGamesRecommended> {
    return this.http.get<listGamesRecommended>(`${API_URL_PRODUCTION}recommendations/cold-start`);
  }

  getIsNewUser(): Observable<{ isNewUser: boolean }> {
    return this.http.get<{ isNewUser: boolean }>(`${API_URL_PRODUCTION}isNewUser`);
  }
}
