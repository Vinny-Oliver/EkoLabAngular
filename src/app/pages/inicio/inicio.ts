import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ← necessário para diretivas como *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // ← necessário para [routerLink], router.navigate etc.

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // ← IMPORTANTE
})
export class Inicio {
  constructor(private router: Router) {}

  navigateToCursos() {
    this.router.navigate(['/cursos']);
  }
}
