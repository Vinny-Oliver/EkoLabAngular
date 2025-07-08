import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  cpf = '';
  nascimento = '';
  erro = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aqui você pode tratar o cadastro (ex: enviar para API)
      console.log('Dados cadastrados:', {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        cpf: this.cpf,
        nascimento: this.nascimento
      });
      this.erro = '';
      alert('Cadastro realizado com sucesso!');
      form.resetForm();
    } else {
      this.erro = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    }
  }
}
