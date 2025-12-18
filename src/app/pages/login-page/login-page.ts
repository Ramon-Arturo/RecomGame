import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  //estado del formulario
  credentials = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  //inyeccion de dependencias
  private authService = inject(AuthService);
  private router = inject(Router);

  //manejo del envio del formulario de login
  onSubmit(): void {
    this.errorMessage = null;
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        //en caso de exito, el token ya se guardo en el servcio. redirigir.
        console.log('Login exitoso:', response.user.userName);
        this.router.navigate(['/clasificador']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
      },
    });
  }
}
