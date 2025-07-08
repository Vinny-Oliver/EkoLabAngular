import { Routes } from '@angular/router';
import { Layout } from './pages/layout'; // ← certifique-se do caminho correto
import { Inicio } from './pages/inicio/inicio';
import { Cursos } from './pages/cursos/cursos';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
  {
    path: '',
    component: Layout, // ← define o layout
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: Inicio },
      { path: 'cursos', component: Cursos },
      { path: 'login', component: Login },
      { path: 'cadastro', component: Cadastro },
    ]
  }
];
