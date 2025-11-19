import { Component, OnInit, inject, signal } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { LibroService, Libro } from '../../services/libro.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  
  private libroService = inject(LibroService);
  libros = signal<Libro[]>([]); 

  ngOnInit(): void {
    this.libroService.obtenerLibros().subscribe({
      next: (datos) => {
        this.libros.set(datos);
        console.log('Libros cargados:', this.libros()); 
      },
      error: (err) => {
        console.error('Error al cargar libros:', err);
      }
    });
  }
}