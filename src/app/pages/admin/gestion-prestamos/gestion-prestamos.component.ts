import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-prestamos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-prestamos.component.html',
  styleUrl: './gestion-prestamos.component.css'
})
export class GestionPrestamosComponent {
  prestamos = [
    { id: '001', usuario: 'Andreik Bernaola', libro: 'El Conde de Montecristo', fPrestamo: '08-10-2025', fLimite: '23-10-2025', estado: 'En Curso', alerta: 'warning' },
    { id: '002', usuario: 'Juliano Manrique', libro: 'Ilíada', fPrestamo: '20-09-2025', fLimite: '05-10-2025', estado: 'Vencido', alerta: 'danger' },
    { id: '003', usuario: 'Belen Diaz', libro: 'Oteló', fPrestamo: '15-10-2025', fLimite: '29-10-2025', estado: 'En Curso', alerta: 'success' }
  ];
}