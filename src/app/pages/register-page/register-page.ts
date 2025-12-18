import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  //formulario de registro
  credentials = {
    userName: '',
    email: '',
    password: '',
  };

  errorMessage: string | null = null;

  //inyeccion de dependencias
  private authService = inject(AuthService);
  private router = inject(Router);

  //manejo el envio del formulario de registro
  onSubmit(): void {
    this.errorMessage = null;

    this.authService.register(this.credentials).subscribe({
      next: (response) => {
        //em caso de exito, el token ya se guardo en el servcio. redirigir.
        console.log('Registro exitoso: ', response.user.userName);
        this.router.navigate(['/clasificador']);
      },
      error: (error) => {
        //manejo de errores
        console.error('Error al registrar usuario: ', error);
        this.errorMessage = error.error?.message || 'Error en el registro. Intenta nuevamente.';
      },
    });
  }
}
