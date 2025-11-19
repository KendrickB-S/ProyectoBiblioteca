import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {
  usuarios = [
    { id: 1, nombre: 'Belen Diaz', correo: 'belen@utp.edu.pe', rol: 'Lector', fecha: '10-10-2025' },
    { id: 2, nombre: 'Willian Quispe', correo: 'willian@utp.edu.pe', rol: 'Lector', fecha: '12-10-2025' }
  ];
}