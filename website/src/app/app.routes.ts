import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ParceirosComponent } from './layout/parceiros/parceiros.component';
import { ProgramaComponent } from './paginas/programa/programa.component';


export const routes: Routes = [

    {path:'', component:InicioComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'inicio', component:InicioComponent},
    {path:'acerca', component:AcercaComponent},
    {path:'parceiros', component:ParceirosComponent},
    {path:'programa', component:ProgramaComponent}


];
