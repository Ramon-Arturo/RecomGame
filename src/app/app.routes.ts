import { Routes } from '@angular/router';
import { Clasificador } from './pages/clasificador/clasificador';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { MyLibraryPage } from './pages/my-library-page/my-library-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { TopPage } from './pages/top-page/top-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'clasificador', component: Clasificador },
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage },
  { path: 'my-library', component: MyLibraryPage },
  { path: 'top', component: TopPage },
  { path: 'admin', component: AdminPage }
];
