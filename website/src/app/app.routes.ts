import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ParceirosComponent } from './layout/parceiros/parceiros.component';
import { TesteComponent } from './teste/teste.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalavirtualComponent } from './salavirtual/salavirtual.component';
import { BemvindoComponent } from './pagina/bemvindo/bemvindo.component';


export const routes: Routes = [

    {path:'', component:BemvindoComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'inicio', component:InicioComponent},
    {path:'parceiros', component:ParceirosComponent},
    {path: 'teste', component:TesteComponent},
    {path:'salavirtual', component:SalavirtualComponent}


];
