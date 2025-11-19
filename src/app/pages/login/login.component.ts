import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  // Variables para el formulario
  loginData = { email: '', password: '' };
  registerData = { nombre: '', email: '', password: '', confirmPassword: '' };
  
  // Control de vista (Login o Registro)
  isLoginMode = true;

  onLogin() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (user) => {
        console.log('Login exitoso:', user);
        this.router.navigate(['/inicio']); 
      },
      error: (err) => {
        alert('Error: Credenciales incorrectas');
        console.error(err);
      }
    });
  }

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.registerData.nombre, this.registerData.email, this.registerData.password).subscribe({
      next: () => {
        alert('Registro exitoso. Ahora inicia sesión.');
        this.toggleMode(); // Cambiar a modo login
      },
      error: (err) => {
        alert('Error en el registro');
        console.error(err);
      }
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}