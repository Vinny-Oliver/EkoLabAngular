import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // <-- importe RouterModule aqui
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],  // <-- adicione RouterModule aqui
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout { }
