import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos {
  // lógica do componente, se necessário
}
