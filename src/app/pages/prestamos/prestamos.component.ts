import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡Importante!

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule], // <-- ¡Añádelo aquí!
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent {

  // Definimos un array estático de préstamos (luego vendrá de la API)
  // Usamos los mismos datos de tu HTML original
  prestamos = [
    {
      libro: { titulo: 'Orgullo y prejuicio' },
      usuario: { nombre: 'Luis Fernández' },
      fechaPrestamo: '2025-09-15',
      fechaDevolucion: '2025-09-29',
      estado: 'Vigente',
      portadaUrl: '/img/libro7.jpg'
    },
    {
      libro: { titulo: 'Don quijote de la Mancha' },
      usuario: { nombre: 'Hector Benavides' },
      fechaPrestamo: '2025-09-01',
      fechaDevolucion: '2025-09-14',
      estado: 'Vencido', // Cambiado para mostrar otro estado
      portadaUrl: '/img/libro5.jpg'
    },
    {
      libro: { titulo: 'La Llamada Salvaje' },
      usuario: { nombre: 'Azucena Portocarrero' },
      fechaPrestamo: '2025-09-15',
      fechaDevolucion: '2025-09-29',
      estado: 'Devuelto', // Cambiado para mostrar otro estado
      portadaUrl: '/img/libro3.jpg'
    },
    {
      libro: { titulo: 'Harry Potter' },
      usuario: { nombre: 'Kendry Tavarez' },
      fechaPrestamo: '2025-09-15',
      fechaDevolucion: '2025-09-29',
      estado: 'Vigente',
      portadaUrl: '/img/libro7.jpg'
    },
    {
      libro: { titulo: 'La Delicadeza' },
      usuario: { nombre: 'Gabriel Mamani' },
      fechaPrestamo: '2025-09-15',
      fechaDevolucion: '2025-09-29',
      estado: 'Vigente',
      portadaUrl: '/img/libro7.jpg'
    },
    {
      libro: { titulo: 'George orwell' },
      usuario: { nombre: 'Carla Diaz' },
      fechaPrestamo: '2025-09-15',
      fechaDevolucion: '2025-09-29',
      estado: 'Vigente',
      portadaUrl: '/img/libro7.jpg'
    }
  ];

  // Función para obtener la clase CSS del estado
  getEstadoClass(estado: string): string {
    return 'estado-' + estado.toLowerCase();
  }
}