// src/app/interceptors/jwt.interceptor.ts
import { 
  HttpInterceptorFn, 
  HttpRequest, 
  HttpHandlerFn 
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environment/environment.prod';

/**
 * Interceptor funcional para inyectar el token JWT en las cabeceras.
 */
export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  // Usamos inject() para obtener el servicio dentro de la función
  const authService = inject(AuthService); 
  const token = authService.getToken();
  
  // Condición para limitar la inyección a tu API
  const isApiUrlDevelop = req.url.startsWith('http://localhost:3000/');
  const isApiUrlProduction = req.url.startsWith(environment.apiUrl);

  if (token && isApiUrlProduction) {
    // Clona la solicitud y añade el header de autorización
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};