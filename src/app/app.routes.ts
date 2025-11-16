import { Routes } from '@angular/router';

// Importa los componentes que acabamos de crear
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    // Redirige la ruta raíz ("/") a "/inicio"
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
    
    // Define las rutas para cada página
    { path: 'inicio', component: InicioComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'prestamos', component: PrestamosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'login', component: LoginComponent },

    // Una ruta "catch-all" por si el usuario pone una URL incorrecta
    { path: '**', redirectTo: 'inicio' } 
];