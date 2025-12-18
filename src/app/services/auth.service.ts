import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environment/environment.prod';

const TOKEN_KEY = 'auth-token';
const API_URL_DEVELOP = 'http://localhost:3000/auth/';
const API_URL_PRODUCTION = environment.apiUrl + '/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Almacenamiento y Recuperación del Token

  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  //Endpoint de Autenticación

  register(credentials: any): Observable<any> {
    return this.http.post(`${API_URL_PRODUCTION}register`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          this.saveToken(response.token);
        }
      })
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${API_URL_PRODUCTION}login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          this.saveToken(response.token);
        }
      })
    );
  }
  
  
}
