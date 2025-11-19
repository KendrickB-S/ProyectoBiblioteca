import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private http = inject(HttpClient);

  // Signal para saber si hay un usuario logueado y quién es
  currentUser = signal<any>(null);

  constructor() {
    // Al iniciar, revisamos si ya había un usuario guardado
    const savedUser = localStorage.getItem('usuario');
    if (savedUser) {
      this.currentUser.set(JSON.parse(savedUser));
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((user: any) => {
        // Guardamos el usuario en localStorage y en la Signal
        this.currentUser.set(user);
        localStorage.setItem('usuario', JSON.stringify(user));
      })
    );
  }

  register(nombre: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nombre, email, password });
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('usuario');
  }

  // Método para verificar si es admin
  isAdmin(): boolean {
    const user = this.currentUser();
    // Asumimos que en tu BD, el rol 1 es ADMIN y el 2 es USER
    return user && user.rol && user.rol.idRol === 1; 
  }
}