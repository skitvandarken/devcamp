import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ParceirosComponent } from './layout/parceiros/parceiros.component';
import { TesteComponent } from './teste/teste.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalavirtualComponent } from './salavirtual/salavirtual.component';
import { BemvindoComponent } from './pagina/bemvindo/bemvindo.component';
import { ValidacaoComponent } from './validacao/validacao.component';
import { SlidesComponent } from './slides/slides.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InscreverComponent } from './inscrever/inscrever.component';


export const routes: Routes = [

    {path:'', component:BemvindoComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'inicio', component:InicioComponent},
    {path:'parceiros', component:ParceirosComponent},
    {path: 'teste', component:TesteComponent},
    {path:'salavirtual', component:SalavirtualComponent},
    {path:'validacao', component:ValidacaoComponent},
    {path:'publicidade', component:SlidesComponent},
    {path: 'agenda', component:AgendaComponent},
    {path: 'inscrever', component:InscreverComponent}


];
