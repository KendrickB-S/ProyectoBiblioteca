import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ¡Importante para *ngFor!

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule], // <-- ¡Añade CommonModule!
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css' // <-- ¡Apunta a tu nuevo CSS!
})
export class CatalogoComponent {

  // Por ahora, definimos los libros aquí.
  // Más adelante, esto vendrá de tu API de Spring Boot.
  libros = [
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', portadaUrl: '/img/libro1.jpg' },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', portadaUrl: '/img/libro2.jpg' },
    { titulo: 'La llamada de lo salvaje', autor: 'Jack London', portadaUrl: '/img/libro3.jpg' },
    { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', portadaUrl: '/img/libro4.jpg' },
    { titulo: 'La delicadeza', autor: 'David Foenkinos', portadaUrl: '/img/libro5.jpg' },
    { titulo: '1984', autor: 'George Orwell', portadaUrl: '/img/libro6.jpg' },
    { titulo: 'La casa de los espíritus', autor: 'Isabel Allende', portadaUrl: '/img/libro7.jpg' },
    { titulo: 'El baile', autor: 'Irène Némirovsky', portadaUrl: '/img/libro8.jpg' },
    { titulo: 'La casa de la alegría', autor: 'Edith Wharton', portadaUrl: '/img/libro9.jpg' },
    { titulo: 'Veinte poemas de amor...', autor: 'Pablo Neruda', portadaUrl: '/img/libro10.jpg' }
  ];

}