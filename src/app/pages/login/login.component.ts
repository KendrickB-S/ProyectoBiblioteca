import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importamos CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {

  // ngAfterViewInit se ejecuta cuando el HTML ya está cargado
  ngAfterViewInit(): void {
    // Lógica para animar los botones al cargar la página
    setTimeout(() => {
      document.querySelectorAll('.form-visible .btn-primary, .form-visible .switch-link')
        .forEach(el => el.classList.add('animate'));
    }, 1400); // 1.4 segundos de espera

    // Lógica para mostrar las alertas (Toasts) de Bootstrap
    // (Esto funcionará cuando volvamos a añadir las alertas)
    const toastContainer = document.querySelector('.toast-container');
    if (toastContainer) {
        // const toastElements = toastContainer.querySelectorAll('.toast');
        // toastElements.forEach(toastEl => {
        //     const toast = new bootstrap.Toast(toastEl); // Necesitaríamos importar 'bootstrap'
        //     toast.show();
        // });
        console.log("Contenedor de Toasts encontrado, pero la lógica está comentada por ahora.");
    }
  }

  // Esta función maneja el clic en "Regístrate" o "Inicia sesión"
  toggleForms(event: Event): void {
    event.preventDefault(); // Evita que el enlace '#' mueva la página

    const login = document.getElementById("loginForm");
    const register = document.getElementById("registerForm");
    
    // Quita las animaciones para reiniciarlas
    document.querySelectorAll('.btn-primary, .switch-link').forEach(el => el.classList.remove('animate'));

    if (login && register) {
      if (login.classList.contains("form-visible")) {
        login.classList.replace("form-visible", "form-hidden");
        register.classList.replace("form-hidden", "form-visible");
      } else {
        register.classList.replace("form-visible", "form-hidden");
        login.classList.replace("form-hidden", "form-visible");
      }
    }

    // Reactiva las animaciones para el nuevo formulario visible
    setTimeout(() => {
      document.querySelectorAll('.form-visible .btn-primary, .form-visible .switch-link')
        .forEach(el => el.classList.add('animate'));
    }, 100);
  }
}