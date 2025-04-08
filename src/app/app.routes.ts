import { Routes } from '@angular/router';
import { InicioComponent } from './start/inicio/inicio.component';
import { ContactoComponent } from './formulario/contacto/contacto.component';
import { ProductosComponent } from './producto/productos/productos.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio',pathMatch:'full'},
    {path:'inicio',component:InicioComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'productos',component:ProductosComponent},
];
