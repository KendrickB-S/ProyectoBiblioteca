import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- ¡Importante!

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // <-- ¡Asegúrate de importar RouterLink aquí!
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}