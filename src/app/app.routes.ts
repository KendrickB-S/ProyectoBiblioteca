import { Routes } from '@angular/router';

// Layouts
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

// Componentes Públicos
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';

// Componentes Admin
import { GestionLibrosComponent } from './pages/admin/gestion-libros/gestion-libros.component';
import { GestionPrestamosComponent } from './pages/admin/gestion-prestamos/gestion-prestamos.component';
import { GestionUsuariosComponent } from './pages/admin/gestion-usuarios/gestion-usuarios.component';

export const routes: Routes = [
    // 1. GRUPO PÚBLICO (Usa Navbar y Footer)
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            { path: 'inicio', component: InicioComponent },
            { path: 'catalogo', component: CatalogoComponent },
            { path: 'prestamos', component: PrestamosComponent }, // Préstamos para el usuario
            { path: 'contacto', component: ContactoComponent },
            { path: 'login', component: LoginComponent },
        ]
    },

    // 2. GRUPO ADMIN (Usa Sidebar y pantalla completa)
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: 'libros', component: GestionLibrosComponent },
            { path: 'prestamos', component: GestionPrestamosComponent }, // Gestión para el admin
            { path: 'usuarios', component: GestionUsuariosComponent },
            { path: '', redirectTo: 'libros', pathMatch: 'full' }
        ]
    },

    { path: '**', redirectTo: 'inicio' }
];