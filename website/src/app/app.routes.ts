import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

export const routes: Routes = [

    {path:'', component:InicioComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'inicio', component:InicioComponent}

];
