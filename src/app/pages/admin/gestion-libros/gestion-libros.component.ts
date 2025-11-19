import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {
  // Datos de ejemplo (luego vendrán de la Base de Datos)
  libros = [
    { id: 101, titulo: 'El Conde de Montecristo', autor: 'Alejandro Dumas', categoria: 'Clásico', total: 15, disponibles: 12 },
    { id: 102, titulo: 'Ilíada y la Odisea', autor: 'Homero', categoria: 'Épica', total: 8, disponibles: 1 }
  ];
}