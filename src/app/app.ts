import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// --- IMPORTA TUS COMPONENTES DE LAYOUT ---
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  // --- AÑÁDELOS AQUÍ ---
  imports: [RouterOutlet, NavbarComponent, FooterComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('biblioteca-Proyecto');
}