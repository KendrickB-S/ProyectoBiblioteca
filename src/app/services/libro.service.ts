import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos la interfaz 
export interface Libro {
  idLibro: number;
  titulo: string;
  autor: string;
  cantidadDisponible: number;
  portadaUrl: string; 
}

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  // La URL de tu Backend (Spring Boot)
  private apiUrl = 'http://localhost:8080/api/libros';

  // Inyectamos el cliente HTTP
  private http = inject(HttpClient);

  // Método para obtener la lista de libros
  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }
}