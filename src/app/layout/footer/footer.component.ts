import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- ¡Importante!

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // <-- ¡Añádelo aquí!
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}