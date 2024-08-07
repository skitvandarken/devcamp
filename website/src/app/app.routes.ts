import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ParceirosComponent } from './layout/parceiros/parceiros.component';
import { TesteComponent } from './teste/teste.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalavirtualComponent } from './salavirtual/salavirtual.component';
import { BemvindoComponent } from './pagina/bemvindo/bemvindo.component';
import { ValidacaoComponent } from './validacao/validacao.component';
import { SignupComponent } from './pagina/signup/signup.component';
import { LoginComponent } from './pagina/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PainelComponent } from './pagina/painel/painel.component';
import { Component } from '@angular/core';


export const routes: Routes = [

    //{path:'', component:BemvindoComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'inicio', component:InicioComponent},
    {path:'parceiros', component:ParceirosComponent},
    {path: 'teste', component:TesteComponent},
    {path:'salavirtual', component:SalavirtualComponent},
    {path:'validacao', 

         
        component:LoginComponent,
        children:[
            {path:'painel',
                component:PainelComponent
            }

        ] 

    },
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    

];
