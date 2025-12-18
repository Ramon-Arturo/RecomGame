import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment/environment.prod';

const API_URL_DEVELOP = 'http://localhost:3000/api/steam/';
const API_URL_PRODUCTION = environment.apiUrl + '/api/steam/';

@Injectable({
  providedIn: 'root',
})
export class SteamService {
  private baseUrl = 'https://store.steampowered.com/api/appdetails';

  constructor(private http: HttpClient) {}

  getGame(appId: number) {
    return this.http.get<any>(`${API_URL_PRODUCTION}${appId}`);
  }
}
