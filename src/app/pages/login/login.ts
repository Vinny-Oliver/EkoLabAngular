import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  usuario = '';
  senha = '';
  erro = '';

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aqui você pode colocar a lógica de autenticação
      if (this.usuario === 'admin' && this.senha === '123456') {
        this.erro = '';
        // Redirecionar ao sucesso
        this.router.navigate(['/inicio']);
      } else {
        this.erro = 'Usuário ou senha inválidos.';
      }
    } else {
      this.erro = 'Por favor, preencha todos os campos.';
    }
  }
}
