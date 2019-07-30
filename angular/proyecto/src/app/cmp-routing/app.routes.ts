import {RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { InfoUsuarioComponent } from './usuarios/info-usuario/info-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { ErrorComponent } from './error/error.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';

const APP_ROUTES = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES},
    {path: 'nuevo-usuario', component: NuevoUsuarioComponent},
    {path: 'inicio', component: InicioComponent},
    // {path: ':id', component: InfoUsuarioComponent},
    {path: '**', component: ErrorComponent}
    // {path: 'modificar'}
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
