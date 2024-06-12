import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { ParceirosComponent } from '../../layout/parceiros/parceiros.component';
import { FormularioComponent } from '../../layout/formulario/formulario.component';
import { TecnologiasComponent } from '../../layout/tecnologias/tecnologias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    RodapeComponent,
    ParceirosComponent,
    FormularioComponent,
    TecnologiasComponent
    
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
